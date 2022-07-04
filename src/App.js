import React from "react";
import axios from "axios";

import './App.css';
import { render } from "@testing-library/react";

class App extends React.Component {

    state = { advice: ''};

    componentDidMount() {
        this.fetchadvice();
    }

    fetchadvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((responce) => {
            const {advice} = responce.data.slip;
            
            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const {advice} = this.state;
        return(
            <div className="app">
                 <div className="card">
                     <h1 className="heading">{advice}</h1>
                     <button className="btn" onClick={this.fetchadvice}>
                        <span>New Quote</span>
                     </button>
                 </div>
            </div>
        );
    }

}

export default App;