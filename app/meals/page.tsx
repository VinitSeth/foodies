import React, { Suspense } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { Meal, getMeals } from '@/lib/meals';

async function Meals() {
    const meals: Meal[] = await getMeals();
    console.log("meals", meals);

    return <MealsGrid meals={meals} />
}

const MealsPage: React.FC = () => {
    // we don't do this because we have backend blended in Next.js and also, all components are server side rendered by default
    /*useEffect(() => {
        fetch('/api/meals').then((response) => response.json()).then((data) => {
            console.log(data);
        });
    }) */

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favourite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

export default MealsPage;