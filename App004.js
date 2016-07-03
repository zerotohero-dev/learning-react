import React from 'react';

const Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();

        this.update = this.update.bind(this);
        this.state = {val: 0};
    }

    update() {
        this.setState({val: this.state.val + 1});
    }

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('unmounted');
    }

    render() {
        return (<InnerComponent
            update={this.update}
            {...this.state}
            {...this.props}
        />);
    }
};

const Button = (props) => <button onClick={props.update}>{props.txt} — {props.val}</button>;
const Label = (props) => <label onMouseMove={props.update}>{props.txt} — {props.val}</label>;

const ButtonMixed = Mixin(Button);
const LabelMixed = Mixin(Label);

class App extends React.Component {
    constructor() {
        super();
        
        this.update = this.update.bind(this);
        this.state = {val: 0};
    }
    
    update() {
        this.setState({val: this.state.val + 1});
    }
    
    componentWillMount() {
        console.log('will mount');
    }
    
    componentDidMount() {
        console.log('unmounted');
    }
    
    render() {
        return (
            <div>
                <ButtonMixed txt="hello" />
                <LabelMixed txt="hello" />
            </div>
        )
    }
}

export default App;
