import { useEffect, useState } from "react";
import { httpGet } from "../../services/httpService";

function AboutPage() { // function component , it does't maintain their state , but use props
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            const users_list: any = await httpGet("https://jsonplaceholder.typicode.com/users");
            console.log("users_list: ", users_list);

            setUsers(users_list);
        })();

    }, []);

    if (users.length !== 0) {
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">User Informations</h5>
                                    <div className="table-responsive">
                                        <table id="zero_config" className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>UserName</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((element: any, index: number) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{element.id}</td>
                                                                <td>{element.name}</td>
                                                                <td>{element.username}</td>
                                                                <td>{element.email}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>UserName</th>
                                                    <th>Email</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">User Informations</h5>
                                    <div className="table-responsive">
                                        <table id="zero_config" className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>UserName</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan={4}>No Record Found</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>UserName</th>
                                                    <th>Email</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default AboutPage;
