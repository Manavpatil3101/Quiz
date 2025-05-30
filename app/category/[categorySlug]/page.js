import quizData from "@/app/data/frontendQuiz.json";
import QuizClient from "@/app/Components/Quiz/quiz";

const CategorySlugPage = ({ params }) => {
  const { categorySlug } = params;

  const filtered = quizData.filter((item) => item.category === categorySlug);
  const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);

  return <QuizClient category={categorySlug} questions={shuffled} />;
};

export default CategorySlugPage;
