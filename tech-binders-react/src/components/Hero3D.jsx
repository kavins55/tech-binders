import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

const AnimatedRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Slowly rotate the complex knot to create flowing sweeping curves
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
      groupRef.current.rotation.z = Math.cos(t * 0.1) * 0.15;
    }
  });

  // Dark red metallic material matching the previous red but highly reflective
  const redMetallicMaterial = (
    <meshStandardMaterial 
      color="#aa0000" 
      metalness={1} 
      roughness={0.05} 
      envMapIntensity={3}
      clearcoat={1}
      clearcoatRoughness={0.1}
    />
  );

  return (
    <group position={[3.5, 0, -2]}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <group ref={groupRef} scale={1.2}>
          {/* A simpler, thicker, elegant sweeping ribbon */}
          <mesh>
            <torusKnotGeometry args={[3, 0.2, 300, 64, 1, 3]} />
            {redMetallicMaterial}
          </mesh>
          <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]} scale={1.1}>
            <torusKnotGeometry args={[2.5, 0.15, 300, 64, 1, 2]} />
            {redMetallicMaterial}
          </mesh>
        </group>
      </Float>
    </group>
  );
};

const Hero3D = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

          .hero-bg {
            background-color: #000000;
            background-image: none;
            position: relative;
            overflow: hidden;
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 100px 5% 80px 10%;
            z-index: 10;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          .font-serif-custom {
            font-family: 'Playfair Display', serif;
          }

          .font-premium-sans {
            font-family: 'Space Grotesk', 'Manrope', sans-serif;
          }

          .font-sans-custom {
            font-family: 'Inter', sans-serif;
          }

          @keyframes textShine {
            to {
              background-position: 200% center;
            }
          }

          .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            /* Smooth, premium dark red with a bright red sweeping highlight */
            background-image: linear-gradient(
              to right, 
              #700000 20%, 
              #ff3b3b 50%, 
              #700000 80%
            );
            background-size: 200% auto;
            animation: textShine 5s linear infinite;
          }

          .hero-content-wrapper {
            z-index: 20;
            max-width: 700px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            margin-top: -5vh;
            position: relative;
            pointer-events: auto;
          }

          .main-headline {
            font-size: clamp(3.5rem, 7vw, 7rem);
            font-weight: 800;
            letter-spacing: -0.04em;
            margin-bottom: 8px;
            line-height: 1.05;
            padding-right: 0.1em;
          }

          .sub-headline {
            font-size: clamp(1.8rem, 3vw, 3.5rem);
            color: #ffffff !important;
            margin-bottom: 24px;
            font-weight: 500;
            line-height: 1.2;
            opacity: 1 !important;
            letter-spacing: -0.01em;
            font-family: 'Outfit', sans-serif;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          }

          .description-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: clamp(1rem, 1.2vw, 1.25rem);
            color: #ffffff !important;
            opacity: 1 !important;
            max-width: 600px;
            margin-bottom: 40px;
            line-height: 1.7;
            font-weight: 400;
          }

          .cta-button {
            display: inline-block;
            border: 1px solid #6b7280;
            border-radius: 9999px;
            padding: 12px 32px;
            font-size: 0.875rem;
            font-weight: 500;
            color: #ffffff;
            transition: all 0.3s ease-in-out;
            text-decoration: none;
            background-color: rgba(10, 10, 15, 0.5);
            backdrop-filter: blur(4px);
          }

          .cta-button:hover {
            background-color: #ff1e1e;
            border-color: #ff1e1e;
            color: #ffffff;
            box-shadow: 0 0 20px rgba(255, 30, 30, 0.4);
          }

          .canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
          }

          .gradient-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 150px;
            background-image: linear-gradient(to top, #000000 20%, transparent 100%);
            z-index: 10;
            pointer-events: none;
          }
        `}
      </style>

      <section className="hero-bg font-sans-custom">
        {/* 3D Canvas Background */}
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff1e1e" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <AnimatedRings />
            
            <Environment preset="city" />
          </Canvas>
        </div>

        {/* Main Content Wrapper */}
        <div className="hero-content-wrapper">
          {/* Headline */}
          <h1 className="font-premium-sans main-headline text-gradient">
            Tech Binders
          </h1>
          {/* Sub-headline */}
          <h2 className="sub-headline" style={{fontSize: 'clamp(1.8rem, 3vw, 3.5rem)'}}>
            Building Digital Solutions That Grow Your Business
          </h2>
          {/* Description Paragraph */}
          <p className="description-text">
            We create fast, reliable software and beautiful websites that make your daily work easier. Our tools help your brand stand out online and deliver real results for your business.
          </p>
          {/* Call to Action Button */}
          <Link to="/contact" className="cta-button">
            Let's Talk
          </Link>
        </div>

        {/* Subtle gradient overlay at bottom to blend into the next section */}
        <div className="gradient-overlay"></div>
      </section>
    </>
  );
};

export default Hero3D;
