import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import classes from './meal-item.module.css';

export interface MealItemProps {
    title: string;
    slug: string;
    image: string | StaticImageData;
    summary: string;
    creator: string;
}

const MealItem = ({ title, slug, image, summary, creator }: MealItemProps): JSX.Element => {
    return (
        <article className={classes.meal}>
            <header>
                {/* fill tells the Image component to fill the container with the image and can be used when we don't know the dimensions in advance */}
                <div className={classes.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    )
}

export default MealItem;
