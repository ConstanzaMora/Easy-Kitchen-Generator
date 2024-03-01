new Typewriter("#statement-complete", {
  strings:
    " Easy Kitchen is an AI Generator that helps you create delicious recipes. You only need to type your ingredients, and Easy Kitchen will do the rest.",
  autoStart: true,
  delay: 45,
  cursor: "",
});

https: function generateRecipe(event) {
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
