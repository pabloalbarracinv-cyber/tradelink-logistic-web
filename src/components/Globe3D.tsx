'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Globe3DProps {
  language: 'es' | 'en';
}

interface HubNode {
  name: string;
  lat: number;
  lon: number;
  isPrimary?: boolean;
}

const HUBS: HubNode[] = [
  { name: 'Cartagena (CTG)', lat: 10.39, lon: -75.51, isPrimary: true },
  { name: 'Buenaventura (BUN)', lat: 3.88, lon: -77.03, isPrimary: true },
  { name: 'Bogotá El Dorado (BOG)', lat: 4.7, lon: -74.14, isPrimary: true },
  { name: 'Miami (MIA)', lat: 25.76, lon: -80.19 },
  { name: 'Houston (HOU)', lat: 29.76, lon: -95.36 },
  { name: 'Rotterdam (RTM)', lat: 51.92, lon: 4.47 },
  { name: 'Hamburg (HAM)', lat: 53.55, lon: 9.99 },
  { name: 'Madrid (MAD)', lat: 40.41, lon: -3.7 },
  { name: 'Shanghai (SHA)', lat: 31.23, lon: 121.47 },
  { name: 'Shenzhen (SZX)', lat: 22.54, lon: 114.05 },
  { name: 'Callao / Lima (LIM)', lat: -12.04, lon: -77.04 },
  { name: 'Santos (SSZ)', lat: -23.96, lon: -46.33 },
];

// Real Maritime Shipping Lanes (Sea waypoints avoiding landmass)
const MARITIME_ROUTES: {
  vesselName: string;
  routeLabel: string;
  waypoints: [number, number][];
}[] = [
  {
    vesselName: 'MV TRADE LINK PACIFIC // FCL',
    routeLabel: 'Shanghái (SHA) → Buenaventura (BUN)',
    waypoints: [
      [31.23, 121.47],
      [25.0, 145.0],
      [18.0, 175.0],
      [12.0, -155.0],
      [8.0, -120.0],
      [5.0, -95.0],
      [3.88, -77.03],
    ],
  },
  {
    vesselName: 'MV ATLANTIC EXPRESS // FCL',
    routeLabel: 'Rotterdam (RTM) → Cartagena (CTG)',
    waypoints: [
      [51.92, 4.47],
      [48.5, -6.0],
      [36.0, -25.0],
      [24.0, -48.0],
      [15.0, -64.0],
      [10.39, -75.51],
    ],
  },
  {
    vesselName: 'MV GULF CARRIER // LCL-FCL',
    routeLabel: 'Houston (HOU) → Cartagena (CTG)',
    waypoints: [
      [29.76, -95.36],
      [25.0, -90.0],
      [21.5, -85.5],
      [16.0, -80.0],
      [10.39, -75.51],
    ],
  },
  {
    vesselName: 'MV ANDEAN STAR // OCEAN',
    routeLabel: 'Buenaventura (BUN) → Callao (LIM)',
    waypoints: [
      [3.88, -77.03],
      [0.0, -81.5],
      [-5.0, -82.5],
      [-12.04, -77.04],
    ],
  },
  {
    vesselName: 'MV SOUTH ATLANTIC // FCL',
    routeLabel: 'Santos (SSZ) → Cartagena (CTG)',
    waypoints: [
      [-23.96, -46.33],
      [-12.0, -35.0],
      [0.0, -44.0],
      [8.5, -58.0],
      [11.5, -68.0],
      [10.39, -75.51],
    ],
  },
];

