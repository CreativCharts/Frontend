import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        ErrorBoundary._error = error;
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error('Caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {

            return <h1>Something went wrong.</h1>;
        }

        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default ErrorBoundary;
