import React from 'react';
import { InvitationConfig } from './types';

interface CardBackProps {
    config: InvitationConfig;
    isHovered: boolean;
    tilt: { x: number; y: number };
}

const CardBack: React.FC<CardBackProps> = ({ isHovered, tilt }) => {
    const cardStyle = {
        transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : 'rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.3s ease'
    };

    return (
        <div
            className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-lg shadow-lg"
            style={cardStyle}
        >
            {/* Envelope Pattern */}
            <div className="absolute inset-4 border-2 border-dashed border-amber-300 rounded opacity-60"></div>

            {/* Sealed Flap */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-11/12">
                <div className="bg-amber-50 border-2 border-b-0 border-amber-200 rounded-t-lg h-8">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-amber-200 clip-triangle"></div>
                </div>
            </div>
        </div>
    );
};

export default CardBack;