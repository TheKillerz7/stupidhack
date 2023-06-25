/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
        "shake-slow": {
          "0%": {
            transform: "translate(1px, 1px) rotate(0deg)",
            opacity: "50%",
          },
          "20%": {
            transform: "translate(-3px, 0px) rotate(1deg)",
            opacity: "100%",
          },
          "40%": {
            transform: "translate(1px, -1px) rotate(1deg)",
            opacity: "50%",
          },
          "60%": {
            transform: "translate(-3px, 1px) rotate(0deg)",
            opacity: "100%",
          },
          "80%": {
            transform: "translate(-1px, -1px) rotate(1deg)",
            opacity: "20%",
          },
          "100%": {
            transform: "translate(1px, 1px) rotate(0deg)",
            opacity: "50%",
          },
        },
        "wink-right": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "wink-left": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "shake-hands": {
          "0%": { transform: "rotate(0deg) translateY(0px)" },
          "25%": { transform: "rotate(20deg) translateY(10px)" },
          "50%": { transform: "rotate(-20deg) translateY(-10px)" },
          "100%": { transform: "rotate(0deg) translateY(0px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
        "shake-slow": "shake-slow 3s ease-in-out infinite",
        "wink-left": "wink-left 1.5s ease-in-out infinite",
        "wink-right": "wink-right 1.5s ease-in-out infinite",
        "shake-hands": "shake-hands 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
