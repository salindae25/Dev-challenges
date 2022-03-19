<script lang="ts">
  import QuestionView from "$lib/country_quiz/QuestionView.svelte";
  import { onMount } from "svelte";
  import { randomList, randomListWithRepeatOption, randomSelect, sleep } from "$lib/Util";
  import { countries } from "$lib/country_quiz/country_store";
  let lc = $countries;

  onMount(async () => {
    if (lc) return;
    const response = await fetch("https://restcountries.com/v2/all?fields=name,capital,flags");
    const data = await response.json();
    localStorage.setItem("COUNTRY_DATA", JSON.stringify(data));
    return;
  });
  let activeQuestionIndex = 0;
  let correctCount = 0;
  let activeQuestion = {};
  function generateQuestions() {
    const questionSetType = randomList(["map", "capital"], 10);
    const optionLabel = ["a", "b", "c", "d"];

    return questionSetType.map((type) => {
      const selectCountry = randomSelect(lc);

      const title = type == "capital" ? `${selectCountry?.capital} is the capital of` : `Which country does this flag belong to?`;
      const answer = selectCountry?.name;
      const optionCountry = randomListWithRepeatOption([...randomListWithRepeatOption(lc, 3, false), selectCountry], 4, false);

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
  }

  async function processAnswer(isCorrect) {
    if (isCorrect) correctCount += 1;

    await sleep(1000);
    questionSet[activeQuestionIndex].visible = false;

    activeQuestionIndex += 1;
    questionSet[activeQuestionIndex].visible = true;
  }

  const questionSet = generateQuestions();
  const moveForward = () => {};
  questionSet[activeQuestionIndex].visible = true;
</script>

<div class="w-[464px] flex my-auto mx-auto justify-center flex-col gap-3 mt-[100px]">
  <h2 class="text-white font-bold text-3xl uppercase">Country Quiz</h2>
  <div class=" flex flex-col w-full min-h-[400px] bg-white rounded-3xl self-center  px-8 py-16 relative" class:pb-8={true}>
    {#each questionSet as question}
      {#if question.visible}
        <QuestionView {question} handleNext={processAnswer} />
      {/if}
    {/each}
  </div>
</div>
