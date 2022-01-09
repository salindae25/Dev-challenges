<script lang="ts">
  import StayCard from "$lib/windbnb/StayCard.svelte";
  import Stayfilter from "$lib/windbnb/Windbnb_filter.svelte";
  import data from "$lib/windbnb/stays.json";
  import { onMount } from "svelte";

  let selectedLocation = {
    city: "Helsinki",
    country: "Finland",
  };
  let filterData = [];
  let selectGuestCount = 0;

  function setLocation(loc) {
    selectedLocation = { ...loc };
  }
  function setGuestCount(count) {
    selectGuestCount = count;
  }
  function onSearch(propertyData: Stay[]) {
    filterData = data.filter((item) => {
      return (
        item.city === selectedLocation.city &&
        item.country === selectedLocation.country &&
        item.maxGuests >= selectGuestCount
      );
    });
  }
  onMount(() => {
    onSearch(data);
  });
</script>

<div class="flex flex-col md:mx-[max(80px,6.6667vw)] scroll-smooth relative ">
  <Stayfilter
    {selectedLocation}
    {selectGuestCount}
    {setLocation}
    {setGuestCount}
    onSearch={() => {
      onSearch(data);
    }}
  />

  <div class="flex justify-between mx-3 my-5 font-Montserrat items-center">
    <h3 class="text-lg leading-6 font-bold md:text-2xl">
      Stays in {selectedLocation.country}
    </h3>
    <span class="text-sm">{`${filterData.length} `} stays </span>
  </div>
  <div
    class="flex flex-col mx-3 my-5 font-Montserrat gap-y-5  md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-12 justify-center xl:justify-start"
  >
    <!-- stay list goes here -->
    {#each filterData as stayItem}
      <StayCard stay={stayItem} />
    {/each}
    {#if filterData.length == 0}
      <div>No property matching your inquiry</div>
    {/if}
  </div>
</div>
