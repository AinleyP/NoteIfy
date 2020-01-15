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
        // console.log(value);
        // console.log(this.state);

    }

    render() {

        const testState = this.state;

        return (
            <div>
                <div className="outer">
                    <div className="middle">
                        <div className="inner">
                            <input
                                ref='input'
                                id="query"
                                type="text"
                                spellCheck="false"
                                placeholder="Type in a chord!"
                                autoComplete="off"
                                onChange={this.handleInputChange}
                                value={this.state.text}

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
