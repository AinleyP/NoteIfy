import React, { Component } from 'react'
import CanvasDraw from './CanvasDraw';
import './Display.css';

class Display extends Component {

    constructor() {
        super();
        this.state = { text: "" };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({ text: value });
    }

    render() {

        const testState = this.state;

        return (
            <div>
                <div className="outer">
                    <div className="middle">

                        <div className="inner">
                            <h2>♪ Type in a chord! ♪</h2>
                            <input
                                className="textboxstyle"
                                ref='input'
                                placeholder="Bb9sus4"
                                id="query"
                                type="text"
                                spellCheck="false"
                                autoComplete="off"
                                onChange={this.handleInputChange}
                                value={this.state.text}
                                autofocus

                            />
                        </div>
                    </div>
                </div>
                <CanvasDraw testState={testState} />
            </div >
        )
    }
}


export default Display
