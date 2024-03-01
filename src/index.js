function showRecipe(response) {
  let answer = response.data.answer;
  console.log(answer);

  let recipeData;

  try {
    recipeData = JSON.parse(answer);
  } catch (e) {
    let recipeTitleBox = document.querySelector("#title-recipe-generator");
    recipeTitleBox.innerHTML = "Try again with more or new ingredients";

    let ingredientsBox = document.querySelector(
      "#ingredients-recipe-generator"
    );
    ingredientsBox.innerHTML = "";

    let stepsBox = document.querySelector("#steps-recipe-generator");
    stepsBox.innerHTML = "";
    return;
  }

  let title = recipeData.Title;
  let Ingredients = recipeData.Ingredients;
  let Steps = recipeData.Steps;

  let recipeTitleBox = document.querySelector("#title-recipe-generator");
  recipeTitleBox.innerHTML = title;

  let ingredientsBox = document.querySelector("#ingredients-recipe-generator");
  let ingredientsHtml = "";
  ingredientsHtml += "<ul>";
  Ingredients.forEach((element) => {
    ingredientsHtml += `<li>${element}</li>`;
  });
  ingredientsHtml += "</ul>";
  ingredientsBox.innerHTML = ingredientsHtml;

  let stepsBox = document.querySelector("#steps-recipe-generator");
  let stepsHtml = "";
  stepsHtml += "<ol>";
  Steps.forEach((element) => {
    stepsHtml += `<li>${element}</li>`;
  });

  stepsHtml += "</ol>";
  stepsBox.innerHTML = stepsHtml;
}

function generateRecipe(event) {
  event.preventDefault();

  let userInformationInput = document.querySelector("#user-information");

  let apiKey = "0t02509c5159bfa0f925o3abcad4776b";
  let prompt = `User instructions: Generate a food recipe with the following ingredients ${userInformationInput.value}`;
  let context = `You are the best Chef in the world, you have the best recipes from any country. You need to give a simple recipe with the ingredients given by the user instructions. The recipe needs to have a title, the ingredients listed in bullets points and the steps enlisted by numbers. Respond in the language that user type the ingredients.  Generate in json following convention {"Title":"INSERT TITLE HERE", "Ingredients":[INSERT INGREDIENTS HERE], "Steps" : [INSERT STEPS HERE]}. Ensure that the generated response always starts with {`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeWholeElement = document.querySelector("#whole-recipe");
  recipeWholeElement.style.display = "block";

  //let recipeTitleBox = document.querySelector("#title-recipe-generator");
  //recipeTitleBox.innerHTML = "Generarting your food in a Click...";

  new Typewriter("#title-recipe-generator", {
    strings: " Generarting your food in a Click...",
    autoStart: true,
    delay: 20,
    cursor: "",
  });

  // Generate in json following convention {"Title":"INSERT TITLE HERE", "Ingredients":"INSERT INGREDIENTS HERE", "Steps" : "INSERT STEPS HERE"}

  console.log("Generator Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context ${context}`);

  axios.get(apiUrl).then(showRecipe);
}

let recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe);
