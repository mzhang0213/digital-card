import React, { useState, useCallback } from 'react';
import { InvitationConfig, CardState } from './types';
import CardBack from './CardBack';
import CardFront from './CardFront';
import Stamp from './Stamp';
import GlitterEffect from './GlitterEffect';
import {DEFAULT_CONFIG} from "@/components/InvitationCard/constants";

interface InvitationCardProps {
    config?: Partial<InvitationConfig>;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
                                                           config: customConfig
                                                       }) => {
    const [cardState, setCardState] = useState<CardState>({
        isAnimating: false,
        isOpened: false,
        isStamped: true,
        isHovered: false,
        tilt: { x: 0, y: 0 }
    });

    const config: InvitationConfig = {
        ...DEFAULT_CONFIG,
        ...customConfig
    };

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!config.enableTilt || cardState.isOpened) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = ((y - centerY) / centerY) * 10;
        const tiltY = ((centerX - x) / centerX) * 10;

        setCardState(prev => ({
            ...prev,
            tilt: { x: tiltX, y: tiltY }
        }));
    }, [config.enableTilt, cardState.isOpened]);

    const handleMouseEnter = useCallback(() => {
        if (cardState.isOpened) return;
        setCardState(prev => ({ ...prev, isHovered: true }));
    }, [cardState.isOpened]);

    const handleMouseLeave = useCallback(() => {
        setCardState(prev => ({
            ...prev,
            isHovered: false,
            tilt: { x: 0, y: 0 }
        }));
    }, []);

    const handleStampClick = useCallback(() => {
        // Remove stamp with animation
        setCardState(prev => ({ ...prev, isStamped: false }));

        // Open card after stamp animation
        setTimeout(() => {
            setCardState(prev => ({ ...prev, isOpened: true }));
        }, 500);
    }, []);

    const handleCloseCard = useCallback(() => {
        setCardState(prev => ({ ...prev, isOpened: false }));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            {/* Closed Card */}
            <div
                className="relative w-80 h-96 cursor-pointer transform-gpu"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={cardState.isStamped ? handleStampClick : undefined}
            >
                {/* Card Back */}
                <CardBack
                    config={config}
                    isHovered={cardState.isHovered}
                    tilt={cardState.tilt}
                />

                {/* Stamp */}
                <Stamp
                    config={config}
                    isStamped={cardState.isStamped}
                    onClick={handleStampClick}
                />

                {/* Glitter Effect */}
                {config.enableGlitter && (
                    <GlitterEffect
                        isActive={cardState.isHovered && !cardState.isOpened}
                        color={config.secondaryColor}
                    />
                )}

                {/* Instruction */}
                {cardState.isStamped && (
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <p className="text-sm text-gray-600 font-medium animate-pulse">
                            Click the stamp to open
                        </p>
                    </div>
                )}
            </div>

            {/* Opened Card */}
            <CardFront
                config={config}
                isOpened={cardState.isOpened}
            />

            {/* Close Button for Opened Card */}
            {cardState.isOpened && (
                <button
                    onClick={handleCloseCard}
                    className="fixed top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                    title="Close invitation"
                >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default InvitationCard;