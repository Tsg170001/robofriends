import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(e, info) {
        this.setState({ hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Error has occured.</h1>
        }
        return this.props.Children;
    }
}

export default ErrorBoundary;