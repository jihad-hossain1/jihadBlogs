// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {

//           "primary": "#6cd87e",

//           "secondary": "#7ef7db",

//           "accent": "#4db8bc",

//           "neutral": "#2a3137",

//           "base-100": "#fafafa",

//           "info": "#73b3e8",

//           "success": "#146146",

//           "warning": "#f4a652",

//           "error": "#e77a79",
//         },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],
// }

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6cd87e",

          "secondary": "#7ef7db",

          "accent": "#4db8bc",

          "neutral": "#2a3137",

          "base-100": "#fafafa",

          "info": "#73b3e8",

          "success": "#146146",

          "warning": "#f4a652",

          "error": "#e77a79",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
});
