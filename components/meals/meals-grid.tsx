import React from 'react';
import MealItem from './meal-item';
// import { StaticImageData } from 'next/image';
import { MealItemProps } from './meal-item';
import classes from './meals-grid.module.css';

interface Meal extends MealItemProps {
    id?: string;
    // title: string;
    // slug: string;
    // image: string | StaticImageData;
    // summary: string;
    // creator: string;
}

interface MealsGridProps {
    meals: Meal[];
}

const MealsGrid = ({ meals }: MealsGridProps): JSX.Element => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal: Meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                    {/* <MealItem 
                        title={meal.title} 
                        slug={meal.slug} 
                        image={meal.image} 
                        summary={meal.summary} 
                        creator={meal.creator} 
                    /> */}
                </li>
            ))}
        </ul>
    )
}

export default MealsGrid;
