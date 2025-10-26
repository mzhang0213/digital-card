import React from 'react';
import { InvitationConfig } from './types';

interface CardFrontProps {
    config: InvitationConfig;
    isOpened: boolean;
}

const CardFront: React.FC<CardFrontProps> = ({ config, isOpened }) => {
    if (!isOpened) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-fade-in">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {config.eventTitle}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4"></div>
                </div>

                {/* Recipient */}
                <div className="text-center mb-6">
                    <p className="text-lg text-gray-700 mb-2">
                        To: {config.recipientName}
                    </p>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center">
                        <span className="text-gray-600 font-medium">📅 {config.eventDate}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="text-gray-600 font-medium">⏰ {config.eventTime}</span>
                    </div>
                    <div className="flex items-center justify-center text-center">
                        <span className="text-gray-600 font-medium">📍 {config.eventLocation}</span>
                    </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-center italic">
                        &quot;{config.message}&quot;
                    </p>
                </div>

                {/* Host */}
                <div className="text-center">
                    <p className="text-gray-600 font-semibold">
                        {config.hostName}
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400"></div>
            </div>
        </div>
    );
};

export default CardFront;