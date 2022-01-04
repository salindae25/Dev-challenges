const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "nav-bg": " rgb(250, 251, 253)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Noto-sans": ["Noto Sans JP", "sans-serif"],
      },
    },
  },

  plugins: [],
};

module.exports = config;
