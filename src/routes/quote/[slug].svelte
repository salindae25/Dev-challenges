<script>
  import { page } from "$app/stores";
  import Quote from "$lib/quote_gen/QuoteItem.svelte";
  import { onMount } from "svelte";
  let quotes = [1, 3];
  let dataLoading = false;
  let author = "";
  async function getTopQuotes(authorName) {
    dataLoading = true;
    try {
      const request = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
      );
      if (request.ok) {
        const response = await request.json();
        setTimeout(() => {
          quotes = response?.data;
          dataLoading = false;
        }, 1000);
      }
    } catch (error) {
      dataLoading = false;
    }
  }

  onMount(async () => {
    author = $page?.params?.slug;
    await getTopQuotes(author);
  });
</script>

<div class="flex flex-col  w-full min-h-screen py-4 px-5 ">
  <div class="ml-auto  text-sm cursor-pointer mb-[10px] md:mr-[36px]">
    <a href="/quote" class="flex items-center gap-1">
      random<span
        class="material-icons text-lg "
        class:animate-spin={dataLoading}
      >
        sync
      </span>
    </a>
  </div>
  <h1 class="font-bold text-[42px] mb-[40px] pl-[70px] md:w-[614px] md:mx-auto">
    {author}
  </h1>
  {#if dataLoading}
    <div
      class="animate-pulse flex space-x-4  w-full justify-center flex-grow-1 relative my-4 gap-8 md:w-[614px] md:mx-auto"
    >
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-gray-200 rounded" />
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-gray-200 rounded col-span-2" />
            <div class="h-2 bg-gray-200 rounded col-span-1" />
          </div>
          <div class="h-2 bg-gray-200 rounded" />
        </div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-gray-200 rounded col-span-2" />
            <div class="h-2 bg-gray-200 rounded col-span-1" />
          </div>
          <div class="h-2 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  {:else}
    <div
      class="flex flex-col w-full justify-center flex-grow-1 relative my-4 gap-8 md:w-[614px] md:mx-auto"
    >
      {#each quotes as quote}
        <Quote text={quote?.quoteText} />
      {/each}
    </div>
  {/if}
</div>
