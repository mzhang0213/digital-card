import React from 'react';
import { InvitationConfig } from './types';

interface CardFrontProps {
    config: InvitationConfig;
    isOpened: boolean;
    onClose: () => void;
}

const CardFront: React.FC<CardFrontProps> = ({ config, isOpened, onClose }) => {
    if (!isOpened) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-fade-in relative mx-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-gray-50"
                    title="Close invitation"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

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

                {/* Additional Notes */}
                {config.additionalNotes && (
                    <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800 text-center">
                            {config.additionalNotes}
                        </p>
                    </div>
                )}

                {/* Host */}
                <div className="text-center border-t pt-4">
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