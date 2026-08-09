import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RoadEnvironmentProps {
  scrollProgress?: number;
}

export const RoadEnvironment: React.FC<RoadEnvironmentProps> = () => {
  const particlesRef = useRef<THREE.Points>(null);

  // Center line telemetry dashes along z-axis (-130 to +130)
  const laneDashes = useMemo(() => {
    const dashes = [];
    for (let z = -140; z <= 140; z += 5) {
      dashes.push(z);
    }
    return dashes;
  }, []);

  // Futuristic LED Gantry Arches
  const gantryArches = useMemo(() => {
    const arches = [];
    for (let z = -120; z <= 120; z += 20) {
      arches.push(z);
    }
    return arches;
  }, []);

  // Race Track Curb Strips (Kerbs) with alternating color segments
  const kerbSegments = useMemo(() => {
    const kerbs = [];
    for (let z = -140; z <= 140; z += 4) {
      kerbs.push(z);
    }
    return kerbs;
  }, []);

  // Floating high-tech telemetry particles
  const [particlePositions] = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28; // x
      positions[i * 3 + 1] = Math.random() * 7 + 0.3; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 260; // z
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group>
      {/* ========================================================================= */}
      {/* 1. HIGH-TECH WET REFLECTIVE METALLIC ASPHALT RACE TRACK                   */}
      {/* ========================================================================= */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 300]} />
        <meshStandardMaterial 
          color="#07090E" 
          roughness={0.15} 
          metalness={0.8}
        />
      </mesh>

      {/* ========================================================================= */}
      {/* 2. NEON GLOWING TRACK EDGES & KERB STRIPS (AMBER & CYAN)                   */}
      {/* ========================================================================= */}
      {/* Outer Cyan Boundary Laser Lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-7.2, 0.01, 0]}>
        <planeGeometry args={[0.18, 300]} />
        <meshBasicMaterial color="#38BDF8" opacity={0.9} transparent />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[7.2, 0.01, 0]}>
        <planeGeometry args={[0.18, 300]} />
        <meshBasicMaterial color="#38BDF8" opacity={0.9} transparent />
      </mesh>

      {/* Left Kerb Strip (Alternating Amber/Blue Blocks) */}
      {kerbSegments.map((zPos, idx) => (
        <React.Fragment key={`left-kerb-${idx}`}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-6.8, 0.02, zPos]}>
            <planeGeometry args={[0.45, 1.8]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#FFB020' : '#1E293B'} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6.8, 0.02, zPos]}>
            <planeGeometry args={[0.45, 1.8]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#38BDF8' : '#1E293B'} />
          </mesh>
        </React.Fragment>
      ))}

      {/* CENTER TELEMETRY DASHED LASER STRIP */}
      {laneDashes.map((zPos, idx) => (
        <mesh key={`dash-${idx}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.025, zPos]}>
          <planeGeometry args={[0.22, 2.2]} />
          <meshBasicMaterial color="#FFB020" />
        </mesh>
      ))}

      {/* ========================================================================= */}
      {/* 3. FUTURISTIC OCTAGONAL LED GANTRY TUNNEL ARCHES                           */}
      {/* ========================================================================= */}
      {gantryArches.map((zPos, idx) => (
        <group key={`gantry-${idx}`} position={[0, 0, zPos]}>
          {/* Left Vertical Arch Support */}
          <mesh position={[-8, 4.5, 0]}>
            <boxGeometry args={[0.4, 9, 0.4]} />
            <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Right Vertical Arch Support */}
          <mesh position={[8, 4.5, 0]}>
            <boxGeometry args={[0.4, 9, 0.4]} />
            <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Overhead Horizontal Light Gantry Beam */}
          <mesh position={[0, 9, 0]}>
            <boxGeometry args={[16.4, 0.45, 0.45]} />
            <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Neon LED Light Bar under Beam */}
          <mesh position={[0, 8.7, 0]}>
            <boxGeometry args={[15, 0.1, 0.1]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#38BDF8' : '#FFB020'} />
          </mesh>

          {/* Overhead Spotlight */}
          <pointLight 
            position={[0, 8.5, 0]} 
            intensity={2.2} 
            color={idx % 2 === 0 ? '#38BDF8' : '#FFB020'} 
            distance={16} 
          />
        </group>
      ))}

      {/* ========================================================================= */}
      {/* 4. HIGH-TECH PARTICLES & VOLUMETRIC NIGHT FOG                             */}
      {/* ========================================================================= */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            count={particlePositions.length / 3} 
            array={particlePositions} 
            itemSize={3} 
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.07} 
          color="#38BDF8" 
          transparent 
          opacity={0.6} 
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Night Sky Atmospheric Fog */}
      <fog attach="fog" args={['#07090E', 18, 90]} />
    </group>
  );
};
