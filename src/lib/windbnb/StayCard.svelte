<script lang="ts">
  export let stay: Stay = {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
  };
</script>

<div
  class="flex flex-col w-full  max-w-[395px] md:w-[395px] xl:w-[calc(27.43vw)] "
>
  <img
    src={stay.photo}
    alt={stay.title}
    loading="lazy"
    class="w-full aspect-auto rounded-xl h-[269px] object-cover"
  />
  <div class="flex w-full  items-center mt-[14px]">
    {#if stay.superHost}
      <span
        class="border border-[#4F4F4F] rounded-3xl py-1 px-2 uppercase font-bold text-[10px] mr-[10px] md:text-xs"
        >Super host</span
      >
    {/if}
    <span class="text-[#828282] text-xs md:text-sm"
      >{`${stay.type}, ${stay.beds || 0} beds`}</span
    >
    <div class="flex items-center ml-auto">
      <span
        class="material-icons text-orange-600 w-[14px] text-xl leading-none"
      >
        star_rate
      </span>
      <span class="ml-3 md:text-sm">{stay.rating.toFixed(2)}</span>
    </div>
  </div>
  <div
    class="font-semibold text-sm leading-4 mt-[12px] md:text-base md:leading-5"
  >
    Stylist apartment in center of the city
  </div>
</div>
