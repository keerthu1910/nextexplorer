import Card from "../card/page";

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

async function getRecipes() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data;
}

export default async function Recipes() {
  const recipieData = await getRecipes();
  const recdata = recipieData.recipes;
  return (
    <div>
      <p className="font-bold text-2xl text-purple-400">Explore Recipies</p>
      {recdata.map((item: cardProps) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
