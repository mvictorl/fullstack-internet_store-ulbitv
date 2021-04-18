import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import Device from './pages/Device'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin
  },
  {
    path: BASKET_ROUTE,
    component: Basket
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    component: Shop
  },
  {
    path: LOGIN_ROUTE,
    component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    component: Auth
  },
  {
    path: DEVICE_ROUTE + '/:id',
    component: Device
  }
]
