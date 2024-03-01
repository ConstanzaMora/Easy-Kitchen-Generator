function generateRecipe(event) {
  event.preventDefault();

  let recipeTitleBox = document.querySelector("#title-recipe-generator");
  recipeTitleBox.innerHTML = "Asian Cucumber ";

  let ingredientsBox = document.querySelector("#ingredients-recipe-generator");
  ingredientsBox.innerHTML = "Asian Cucumber ";

  let stepsBox = document.querySelector("#steps-recipe-generator");
  stepsBox.innerHTML = "Asian Cucumber ";
}

let recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe);
