import puzzles from '../puzzles/index.js';

interface Question {
  id: number;
  question: string;
  answer: string[];
}

interface CategoryResponse {
  category: string;
  questionObj: Question;
}

export async function getCategories(): Promise<string> {
  const categories = Object.keys(puzzles);
  return categories.join(', ');
}

export async function getRandomQuestionFromAnyCategory(): Promise<CategoryResponse> {
  const categories = Object.keys(puzzles) as Array<keyof typeof puzzles>;
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const questions = puzzles[randomCategory];
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  return {
    category: randomCategory.toString(),
    questionObj: randomQuestion
  };
}

export async function getRandomQuestionFromCategory(categoryName: string): Promise<CategoryResponse | string> {
  const categories = Object.keys(puzzles) as Array<keyof typeof puzzles>;
  const categoryKey = categories.find(
    key => key.toString().toLowerCase() === categoryName.toLowerCase()
  );

  if (!categoryKey) {
    return `Category "${categoryName}" not found. Available options: ${categories.join(', ')}`;
  }

  const questions = puzzles[categoryKey];
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  return {
    category: categoryKey.toString(),
    questionObj: randomQuestion
  };
}
