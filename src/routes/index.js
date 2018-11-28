import App from "../App";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/LoginForm";

var indexRoutes = [
  { path: "/login", name: "LoginForm", component: LoginForm },
  { path: "/signup", name: "SignupForm", component: SignupForm },
  { path: "/", name: "Homepage", component: App }
];

export default indexRoutes;
