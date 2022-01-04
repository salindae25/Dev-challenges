<script>
  export let disableShadow = false;
  export let disabled = false;
  export let variant = "";
  export let startIcon = "";
  export let endIcon = "";
  export let title = "Defalt";
</script>

<button
  class="default"
  class:disableShadow
  class:disabled
  class:outline={variant === "outline"}
  class:text={variant === "text"}
  disabled
>
  {#if startIcon !== ""}
    <span class="material-icons w-3 text-base leading-4"> {startIcon} </span>
  {/if}
  <span>{title}</span>
  {#if endIcon !== ""}
    <span class="material-icons  w-3 text-base leading-4"> {endIcon} </span>
  {/if}
</button>

<style>
  .default {
    min-width: 81px;
    min-height: 36px;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    padding: 8px 20px;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    @apply flex items-center justify-center gap-2 text-white bg-blue-600 self-start;
  }
  .disabled {
    @apply shadow-none;
    background-color: hsla(0, 0%, 88%, 1);
    color: hsla(0, 0%, 62%, 1);
  }
  .disableShadow {
    @apply shadow-none;
  }
  .outline {
    @apply border border-blue-600 text-blue-600 bg-white outline-none;
  }
  .text {
    @apply border-0 text-blue-600 bg-white outline-none shadow-none;
  }
  .disabled.text {
    color: hsla(0, 0%, 62%, 1) !important;
  }
</style>