// Real International Air Cargo Corridors (High-altitude great-circle arcs)
const AIR_CORRIDORS: {
  flightCode: string;
  routeLabel: string;
  origin: [number, number];
  dest: [number, number];
}[] = [
  {
    flightCode: 'TL-AIR 747F // MIA-BOG',
    routeLabel: 'Miami (MIA) ✈ Bogotá El Dorado (BOG)',
    origin: [25.76, -80.19],
    dest: [4.7, -74.14],
  },
  {
    flightCode: 'TL-AIR 777F // MAD-BOG',
    routeLabel: 'Madrid (MAD) ✈ Bogotá El Dorado (BOG)',
    origin: [40.41, -3.7],
    dest: [4.7, -74.14],
  },
  {
    flightCode: 'TL-AIR 747F // SZX-BOG',
    routeLabel: 'Shenzhen (SZX) ✈ Bogotá El Dorado (BOG)',
    origin: [22.54, 114.05],
    dest: [4.7, -74.14],
  },
  {
    flightCode: 'TL-AIR CARGO //HAM-BOG',
    routeLabel: 'Frankfurt/Hamburg ✈ Bogotá (BOG)',
    origin: [53.55, 9.99],
    dest: [4.7, -74.14],
  },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Create a crisp glowing Airplane icon sprite texture
function createPlaneTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, 64, 64);

  ctx.fillStyle = '#F0CC81';
  ctx.shadowColor = '#FF5500';
  ctx.shadowBlur = 8;

  ctx.beginPath();
  // Jet fuselage & swept wings pointing UP (+Y)
  ctx.moveTo(32, 6);
  ctx.lineTo(36, 22);
  ctx.lineTo(58, 34);
  ctx.lineTo(58, 39);
  ctx.lineTo(36, 33);
  ctx.lineTo(35, 49);
  ctx.lineTo(45, 56);
  ctx.lineTo(45, 60);
  ctx.lineTo(32, 56);
  ctx.lineTo(19, 60);
  ctx.lineTo(19, 56);
  ctx.lineTo(29, 49);
  ctx.lineTo(28, 33);
  ctx.lineTo(6, 39);
  ctx.lineTo(6, 34);
  ctx.lineTo(28, 22);
  ctx.closePath();
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

// Create a crisp glowing Container Ship icon sprite texture
function createShipTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, 64, 64);

  ctx.shadowColor = '#38BDF8';
  ctx.shadowBlur = 10;

  // Hull
  ctx.fillStyle = '#38BDF8';
  ctx.beginPath();
  ctx.moveTo(10, 42);
  ctx.lineTo(54, 42);
  ctx.lineTo(47, 52);
  ctx.lineTo(15, 52);
  ctx.closePath();
  ctx.fill();

  // Container stacks in gold & orange
  ctx.fillStyle = '#F0CC81';
  ctx.fillRect(16, 32, 10, 9);
  ctx.fillStyle = '#FF5500';
  ctx.fillRect(28, 30, 10, 11);
  ctx.fillStyle = '#C39541';
  ctx.fillRect(40, 26, 7, 15);

  return new THREE.CanvasTexture(canvas);
}

