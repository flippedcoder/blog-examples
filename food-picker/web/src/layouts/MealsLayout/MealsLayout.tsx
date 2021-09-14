import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MealLayoutProps = {
  children: React.ReactNode
}

const MealsLayout = ({ children }: MealLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.meals()}
            className="rw-link"
          >
            Meals
          </Link>
        </h1>
        <Link
          to={routes.newMeal()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Meal
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MealsLayout
