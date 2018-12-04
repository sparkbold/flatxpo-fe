import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import ProjectDetailContainer from "../containers/ProjectDetailContainer";
import ProjectListContainer from "../containers/ProjectListContainer";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginContainer },
  { path: "/signup", name: "Signup", component: SignupContainer },
  {
    path: "/projects/:id",
    name: "ProjectDetailContainer",
    component: ProjectDetailContainer
  },
  { path: "/", name: "Homepage", component: ProjectListContainer }
];

export default indexRoutes;
