import React from 'react';
import classes from './loading.module.css';

// Define the functional component with the correct return type
const MealsLoadingPage: React.FC = () => {
    return <p className={classes.loading}>Fetching Meals...</p>;
}

export default MealsLoadingPage;
