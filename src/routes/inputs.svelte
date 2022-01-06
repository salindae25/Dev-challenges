<script>
  import Input from "$lib/Input.svelte";
</script>

<div class="flex w-full  flex-col">
  <h2 class="font-Poppins text-2xl text-[hsl(0,0%,31%)]">Buttons</h2>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input />`}
      </div>
      <Input />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover`}
      </div>
      <Input hover />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:focus`}
      </div>
      <Input focus />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input error/>`}
      </div>
      <Input error />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover`}
      </div>
      <Input hover error />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:focus`}
      </div>
      <Input focus error />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input disabled />`}
      </div>
      <Input disabled />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input helperText="Some interesting text" />`}
      </div>
      <Input helperText="Some interesting text" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input helperText="Some interesting text" error />`}
      </div>
      <Input helperText="Some interesting text" error />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input  startIcon />`}
      </div>
      <Input startIcon="phone" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input  endIcon />`}
      </div>
      <Input endIcon="lock" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input value="Text" />`}
      </div>
      <Input value="Text" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input  size="sm" />`}
      </div>
      <Input />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Input  size="md" />`}
      </div>
      <Input size="sm" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12  w-full ">
    <article class="flex flex-col gap-2  w-full ">
      <div class="font-ubuntu-mono text-xs">
        {`<Input fullWidth />`}
      </div>
      <Input fullWidth />
    </article>
  </div>
</div>
