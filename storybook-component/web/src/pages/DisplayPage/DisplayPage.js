import { Link, routes } from '@redwoodjs/router'

const DisplayPage = () => {
  return (
    <>
      <h1>DisplayPage</h1>
      <p>
        Find me in <code>./web/src/pages/DisplayPage/DisplayPage.js</code>
      </p>
      <p>
        My default route is named <code>display</code>, link to me with `
        <Link to={routes.display()}>Display</Link>`
      </p>
    </>
  )
}

export default DisplayPage
