import { on } from "events";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#ff7849", // Orange as the primary color
      secondary: "#1976D2", // Adding a complementary shade of blue as the secondary color

      mainbBG: {
        foreground: "#000",
        start: "#D6DCDB",
        end: "#FFFFFF",
      },

      darkBG: {
        foreground: "#000",
        start: "#000",
        end: "#111",
      },

      neutrals: {
        foreground: "#000",
        start: "#000",
        end: "#111",
        background: "#1a1a1a", // Background color
        onBackground: "#FFFFFF", // Text color on background
        surface: "#202020", // Surface color
        onPrimary: "#FFFFFF", // Text color on primary
        onSecondary: "#FFFFFF", // Text color on secondary
        onSurface: "#FFFFFF", // Text color on surface
        lessOpacity: {
          primary: "#ff784960", // Orange as the primary color
          secondary: "#1976D260",
          background: "rgba(26, 26, 26, 0.5)", // Background color
          onBackground: "rgba(255, 255, 255, 0.5)", // Text color on background
          surface: "rgba(32, 32, 32, 0.5)", // Surface color
          onPrimary: "rgba(0, 0, 0, 0.9)", // Text color on primary
          onSecondary: "rgba(255, 255, 255, 0.5)", // Text color on secondary
          onSurface: "rgba(255, 255, 255, 0.5)", // Text color on surface
        },
      },

      primaryRoles: {
        primary: "#ff7849", // High-emphasis fills, texts, and icons against surface
        onPrimary: "#000000", // Text and icons against primary
        primaryContainer: "#F2F2F2", // Standout fill color against surface, for key components like FAB
        onPrimaryContainer: "#000000", // Text and icons against primary container
      },

      secondaryRoles: {
        secondary: "#1976D2", // Less prominent fills, text, and icons against surface
        onSecondary: "#FFFFFF", // Text and icons against secondary
        secondaryContainer: "#F2F2F2", // Less prominent fill color against surface, for recessive components like tonal buttons
        onSecondaryContainer: "#000000", // Text and icons against secondary container
      },

      tertiaryRoles: {
        tertiary: "#9C27B0", // Complementary fills, text, and icons against surface
        onTertiary: "#FFFFFF", // Text and icons against tertiary
        tertiaryContainer: "#F2F2F2", // Complementary container color against surface, for components like input fields
        onTertiaryContainer: "#000000", // Text and icons against tertiary container
      },

      surfaceRoles: {
        surface: "#FFFFFF", // Default color for backgrounds
        onSurface: "#000000", // Text and icons against any surface color
        onSurfaceVariant: "#8492a6", // Lower-emphasis color for text and icons against any surface color
      },

      surfaceContainerRoles: {
        surfaceContainerLowest: "#ECEFF1", // Lowest-emphasis container color
        surfaceContainerLow: "#CFD8DC", // Low-emphasis container color
        surfaceContainer: "#B0BEC5", // Default container color
        surfaceContainerHigh: "#78909C", // High-emphasis container color
        surfaceContainerHighest: "#455A64", // Highest-emphasis container color
      },

      accent: {
        success: "#28A745", // Success (For success or positive actions)
        warning: "#FFC107", // Warning (For warnings or caution)
        error: "#DC3545", // Error (For errors or critical alerts)
        info: "#007BFF", // Info (For informational messages)
        text: "#FFFFFF", // Text color on any accent color
      },

      transparent: "transparent",

      "primary-alt": {
        "50": "#fff7eb",
        "100": "#ffe9c6",
        "200": "#ffd088",
        "300": "#ffae42",
        "400": "#ff9620",
        "500": "#f97007",
        "600": "#dd4c02",
        "700": "#b73106",
        "800": "#94250c",
        "900": "#7a200d",
        "950": "#460d02",
      },

      additional: {
        blue: "#1fb6ff", // Additional color: Blue
        purple: "#7e5bef", // Additional color: Purple
        pink: "#ff49db", // Additional color: Pink
        green: "#13ce66", // Additional color: Green
        yellow: "#ffc82c", // Additional color: Yellow
      },

      grayscale: {
        dark: "#273444", // Dark gray
        medium: "#8492a6", // Medium gray
        light: "#d3dce6", // Light gray
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
export default config;

