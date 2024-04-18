import {model, Schema} from 'mongoose';
            const RecipeSchema = new Schema(
                {
                    title: {
                        type: String,
                        required: [true, "Recipe title is required!"],
                        minlength: [2, "Title must be at least 2 characters long!"],
                        maxlength: [255, "Title must be less than 255 characters long"]
                    },
                    protein: {
                        type: String,
                        required: [true, "Protein is required!"]
                    },
                    grain: {
                        type: String,
                        required: [true, "Grain is required!"]
                    },
                    profile: {
                        type: String,
                        required: [true, "Profile is required!"]
                    },
                    cuisine: {
                        type: String,
                        required: [true, "Cuisine is required!"]
                    },
                    time: {
                        type: String,
                        required: [true, "Time is required!"]
                    },
                    ingredients: {
                        type: Array
                    },
                    steps: {
                        type: Array
                    },
                    notes: {
                        type: String
                    }
                },
                { timestamps: true }
            );
            const Recipe = model("Recipe", RecipeSchema);
            export default Recipe;