
const foodData = require('./food.json');
function listAllFoodItems(data) {
    return data.map((item) => item.foodname);
  }
  
  
  function listFoodItemsByCategory(data, category) {
    return data.filter((item) => item.category === category).map((item) => item.foodname);
  }
  
  
  function listFoodItemsWithCalorieAbove(data, threshold) {
    return data.filter((item) => item.calorie > threshold).map((item) => item.foodname);
  }
  
  
  function listFoodItemsWithCalorieBelow(data, threshold) {
    return data.filter((item) => item.calorie < threshold).map((item) => item.foodname);
  }
  
  
  function listFoodItemsByProteinContent(data) {
    return data
      .slice() 
      .sort((a, b) => b.protien - a.protien) 
      .map((item) => item.foodname);
  }
  
  
  function listFoodItemsByCarbohydrateContent(data) {
    return data
      .slice() 
      .sort((a, b) => a.carb - b.carb) 
      .map((item) => item.foodname);
  }
  
  
  console.log("List of all food items:", listAllFoodItems(foodData));
  console.log("List of vegetable items:", listFoodItemsByCategory(foodData, "Vegetable"));
  console.log("List of fruit items:", listFoodItemsByCategory(foodData, "Fruit"));
  console.log("List of protein items:", listFoodItemsByCategory(foodData, "Protein"));
  console.log("List of nut items:", listFoodItemsByCategory(foodData, "Nuts"));
  console.log("List of grain items:", listFoodItemsByCategory(foodData, "Grain"));
  console.log("List of dairy items:", listFoodItemsByCategory(foodData, "Dairy"));
  console.log("List of food items with calorie above 100:", listFoodItemsWithCalorieAbove(foodData, 100));
  console.log("List of food items with calorie below 100:", listFoodItemsWithCalorieBelow(foodData, 100));
  console.log("List of food items by highest protein content to lowest:", listFoodItemsByProteinContent(foodData));
  console.log("List of food items by lowest carbohydrate content to highest:", listFoodItemsByCarbohydrateContent(foodData));
  
  
  
  