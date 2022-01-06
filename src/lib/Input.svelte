<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { uuid } from "$lib/Util";

  export let error = false;
  export let hover = false;
  export let focus = false;
  export let disabled = false;
  export let label = "Label";
  export let placeholder = "Placeholder";
  export let id = `input-${uuid()}`;
</script>

<div class="container">
  <input
    {id}
    class="default pl-3 py-[18px] mt-1 placeholder:text-[#828282] font-Noto-sans font-medium"
    class:hover
    class:focus
    class:error
    class:disabled
    {placeholder}
    {disabled}
  />
  <label for={id}>{label}</label>
</div>

<style lang="scss">
  .container {
    @apply flex flex-col-reverse;
  }
  .default {
    min-width: 200px;
    font-size: 14px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 8px;
    color: #333333;
    outline: none;
    &.hover,
    &:hover {
      @apply border-[#333333];
      & ~ label {
        color: #333333;
      }
    }

    &.focus,
    &:focus {
      @apply border-[#2962FF];
      & ~ label {
        color: #2962ff;
      }
    }
  }
  .error {
    border-color: #d32f2f;
    & ~ label {
      color: #d32f2f;
    }
    &.hover,
    &:hover {
      @apply border-[#333333];
      & ~ label {
        color: #333333;
      }
    }

    &.focus,
    &:focus {
      @apply border-[#D32F2F];
      & ~ label {
        color: #d32f2f;
      }
    }
  }
  .disabled {
    background-color: #f2f2f2;
    border-color: #e0e0e0;
    &.hover,
    &:hover {
      @apply border-[#e0e0e0];
      & ~ label {
        color: #333333;
      }
    }

    &.focus,
    &:focus {
      @apply border-[#e0e0e0];
      & ~ label {
        color: #333333;
      }
    }
  }
</style>