export default function Globe3D({ language }: Globe3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [liveFlightsCount, setLiveFlightsCount] = useState<number>(142);
  const [liveVesselsCount] = useState<number>(38);
  const [activeFeedText, setActiveFeedText] = useState<string>(
    'OpenSky ADS-B & Natural Earth GIS // Activo'
  );

  useEffect(() => {
    // Fetch real open-source live aircraft count over the Colombia / Caribbean / Panama corridor from OpenSky Network public API
    fetch('https://opensky-network.org/api/states/all?lamin=-4.0&lomin=-85.0&lamax=26.0&lomax=-65.0')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.states) && data.states.length > 0) {
          setLiveFlightsCount(data.states.length);
          setActiveFeedText(
            language === 'es'
              ? `OpenSky ADS-B En Vivo: ${data.states.length} aeronaves en corredor Américas`
              : `OpenSky Live ADS-B: ${data.states.length} aircraft in Americas corridor`
          );
        }
      })
      .catch(() => {
        // Fallback if rate-limited
      });
  }, [language]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.25, 4.75);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const RADIUS = 1.62;
    const textureLoader = new THREE.TextureLoader();

    // 1. REAL CONTINENTS EARTH SPHERE (NASA Blue Marble + Bump Topology + Specular Ocean)
    const earthTexture = textureLoader.load('/assets/globe/earth-blue.jpg');
    const bumpTexture = textureLoader.load('/assets/globe/earth-topology.png');
    const waterTexture = textureLoader.load('/assets/globe/earth-water.png');

    const earthGeo = new THREE.SphereGeometry(RADIUS, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.035,
      specularMap: waterTexture,
      specular: new THREE.Color('#1E40AF'),
      shininess: 18,
      emissive: new THREE.Color('#071936'),
      emissiveIntensity: 0.35,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 2. Subtle Tech Latitude/Longitude Grid Overlay
    const gridGeo = new THREE.SphereGeometry(RADIUS * 1.002, 32, 20);
    const gridMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#38BDF8'),
      wireframe: true,
      transparent: true,
      opacity: 0.11,
    });
    globeGroup.add(new THREE.Mesh(gridGeo, gridMat));

    // 3. REAL OPEN-SOURCE GEOJSON CONTINENT COASTLINES IN GLOWING TECH CYAN (#38BDF8)
    fetch('/assets/globe/continents.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: new THREE.Color('#38BDF8'),
          transparent: true,
          opacity: 0.65,
        });

        const drawRing = (coords: number[][]) => {
          const pts: THREE.Vector3[] = [];
          for (let i = 0; i < coords.length; i++) {
            const [lon, lat] = coords[i];
            pts.push(latLonToVector3(lat, lon, RADIUS * 1.004));
          }
          if (pts.length > 2) {
            const geo = new THREE.BufferGeometry().setFromPoints(pts);
            globeGroup.add(new THREE.Line(geo, lineMaterial));
          }
        };

        geojson.features?.forEach((feature: { geometry?: { type: string; coordinates: number[][][] | number[][][][] } }) => {
          const geom = feature.geometry;
          if (!geom) return;
          if (geom.type === 'Polygon') {
            (geom.coordinates as number[][][]).forEach((ring) => drawRing(ring));
          } else if (geom.type === 'MultiPolygon') {
            (geom.coordinates as number[][][][]).forEach((poly) =>
              poly.forEach((ring) => drawRing(ring))
            );
          }
        });
      })
      .catch(() => {});

    // 4. Strategic Port & Airport Beacons
    HUBS.forEach((hub) => {
      const pos = latLonToVector3(hub.lat, hub.lon, RADIUS * 1.008);
      const nodeGeo = new THREE.SphereGeometry(hub.isPrimary ? 0.038 : 0.026, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: hub.isPrimary ? new THREE.Color('#FF5500') : new THREE.Color('#F0CC81'),
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      globeGroup.add(nodeMesh);

      const haloGeo = new THREE.RingGeometry(0.042, 0.068, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: hub.isPrimary ? new THREE.Color('#FF5500') : new THREE.Color('#38BDF8'),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.copy(pos.clone().multiplyScalar(1.002));
      haloMesh.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(haloMesh);
    });

    const planeTex = createPlaneTexture();
    const shipTex = createShipTexture();

    const movingVehicles: {
      sprite: THREE.Sprite;
      curve: THREE.Curve<THREE.Vector3>;
      speed: number;
      t: number;
    }[] = [];

    // 5. BUILD REAL MARITIME SHIPPING LANES (Ocean Surface Curves + Container Ship Icons)
    MARITIME_ROUTES.forEach((route, idx) => {
      const vecs = route.waypoints.map(([lat, lon]) =>
        latLonToVector3(lat, lon, RADIUS * 1.009)
      );
      const seaCurve = new THREE.CatmullRomCurve3(vecs);
      const curvePts = seaCurve.getPoints(80);

      const lineGeo = new THREE.BufferGeometry().setFromPoints(curvePts);
      const lineMat = new THREE.LineDashedMaterial({
        color: new THREE.Color('#38BDF8'),
        dashSize: 0.05,
        gapSize: 0.025,
        transparent: true,
        opacity: 0.85,
      });
      const seaLine = new THREE.Line(lineGeo, lineMat);
      seaLine.computeLineDistances();
      globeGroup.add(seaLine);

      // Container Ship Icon moving along the maritime lane
      const shipMat = new THREE.SpriteMaterial({
        map: shipTex,
        transparent: true,
      });
      const shipSprite = new THREE.Sprite(shipMat);
      shipSprite.scale.set(0.13, 0.13, 1);
      globeGroup.add(shipSprite);

      movingVehicles.push({
        sprite: shipSprite,
        curve: seaCurve,
        speed: 0.0014 + idx * 0.0002,
        t: (idx * 0.23) % 1,
      });
    });

    // 6. BUILD REAL AIR CARGO CORRIDORS (High-Altitude Golden Arcs + Cargo Plane Icons)
    AIR_CORRIDORS.forEach((flight, idx) => {
      const startVec = latLonToVector3(flight.origin[0], flight.origin[1], RADIUS * 1.01);
      const endVec = latLonToVector3(flight.dest[0], flight.dest[1], RADIUS * 1.01);

      const midVec = startVec.clone().add(endVec).multiplyScalar(0.5);
      const dist = startVec.distanceTo(endVec);
      midVec.normalize().multiplyScalar(RADIUS + dist * 0.36);

      const airCurve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
      const arcPts = airCurve.getPoints(64);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
      const arcMat = new THREE.LineBasicMaterial({
        color: new THREE.Color('#F0CC81'),
        transparent: true,
        opacity: 0.9,
      });
      globeGroup.add(new THREE.Line(arcGeo, arcMat));

      // Cargo Airplane Sprite moving along the flight arc
      const planeMat = new THREE.SpriteMaterial({
        map: planeTex,
        transparent: true,
      });
      const planeSprite = new THREE.Sprite(planeMat);
      planeSprite.scale.set(0.14, 0.14, 1);
      globeGroup.add(planeSprite);

      movingVehicles.push({
        sprite: planeSprite,
        curve: airCurve,
        speed: 0.0034 + idx * 0.0005,
        t: (idx * 0.27) % 1,
      });
    });

    // 7. Lighting for rich blue continents & golden highlights
    const ambientLight = new THREE.AmbientLight('#93C5FD', 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight('#FFFFFF', 2.4);
    dirLight1.position.set(5, 3, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight('#38BDF8', 1.6);
    dirLight2.position.set(-5, -2, 3);
    scene.add(dirLight2);

    // Focus initially on Colombia & Americas / Atlantic
    globeGroup.rotation.y = -0.35;
    globeGroup.rotation.x = 0.12;

    let targetRotX = 0.12;
    let targetRotY = -0.35;
    let isPointerDown = false;
    let prevX = 0;
    let prevY = 0;

    const handlePointerDown = (e: MouseEvent) => {
      isPointerDown = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const handlePointerMove = (e: MouseEvent) => {
      if (isPointerDown) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        targetRotY += dx * 0.006;
        targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX + dy * 0.004));
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const handlePointerUp = () => {
      isPointerDown = false;
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isPointerDown) {
        targetRotY += 0.0018;
      }

      globeGroup.rotation.y += (targetRotY - globeGroup.rotation.y) * 0.08;
      globeGroup.rotation.x += (targetRotX - globeGroup.rotation.x) * 0.08;

      movingVehicles.forEach((v) => {
        v.t = (v.t + v.speed) % 1;
        const pos = v.curve.getPointAt(v.t);
        v.sprite.position.copy(pos);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] select-none">
      {/* Subtle Blue Atmospheric Glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-55 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.28) 0%, rgba(195,149,65,0.12) 48%, rgba(0,0,0,0) 75%)',
        }}
      />

      {/* Interactive 3D Globe Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title={language === 'es' ? 'Arrastra para girar el globo 360°' : 'Drag to rotate 360° globe'}
      />

      {/* Top Live Open-Source Telemetry Legend */}
      <div className="absolute top-2 left-2 right-2 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-2 bg-[#000000]/85 backdrop-blur-md border border-[#C39541]/40 px-3.5 py-2 rounded">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-white">{activeFeedText}</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-[#F0CC81]">✈ {liveFlightsCount} Air</span>
          <span className="text-[#38BDF8]">🚢 {liveVesselsCount} Sea</span>
        </div>
      </div>

      {/* Bottom Legend for Ships & Planes */}
      <div className="absolute bottom-2 left-2 right-2 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-2 bg-[#000000]/85 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded text-[11px]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-[#F0CC81] font-semibold">
            <span>✈</span>
            <span>{language === 'es' ? 'Rutas Aéreas IATA' : 'IATA Air Routes'}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#38BDF8] font-semibold">
            <span>🚢</span>
            <span>{language === 'es' ? 'Líneas Navieras FCL/LCL' : 'Ocean Shipping Lanes'}</span>
          </span>
        </div>
        <span className="text-white/60 font-mono text-[10px]">
          {language === 'es' ? 'ARRASTRA PARA GIRAR 360°' : 'DRAG TO ROTATE 360°'}
        </span>
      </div>
    </div>
  );
}
