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

  <footer
    class=" text-[#828282] flex justify-center my-4 font-Montserrat mt-auto"
  >
    <span>created by <b>salindae25</b> - devChallenges.io</span>
  </footer>
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800&display=swap");
</style>
