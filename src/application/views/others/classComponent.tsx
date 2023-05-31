import React from "react";

// https://bobbyhadz.com/blog/react-property-does-not-exist-on-type-readonly

export class ClassComponent extends React.Component<{}, { color: string }> {// assigning default props & state to class component
    styles: any;

    constructor(props: any) {  // Like - ngOnInit
        super(props); // call parent class constructer
        this.state = { 'color': "red" }  // we can use state in class component , for function component we need to use useState hook
        console.log("ClassComponent props: ", props);

        this.styles = {
            'color': this.state.color,
            'fontWeight': 'bold'
        }
    }

    componentDidMount() {   // ngDoCheck
        console.log("It called after class component has rendered");
    }

    componentDidUpdate() {   // ngOnChange
        console.log("It called after any update in  class component's state & properties");
    }

    componentWillUnmount() { // ngOnDestroy
        console.log("It called before removing component from dom");
    }

    // Life cycle  - https://www.w3schools.com/REACT/react_class.asp
    // mounting - means putting element in  dom
    // unmounting - means component is going to destroy
    // updating - means component updated

    render(): React.ReactNode { // this method called every time , when any chnages detected in component
        return (
            <div style={this.styles} >
                <p>This is my class component {this.state.color} </p>
            </div>
        );
    }
}