<script>
  export let imagePath = "";
  export let title = "";
  export let description = "";
</script>

<div
  class="w-[340px] h-[360px] flex flex-col gap-4 shadow-[0px_1px_6px_rgba(0,0,0,0.2)] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.3)] rounded-md   overflow-hidden"
>
  <img
    src={imagePath}
    alt={`${title} thumbnail`}
    class="w-full h-[188px] hover:scale-110 transition ease-linear duration-300 object-cover"
  />
  <h2 class="text-lg font-semibold px-4">{title}</h2>
  <div class="truncate whitespace-normal mb-1 h-[72px] w-full block px-4">
    {description}
  </div>
</div>
