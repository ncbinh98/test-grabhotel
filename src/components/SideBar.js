import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SideBar extends Component {
    state = {};
    render() {
        return (
            <div>
                {/* Slide Bar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i class="fa fa-id-card" aria-hidden="true"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">
                            Admin <sup>2</sup>
                        </div>
                    </NavLink>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">Functions</div>

                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseMemb"
                            aria-expanded="true"
                            aria-controls="collapseMemb"
                        >
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Members</span>
                        </a>
                        <div id="collapseMemb" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Members Components:</h6>
                                <NavLink exact activeClassName="collapse-item active" className="collapse-item" to="/members/create">
                                    Create Member
                                </NavLink>
                                <NavLink activeClassName="collapse-item active" className="collapse-item" to="/members/list">
                                    Member List
                                </NavLink>
                            </div>
                        </div>
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseProj"
                            aria-expanded="true"
                            aria-controls="collapseProj"
                        >
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Projects</span>
                        </a>
                        <div id="collapseProj" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <NavLink exact activeClassName="collapse-item active" className="collapse-item" to="/projects/create">
                                    Create Project
                                </NavLink>
                                <NavLink exact activeClassName="collapse-item active" className="collapse-item" to="/projects/list">
                                    Projects
                                </NavLink>
                            </div>
                        </div>
                    </li>
                </ul>
                {/* End Slide Bar */}
            </div>
        );
    }
}

export default SideBar;
