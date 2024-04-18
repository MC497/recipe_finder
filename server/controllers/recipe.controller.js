import Recipe from '../models/recipe.model.js';


    // create new
    async function createRecipe(req, res) {
        try {
            const newRecipe = await Recipe.create(req.body);
            res.json(newRecipe);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    // Get all Recipes
    async function getAllRecipes(req,res) {
        try {
            const allRecipes = await Recipe.find();
            res.json(allRecipes)
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    // Return one Recipe

    async function getOneRecipe(req,res) {
        try {
            const foundRecipe = await Recipe.findById(req.params.id);
            res.json(foundRecipe);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    // Update one Recipe

    async function updateOneRecipe(req,res) {
        const options = {
            new: true,
            runValidators: true,
        };
        try {
            const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id,req.body,options);
            res.json(updatedRecipe);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    // Delete a Recipe

    async function deleteOneRecipe(req,res) {
        try {
            const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
            res.json(deletedRecipe);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
    
    export {
        createRecipe,
        getAllRecipes,
        getOneRecipe,
        updateOneRecipe,
        deleteOneRecipe,
    };