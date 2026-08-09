import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PrototypeCarProps {
  scrollProgress: number; // 0.0 to 1.0
  isEngineActive?: boolean;
}

export const PrototypeCar: React.FC<PrototypeCarProps> = ({ scrollProgress = 0, isEngineActive = true }) => {
  const carGroupRef = useRef<THREE.Group>(null);
  const currentZRef = useRef<number>(8.0);
  
  // Wheel groups for high-speed rotation
  const frontLeftWheelRef = useRef<THREE.Group>(null);
  const frontRightWheelRef = useRef<THREE.Group>(null);
  const rearLeftWheelRef = useRef<THREE.Group>(null);
  const rearRightWheelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!carGroupRef.current) return;

    // Calculate target Z position along the race track based on scroll (8.0 -> -87.0)
    const targetZ = 8.0 - scrollProgress * 95.0;
    
    // Smooth lerp driving movement
    const driveLerp = Math.min(delta * 4.0, 0.2);
    currentZRef.current = THREE.MathUtils.lerp(currentZRef.current, targetZ, driveLerp);
    carGroupRef.current.position.z = currentZRef.current;

    // Dynamic wheel rotation speed proportional to driving motion
    const zDelta = Math.abs(targetZ - currentZRef.current);
    const wheelSpeed = delta * (10 + zDelta * 15);
    
    if (frontLeftWheelRef.current) frontLeftWheelRef.current.rotation.x += wheelSpeed;
    if (frontRightWheelRef.current) frontRightWheelRef.current.rotation.x += wheelSpeed;
    if (rearLeftWheelRef.current) rearLeftWheelRef.current.rotation.x += wheelSpeed;
    if (rearRightWheelRef.current) rearRightWheelRef.current.rotation.x += wheelSpeed;

    // Suspension oscillation while driving
    if (isEngineActive) {
      const time = state.clock.getElapsedTime();
      carGroupRef.current.position.y = 0.28 + Math.sin(time * 14) * 0.005;
      carGroupRef.current.rotation.z = Math.sin(time * 8) * 0.0015;
    }
  });

  return (
    <group ref={carGroupRef} position={[0, 0.28, 8.0]}>
      {/* ========================================================================= */}
      {/* 1. HIGH-DEFINITION CARBON FIBER F1 MONOCOQUE & DIFFUSER                   */}
      {/* ========================================================================= */}
      {/* Underbody Carbon Tray Floorboard */}
      <mesh position={[0, 0.08, -0.2]} receiveShadow castShadow>
        <boxGeometry args={[1.75, 0.04, 4.4]} />
        <meshStandardMaterial color="#0A0E17" roughness={0.1} metalness={0.95} />
      </mesh>

      {/* Rear Venturi Diffuser Channels */}
      <group position={[0, 0.12, -2.1]}>
        <mesh position={[-0.52, 0, 0]} rotation={[0.22, 0, 0]}>
          <boxGeometry args={[0.42, 0.14, 0.55]} />
          <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={0.95} />
        </mesh>
        <mesh position={[0.52, 0, 0]} rotation={[0.22, 0, 0]}>
          <boxGeometry args={[0.42, 0.14, 0.55]} />
          <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={0.95} />
        </mesh>
      </group>

      {/* Main F1 Monocoque Chassis Tub */}
      <mesh position={[0, 0.32, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.88, 0.34, 2.7]} />
        <meshStandardMaterial color="#0F172A" roughness={0.08} metalness={0.95} />
      </mesh>

      {/* ========================================================================= */}
      {/* 2. AERODYNAMIC F1 NOSE CONE & FRONT WING                                  */}
      {/* ========================================================================= */}
      <group position={[0, 0.28, 1.45]}>
        {/* Curved Nosecone Section */}
        <mesh position={[0, 0.06, 0.4]} rotation={[0.16, 0, 0]} castShadow>
          <boxGeometry args={[0.58, 0.2, 1.35]} />
          <meshStandardMaterial color="#1E293B" roughness={0.05} metalness={0.92} />
        </mesh>
        
        {/* Yellow Racing Livery Center Stripe */}
        <mesh position={[0, 0.17, 0.4]} rotation={[0.16, 0, 0]}>
          <boxGeometry args={[0.18, 0.02, 1.3]} />
          <meshBasicMaterial color="#FFB020" />
        </mesh>

        {/* Telemetry Sensor Spike */}
        <mesh position={[0, 0.12, 1.15]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.32, 8]} />
          <meshStandardMaterial color="#FFB020" metalness={1} />
        </mesh>

        {/* Front Wing Assembly */}
        <group position={[0, -0.1, 0.9]}>
          <mesh castShadow>
            <boxGeometry args={[2.3, 0.03, 0.38]} />
            <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.04, -0.04]} rotation={[-0.1, 0, 0]}>
            <boxGeometry args={[2.2, 0.02, 0.24]} />
            <meshStandardMaterial color="#FFB020" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.06, 0.08]}>
            <boxGeometry args={[2.0, 0.015, 0.08]} />
            <meshBasicMaterial color="#38BDF8" />
          </mesh>
          <mesh position={[-1.15, 0.08, 0]}>
            <boxGeometry args={[0.03, 0.26, 0.42]} />
            <meshStandardMaterial color="#FFB020" />
          </mesh>
          <mesh position={[1.15, 0.08, 0]}>
            <boxGeometry args={[0.03, 0.26, 0.42]} />
            <meshStandardMaterial color="#FFB020" />
          </mesh>
        </group>
      </group>

      {/* ========================================================================= */}
      {/* 3. COCKPIT, TITANIUM HALO & COCKPIT CONTROLS                              */}
      {/* ========================================================================= */}
      <mesh position={[0, 0.44, 0.1]} castShadow>
        <boxGeometry args={[0.58, 0.08, 0.95]} />
        <meshBasicMaterial color="#020617" />
      </mesh>

      {/* Titanium HALO Structure */}
      <group position={[0, 0.54, 0.26]}>
        <mesh position={[0, 0.08, 0.3]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.26, 12]} />
          <meshStandardMaterial color="#64748B" roughness={0.1} metalness={0.95} />
        </mesh>
        <mesh position={[0, 0.18, -0.05]} rotation={[-0.1, 0, 0]}>
          <torusGeometry args={[0.27, 0.022, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#64748B" roughness={0.1} metalness={0.95} />
        </mesh>
      </group>

      {/* F1 Steering Wheel Screen */}
      <group position={[0, 0.46, 0.36]}>
        <mesh rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.18, 0.1, 0.03]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
        <mesh position={[0, 0.01, 0.018]} rotation={[0.4, 0, 0]}>
          <planeGeometry args={[0.12, 0.06]} />
          <meshBasicMaterial color="#38BDF8" />
        </mesh>
      </group>

      {/* Side Mirrors */}
      <group position={[-0.44, 0.5, 0.46]}>
        <mesh rotation={[0, 0, -0.4]}>
          <cylinderGeometry args={[0.01, 0.01, 0.16, 8]} />
          <meshStandardMaterial color="#64748B" metalness={1} />
        </mesh>
        <mesh position={[-0.08, 0.05, 0]}>
          <boxGeometry args={[0.1, 0.05, 0.06]} />
          <meshStandardMaterial color="#FFB020" />
        </mesh>
      </group>
      <group position={[0.44, 0.5, 0.46]}>
        <mesh rotation={[0, 0, 0.4]}>
          <cylinderGeometry args={[0.01, 0.01, 0.16, 8]} />
          <meshStandardMaterial color="#64748B" metalness={1} />
        </mesh>
        <mesh position={[0.08, 0.05, 0]}>
          <boxGeometry args={[0.1, 0.05, 0.06]} />
          <meshStandardMaterial color="#FFB020" />
        </mesh>
      </group>

      {/* Overhead Airbox Intake Scoop */}
      <mesh position={[0, 0.68, -0.35]} castShadow>
        <boxGeometry args={[0.34, 0.15, 0.48]} />
        <meshStandardMaterial color="#FFB020" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* ========================================================================= */}
      {/* 4. UNDERCUT SIDEPODS & SHARK FIN SAIL                                      */}
      {/* ========================================================================= */}
      <group position={[-0.6, 0.3, 0.1]}>
        <mesh castShadow>
          <boxGeometry args={[0.36, 0.26, 1.85]} />
          <meshStandardMaterial color="#1E293B" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0, 0.9]}>
          <boxGeometry args={[0.29, 0.19, 0.04]} />
          <meshBasicMaterial color="#020617" />
        </mesh>
      </group>

      <group position={[0.6, 0.3, 0.1]}>
        <mesh castShadow>
          <boxGeometry args={[0.36, 0.26, 1.85]} />
          <meshStandardMaterial color="#1E293B" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0, 0.9]}>
          <boxGeometry args={[0.29, 0.19, 0.04]} />
          <meshBasicMaterial color="#020617" />
        </mesh>
      </group>

      {/* Shark Fin Spine */}
      <mesh position={[0, 0.65, -1.05]} castShadow>
        <boxGeometry args={[0.03, 0.3, 1.15]} />
        <meshStandardMaterial color="#38BDF8" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* ========================================================================= */}
      {/* 5. REAR WING, DRS HYDRAULIC & FIA RAIN LIGHT                              */}
      {/* ========================================================================= */}
      <group position={[0, 0.75, -2.0]}>
        <mesh castShadow>
          <boxGeometry args={[1.55, 0.04, 0.34]} />
          <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.08, -0.04]} rotation={[-0.08, 0, 0]} castShadow>
          <boxGeometry args={[1.5, 0.03, 0.22]} />
          <meshStandardMaterial color="#FFB020" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.26, 8]} />
          <meshStandardMaterial color="#64748B" metalness={1} />
        </mesh>
        <mesh position={[-0.78, -0.02, 0]}>
          <boxGeometry args={[0.03, 0.36, 0.48]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0.78, -0.02, 0]}>
          <boxGeometry args={[0.03, 0.36, 0.48]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
      </group>

      {/* Exhaust Tailpipe */}
      <mesh position={[0, 0.32, -2.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.22, 16]} />
        <meshStandardMaterial color="#94A3B8" roughness={0.1} metalness={1} />
      </mesh>
      <pointLight position={[0, 0.32, -2.2]} intensity={3.5} color="#FFB020" distance={2} />

      {/* FIA Rain Safety LED Light Bar */}
      <mesh position={[0, 0.23, -2.12]}>
        <boxGeometry args={[0.16, 0.1, 0.04]} />
        <meshBasicMaterial color="#EF4444" />
      </mesh>
      <pointLight position={[0, 0.23, -2.2]} intensity={4.5} color="#EF4444" distance={4} />

      {/* ========================================================================= */}
      {/* 6. DOUBLE WISHBONE SUSPENSION                                            */}
      {/* ========================================================================= */}
      <group position={[-0.68, 0.26, 1.28]}>
        <mesh rotation={[0, 0, 0.25]}>
          <cylinderGeometry args={[0.013, 0.013, 0.52, 8]} />
          <meshStandardMaterial color="#64748B" metalness={1} />
        </mesh>
      </group>

      <group position={[0.68, 0.26, 1.28]}>
        <mesh rotation={[0, 0, -0.25]}>
          <cylinderGeometry args={[0.013, 0.013, 0.52, 8]} />
          <meshStandardMaterial color="#64748B" metalness={1} />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 7. COMPETITION F1 PIRELLI-STYLE SLICK TIRES                               */}
      {/* ========================================================================= */}
      {/* Front Left */}
      <group position={[-0.95, 0.3, 1.28]}>
        <group ref={frontLeftWheelRef}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.34, 32]} />
            <meshStandardMaterial color="#090D16" roughness={0.15} metalness={0.9} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.175, 0, 0]}>
            <ringGeometry args={[0.2, 0.26, 24]} />
            <meshBasicMaterial color="#FFB020" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.18, 0, 0]}>
            <circleGeometry args={[0.12, 16]} />
            <meshStandardMaterial color="#475569" metalness={1} />
          </mesh>
        </group>
      </group>

      {/* Front Right */}
      <group position={[0.95, 0.3, 1.28]}>
        <group ref={frontRightWheelRef}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.34, 32]} />
            <meshStandardMaterial color="#090D16" roughness={0.15} metalness={0.9} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.175, 0, 0]}>
            <ringGeometry args={[0.2, 0.26, 24]} />
            <meshBasicMaterial color="#FFB020" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.18, 0, 0]}>
            <circleGeometry args={[0.12, 16]} />
            <meshStandardMaterial color="#475569" metalness={1} />
          </mesh>
        </group>
      </group>

      {/* Rear Left */}
      <group position={[-0.97, 0.32, -1.38]}>
        <group ref={rearLeftWheelRef}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.32, 0.32, 0.4, 32]} />
            <meshStandardMaterial color="#090D16" roughness={0.15} metalness={0.9} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.205, 0, 0]}>
            <ringGeometry args={[0.21, 0.28, 24]} />
            <meshBasicMaterial color="#38BDF8" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.21, 0, 0]}>
            <circleGeometry args={[0.13, 16]} />
            <meshStandardMaterial color="#475569" metalness={1} />
          </mesh>
        </group>
      </group>

      {/* Rear Right */}
      <group position={[0.97, 0.32, -1.38]}>
        <group ref={rearRightWheelRef}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.32, 0.32, 0.4, 32]} />
            <meshStandardMaterial color="#090D16" roughness={0.15} metalness={0.9} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.205, 0, 0]}>
            <ringGeometry args={[0.21, 0.28, 24]} />
            <meshBasicMaterial color="#38BDF8" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.21, 0, 0]}>
            <circleGeometry args={[0.13, 16]} />
            <meshStandardMaterial color="#475569" metalness={1} />
          </mesh>
        </group>
      </group>

      {/* ========================================================================= */}
      {/* 8. EMBEDDED HEADLIGHT BEAMS & CHASSIS UNDERGLOW                            */}
      {/* ========================================================================= */}
      <group position={[-0.4, 0.28, 2.25]}>
        <mesh>
          <boxGeometry args={[0.22, 0.05, 0.05]} />
          <meshBasicMaterial color="#FFB020" />
        </mesh>
        <spotLight 
          position={[0, 0, 0.1]} 
          target-position={[0, -0.8, 14]}
          angle={0.65} 
          penumbra={0.2} 
          intensity={16} 
          color="#FFB020" 
          castShadow 
        />
      </group>

      <group position={[0.4, 0.28, 2.25]}>
        <mesh>
          <boxGeometry args={[0.22, 0.05, 0.05]} />
          <meshBasicMaterial color="#FFB020" />
        </mesh>
        <spotLight 
          position={[0, 0, 0.1]} 
          target-position={[0, -0.8, 14]}
          angle={0.65} 
          penumbra={0.2} 
          intensity={16} 
          color="#FFB020" 
          castShadow 
        />
      </group>

      {/* Underbody Chassis Neon Uplight */}
      <pointLight position={[0, 0.06, 0]} intensity={5.0} color="#38BDF8" distance={6} />
      <pointLight position={[0, 0.06, 1.2]} intensity={4.0} color="#FFB020" distance={5} />
    </group>
  );
};
