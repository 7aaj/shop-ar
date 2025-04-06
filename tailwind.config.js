export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure you scan all the files for Tailwind usage
  ],
  theme: {
    extend: {
      colors: {
        green: "#4A9200",
        yellow: "#FCEB4F",
        darkYellow: "#F4A700",
        whiteGlow: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
