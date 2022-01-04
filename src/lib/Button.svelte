<script>
  export let disableShadow = false;
  export let disabled = false;
  export let variant = "";
  export let startIcon = "";
  export let endIcon = "";
  export let title = "Defalt";
  export let size = "md";
  export let color = "primary";
  export let hover = false;
  const id = `button-${uuid()}`;
  function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  }
</script>

<button
  {id}
  class="default"
  class:disableShadow
  class:disabled
  class:outline={variant === "outline"}
  class:text={variant === "text"}
  class:size-sm={size === "sm"}
  class:size-md={size === "md"}
  class:size-lg={size === "lg"}
  class:color-default={color === "default"}
  class:color-primary={color === "primary"}
  class:color-secondary={color === "secondary"}
  class:color-danger={color === "danger"}
  class:hover
  disabled
  {...$$props}
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
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    @apply flex items-center justify-center gap-2 text-white bg-blue-600 self-start;
  }
  .disabled {
    @apply shadow-none;
    background-color: hsla(0, 0%, 88%, 1) !important;
    color: hsla(0, 0%, 62%, 1) !important;
  }
  .disableShadow {
    @apply shadow-none;
  }
  .outline {
    @apply outline-none;
    color: hsla(231, 99%, 62%, 1) !important;
    background: #fff !important;
    border: 1px solid hsla(231, 99%, 62%, 1);
  }
  .outline:hover,
  .outline:hover:focus,
  .outline.hover {
    background: rgba(41, 98, 255, 0.1) !important;
  }
  .text {
    @apply border-0  outline-none shadow-none;
    color: hsla(231, 99%, 62%, 1) !important;
    background: #fff !important;
  }
  .text:hover,
  .text:hover:focus,
  .text.hover {
    background: rgba(41, 98, 255, 0.1) !important;
  }
  .disabled.text {
    color: hsla(0, 0%, 62%, 1) !important;
  }
  .size-sm {
    padding: 6px 12px;
  }
  .size-md {
    padding: 8px 16px;
  }
  .size-lg {
    padding: 11px 22px;
  }
  .color-default {
    background: #e0e0e0;
    color: #3f3f3f;
  }
  .color-default:hover,
  .color-default:hover:focus,
  .color-default.hover {
    background: #aeaeae;
  }
  .outline.color-default {
    border-color: #3f3f3f !important;
    color: #3f3f3f !important;
  }
  .text.color-default {
    color: #3f3f3f !important;
  }
  .color-primary {
    @apply text-white bg-blue-600;
  }
  .color-primary:hover,
  .color-primary:hover:focus,
  .color-primary.hover {
    background: #0039cb;
  }
  .color-secondary {
    background: #455a64;
  }
  .color-secondary:hover,
  .color-secondary:hover:focus,
  .color-secondary.hover {
    background: #1c313a;
  }
  .outline.color-secondary {
    border-color: #455a64 !important;
    color: #455a64 !important;
  }
  .text.color-secondary {
    color: #455a64 !important;
  }
  .color-danger {
    background: #d32f2f;
  }
  .color-danger:hover,
  .color-danger:focus,
  .color-danger.hover {
    background: #9a0007;
  }
  .outline.color-danger {
    border-color: #d32f2f !important;
    color: #d32f2f !important;
  }
  .text.color-danger {
    color: #d32f2f !important;
  }
</style>
