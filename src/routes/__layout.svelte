<script lang="ts">
  import "../app.css";
</script>

<main class="w-screen min-h-screen flex px-8 bg-gray-100">
  <div class="flex flex-col w-full  gap-4">
    <a href="/" class="mx-auto my-4"
      ><h1 class="text-2xl font-Poppins font-semibold">
        <span class="text-orange-600">Dev</span>Challenges.io
      </h1></a
    >
    <slot />
  </div>
</main>

<footer>
  <p />
</footer>

<style>
</style>
