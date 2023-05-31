import { Link } from "react-router-dom";

function LoginPage() { // function component , it does't maintain their state , but use props
    return (
        <form className="form-horizontal m-t-20" id="loginform" action="index.html">
            <div className="row p-b-30">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user"></i></span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                    </div>
                </div>
            </div>
            <div className="row border-top border-secondary">
                <div className="col-12">
                    <div className="form-group">
                        <div className="p-t-20">  
                             <Link to="/auth" className="btn btn-success float-left" >Login</Link>
                             <Link to="/" className="btn btn-info float-right" >Dashboard</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginPage;
