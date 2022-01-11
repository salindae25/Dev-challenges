const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "nav-bg": " rgb(250, 251, 253)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Noto-sans": ["Noto Sans JP", "sans-serif"],
        "ubuntu-mono": ["Ubuntu Mono", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },

  plugins: [],
};

module.exports = config;
