<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/Card.svelte";
</script>

<svelte:head>
  <title>Frontend - devChallenge.io</title>
</svelte:head>

<div class="flex justify-center gap-5 flex-wrap w-full ">
  <a href="/buttons">
    <Card
      title="Buttons component"
      imagePath="/thumbnail/buttons_page.webp"
      description="Create a reusable button with all the states in the design and a page displaying all the states."
    />
  </a>
  <a href="/inputs">
    <Card
      title="Inputs component"
      imagePath="/thumbnail/inputs_page.webp"
      description="Create a reusable input with all the states in the design and a page displaying all the states. "
    />
  </a>
  <a href="/windbnb">
    <Card
      title="Windbnb project"
      imagePath="/thumbnail/windbnb_page.webp"
      description="Create a small version of Airbnb - Windbnb with given data. Use Front-end libraries like React or Vue. "
    />
  </a>
</div>
