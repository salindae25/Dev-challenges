<script>
  import Button from "$lib/Button.svelte";
</script>

<div class="flex w-full  flex-col">
  <h2 class="font-Poppins text-2xl text-[hsl(0,0%,31%)]">Buttons</h2>
  <div class="grid grid-cols-2 mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {`<Button />`}
      </div>
      <Button />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {'<Button variant="outline" />'}
      </div>
      <Button variant="outline" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button variant="outline" />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {'<Button variant="text" />'}
      </div>
      <Button variant="text" />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button variant="text" />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {"<Button disableShadow />"}
      </div>
      <Button disableShadow />
    </article>
    <article class="flex flex-col gap-2" />
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {"<Button disabled />"}
      </div>
      <Button disabled />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {"<Button variant='text' disabled />"}
      </div>
      <Button variant="text" disabled />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {" <Button startIcon='local_grocery_store' />"}
      </div>
      <Button startIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {" <Button endIcon='local_grocery_store' />"}
      </div>
      <Button endIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {" <Button variant='text' startIcon='local_grocery_store' />"}
      </div>
      <Button variant="text" startIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {" <Button variant='text' endIcon='local_grocery_store' />"}
      </div>
      <Button variant="text" endIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {" <Button variant='outline' startIcon='local_grocery_store' />"}
      </div>
      <Button variant="outline" startIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-Poppins text-xs">
        {" <Button variant='outline' endIcon='local_grocery_store' />"}
      </div>
      <Button variant="outline" endIcon="local_grocery_store" />
    </article>
  </div>
</div>
