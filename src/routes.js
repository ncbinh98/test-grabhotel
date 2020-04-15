import Members from "./components/Member/Members";
import Home from "./components/Home";
import CreateMember from "./components/Member/CreateMember";
import Projects from "./components/Project/Projects";
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
        exact: false,
        main: () => <Projects />
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
