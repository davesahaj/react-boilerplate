import { publicRoutes } from '@/config'
import { Route, Router } from '@/libs'

const RouterProvider = () => {
  return (
    <Router>
      {publicRoutes.map(({ component: Component, path }) => (
        <Route component={Component} key={path} path={path} />
      ))}
    </Router>
  )
}

export { RouterProvider }
