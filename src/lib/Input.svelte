<script lang="ts">
  import { uuid } from "$lib/Util";

  export let error = false;
  export let hover = false;
  export let focus = false;
  export let disabled = false;
  export let fullWidth = false;
  export let multiline = false;
  export let label = "Label";
  export let helperText = "";
  export let startIcon = "";
  export let endIcon = "";
  export let value = "";
  export let placeholder = "Placeholder";
  export let id = `input-${uuid()}`;
  export let inputSize = "md";
  export let row = "4";
</script>

<div class="container relative" class:w-full={fullWidth}>
  <span class="help-text" class:error>{helperText}</span>
  {#if !multiline}
    <input
      {id}
      class="default  mt-1 placeholder:text-[#828282] font-Noto-sans font-medium outline-none"
      class:hover
      class:focus
      class:error
      class:disabled
      class:pl-10={startIcon !== ""}
      class:pr-10={endIcon !== ""}
      class:size-md={inputSize === "md"}
      class:size-sm={inputSize === "sm"}
      class:w-full={fullWidth}
      {placeholder}
      {disabled}
      {value}
      {...$$props}
    />
  {:else}
    ​<textarea
      {id}
      class="default  mt-1 placeholder:text-[#828282] font-Noto-sans font-medium outline-none resize-none"
      class:hover
      class:focus
      class:error
      class:disabled
      class:pl-10={startIcon !== ""}
      class:pr-10={endIcon !== ""}
      class:size-md={inputSize === "md"}
      class:size-sm={inputSize === "sm"}
      class:w-full={fullWidth}
      {placeholder}
      {disabled}
      {value}
      rows={parseInt(row)}
      {...$$props}
    />
  {/if}
  {#if startIcon !== ""}
    <span class="material-icons start__icon"> {startIcon} </span>
  {/if}
  {#if endIcon !== ""}
    <span class="material-icons  end__icon"> {endIcon} </span>
  {/if}
  <label for={id}>{label}</label>
</div>

<style lang="scss">
  .container {
    @apply flex flex-col-reverse w-fit;
  }
  .start__icon,
  .end__icon {
    @apply w-5 text-2xl leading-4 absolute top-12 text-[#828282];
  }
  .start__icon {
    @apply left-2;
  }
  .end__icon {
    @apply right-3;
  }
  .help-text {
    margin-top: 4px;
    font-size: 10px;
    line-height: 14px;
    color: hsla(0, 0%, 51%, 1);
    @apply font-Noto-sans tracking-wide;
    &.error {
      color: #d32f2f;
    }
  }
  .default {
    min-width: 200px;
    font-size: 14px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 8px;
    color: #333333;
    outline: none;
    & ~ label {
    }
    &.hover,
    &:hover {
      @apply border-[#333333];
      & ~ label,
      & ~ .start__icon,
      & ~ .end__icon {
        color: #333333;
      }
    }

    &.focus,
    &:focus {
      @apply border-[#2962FF];
      & ~ label,
      & ~ .start__icon,
      & ~ .end__icon {
        color: #2962ff;
      }
    }
    &.size-sm {
      @apply pl-3 py-[10px];
    }
    &.size-md {
      @apply pl-3 py-[18px];
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
      & ~ label,
      & ~ .start__icon,
      & ~ .end__icon {
        color: #333333;
      }
    }

    &.focus,
    &:focus {
      @apply border-[#D32F2F];
      & ~ label,
      & ~ .start__icon,
      & ~ .end__icon {
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
