import React from 'react';
import ReactDOM from 'react-dom';

class CountCharacters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            counter: 10
        };
    }

    onMessageChange=(text)=> {
        this.setState({
            message: 'Message has '+text.length+ ' number of Characters'
        });
    }

    render() {
        return <div>
            <h2>Welcome to Count Characters Component...</h2>
            <p>
                <label>Enter Message : <input type="text"
                    onChange={e => this.onMessageChange(e.target.value)}></input></label>
            </p>

            <p>
                <label>{this.state.message}</label>
            </p>
            <p>
                <label>{this.state.counter}</label>
            </p>
        </div>
    }
}

const element = <CountCharacters></CountCharacters>;

ReactDOM.render(element, document.getElementById('root'));
