const lightTheme = {
  name: "light",
  colors: {
    primary: "#2563eb",
    secondary: "#1e293b",
    background: "#f8fafc",
    surface: "#ffffff",
    textPrimary: "#1e293b",
    textSecondary: "#64748b",
    border: "#e2e8f0",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSizeBase: "16px",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const darkTheme = {
  name: "dark",
  colors: {
    primary: "#3b82f6",
    secondary: "#e2e8f0",
    background: "#0B2447",
    surface: "#19376D",
    textPrimary: "#f8fafc",
    textSecondary: "#cbd5e1",
    border: "#475569",
    warning: "#fbbf24",
    error: "#f87171",
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSizeBase: "16px",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
};

export const themes = { light: lightTheme, dark: darkTheme };
