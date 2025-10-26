import React from 'react';
import { InvitationConfig } from './types';

interface StampProps {
    config: InvitationConfig;
    isStamped: boolean;
    onClick: () => void;
}

const Stamp: React.FC<StampProps> = ({ config, isStamped, onClick }) => {
    // Define styles with proper TypeScript typing
    const getStampStyle = (): string => {
        const baseStyle = "absolute top-4 right-4 w-16 h-16 rounded-full border-2 cursor-pointer transition-all duration-500 transform";

        if (!isStamped) {
            return `${baseStyle} scale-0 opacity-0`;
        }

        // Use Record type for type safety
        const styles: Record<InvitationConfig['stampType'], string> = {
            classic: "border-red-600 bg-gradient-to-br from-red-500 to-red-700",
            modern: "border-blue-500 bg-gradient-to-br from-blue-400 to-blue-600",
            vintage: "border-amber-800 bg-gradient-to-br from-amber-700 to-amber-900",
            elegant: "border-purple-600 bg-gradient-to-br from-purple-500 to-purple-700",
            floral: "border-pink-500 bg-gradient-to-br from-pink-400 to-pink-600"
        };

        return `${baseStyle} ${styles[config.stampType]} scale-100 opacity-100`;
    };

    const getStampText = () => {
        const textClasses = "text-white text-xs font-bold transform rotate-12 text-center";
        return (
            <div className={textClasses}>
                <div>POSTAGE</div>
                <div className="text-[10px]">PAID</div>
            </div>
        );
    };

    return (
        <div
            className={getStampStyle()}
            onClick={onClick}
            title="Click to open invitation"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                {getStampText()}
            </div>
            <div className="absolute inset-0 border-2 border-white border-dashed rounded-full opacity-50"></div>
        </div>
    );
};

export default Stamp;