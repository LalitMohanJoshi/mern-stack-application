import React, { useEffect, useId, useRef } from "react";
import { useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { UserContext } from "../pages/hooks";

export const ChildComponent = (() => {
    const user = useContext(UserContext);
    return (
        <p style={{ color: user }}>This is child component {user}</p>
    );
});

export const UseCallbackComponent = ((props: any) => {
    console.log("UseCallbackComponent: calling ");

    const { ucbFunction } = props;
    return (
        <button onClick={(e) => ucbFunction("123")}  >Test useCallback</button>
    );
});

const looping = ((num: number) => {
    console.log("looping: start num ", num);

    for (let i = 0; i < 100; i++) {
        num += 1;
    }
    console.log("looping: num ", num);
    return num;
});

export const UseMemoComponent = ((props: any) => {
    console.log("UseMemoComponent: calling ");

    const [count, setCount] = useState(0);

    const tCount = useMemo(() => {
        console.log("useMemo: calling ", count);
        return looping(count);
    }, [count]);

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title m-b-0">Browesr statistics</h5>
                        </div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><span className="badge badge-primary">{tCount}</span></td>
                                    <td><span className="badge badge-primary">{count}</span></td>
                                    <td><button onClick={increment}  >Increment</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
});

// ---------------------- High Order Component -----------------------------

const counterHoc = ((Component: any) => {

    console.log("component: ", Component);

    const Hoc = (() => {
        const [counter, setCounter] = useState(0);
        const incCounter = (() => {
            setCounter(counter + 1);
        });

        return (
            <>
                <Component counterVar={counter} incCounterFunc={incCounter} />
            </>
        );
    });
    console.log("Hoc: ", Hoc);

    return Hoc;
});

const DashboardElementComponent = ((props: any) => {
    const { counterVar, incCounterFunc } = props;
    const uId = useId();
    const title = "Dashboard - " + uId;

    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="box bg-cyan text-center">
                        <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard"></i></h1>
                        <h6 className="text-white">{title} </h6>
                        <h6 className="text-white">Counter - {counterVar} </h6>
                        <button className="btn btn-sm" onClick={incCounterFunc} >Increment</button>
                    </div>
                </div>
            </div>
        </>
    );
});

export const DashboardComponent = counterHoc(DashboardElementComponent);

const ChartsElementComponent = ((props: any) => {
    const { counterVar, incCounterFunc } = props;
    const title = "Chart";

    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="box bg-success text-center">
                        <h1 className="font-light text-white"><i className="mdi mdi-chart-areaspline"></i></h1>
                        <h6 className="text-white">{title} </h6>
                        <h6 className="text-white">Counter - {counterVar} </h6>
                        <button className="btn btn-sm" onClick={incCounterFunc} >Increment</button>
                    </div>
                </div>
            </div>
        </>
    );
});

export const ChartsComponent = counterHoc(ChartsElementComponent);

export const HocDemoComponent = (() => {
    return (
        <>
            <div className="card">
                <h5 className="card-title">Hoc Demo</h5>
                <div className="row">
                    <DashboardComponent></DashboardComponent>
                    <ChartsComponent></ChartsComponent>
                </div>
            </div>
        </>
    )
});

// ---------------------- High Order Component -----------------------------

// ---------------------- Portal -----------------------------

export const PortalDemo = (() => {
    return (
        ReactDOM.createPortal(
            <div className="portal_container"> 
                <div className="portal-modal">
                    <h6>This is portal Demo - Test this using inspect in browser</h6> 
                </div>
            </div>,
            document.body
            // document.getElementById("modal")
        )
    )
});

// --------------------------  controller & uncontrolled component -------------------------
  
const ControlledComponent = (() => {
    const [ value, setValue ] = useState("");
    function chnageValue(el: any) {
        setValue(el.target.value);
    }

    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="box bg-cyan text-center"> 
                        <h6 className="text-white">Controlled Component</h6> 
                        <input value={value} onChange={chnageValue} ></input>
                    </div>
                </div>
            </div>
        </>
    );
});
  
const UnControlledComponent = (() => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        console.log("UnControlledComponent value: ", inputRef?.current?.value);
    });

    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="box bg-cyan text-center"> 
                        <h6 className="text-white">Un Controlled Component</h6>  
                        <input ref={inputRef}  ></input>
                    </div>
                </div>
            </div>
        </>
    );
});

export const ManageComponent = (() => {
    return (
        <>
            <div className="card">
                <h5 className="card-title">controller & uncontrolled component</h5>
                <div className="row">
                    <ControlledComponent></ControlledComponent> 
                    <UnControlledComponent></UnControlledComponent> 
                </div>
            </div>
        </>
    )
});