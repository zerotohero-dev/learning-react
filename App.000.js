import React from 'react';
import ReactDOM from 'react-dom';

const StatelessComponent = () => <div>Hello</div>;

// App.propTypes = {
//     txt: React.PropTypes.string.isRequired
// }

// State is something that is meant to be managed by the component itself.

// Parent-child relationship ==== owner-ownee relationship.
// composite component.

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            txt: 'This is the state text',
            red: 0,
            green: 0,
            blue: 0
        };

        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            txt: e.target.value,
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        });
    }
    render() {
        //let txt = this.props.txt;

        return (
            // React.createElement(node, props, html||component)
            <div>
                <h1>Hello World</h1>
                <p>{this.state.txt} {this.state.red} {this.state.green} {this.state.blue}</p>
                <hr />
                <Slider ref="red" update={this.update} />
                <Slider ref="green" update={this.update} />
                <Slider ref="blue" update={this.update} />
                <hr />
                <Widget
                    txt={this.state.txt}
                    update={this.update}
                />
            </div>
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'This is the default text'
};

const Widget = (props) => {
    return (
        <div>
            <h1>{props.txt}</h1>
            <input type="text"
                   onChange={props.update}
                   value={props.txt}
            />
            <p>{props.txt}</p>
            <p>Hello</p>
        </div>
    );
};

class Slider extends React.Component {
    render() {
        return (
            <div><input
                ref="inp"
                type="range"
                min="0"
                max="255"
                onChange={this.props.update}
            /></div>
        );
    }
}

export default App;
