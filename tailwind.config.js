/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // colors
      colors: {
        // Primary
        cl_Red: "hsl(1, 90%, 64%)",
        cl_Blue: "hsl(219, 85%, 26%)",
        // Neutral
        cl_White: "hsl(0, 0%, 100%)",
        cl_Verylightgrayishblue: "hsl(210, 60%, 98%)",
        cl_Lightgrayishblue_1: "hsl(211, 68%, 94%)",
        cl_Lightgrayishblue_2: "hsl(205, 33%, 90%)",
        cl_Grayishblue: "hsl(219, 14%, 63%)",
        cl_Darkgrayishblue: "hsl(219, 12%, 42%)",
        cl_Verydarkblue: "hsl(224, 21%, 14%)",
      },
    },
    plugins: [],
  },
}
