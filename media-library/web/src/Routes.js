// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ImagesLayout from 'src/layouts/ImagesLayout'

import UsersLayout from 'src/layouts/UsersLayout'

import VideosLayout from 'src/layouts/VideosLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ImagesLayout}>
        <Route path="/images/new" page={NewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={EditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImagePage} name="image" />
        <Route path="/images" page={ImagesPage} name="images" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={NewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserPage} name="user" />
        <Route path="/users" page={UsersPage} name="users" />
      </Set>
      <Set wrap={VideosLayout}>
        <Route path="/videos/new" page={NewVideoPage} name="newVideo" />
        <Route path="/videos/{id:Int}/edit" page={EditVideoPage} name="editVideo" />
        <Route path="/videos/{id:Int}" page={VideoPage} name="video" />
        <Route path="/videos" page={VideosPage} name="videos" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
