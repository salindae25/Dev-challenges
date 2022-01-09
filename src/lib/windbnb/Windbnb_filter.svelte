<script lang="ts">
  import Input from "$lib/windbnb/Windbnb_Input.svelte";
  import GuestCounter from "$lib/windbnb/Windbnb_GuestCounter.svelte";
  import { fly } from "svelte/transition";

  export let selectedLocation = {
    city: "",
    country: "",
  };
  export let selectGuestCount = 0;
  export let setLocation = (loc) => {
    console.log(loc);

    selectedLocation = { ...loc };
  };
  export let setGuestCount = (count) => {
    selectGuestCount = count;
  };
  export let onSearch = () => {};
  let filterPanelOpen = false;
  let showPlacesList = true;
  let showGuestList = false;
  let childCount = 0;
  let adultCount = 0;
  let places = [
    {
      city: "Helsinki",
      country: "Finland",
    },
    {
      city: "Turku",
      country: "Finland",
    },
    {
      city: "Oulu",
      country: "Finland",
    },
    {
      city: "Vaasa",
      country: "Finland",
    },
  ];

  function toggleFilterPanel() {
    filterPanelOpen = !filterPanelOpen;
    document.body.classList.toggle("overflow-hidden");
  }

  function updateCounter(value, type) {
    if (type === "adult") {
      adultCount = value;
    }
    if (type === "child") {
      childCount = value;
    }
    setGuestCount(adultCount + childCount);
    return;
  }
</script>

<div
  class="flex mx-9 my-5 h-[55px]  rounded-lg shadow-[0px_1px_6px_rgba(0,0,0,0.1)] md:min-w-[297px] md:absolute md:mr-0 md:right-0 -top-[80px]  divide-x items-center"
  on:click={toggleFilterPanel}
>
  <!-- filter and search -->
  <div class="p-[18px_16px_18px_16px] text-ellipsis whitespace-nowrap">
    {`${selectedLocation.city}, ${selectedLocation.country}`}
  </div>
  <div
    class="p-[18px_16px_18px_16px] text-ellipsis whitespace-nowrap"
    class:text-[#BDBDBD]={selectGuestCount == 0}
  >
    {selectGuestCount > 0 ? `${selectGuestCount} guests` : "Add guests"}
  </div>
  <div class="flex items-center h-full px-5 cursor-pointer">
    <span class="material-icons w-6 text-orange-600"> search </span>
  </div>
</div>
{#if filterPanelOpen}
  <div
    class="fixed w-screen top-0 left-0 min-h-screen z-50 bg-black/10 font-Mulish transition-all ease-in duration-200"
    in:fly={{ y: -400, duration: 500 }}
    out:fly={{ y: 0, duration: 500 }}
  >
    <!--filter Panner  overlay -->
    <div
      class="w-full flex flex-col gap-4  bg-white px-[18px] py-[22px]  md:px-[max(80px,6.6667vw)] "
    >
      <div class="flex font-bold text-xs items-center ">
        <span class="md:hidden">Edit your search</span>
        <span
          class="material-icons ml-auto cursor-pointer"
          on:click|preventDefault|stopPropagation={toggleFilterPanel}
        >
          close
        </span>
      </div>
      <!--filter Panner  content-->
      <div
        class="flex flex-col w-full rounded-xl divide-y shadow-[0px_1px_6px_rgba(0,0,0,0.1)] md:flex-row   md:divide-none"
      >
        <Input
          id="location"
          value={`${selectedLocation.city}, ${selectedLocation.country}`}
          label="Location"
          onClick={() => {
            showGuestList = false;
            showPlacesList = true;
          }}
          readonly
          placeholder="Add place"
        />
        <Input
          id="guest"
          label="Guest"
          onClick={() => {
            showGuestList = true;
            showPlacesList = false;
          }}
          placeholder="Add guest"
          readonly
          value={selectGuestCount > 0 ? `${selectGuestCount} guests` : ""}
        />

        <button
          class=" mt-auto px-6 py-4 hidden md:flex self-center items-center gap-2 shadow-[0px_1px_6px_rgba(0,0,0,0.1)] text-white bg-orange-600 rounded-2xl cursor-pointer"
          on:click={() => {
            onSearch();
            toggleFilterPanel();
          }}
        >
          <span class="material-icons w-6"> search </span>
          <span> Search </span>
        </button>
      </div>
      <div class="flex flex-col w-full px-[26px] mt-5 mb-5 md:flex-row">
        {#if showPlacesList}
          <div
            class="flex flex-col w-full  gap-9 transition-all ease-in duration-200"
            in:fly={{ y: -300, duration: 500 }}
            out:fly={{ y: 0, duration: 500 }}
          >
            {#each places as place}
              <div
                class="flex w-full item-center gap-2 text-[#4F4F4F] cursor-pointer"
                on:click={() => {
                  setLocation(place);
                }}
              >
                <span class="material-icons  text-[18px] "> place </span>
                <span class="text-sm">{`${place.city}, ${place.country}`}</span>
              </div>
            {/each}
          </div>
        {:else if showGuestList}
          <div
            class="flex flex-col w-full  gap-9  md:ml-[-80px] md:relative md:left-[44vw] transition-all ease-in duration-200"
            in:fly={{ y: -300, duration: 500 }}
            out:fly={{ y: 0, duration: 500 }}
          >
            <GuestCounter
              count={adultCount}
              updateCounter={(value) => updateCounter(value, "adult")}
            />
            <GuestCounter
              title="Child"
              subTitle="Ages 2-12"
              count={childCount}
              updateCounter={(value) => updateCounter(value, "child")}
            />
          </div>
        {/if}
      </div>
      <button
        class=" mt-auto px-6 py-4 flex self-center items-center gap-2 shadow-[0px_1px_6px_rgba(0,0,0,0.1)] text-white bg-orange-600 rounded-2xl md:hidden"
        on:click={() => {
          onSearch();
          toggleFilterPanel();
        }}
      >
        <span class="material-icons w-6"> search </span>
        <span> Search </span>
      </button>
    </div>
  </div>
{/if}
