<script lang="ts">
  import { uuid } from "$lib/Util";

  export let label = "label";
  export let value = "";
  export let placeholder = "";
  export let id = `input-${uuid()}`;
  export let onClick = () => {};
</script>

<div
  class="flex flex-col py-[11px] px-[26px] w-full focus-within:border focus-within:border-black focus-within:rounded-xl"
>
  <label for={id} class="text-[10px] font-extrabold ">{label}</label>
  <input
    type="text"
    class="text-sm outline-none placeholder:text-[#BDBDBD] "
    {id}
    {placeholder}
    {value}
    on:click={onClick}
    {...$$restProps}
  />
</div>
