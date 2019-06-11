var recipes = {recipe: 'Ingredients1'};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]:value})
}