import Card from "../../card/page";

interface cardProps {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  repTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

async function getRecipes(id: number) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  return data;
}

export default async function Recipes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipieData = await getRecipes(Number(id));
  return (
    <div>
      <p className="font-bold text-2xl text-purple-400">Explore Recipies</p>

      <Card key={recipieData.id} data={recipieData} />
    </div>
  );
}
