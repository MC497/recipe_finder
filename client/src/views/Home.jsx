import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:9999/api/recipes")
            .then((res) => {
                console.log(res.data);
                setRecipes(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    return (
        <>
        <div className="main-content">
            <h1 className="my-4">Recipes Home</h1>
            <Link to="/recipes/create" className="btn btn-info">Create a new recipe</Link>
            <table className="recipe-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Protein</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipes.map((recipe,index)=> (
                            <tr key={index}>
                                <td><Link to={`/recipes/${recipe._id}/details`}>
                                    {recipe.title}</Link></td>
                                <td>{recipe.protein}</td>
                                <td>{recipe.time}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )

}


export default Home;