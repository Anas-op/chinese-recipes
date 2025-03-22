import type { Route } from "./+types/recipe";

export async function loader({ params }: Route.LoaderArgs) {
    const recipeId = params.recipeId
    return { recipeId, test : true };
}

export default function Recipe({loaderData} : Route.ComponentProps){
    return <div>Hello this is the recipe.. {loaderData.recipeId}</div>
}




// export async function loader({ params }: Route.LoaderArgs) {
//     const recipeId = params.recipeId
//     return { recipeId, test : true };
// }

// export default function Recipe(){

//     const {recipeId} = useLoaderData<typeof loader>();

//     return <div>Hello {recipeId}</div>
// }