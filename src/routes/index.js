import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import ProjectDetail from "../containers/ProjectDetailContainer";
import ProjectListContainer from "../containers/ProjectListContainer";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginContainer },
  { path: "/signup", name: "Signup", component: SignupContainer },
  { path: "/projectdetail", name: "ProjectDetail", component: ProjectDetail },
  { path: "/", name: "Homepage", component: ProjectListContainer }
];

export default indexRoutes;
