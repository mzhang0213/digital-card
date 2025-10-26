export const DEFAULT_CONFIG: InvitationConfig = {
    recipientName: "Dear Guest",
    eventTitle: "You're Invited!",
    eventDate: "Saturday, December 25th, 2024",
    eventTime: "6:00 PM",
    eventLocation: "123 Celebration Street, City, State",
    message: "We would be honored to have you join us for this special occasion. Your presence would make it complete.",
    hostName: "The Host Family",
    additionalNotes: "Please RSVP by December 15th",

    primaryColor: "#8B4513",
    secondaryColor: "#D4AF37",
    accentColor: "#FF6B6B",
    stampType: 'classic',
    cardDesign: 'standard',

    enableGlitter: true,
    enableTilt: true,
    enableSound: false,
    animationSpeed: 'normal'
};

export const ANIMATION_SPEEDS = {
    slow: 1000,
    normal: 500,
    fast: 300
};

export const CARD_DESIGNS = {
    standard: {
        background: "bg-gradient-to-br from-amber-50 to-amber-100",
        border: "border-amber-200",
        pattern: "border-amber-300"
    },
    elegant: {
        background: "bg-gradient-to-br from-white to-gray-50",
        border: "border-gray-300",
        pattern: "border-gray-400"
    },
    modern: {
        background: "bg-gradient-to-br from-blue-50 to-indigo-100",
        border: "border-blue-200",
        pattern: "border-blue-300"
    },
    vintage: {
        background: "bg-gradient-to-br from-amber-100 to-amber-200",
        border: "border-amber-300",
        pattern: "border-amber-400"
    },
    floral: {
        background: "bg-gradient-to-br from-pink-50 to-rose-100",
        border: "border-pink-200",
        pattern: "border-pink-300"
    }
};