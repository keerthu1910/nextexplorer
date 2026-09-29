"use client";

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

interface dataProps {
  data: cardProps;
}

export default function Card({ data }: dataProps) {
  return (
    <div key={data.id}>
      <p>{data.name}</p>
      <p>{data.cuisine}</p>
    </div>
  );
}
