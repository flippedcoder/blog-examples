// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import LayoutsLayout from 'src/layouts/LayoutsLayout'
import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/option" page={OptionPage} name="option" />
      <Set wrap={LayoutsLayout}>
        <Route path="/layouts/new" page={LayoutNewLayoutPage} name="newLayout" />
        <Route path="/layouts/{id:Int}/edit" page={LayoutEditLayoutPage} name="editLayout" />
        <Route path="/layouts/{id:Int}" page={LayoutLayoutPage} name="layout" />
        <Route path="/layouts" page={LayoutLayoutsPage} name="layouts" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
