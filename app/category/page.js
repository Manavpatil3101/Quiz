import { Container } from "react-bootstrap";
import Card from "../Components/CategorySelection/CategorySelection";
import fs from "fs/promises";
import Link from "next/link";
import InstructionsPage from "../instructions/page";

const Category = async () => {
  const response = await fs.readFile("frontendQuiz.db", "utf-8");
  const data = JSON.parse(response);

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const colors = ["red", "blue", "green", "yellow"];

  return (
    <Container fluid>
      {uniqueCategories.map((cat, index) => (
        <div key={index}>
          <Link href={`/category/${cat}`} className="text-decoration-none">
            <Card text={cat}  color={colors[index % colors.length]} />
          </Link>
        </div>
      ))}
      <InstructionsPage/>
    </Container>
  );
};

export default Category;
