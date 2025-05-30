import fs from "fs/promises";
import QuizClient from "@/app/Components/Quiz/Quiz";

const CategorySlugPage = async ({ params }) => {
  const { categorySlug } = params;

  const response = await fs.readFile("frontendQuiz.db", "utf-8");
  const data = JSON.parse(response);

  const filtered = data.filter((item) => item.category === categorySlug);

  const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);

  return <QuizClient category={categorySlug} questions={shuffled}/>;
};

export default CategorySlugPage;
