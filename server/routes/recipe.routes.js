import {
    createRecipe,
    getAllRecipes,
    getOneRecipe,
    updateOneRecipe,
    deleteOneRecipe
} from "../controllers/recipe.controller.js";

import {Router} from "express";

const router = Router();

router.route('/recipes')
    .get(getAllRecipes)
    .post(createRecipe);

router.route('/recipes/:id')
    .get(getOneRecipe)
    .put(updateOneRecipe)
    .delete(deleteOneRecipe);

export default router;