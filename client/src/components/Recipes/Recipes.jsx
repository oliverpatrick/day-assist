import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from '../../utils/axios';


export default function Recipes() {
    const [recipe, setRecipe] = useState([])
    const [weight, setWeight] = useState(0)
    const [showRecommendedProtein, setRecommendedProtein] = useState(false);
    

    async function fetchRecipes() {
        const request = await axios.get("/api/recipes")
        setRecipe(request.data)
        console.log(request.data)
    };

    function handleChangeBodyweight(event) {
        let bodyWeight = event.target.value;
        return setWeight(event.target.value)
    };

    
    function handleSubmitBodyweight(event) {
        event.preventDefault();

        setRecommendedProtein(true);
        let recommendedProteinIntake = weight * 1.6;
        setWeight(recommendedProteinIntake)
    };

    return (
        <div>
            <h1>Recipes</h1>
            <br></br>
            <form autoComplete="off" onSubmit={handleSubmitBodyweight}>
                <TextField
                    id="standard-number"
                    label="Bodyweight(kg)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChangeBodyweight}
                />
                <Button onClick={handleSubmitBodyweight}>Confirm</Button>
                {showRecommendedProtein ? <h3>{weight}</h3> : null }
            </form>
            <br></br>
            <Button onClick={fetchRecipes}>Get Tea Recipes</Button>
        </div>
    )
};

//https://www.theproteinworks.com/thelockerroom/calorie-calculator/

