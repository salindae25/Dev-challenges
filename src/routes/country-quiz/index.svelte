<script lang="ts">
  import QuestionView from "$lib/country_quiz/QuestionView.svelte";
  import { onMount } from "svelte";
  import { randomList, randomListWithRepeatOption, randomSelect, sleep } from "$lib/Util";
  import { countries, loadCountries } from "$lib/country_quiz/country_store";

  let lc = [];
  onMount(async () => {
    await loadCountries();
    lc = $countries;
  });
  let activeQuestionIndex = 0;
  let correctCount = 0;
  let showResults = false;
  let activeQuestion = {
    type: "capital",
    title: "Kuala Lumpur is the capital of",
    options: [
      { text: "Vietnam", label: "a" },
      { text: "Finland", label: "b" },
      { text: "Sweden", label: "c" },
      { text: "Austria", label: "d" },
    ],
    image: "/Images/undraw_adventure_4hum 1.svg",
    isCorrect: false,
  };
  function generateQuestions(lc) {
    const questionSetType = randomList(["map", "capital"], 10);
    const optionLabel = ["a", "b", "c", "d"];
    let localCountries = [...lc];
    const data = questionSetType.map((type) => {
      const selectCountry = randomSelect(localCountries);
      localCountries = localCountries.filter((x) => x.name != selectCountry.name);
      const title = type == "capital" ? `${selectCountry?.capital} is the capital of` : `Which country does this flag belong to?`;
      const answer = selectCountry?.name;
      const optionCountry = randomListWithRepeatOption([...randomListWithRepeatOption(localCountries, 3, false), selectCountry], 4, false);

      const options = optionCountry.map((x, i) => ({ text: x?.name, label: optionLabel[i] }));
      return {
        type: type,
        isCorrect: false,
        title: title,
        image: type == "capital" ? "/Images/undraw_adventure_4hum 1.svg" : selectCountry?.flags?.png,
        answer: answer,
        options,
        visible: false,
      };
    });
    data[activeQuestionIndex].visible = true;

    return data;
  }

  async function processAnswer(isCorrect) {
    if (isCorrect) correctCount += 1;
    await sleep(1000);
    questionSet[activeQuestionIndex].visible = false;

    activeQuestionIndex += 1;
    console.log({ activeQuestionIndex, length: questionSet.length });

    if (activeQuestionIndex == questionSet.length) {
      showResults = true;
      console.log("set");

      return;
    }

    questionSet[activeQuestionIndex].visible = true;
  }
  const tryAgain = () => {
    activeQuestionIndex = 0;
    questionSet = generateQuestions(lc);

    correctCount = 0;
    showResults = false;
  };
  let questionSet = [];
  $: {
    questionSet = generateQuestions(lc);
  }
</script>

<div class="w-[380px] flex my-auto mx-auto justify-center flex-col gap-3 mt-[100px] font-Poppins">
  <h2 class="text-white font-bold text-3xl uppercase">Country Quiz</h2>
  <div class=" flex flex-col w-full min-h-[400px] bg-white rounded-3xl self-center  px-8 py-16 relative" class:pb-8={true}>
    {#if !showResults}
      {#each questionSet as question}
        {#if question.visible}
          <QuestionView {question} handleNext={processAnswer} />
        {/if}
      {/each}
    {:else}
      <img src="/Images/undraw_winners_ao2o 2.svg" class=" w-auto  h-[116px] " alt="adveture quiz" />
      <h3 class="font-bold text-4xl text-[#2F527B] tracking-tight w-full text-center pt-5">Results</h3>
      <div class="text-lg text-[#2F527B] text-center mt-5">You got <span class="text-teal-500 font-bold text-2xl">{correctCount}</span> correct answers</div>
      <button
        class="mt-8 py-3 px-8  self-center justify-self-end bg-white text-[#2F527B] border-2 border-[#2F527B] font-bold text-lg rounded-xl  tracking-wide flex gap-4 items-center"
        on:click={tryAgain}
      >
        <span>Try again</span></button
      >
    {/if}
  </div>
</div>
