<script>
  import Button from "$lib/Button.svelte";
</script>

<div class="flex w-full  flex-col">
  <h2 class="font-Poppins text-2xl text-[hsl(0,0%,31%)]">Buttons</h2>
  <div class="grid grid-cols-2 mt-7 gap-y-5 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button />`}
      </div>
      <Button />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button hover />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {'<Button variant="outline" />'}
      </div>
      <Button variant="outline" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button variant="outline" hover />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {'<Button variant="text" />'}
      </div>
      <Button variant="text" />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button variant="text" hover />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {"<Button disableShadow />"}
      </div>
      <Button disableShadow />
    </article>
    <article class="flex flex-col gap-2" />
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {"<Button disabled />"}
      </div>
      <Button disabled />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {"<Button variant='text' disabled />"}
      </div>
      <Button variant="text" disabled />
    </article>

    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {" <Button startIcon='local_grocery_store' />"}
      </div>
      <Button startIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {" <Button endIcon='local_grocery_store' />"}
      </div>
      <Button endIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {" <Button variant='text' startIcon='local_grocery_store' />"}
      </div>
      <Button variant="text" startIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {" <Button variant='text' endIcon='local_grocery_store' />"}
      </div>
      <Button variant="text" endIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {" <Button variant='outline' startIcon='local_grocery_store' />"}
      </div>
      <Button variant="outline" startIcon="local_grocery_store" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {" <Button variant='outline' endIcon='local_grocery_store' />"}
      </div>
      <Button variant="outline" endIcon="local_grocery_store" />
    </article>
  </div>
  <div class="grid grid-cols-3 mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button size="sm"/>`}
      </div>
      <Button size="sm" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button  size="md"/>`}
      </div>
      <Button size="md" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button size="lg"/>`}
      </div>
      <Button size="lg" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="default"/>`}
      </div>
      <Button color="default" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button  color="primary"/>`}
      </div>
      <Button color="primary" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="secondary"/>`}
      </div>
      <Button color="secondary" title="Secondary" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="danger"/>`}
      </div>
      <Button color="danger" title="Danger" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button color="default" hover />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button color="primary" hover />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button color="secondary" title="Secondary" hover />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`&:hover, &:focus`}
      </div>
      <Button color="danger" title="Danger" hover />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="default" variant="text"/>`}
      </div>
      <Button color="default" variant="text" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button  color="primary" variant="text" />`}
      </div>
      <Button color="primary" variant="text" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="secondary" variant="text" />`}
      </div>
      <Button color="secondary" title="Secondary" variant="text" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="danger" variant="text" />`}
      </div>
      <Button color="danger" title="Danger" variant="text" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="default" variant="outline"/>`}
      </div>
      <Button color="default" variant="outline" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button  color="primary" variant="outline" />`}
      </div>
      <Button color="primary" variant="outline" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="secondary" variant="outline" />`}
      </div>
      <Button color="secondary" title="Secondary" variant="outline" />
    </article>
    <article class="flex flex-col gap-2">
      <div class="font-ubuntu-mono text-xs">
        {`<Button color="danger" variant="outline" />`}
      </div>
      <Button color="danger" title="Danger" variant="outline" />
    </article>
  </div>
  <div class="grid grid-flow-col mt-7 gap-y-12 gap-x-12 justify-between">
    <span class="text-gray-500"
      >created by <b>salindae25</b> - devChallenge</span
    >
  </div>
</div>
