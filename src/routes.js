import Members from "./components/Member/Members";
import Home from "./components/Home";
import CreateMember from "./components/Member/CreateMember";
import Projects from "./components/Project/Projects";
import ProjectDetail from "./components/Project/ProjectDetail";
import CreateProject from "./components/Project/CreateProject";
import NotFound from "./components/NotFound";
import React from "react";
const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/members/list",
        exact: false,
        main: () => <Members />
    },
    {
        path: "/members/create",
        exact: false,
        main: () => <CreateMember />
    },
    {
        path: "/projects/list",
        exact: true,
        main: ({ match }) => <Projects match={match} />
    },
    {
        path: "/projects/list/:id",
        exact: true,
        main: ({ match }) => <ProjectDetail match={match} />
    },
    {
        path: "/projects/create",
        exact: false,
        main: () => <CreateProject />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;
