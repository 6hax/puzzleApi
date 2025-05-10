import puzzles from '../puzzles/index.js';

export function getRandomQuestionFromAnyCategory() {
  const categories = Object.keys(puzzles);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const questions = puzzles[randomCategory];
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  return {
    category: randomCategory,
    questionObj: randomQuestion
  };
}

export function getRandomQuestionFromCategory(categoryName) {
  const categoryKey = Object.keys(puzzles).find(
    key => key.toLowerCase() === categoryName.toLowerCase()
  );

  if (!categoryKey) {
    return `Category "${categoryName}" not found. Available options: ${Object.keys(puzzles).join(', ')}`
  }

  const questions = puzzles[categoryKey];
  const randomQuestion = Math.floor(Math.random() * questions.length)
  return {
    category: categoryKey,
    questionObj: randomQuestion
  };
}
