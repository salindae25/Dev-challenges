<script lang="ts">
  export let title = "Adults";
  export let subTitle = "Ages 13 or above";
  export let count = 0;
  export let updateCounter = (updated) => {
    count = updated;
  };
</script>

<div class="flex flex-col">
  <span class="font-bold text-xs">{title}</span>
  <span class="text-[#BDBDBD] text-[10px]">{subTitle}</span>
  <div class="self-start flex items-center gap-4 mt-1">
    <span
      class="material-icons rounded-md text-[14px] border border-[#828282] text-[#828282] p-0.5 cursor-pointer"
      on:click={() => {
        updateCounter(Math.max(0, count - 1));
      }}
      >remove
    </span>
    <div>{count}</div>
    <span
      class="material-icons rounded-md text-[14px] border border-[#828282] text-[#828282] p-0.5 cursor-pointer"
      on:click={() => {
        updateCounter(Math.min(count + 1, 10));
      }}
    >
      add
    </span>
  </div>
</div>
