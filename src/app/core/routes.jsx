import screens from "./screens";

export const AuthRoutes = [
  {
    path: "/",
    component: screens.Home,
  },
];

export const GuestRoutes = [
  {
    path: "/",
    component: screens.Login,
  },
];

export default [
  {
    path: "*",
    component: screens.PageNotFound,
  },
];
