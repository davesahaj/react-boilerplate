import { publicRoutes } from '@/config'
import { Route, Switch } from '@/libs'

const RouterProvider = () => {
  return (
    <Switch>
      {publicRoutes.map(({ component: Component, path }) => (
        <Route component={Component} key={path} path={path} />
      ))}
    </Switch>
  )
}

export { RouterProvider }
