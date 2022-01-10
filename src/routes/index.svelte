<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/Card.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="flex mx-auto gap-5">
  <a href="/frontend">
    <Card
      title="Frontend projects"
      imagePath="/images/Frontend_thumb.svg"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
    mollitia sapiente, blanditiis quam adipisci sint odio quisquam quas,
    necessitatibus ullam voluptatibus totam eius reiciendis, qui eveniet.
    Sit iste id numquam!"
    />
  </a>
  <a href="/responsive">
    <Card
      title="Responsive projects"
      imagePath="/images/Responsive_thumb.svg"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
    mollitia sapiente, blanditiis quam adipisci sint odio quisquam quas,
    necessitatibus ullam voluptatibus totam eius reiciendis, qui eveniet.
    Sit iste id numquam!"
    />
  </a>
</div>

<style>
</style>
