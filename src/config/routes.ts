import { ROUTES } from '@/constants'
import { Home } from '@/pages'

export const publicRoutes: {
  path: string
  component: () => JSX.Element
}[] = [
  {
    path: ROUTES.HOME,
    component: Home,
  },
]
