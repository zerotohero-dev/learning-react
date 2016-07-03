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
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
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
                <NumInput
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.red}
                    label="Red"
                    type="number"
                    ref="red" update={this.update} />
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

class NumInput extends React.Component {
    render() {
        const label = this.props.label !== '' ?
            <label>{this.props.label} — {this.props.val}</label> :
            '';

        return (
            <div>
                <input ref="inp"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       defaultValue={this.props.val}
                       onChange={this.props.update} />
                {label}
            </div>
        );
    }
}

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
};


export default App;
