// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import RecipesLayout from 'src/layouts/RecipesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={PickerPage} name="picker" />
      <Set wrap={RecipesLayout}>
        <Route path="/recipes/new" page={RecipeNewRecipePage} name="newRecipe" />
        <Route path="/recipes/{id}/edit" page={RecipeEditRecipePage} name="editRecipe" />
        <Route path="/recipes/{id}" page={RecipeRecipePage} name="recipe" />
        <Route path="/recipes" page={RecipeRecipesPage} name="recipes" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
