// Code from https://blog.logrocket.com/how-use-typescript-react-tutorial-examples/

import * as React from "react";
let Logo ="https://blog.logrocket.com/wp-content/uploads/2022/09/logrocket-logo-frontend-analytics.png";
export default class FirstComponent extends React.Component <{}> {
    render() {
        return (
            <div>
                <h3>A Simple React Component Example with Typescript</h3>
                <img alt="Logo" src={Logo} />
                <p>This component shows the Logrocket logo.</p>
                <p>For more info on Logrocket, please visit https://logrocket.com </p>
            </div>
        );
    }
}