import React, { Component } from "react";
import "./App.css";
import cliches from "./cliche.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            remove: false,
            clichesLength: cliches.length
        };
    }
    componentDidMount() {
        this.randomCliche();
    }
    getRandomIndex(list) {
        return Math.floor(Math.random() * list.length);
    }
    randomCliche() {
        const index = this.getRandomIndex(cliches);
        if (this.state.remove) {
            cliches.splice(index, 1);
        }
        this.setState({
            value: cliches[index],
            currentClichesLength: cliches.length
        });
    }
    render() {
        return (
            <div className="App">
                <a
                    className="link_sub"
                    href="https://prowritingaid.com/art/21/List-of-Clichés.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    List of Clichés from prowritingaid.com
                </a>
                <div className="phrase">
                    <p>{this.state.value}</p>
                </div>
                <button className="square" onClick={() => this.randomCliche()}>
                    random
                </button>
            </div>
        );
    }
}

export default App;
