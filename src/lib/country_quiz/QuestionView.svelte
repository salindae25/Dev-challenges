<script lang="ts">
  import RadioSelect from "$lib/country_quiz/RadioSelect.svelte";

  let selectedOption = null;
  export let question = {
    type: "capital",
    title: "Kuala Lumpur is the capital of",
    options: [
      { text: "Vietnam", label: "a" },
      { text: "Finland", label: "b" },
      { text: "Sweden", label: "c" },
      { text: "Austria", label: "d" },
    ],
    image: "/Images/undraw_adventure_4hum 1.svg",
  };

  function handleOptionSelect(option) {
    selectedOption = option;
  }
</script>

<!-- question type image -->
<img src={question?.image} class={` w-auto absolute  right-3 ${question.type != "capital" ? "h-[90px] -top-[70px]" : "h-[116px] -top-20"}`} alt="adveture quiz" />
<!-- question title -->
<h3 class="font-bold text-2xl text-[#2F527B] tracking-tight">
  {question.title}
</h3>
<!-- question options -->
<div class="flex flex-col w-full mt-8 gap-6">
  {#each question.options as option}
    <RadioSelect
      name={question.title}
      displayLabel={option.text}
      value={option.label}
      onOptionSelect={() => {
        handleOptionSelect(option);
      }}
    />
  {/each}
</div>
{#if selectedOption}
  <button class="mt-8 py-3 px-8  self-end justify-self-end bg-[#F9A826] font-bold text-lg rounded-xl text-white"> Next</button>
{/if}
