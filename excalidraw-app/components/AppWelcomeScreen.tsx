import { POINTER_EVENTS } from "@excalidraw/common";
import { useI18n } from "@excalidraw/excalidraw/i18n";
import { WelcomeScreen } from "@excalidraw/excalidraw/index";
import React from "react";

const SaurabhsLogo = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
      pointerEvents: "none",
    }}
  >
    <svg
      viewBox="0 0 100 100"
      width="96"
      height="96"
      style={{
        filter: "drop-shadow(0 8px 16px rgba(79, 70, 229, 0.15))",
      }}
    >
      <rect x="10" y="10" width="80" height="80" rx="24" fill="url(#saurabh-grad)" />
      <defs>
        <linearGradient id="saurabh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path
        d="M28 35 C28 35, 45 35, 52 35 C65 35, 72 45, 62 55 C52 65, 35 65, 48 65 C55 65, 72 65, 72 65"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
    <div
      style={{
        fontSize: "2.4rem",
        fontWeight: 800,
        background: "linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "'Outfit', 'Inter', sans-serif",
        marginTop: "1rem",
        letterSpacing: "-0.04em",
      }}
    >
      Saurabh's Board
    </div>
  </div>
);

export const AppWelcomeScreen: React.FC<{
  onCollabDialogOpen: () => any;
  isCollabEnabled: boolean;
}> = React.memo((props) => {
  const { t } = useI18n();

  return (
    <WelcomeScreen>
      <WelcomeScreen.Hints.MenuHint>
        {t("welcomeScreen.app.menuHint")}
      </WelcomeScreen.Hints.MenuHint>
      <WelcomeScreen.Hints.ToolbarHint />
      <WelcomeScreen.Hints.HelpHint />
      <WelcomeScreen.Center>
        <SaurabhsLogo />
        <WelcomeScreen.Center.Heading>
          Your simple, clean, and private whiteboard.
        </WelcomeScreen.Center.Heading>
        <WelcomeScreen.Center.Menu>
          <WelcomeScreen.Center.MenuItemLoadScene />
          <WelcomeScreen.Center.MenuItemHelp />
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  );
});
