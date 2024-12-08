"use client";

import { useTheme } from "@/context/ThemeProvider";

function ThemedBody({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`antialiased `}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
      }}
    >
      {children}
    </div>
  );
}

export default ThemedBody;
