import React from 'react';
import ReactDOM from 'react-dom';

// Mounting: A component is added to the DOM.
// Unmounting: A component is removed from the DOM.

class App extends React.Component {
    constructor() {
        super();

        this.state = {val: 100000};

        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        // Component is fully prepped and guaranteed to make it into the DOM.
        console.log('mounting…');

        // We don’t have access to the dom; yet we do have access to the state and to the props.
        this.setState({m: 2});

    }

    componentDidMount() {
        console.log('mounted!');
        console.log(ReactDOM.findDOMNode(this));

        this.inc = setInterval(this.update, 500);

        // We have access to our component, and to the actual DOM.
    }

    componentWillUnmount() {
        console.log('will unmount…');

        // We can do cleanup.
        clearInterval(this.inc);
    }

    render() {
        console.log('rendering!');
        return (
            <div>
                <h1>boo</h1>
                <button onClick={this.update}>{this.state.val * this.state.m}</button>
            </div>
        )
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();

        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <h1>baaa</h1>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper;
