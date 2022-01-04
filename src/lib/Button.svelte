<script>
  export let disableShadow = false;
  export let variant = "";
</script>

<button
  class="default"
  class:disableShadow
  class:outline={variant === "outline"}
  class:text={variant === "text"}
>
  <slot name="icon" />
  <slot name="title">Defalt</slot>
</button>

<style>
  .default {
    width: 81px;
    height: 36px;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    color: #3f3f3f;
    background: #e0e0e0;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
  }
  .disableShadow {
    @apply text-white bg-blue-600 shadow-none;
  }
  .outline {
    @apply border border-blue-600 text-blue-600 bg-white outline-none;
  }
  .text {
    @apply border-0 text-blue-600 bg-white outline-none shadow-none;
  }
</style>
