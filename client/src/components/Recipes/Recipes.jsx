import React, { useState, useEffect} from 'react'
import axios from '../../utils/axios';

const Recipes = () => {
    const [recipe, setRecipe] = useState([])

    async function fetchRecipes() {
        const request = await axios.get("/api/recipes")
        setRecipe(request.data)
        console.log(request.data)
        console.log(request.data.recipes)
        console.log(request.data.recipes[0])
    }

    return (
        <div>
            <h1>Recipes</h1>
            <br></br>
            <button onClick={fetchRecipes}>Get Tea Recipes</button>
        </div>
    )
}

export default Recipes
