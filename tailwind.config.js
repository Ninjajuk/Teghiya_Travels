/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Button Colors
        buttonPrimary: "#3498db",
        buttonSecondary: "#2ecc71",
        buttonDanger: "#e74c3c",
        buttonWarning: "#f39c12",

        primary:"#800000",

        //background
        bgPrimary:"#f8f9fa",
        bgSecondary:"#00BFA5",
        tertary:"#00ACC1",
        quadliterily:"#8E24AA",

        // Theme Background Colors
        themeLight: "#ffffff",
        themeDark: "#000000",
        themePrimary: "#f8f9fa",
        themeSecondary: "#ecf0f1",

        // Text Colors
        textPrimary: "#2c3e50",
        textSecondary: "#95a5a6",
        textMuted: "#7f8c8d",
      },

    },
  },
  plugins: [],
}
