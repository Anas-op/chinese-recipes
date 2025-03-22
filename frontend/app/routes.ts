import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("recipes", "routes/recipes.tsx"),
  route("recipe/:recipeId", "routes/recipe.tsx")
] satisfies RouteConfig;
