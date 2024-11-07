"use server";

import { redirect } from "next/navigation";
import { saveMeal, Meal } from "./meals";

function isInvalidText(text: string | null): boolean {
  return !text || text.trim() === "";
}

// Modified shareMeal that returns the message
export const shareMeal = async (
  prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> => {
  const meal: Omit<Meal, "id" | "slug"> = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    image: formData.get("image") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image
  ) {
    // prevState.message = "Invalid Input";
    return { message: "Invalid Input" }; // Return message instead of modifying state
  }

  await saveMeal(meal);
  redirect("/meals");
};
