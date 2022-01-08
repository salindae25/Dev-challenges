<script lang="ts">
  import "../../app.css";
  import Nav from "$lib/windbnb/Windbnb_Nav.svelte";
</script>

<svelte:head>
  <meta name="description" content="DevChallengs WindBnB using Svelte" />
  <link rel="icon" href="/Images/windbnb_triangleLogo.png" />
  <title>WindBnB</title>
</svelte:head>

<main class="w-screen min-h-screen flex flex-col">
  <Nav />

  <slot />

  <footer>
    <!-- footer goes here  -->
  </footer>
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
</style>
