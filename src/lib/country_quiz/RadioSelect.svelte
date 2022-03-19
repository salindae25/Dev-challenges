<script lang="ts">
  import { uuid } from "$lib/Util";
  export let isSelected = false;
  export let value = "A";
  export let wrongChoice = false;
  export let correctChoice = false;
  export let displayLabel = "A";
  export let name = "tempory";
  export let id = `input-${uuid()}`;
  export let onOptionSelect = () => {};
</script>

<div>
  <input type="radio" {id} {value} {name} class="hidden radio-input" on:change|preventDefault={onOptionSelect} />
  <label for={id} class={`default ${correctChoice ? "bg-green-600" : ""} ${wrongChoice ? "bg-red-400" : ""}`} class:select={isSelected} class:correct={correctChoice}>
    <span class="text-xl leading-6 uppercase">{value}</span>
    <span class="text-lg">{displayLabel}</span>
  </label>
</div>

<style lang="scss">
  .default {
    @apply flex gap-9 font-medium py-[12px] px-[20px]  items-center border-2 text-blue-600/80 border-blue-500/70 rounded-xl -tracking-tight cursor-pointer;
    box-sizing: border-box;
  }
  .radio-input:checked ~ .correct {
    @apply bg-green-600;
  }

  .radio-input:hover ~ .default,
  .radio-input:checked ~ .default {
    @apply bg-[#F9A826] text-white  border-2 border-transparent transition-all ease-in duration-200;
  }
</style>
