import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";

const RecipeForm = () => {
    // const [title, setTitle] = useState("");
    // const [protein, setProtein] = useState("");
    // const [grain, setGrain] = useState("");
    // const [profile, setProfile] = useState("");
    // const [cuisine, setCuisine] = useState("");
    // const [time, setTime] = useState("");
    // const [ingredients, setIngredients] = useState([]);
    // const [steps, setSteps] = useState([]);
    // const [notes, setNotes] = useState("");

    const [getter, setter] = useState( {
        title: "",
        protein: "",
        grain: "",
        profile: "",
        cuisine: "",
        time: "",
        ingredients: [],
        steps: [],
        notes: ""
    })

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setter((prevValue)=> ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const {title, protein, grain, profile, cuisine, time, ingredients, steps, notes} = getter;
        axios.post('http://localhost:9999/api/recipes', {
            title,
            protein,
            grain,
            profile,
            cuisine,
            time,
            ingredients,
            steps,
            notes
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
    }

return (
    <>
    <div className="recipe-form">
        <h2>New Recipe</h2>
        <form onSubmit={submitHandler} className="form-items">
            <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={getter.title} onChange={(e)=>changeHandler(e)}/>
            <label htmlFor="Protein">Protein: </label>
                <input type="text" name="protein" value={getter.protein} onChange={(e)=>changeHandler(e)}/>
            <label htmlFor="grain">Grain: </label>
                <input type="text" name="grain" value={getter.grain} onChange={(e)=>changeHandler(e)}/>
            <label htmlFor="Profile">Profile: </label>
                <input type="text" name="profile" value={getter.profile} onChange={(e)=>changeHandler(e)}/>

            <label htmlFor="cuisine">Cuisine: </label>
                <input type="text" name="cuisine" value={getter.cuisine} onChange={(e)=>changeHandler(e)}/>

            <label htmlFor="time">Time: </label>
                <input type="text" name="time" value={getter.time} onChange={(e)=>changeHandler(e)}/>

            <label htmlFor="ingredients">Ingredients: </label>
                <input type="text" name="ingredients" value={getter.ingredients} onChange={(e)=>changeHandler(e)}/>

            <label htmlFor="steps">Steps: </label>
                <input type="text" name="steps" value={getter.steps} onChange={(e)=>changeHandler(e)}/>

            <label htmlFor="notes">Notes: </label>
                <input type="text" name="notes" value={getter.notes} onChange={(e)=>changeHandler(e)}/>

            <button className="submitButton">Submit</button>
        </form>
    </div>
    <Link to="/" className="btn btn-primary">Back to Main Page</Link>
    </>
)

}

export default RecipeForm;