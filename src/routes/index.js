import App from "../App";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import ProjectDetail from "../containers/ProjectDetailContainer";

var indexRoutes = [
  { path: "/login", name: "LoginForm", component: LoginForm },
  { path: "/signup", name: "SignupForm", component: SignupForm },
  { path: "/projectdetail", name: "ProjectDetail", component: ProjectDetail },
  { path: "/", name: "Homepage", component: App }
];

export default indexRoutes;
