<script lang="ts">
  import "../../app.css";
</script>

<svelte:head>
  <meta name="description" content="DevChallengs using Svelte" />
  <link rel="icon" href="/devchallenges.png" />
</svelte:head>
<main class="w-screen min-h-screen flex ">
  <div
    class="flex flex-col w-[237px] bg-nav-bg pl-[56px] pt-[48px] min-h-screen"
  >
    <div class="font-Poppins font-semibold">
      <a href="/"><span class="text-red-500">Dev</span>challenges.io</a>
    </div>
    <ul
      class="mt-[122px] font-Noto-sans text-gray-400 text-sm flex flex-col gap-7"
    >
      <li>Colors</li>
      <li>Typography</li>
      <li>Spaces</li>
      <li class="cursor-pointer"><a href="/buttons">Buttons</a></li>
      <li class="cursor-pointer text-black "><a href="/inputs">Inputs</a></li>
    </ul>
  </div>
  <div class="pt-[54px] px-[92px] pb-10">
    <slot />
  </div>
</main>

<footer>
  <p />
</footer>

<style>
</style>
