import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                {id: 1, name: 'Volkan Ozcelik'},
                {id: 2, name: 'Orhan Dabak'},
                {id: 3, name: 'John Doe'}
            ]
        }
    }

    render() {
        const rows = this.state.data.map((person) => <PersonRow key={person.id} data={person} />);

        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

const PersonRow = (props) => <tr><td>{props.data.id}</td><td>{props.data.name}</td></tr>;

export default App;
