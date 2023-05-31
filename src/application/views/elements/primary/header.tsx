import { Link } from "react-router-dom";

export const Header = ((props : any)=>{
    console.log("props: ", props)
    return ( 
        <header className="topbar" data-navbarbg="skin5">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin5"> 
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                    <a className="navbar-brand" href="index.html"> 
                    <b className="logo-icon p-l-10">
                    <img src="../../assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                    </b> 
                    <span className="logo-text"> 
                    <img src="../../assets/images/logo-text.png" alt="homepage" className="light-logo" />
                    </span> 
                    </a> 
                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <ul className="navbar-nav float-left mr-auto">
                    <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24"></i></a></li>  
                    </ul>
                    <ul className="navbar-nav float-right">  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../assets/images/users/1.jpg" alt="user" className="rounded-circle" width="31" /></a>
                        <div className="dropdown-menu dropdown-menu-right user-dd animated">
                            <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5"></i> My Profile</a> 
                            <div className="dropdown-divider"></div>
                            <Link to="/auth" className="dropdown-item" ><i className="fa fa-power-off m-r-5 m-l-5"></i> Logout</Link>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </header> 
    );
});