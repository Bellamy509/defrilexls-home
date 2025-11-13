"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

// Globe configuration
const GLOBE_RADIUS = 2;

// Major countries/regions with realistic coordinates
const COUNTRIES = [
  { name: 'United States', lat: 37.0902, lon: -95.7129, color: '#F59E0B' },
  { name: 'Brazil', lat: -14.2350, lon: -51.9253, color: '#F59E0B' },
  { name: 'United Kingdom', lat: 55.3781, lon: -3.4360, color: '#F59E0B' },
  { name: 'France', lat: 46.2276, lon: 2.2137, color: '#F59E0B' },
  { name: 'Germany', lat: 51.1657, lon: 10.4515, color: '#F59E0B' },
  { name: 'South Africa', lat: -30.5595, lon: 22.9375, color: '#F59E0B' },
  { name: 'India', lat: 20.5937, lon: 78.9629, color: '#F59E0B' },
  { name: 'China', lat: 35.8617, lon: 104.1954, color: '#F59E0B' },
  { name: 'Japan', lat: 36.2048, lon: 138.2529, color: '#F59E0B' },
  { name: 'Australia', lat: -25.2744, lon: 133.7751, color: '#F59E0B' },
];

// Convert lat/lon to 3D coordinates
function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

// Country marker with glow effect and label
function CountryMarker({ 
  position, 
  name, 
  color, 
  isHovered,
  onHover,
  onLeave
}: { 
  position: THREE.Vector3; 
  name: string;
  color: string; 
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef(0);
  
  useFrame((state) => {
    if (meshRef.current) {
      pulseRef.current = state.clock.elapsedTime;
      const scale = isHovered ? 1.8 : 1 + Math.sin(pulseRef.current * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      {/* Main marker */}
      <mesh 
        ref={meshRef}
        onPointerOver={onHover}
        onPointerOut={onLeave}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={1} />
      </mesh>
      
      {/* Inner glow ring */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={isHovered ? 0.6 : 0.4} />
      </mesh>
      
      {/* Middle glow ring */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={isHovered ? 0.4 : 0.2} />
      </mesh>
      
      {/* Outer pulse ring */}
      <mesh>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={isHovered ? 0.3 : 0.1} />
      </mesh>

      {/* Country label - shows on hover */}
      {isHovered && (
        <Html distanceFactor={10} center>
          <div 
            className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg"
            style={{
              transform: 'translate(-50%, -150%)',
              pointerEvents: 'none',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}

// Animated connection arc with flowing particles
function ConnectionArc({ start, end, isActive }: { start: THREE.Vector3; end: THREE.Vector3; isActive: boolean }) {
  const tubeRef = useRef<THREE.Mesh>(null);
  const flowRef = useRef(0);

  const { curve, geometry } = useMemo(() => {
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(GLOBE_RADIUS * 1.4);
    
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const geometry = new THREE.TubeGeometry(curve, 64, 0.015, 8, false);
    return { curve, geometry };
  }, [start, end]);

  // Create flowing particles along the arc
  const particles = useMemo(() => {
    const points = [];
    for (let i = 0; i < 8; i++) {
      points.push({ offset: i / 8 });
    }
    return points;
  }, []);

  useFrame((state) => {
    if (tubeRef.current) {
      const material = tubeRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = isActive ? 0.8 : 0.5;
      
      flowRef.current = (state.clock.elapsedTime * 0.3) % 1;
    }
  });

  return (
    <group>
      {/* Main arc tube */}
      <mesh ref={tubeRef} geometry={geometry}>
        <meshBasicMaterial
          color="#F59E0B"
          transparent
          opacity={isActive ? 0.8 : 0.5}
        />
      </mesh>
      
      {/* Glowing outer tube */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#FCD34D"
          transparent
          opacity={isActive ? 0.4 : 0.2}
        />
      </mesh>

      {/* Flowing particles */}
      {particles.map((particle, i) => {
        const t = (particle.offset + flowRef.current) % 1;
        const position = curve.getPoint(t);
        return (
          <mesh key={i} position={position}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial
              color="#FBBF24"
              transparent
              opacity={isActive ? 0.9 : 0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Orbit ring layer
function OrbitRing({ radius, color, opacity }: { radius: number; color: string; opacity: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// Main globe with landmasses
function Globe({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const globeRef = useRef<THREE.Group>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Calculate country positions
  const countryPositions = useMemo(() => {
    return COUNTRIES.map(country => ({
      ...country,
      position: latLonToVector3(country.lat, country.lon, GLOBE_RADIUS)
    }));
  }, []);

  // Connection pairs for arcs
  const connections = useMemo(() => [
    { start: 0, end: 6 },  // USA to India
    { start: 6, end: 8 },  // India to Japan
    { start: 8, end: 9 },  // Japan to Australia
    { start: 6, end: 2 },  // India to UK
    { start: 2, end: 0 },  // UK to USA
    { start: 1, end: 5 },  // Brazil to South Africa
    { start: 3, end: 7 },  // France to China
  ], []);

  // Rotation with mouse interaction - START WITH ASIA-PACIFIC FRONT FACING
  useFrame((state, delta) => {
    if (globeRef.current) {
      // Very slow continuous clockwise rotation
      globeRef.current.rotation.y += delta * 0.08;
      
      // Mouse influence (very subtle)
      const targetRotationX = -mousePosition.y * 0.2;
      const targetRotationY = mousePosition.x * 0.3;
      
      globeRef.current.rotation.x += (targetRotationX - globeRef.current.rotation.x) * 0.03;
      globeRef.current.rotation.y += (targetRotationY - globeRef.current.rotation.y) * 0.03 + delta * 0.08;
    }
  });

  // Set initial rotation to show Asia-Pacific region (India, China, Japan, Australia)
  React.useEffect(() => {
    if (globeRef.current) {
      // Rotate to show Eastern hemisphere with Asia-Pacific front-facing
      // Y rotation: -60 degrees to show Asia (India around 78°E longitude)
      // X rotation: slight tilt to show both northern and southern hemisphere
      globeRef.current.rotation.y = -Math.PI * 0.4; // -72 degrees
      globeRef.current.rotation.x = Math.PI * 0.05; // slight tilt
    }
  }, []);

  return (
    <group ref={globeRef}>
      {/* Ocean - bright blue sphere */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial
          color="#2563EB"
          metalness={0.5}
          roughness={0.6}
          emissive="#1E40AF"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Landmasses - repositioned for better geographic accuracy */}
      {/* North America - moved to correct position */}
      <mesh position={[-1.5, 0.7, 1.0]} rotation={[0, 0.3, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#D4A574" roughness={0.8} />
      </mesh>
      
      {/* South America - positioned below North America */}
      <mesh position={[-1.3, -0.9, 1.2]} rotation={[0, 0.2, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#8BC34A" roughness={0.8} />
      </mesh>
      
      {/* Europe - smaller, positioned correctly */}
      <mesh position={[0.1, 1.1, 1.7]} rotation={[0, -0.2, 0]}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color="#C9B89A" roughness={0.8} />
      </mesh>
      
      {/* Africa - larger, centered */}
      <mesh position={[0.2, -0.2, 1.9]} rotation={[0, -0.1, 0]}>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshStandardMaterial color="#A0916C" roughness={0.8} />
      </mesh>
      
      {/* Asia - LARGEST, positioned prominently for front view */}
      <mesh position={[1.0, 0.6, 1.5]} rotation={[0, -0.3, 0]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#B8A082" roughness={0.8} />
      </mesh>
      
      {/* India subcontinent - distinct landmass */}
      <mesh position={[0.7, 0.3, 1.8]} rotation={[0, -0.2, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color="#D4A574" roughness={0.8} />
      </mesh>
      
      {/* Australia - positioned in southern hemisphere */}
      <mesh position={[1.3, -0.8, 1.1]} rotation={[0, -0.4, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#C9B89A" roughness={0.8} />
      </mesh>

      {/* Glowing coastline effect */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS + 0.02, 64, 64]} />
        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={0.2}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Wireframe grid */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS + 0.03, 32, 32]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>

      {/* Orbit rings */}
      <OrbitRing radius={GLOBE_RADIUS + 0.35} color="#F59E0B" opacity={0.2} />
      <OrbitRing radius={GLOBE_RADIUS + 0.55} color="#FCD34D" opacity={0.15} />
      <OrbitRing radius={GLOBE_RADIUS + 0.75} color="#F59E0B" opacity={0.1} />

      {/* Outer atmosphere glow */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS + 0.25, 64, 64]} />
        <meshBasicMaterial
          color="#2563EB"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Country markers */}
      {countryPositions.map((country) => (
        <CountryMarker
          key={country.name}
          position={country.position}
          name={country.name}
          color={country.color}
          isHovered={hoveredCountry === country.name}
          onHover={() => setHoveredCountry(country.name)}
          onLeave={() => setHoveredCountry(null)}
        />
      ))}

      {/* Connection arcs between countries */}
      {connections.map(({ start, end }, i) => {
        const startCountry = countryPositions[start];
        const endCountry = countryPositions[end];
        const isActive = hoveredCountry === startCountry.name || hoveredCountry === endCountry.name;
        
        return (
          <ConnectionArc
            key={`arc-${i}`}
            start={startCountry.position}
            end={endCountry.position}
            isActive={isActive}
          />
        );
      })}
    </group>
  );
}

// Main component
export default function InteractiveGlobe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
      onMouseMove={handleMouseMove}
      style={{ cursor: 'grab' }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <pointLight position={[-5, -3, -5]} intensity={0.6} color="#60A5FA" />
        <pointLight position={[0, 5, 0]} intensity={0.4} color="#FBBF24" />
        <Globe mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}