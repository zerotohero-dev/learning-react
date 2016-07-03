import React from 'react';

// Transclusion; or whatever React equivalent of it!

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Stars</h1>
                <p><Button>I <Heart /> React</Button></p>
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const Heart = () => (<span className="icon icn-heart">{'<3'}</span>);

export default App;
