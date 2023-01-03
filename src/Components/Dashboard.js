import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>

        <div id="sidebar" className="drawer-side h-screen">
            <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
            <ul className="menu  overflow-y-auto w-60 bg-blue-400 text-base-content h-full">
                {/* <!-- Sidebar content here --> */}
                <li>My Profile</li>
                <li>My Profile</li>
                <li>My Profile</li>
                <li>My Profile</li>
                <li>My Profile</li>

            </ul>

        </div>
    </div>
    );
};

export default Dashboard;