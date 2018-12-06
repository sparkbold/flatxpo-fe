import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import ProjectDetailContainer from "../containers/ProjectDetailContainer";
import ProjectListContainer from "../containers/ProjectListContainer";
import AddProjectContainer from "../containers/AddProjectContainer";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginContainer },
  { path: "/signup", name: "Signup", component: SignupContainer },
  { path: "/add-project", name: "AddProject", component: AddProjectContainer },
  {
    path: "/projects/:id",
    name: "ProjectDetailContainer",
    component: ProjectDetailContainer
  },
  { path: "/", name: "Homepage", component: ProjectListContainer }
];

export default indexRoutes;
