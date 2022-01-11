<script lang="ts">
  import Quote from "$lib/quote_gen/QuoteItem.svelte";
  import Author from "$lib/quote_gen/QuoteAuthorItem.svelte";
  import { onMount } from "svelte";
  let randomQuote = null;
  let dataLoading = false;
  async function getRandomQuote() {
    dataLoading = true;
    try {
      const request = await fetch(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      if (request.ok) {
        const response = await request.json();
        setTimeout(() => {
          [randomQuote] = response?.data;
          dataLoading = false;
        }, 1000);
      }
    } catch (error) {
      dataLoading = false;
    }
  }

  onMount(async () => {
    await getRandomQuote();
  });
</script>

<div class="flex flex-col font-Raleway w-full min-h-screen py-3 px-5">
  <div
    class="ml-auto flex items-center gap-1 text-sm cursor-pointer mb-[200px]"
    on:click={getRandomQuote}
  >
    random<span
      class="material-icons text-lg "
      class:animate-spin={dataLoading}
    >
      sync
    </span>
  </div>
  <div
    class="flex flex-col w-full justify-center flex-grow-1 relative   gap-9"
    class:animate-pulse={dataLoading}
  >
    <Quote text={randomQuote?.quoteText} />
    <Author name={randomQuote?.quoteAuthor} genre={randomQuote?.quoteGenre} />
  </div>
</div>
