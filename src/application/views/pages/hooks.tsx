import { createContext, useCallback, useEffect, useReducer, useRef, useState } from "react";
import { ChildComponent, UseCallbackComponent, UseMemoComponent } from "../others/childComponent";

export const UserContext = createContext("Red"); 
const initialState = "Will Start";
interface topicInterface {
    topic: string,
    description?: string,
    example?: string,
    link?: string
}

const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "START":
            return "The State is Start";
        case "COMPLETE":
            return "The State is complete";
        default:
            return state;
    }
};

function HooksPage() { // function component , it does't maintain their state , but use props

    const [color, setColor] = useState("Red"); // used to manage the state in function component

    useEffect(() => { // used to track the changes in component
        let timer = setTimeout(() => {
            setColor("green");
        }, 5500);

        return () => clearTimeout(timer); // clean up timer at the end of use effect hook
    }, []);

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    // Reducer hook

    const [ value, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({type : "START"});
        let timer = setTimeout(() => {
            dispatch({type : "COMPLETE"});
        }, 5500);

        return () => clearTimeout(timer);
    }, []);

    const useCb = useCallback((input: any)=>{ // it return memorized callback function
        console.log("useCallback calling: " ,input ,  color);
        return "true";
    }, [color] );

    console.log("useCb info : ", useCb);
    // const callFunction = (()=>{
    //     useCb("123");
    // });

    // Topics Covered

    let topics: topicInterface[] = [
       { "topic": "Hooks", description: "Hooks allow function component to manage state & other feature of class component", link: "https://www.w3schools.com/REACT/react_hooks.asp" },
       { "topic": "useState", description: "This hook is used to track the state of a value or varaiable", example: "on every chnage in state it rerender component", link: "https://www.w3schools.com/REACT/react_usestate.asp" },
       { "topic": "useEffect", description: "This hook is used to track the chnages in function component", link: "https://www.w3schools.com/REACT/react_useeffect.asp" },
       { "topic": "useContext", description: "This hook is used to manage the state globally" , example: "when we need to pass state to nested child using props , so it's called prop drilling.to avoid this we use this hook", link: "https://www.w3schools.com/REACT/react_usecontext.asp" },
       { "topic": "useRef", description: "This hook is used to make value persist on rendering." , example: "Like - Page scrool", link: "https://www.w3schools.com/REACT/react_useref.asp" },
       { "topic": "useReducer", description: "This hook is used to customize state according our needs, we use dispatch to update action in it." , example: "Like - Page scrool", link: "https://www.w3schools.com/REACT/react_usereducer.asp" },
       { "topic": "useCallback", description: "It return memorized version of callback function & update cb when it's any dependency updated", example: "it help us to stop unnecessary rendering of component.", link: "https://www.w3schools.com/react/react_usecallback.asp" },
       { "topic": "useMemo", description: "This hook return memorized value on every render & update only when it's dependency updated", link: "https://www.w3schools.com/react/react_usememo.asp" },
       { "topic": "custom hook", description: "when we want to extend function for multiple component we can use this", link: "https://www.w3schools.com/REACT/react_customhooks.asp" },
    ]

    return (
        <UserContext.Provider value={color}>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Hooks Page {color}</h5>
                                    <ChildComponent></ChildComponent>
                                    <h4>Render Count: {count.current}</h4>
                                    <h4>Reducer Value : { value }</h4>
                                    {/* <button onClick={(e)=> useCb("123")} >Test useCallback</button> */}
                                    <UseCallbackComponent ucbFunction={useCb} ></UseCallbackComponent>
                                    <UseMemoComponent></UseMemoComponent>
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
            </div>
        </UserContext.Provider>
    );
}

export default HooksPage;
