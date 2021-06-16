// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import AlertsLayout from 'src/layouts/AlertsLayout'

import TeamsLayout from 'src/layouts/TeamsLayout'

import UsersLayout from 'src/layouts/UsersLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DashboardLayout}>
        <Set wrap={AlertsLayout}>
          <Route path="/alerts/new" page={NewAlertPage} name="newAlert" />
          <Route path="/alerts/{id:Int}/edit" page={EditAlertPage} name="editAlert" />
          <Route path="/alerts/{id:Int}" page={AlertPage} name="alert" />
          <Route path="/alerts" page={AlertsPage} name="alerts" />
        </Set>
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
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Route path="/" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
