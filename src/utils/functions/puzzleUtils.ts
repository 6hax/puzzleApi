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
  const categories = Object.keys(puzzles);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)] as keyof typeof puzzles;
  const questions = puzzles[randomCategory];
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  return {
    category: randomCategory,
    questionObj: randomQuestion
  };
}

export async function getRandomQuestionFromCategory(categoryName: string): Promise<CategoryResponse | string> {
  const categoryKey = Object.keys(puzzles).find(
    key => key.toLowerCase() === categoryName.toLowerCase()
  ) as keyof typeof puzzles | undefined;

  if (!categoryKey) {
    return `Category "${categoryName}" not found. Available options: ${Object.keys(puzzles).join(', ')}`;
  }

  const questions = puzzles[categoryKey];
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  return {
    category: categoryKey,
    questionObj: randomQuestion
  };
}
