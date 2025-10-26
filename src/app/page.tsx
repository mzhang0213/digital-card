import InvitationCard from '../components/InvitationCard/InvitationCard';
import { InvitationConfig } from '@/components/InvitationCard/types';

export default function Home() {
  // Custom configuration for the invitation
  const customConfig: Partial<InvitationConfig> = {
    recipientName: "Sarah & Family",
    eventTitle: "Wedding Celebration",
    eventDate: "Saturday, June 15th, 2024",
    eventTime: "4:00 PM",
    eventLocation: "Grand Ballroom, The Ritz Carlton, 123 Luxury Ave",
    message: "We invite you to share in our joy as we exchange vows and begin our journey together. Your presence would mean the world to us.",
    hostName: "Emily & Michael",
    additionalNotes: "Black Tie Optional | Please RSVP by June 1st",

    primaryColor: "#8B4513",
    secondaryColor: "#C9A227",
    accentColor: "#E8C547",
    stampType: 'elegant',
    cardDesign: 'elegant',

    enableGlitter: true,
    enableTilt: true,
    animationSpeed: 'normal'
  };

  return (
      <main className="min-h-screen">
        <InvitationCard config={customConfig} />
      </main>
  );
}