<script>
  import StayCard from "$lib/windbnb/StayCard.svelte";
  import data from "$lib/windbnb/stays.json";
</script>

<div class="flex flex-col md:mx-[max(80px,6.6667vw)] scroll-smooth">
  <div
    class="flex mx-10 my-5 h-[55px] rounded-lg shadow-[0px_1px_6px_rgba(0,0,0,0.1)] md:w-[297px] md:ml-auto md:mr-0"
  >
    <!-- filter and search -->
  </div>

  <div class="flex justify-between mx-3 my-5 font-Montserrat items-center ">
    <h3 class="text-lg leading-6 font-bold md:text-2xl">Stays in Finland</h3>
    <span class="text-sm">{`12+ `} stays </span>
  </div>
  <div
    class="flex flex-col mx-3 my-5 font-Montserrat gap-y-5  md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-12 "
  >
    <!-- stay list goes here -->
    {#each data as stayItem}
      <StayCard stay={stayItem} />
    {/each}
  </div>
</div>
