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
  <a href="/quote">
    <Card
      title="Random quote generator"
      imagePath="https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FquoteThumbnail.png%3Falt%3Dmedia%26token%3D156a0ff0-506a-4246-8422-eb1cedab5116&w=750&q=75"
      description="Famous quotes can be a great source of motivation. This challenge is all about quotes. "
    />
  </a>
</div>
