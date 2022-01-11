<script>
  export let name = "Bill Gates";
  export let genre = "buisness";
</script>

<a href="/quote/{name}"
  ><div class=" flex flex-col pl-5 text-[#4F4F4F] gap-1">
    <h3 class="text-xl font-bold">{name}</h3>
    <span class="text-xs">{genre}</span>
  </div>
</a>
