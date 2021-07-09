// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import EntriesLayout from 'src/layouts/EntriesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={EntriesLayout}>
      </Set>
      <Set wrap={EntriesLayout}>
        <Route path="/entries/new" page={NewEntryPage} name="newEntry" />
        <Route path="/entries/{id:Int}/edit" page={EditEntryPage} name="editEntry" />
        <Route path="/entries/{id:Int}" page={EntryPage} name="entry" />
        <Route path="/entries" page={EntriesPage} name="entries" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
