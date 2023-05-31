import { memo } from "react";
import { ChartsComponent, DashboardComponent, HocDemoComponent, ManageComponent, PortalDemo } from "../others/childComponent";
import { ClassComponent } from "../others/classComponent";
import FunctionComponent from "../others/functionComponent";

interface topicInterface {
    topic: string,
    description?: string,
    example?: string,
    link?: string
}
function HomePage() { // function component , it does't maintain their state , but use props
    console.log("HomePage calling: ");

    let topics: topicInterface[] = [
        { "topic": "React", description: "React - 18", link: "https://reactjs.org/" },
        { "topic": "Core Site", link: "https://reactjs.org/docs/getting-started.html" },
        { "topic": "Feature", description: "1. virtual dom", example: "Before updating browser dom , react manipulate data in virtual dom", link: "https://www.w3schools.com/REACT/react_intro.asp" },
        { "topic": "", description: "2. JSX - javascript xml", example: "we can also attach react library in html & use there also." },
        { "topic": "react es6", example: "import name vs default use ", link: "https://www.w3schools.com/REACT/react_es6_modules.asp" },
        { "topic": "reactdom.render", description: "load react app in dom" },
        { "topic": "JSX expression", description: "{ a + b }", example: "It work on one way data binding", link: "https://www.w3schools.com/REACT/react_jsx.asp" },
        { "topic": "component", description: "this is a way to make reusable code -  name should be UpperCamel case", link: "https://www.w3schools.com/REACT/react_components.asp", example: "function / class component" },
        { "topic": "props", description: "used to access property assigned in component", example: "Props are read only", link: "https://www.w3schools.com/REACT/react_props.asp" },
        { "topic": "events", description: "it should be in camel case , like javascript", example: "onClick", link: "https://www.w3schools.com/REACT/react_events.asp" },
        { "topic": "conditional rendering using if else in function component", link: "https://www.w3schools.com/REACT/react_conditional_rendering.asp" },
        { "topic": "List", description: "use map method to loop value in jsx", example: "use key attribute to make row unique", link: "https://www.w3schools.com/REACT/react_lists.asp" },
        { "topic": "state", description: "this is used to store component properties & on update of state component re-render." },
        { "topic": "routing", description: "react-router-dom", link: "https://www.w3schools.com/REACT/react_router.asp" },
        { "topic": "memo", description: "it is used to stop rerendering component until props changed", link: "https://www.w3schools.com/REACT/react_memo.asp" },
        { "topic": "Hooks", description: "Hooks allow function component to state & other feature of class component", link: "https://www.w3schools.com/REACT/react_hooks.asp" },
        { "topic": "Redux", description: "It is state management library in react", example: "it work with reducer , action , dispatch & store" },
        { "topic": "High Order Component", description: "It is a function , which take component as argument & return a new component. HOC is usefull when we want to make a common react logic for multiple component.", example : "It is usefull when we have a common logic for multiple component.", link: "https://levelup.gitconnected.com/real-world-examples-of-higher-order-components-hoc-for-react-871f0d8b39d8" },
        { "topic": "Portal", description: "portal provides a way to render children outside parent node or div", example : "used to display modal or popup", link: "https://blog.bitsrc.io/understanding-react-portals-ab79827732c7" },
        { "topic": "Render props", description: "it is a way to share common logic in multiple child component, where we can share the function as property to child & can call from them.", example : "it is similar like useCallback function", link: "https://blog.bitsrc.io/understanding-render-props-in-react-1edde5921314" },
    ]

    if (topics.length !== 0) {
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HocDemoComponent></HocDemoComponent>
                    <ManageComponent></ManageComponent>
                    <PortalDemo></PortalDemo> 
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">React Topics</h5>
                                    <div className="table-responsive">
                                        <FunctionComponent id="My Function Component1" name="Func Component2" ></FunctionComponent>
                                        <ClassComponent></ClassComponent>
                                        <table id="zero_config" className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Topic</th>
                                                    <th>Description</th>
                                                    <th>Example</th>
                                                    <th>Link</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    topics.map((item: any, index: number) => {
                                                        return (
                                                            <tr key={index} >
                                                                <td>{item.topic}</td>
                                                                <td>{item.description}</td>
                                                                <td>{item.example}</td>
                                                                <td><a href={item.link} target="_blank" rel="noreferrer" >{item.link}</a></td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Topic</th>
                                                    <th>Description</th>
                                                    <th>Example</th>
                                                    <th>Link</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">React Topics</h5>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Topic</th>
                                                <th>Description</th>
                                                <th>Example</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={4}>No Record Found!</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Topic</th>
                                                <th>Description</th>
                                                <th>Example</th>
                                                <th>Link</th>
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

export default HomePage;
