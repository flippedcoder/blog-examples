// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import TeamsLayout from 'src/layouts/TeamsLayout'

import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TeamsLayout}>
        <Route path="/teams/new" page={NewTeamPage} name="newTeam" />
        <Route path="/teams/{id:Int}/edit" page={EditTeamPage} name="editTeam" />
        <Route path="/teams/{id:Int}" page={TeamPage} name="team" />
        <Route path="/teams" page={TeamsPage} name="teams" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={NewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserPage} name="user" />
        <Route path="/users" page={UsersPage} name="users" />
      </Set>
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
