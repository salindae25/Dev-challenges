<script>
  export let name = "Bill Gates";
  export let genre = "buisness";
</script>

<a
  href="/quote/{name}"
  class="flex hover:bg-slate-700 w-full py-5 justify-between items-center pr-4 transition-all ease-in duration-200 group "
  ><div class=" flex flex-col pl-5 text-[#4F4F4F] gap-1 group-hover:text-white">
    <h3 class="text-xl font-bold">{name}</h3>
    <span class="text-xs">{genre}</span>
  </div>
  <span class="material-icons  visible text-white"> arrow_right_alt </span>
</a>
