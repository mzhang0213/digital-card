import React, { useState, useCallback } from 'react';
import { InvitationConfig, CardState } from './types';
import { DEFAULT_CONFIG } from './constants';
import CardBack from './CardBack';
import CardFront from './CardFront';
import Stamp from './Stamp';
import GlitterEffect from './GlitterEffect';

interface InvitationCardProps {
    config?: Partial<InvitationConfig>;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
                                                           config: customConfig
                                                       }) => {
    const [cardState, setCardState] = useState<CardState>({
        isOpened: false,
        isStamped: true,
        isHovered: false,
        isAnimating: false,
        tilt: { x: 0, y: 0 }
    });

    const config: InvitationConfig = {
        ...DEFAULT_CONFIG,
        ...customConfig
    };

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!config.enableTilt || cardState.isOpened || cardState.isAnimating) return;

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
    }, [config.enableTilt, cardState.isOpened, cardState.isAnimating]);

    const handleMouseEnter = useCallback(() => {
        if (cardState.isOpened || cardState.isAnimating) return;
        setCardState(prev => ({ ...prev, isHovered: true }));
    }, [cardState.isOpened, cardState.isAnimating]);

    const handleMouseLeave = useCallback(() => {
        setCardState(prev => ({
            ...prev,
            isHovered: false,
            tilt: { x: 0, y: 0 }
        }));
    }, []);

    const handleStampClick = useCallback(() => {
        if (cardState.isAnimating) return;

        // Start animation
        setCardState(prev => ({ ...prev, isAnimating: true, isStamped: false }));

        // Open card after stamp animation
        setTimeout(() => {
            setCardState(prev => ({
                ...prev,
                isOpened: true,
                isAnimating: false
            }));
        }, 500);
    }, [cardState.isAnimating]);

    const handleCloseCard = useCallback(() => {
        setCardState(prev => ({
            ...prev,
            isOpened: false
        }));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            {/* Closed Card */}
            <div
                className="relative w-80 h-96 cursor-pointer transform-gpu"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={cardState.isStamped && !cardState.isAnimating ? handleStampClick : undefined}
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
                        isActive={cardState.isHovered && !cardState.isOpened && !cardState.isAnimating}
                        color={config.secondaryColor}
                    />
                )}

                {/* Instruction */}
                {cardState.isStamped && !cardState.isAnimating && (
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <p className="text-sm text-gray-600 font-medium animate-pulse">
                            Click the stamp to open
                        </p>
                    </div>
                )}

                {/* Opening Animation Overlay */}
                {cardState.isAnimating && (
                    <div className="absolute inset-0 bg-white bg-opacity-50 rounded-lg animate-pulse"></div>
                )}
            </div>

            {/* Opened Card */}
            <CardFront
                config={config}
                isOpened={cardState.isOpened}
                onClose={handleCloseCard}
            />
        </div>
    );
};

export default InvitationCard;