import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const TeamsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.teams()} className="rw-link">
            Teams
          </Link>
        </h1>
        <Link to={routes.newTeam()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Team
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default TeamsLayout
