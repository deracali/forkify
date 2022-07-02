import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      cookingTime: recipe.cooking_time,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      title: recipe.title,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
    };
    console.log(state.recipe);
  } catch (arr) {
    console.error(`${err}`);
  }
};
