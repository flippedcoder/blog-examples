import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const AlertsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.alerts()} className="rw-link">
            Alerts
          </Link>
        </h1>
        <Link to={routes.newAlert()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Alert
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default AlertsLayout
