<script lang="ts">
  import "../../app.css";
</script>

<svelte:head>
  <meta name="description" content="DevChallengs Country Quiz using Svelte" />
  <title>Country Quiz</title>
</svelte:head>

<main
  class="w-screen min-h-screen flex flex-col bg-[url('/Images/country_quiz_bg.png')] font-Poppins"
>
  <slot />

  <footer
    class=" text-[#828282] flex justify-center my-4 font-Montserrat mt-auto"
  >
    <span>created by <b>salindae25</b> - devChallenges.io</span>
  </footer>
</main>
