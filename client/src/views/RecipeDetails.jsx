import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const RecipeDetails = () => {

    const [recipe,setRecipe] = useState({});

    const {id} = useParams();

// importing in the actual recipe
    useEffect(() => {
        axios.get(`http://localhost:9999/api/recipes/${id}`)
            .then((res) => {
                console.log(res.data);
                setRecipe(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[id])

//Creating the lists of ingredients and steps and giving them bullets
    const makeIngredientList = (importIngrList) => {
        // console.log(importIngrList);
        const ingrList_fin=[];
        for (let i=0; i<importIngrList.length; i++) {
            ingrList_fin.push(<li key={i}>{importIngrList[i]}</li>);
        }
        return ingrList_fin;
        }

        const makeStepList = (importstepList) => {
            const stepList_fin=[];
            for (let i=0; i<importstepList.length; i++) {
                stepList_fin.push(<li key={i}>{importstepList[i]}</li>);
            }
            return stepList_fin;
            }

//Deleting Function        
        const navigate = useNavigate();

        const deleteRecipe = () => {
            axios.delete(`http://localhost:9999/api/recipes/${id}`)
            .then((res)=> {
                console.log(res.data);
                navigate("/");
            })
        }

    return (
        <>
        <div className="detailsContainer">
            <h1>{recipe.title}</h1>
            <span><h6>Time: </h6> <p>{recipe.time}</p></span>
            <h6>Cuisine: </h6><p>{recipe.cuisine}</p>

            <div className="card">
            <h3>Ingredients</h3>
            <ul>{recipe.ingredients && makeIngredientList(recipe.ingredients)}</ul>
            </div>
            
            <div className="card">
                <h3>Steps</h3>
                <ol>{recipe.steps && makeStepList(recipe.steps)}</ol>
            </div>
            
            <div className="recipe-page-buttons">
                <Link to="/" className="btn btn-primary">Back to Main Page</Link>
                <button className="btn btn-danger" onClick={deleteRecipe}>Delete this recipe</button>
            </div>
        </div>
        </>
    )
}

export default RecipeDetails;