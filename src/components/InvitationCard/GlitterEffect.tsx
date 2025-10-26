"use client";

import React, { useEffect, useState, useCallback } from 'react';

interface GlitterParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
    delay: number;
}

interface GlitterEffectProps {
    isActive: boolean;
    color?: string;
}

const GlitterEffect: React.FC<GlitterEffectProps> = ({
                                                         isActive,
                                                         color = '#FFD700'
                                                     }) => {
    const [particles, setParticles] = useState<GlitterParticle[]>([]);

    // Create particles only when isActive changes to true
    const createParticles = useCallback((): GlitterParticle[] => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            color,
            duration: Math.random() + 0.5,
            delay: Math.random() * 0.5
        }));
    }, [color]);

    // Handle particle lifecycle
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isActive) {
            // Only set particles when activating
            const newParticles = createParticles();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setParticles(newParticles);

            // Auto-clear particles after animation
            timer = setTimeout(() => {
                setParticles([]);
            }, 2000);
        } else {
            // Only clear particles if we have any
            if (particles.length > 0) {
                setParticles([]);
            }
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [createParticles, isActive, particles.length]); // Remove createParticles from dependencies

    // Don't render if no particles
    if (particles.length === 0) {
        return null;
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute animate-glitter"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: particle.color,
                        borderRadius: '50%',
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                />
            ))}
        </div>
    );
};

export default GlitterEffect;