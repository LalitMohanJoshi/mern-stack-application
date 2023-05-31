import { Link } from "react-router-dom";

export const Sidebar = (() => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin5">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav" className="p-t-30">
                        <li className="sidebar-item"> <Link to="/" className="sidebar-link waves-effect waves-dark sidebar-link"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Dashboard</span></Link></li>
                        <li className="sidebar-item"> <Link to="/hooks" className="sidebar-link waves-effect waves-dark sidebar-link"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Hooks</span></Link></li>
                        <li className="sidebar-item"> <Link to="/about" className="sidebar-link waves-effect waves-dark sidebar-link"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">About Us</span></Link></li>
                        <li className="sidebar-item"> <Link to="/auth" className="sidebar-link waves-effect waves-dark sidebar-link"><i className="fa fa-power-off m-r-5 m-l-5"></i><span className="hide-menu">Logout</span></Link></li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
});