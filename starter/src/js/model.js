import { API_URL } from './config.js';
import { getJSON, RES_PER_PAGE } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
  },
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
    console.log(err);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    // console.log(data);

    state.search.result = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        title: rec.title,
        publisher: rec.publisher,
      };
    });
  } catch (arr) {
    console.error(`${err}`);
    throw err;
  }
};

export const getSearchResultsPage = function (page) {
  state.search.page = page;

  const start = (page - 1) * 10; //0;
  const end = page * 10; //9;

  return state.search.result.slice(start, end);
};
