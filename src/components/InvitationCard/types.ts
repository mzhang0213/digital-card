export interface InvitationConfig {
    // Content
    recipientName: string;
    eventTitle: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    message: string;
    hostName: string;
    additionalNotes?: string;

    // Appearance
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    stampType: 'classic' | 'modern' | 'vintage' | 'elegant' | 'floral';
    cardDesign: 'standard' | 'elegant' | 'modern' | 'vintage' | 'floral';

    // Animation
    enableGlitter: boolean;
    enableTilt: boolean;
    enableSound: boolean;
    animationSpeed: 'slow' | 'normal' | 'fast';
}

export interface CardState {
    isOpened: boolean;
    isStamped: boolean;
    isHovered: boolean;
    isAnimating: boolean;
    tilt: { x: number; y: number };
}