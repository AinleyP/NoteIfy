import React, { Component } from 'react';
import './Board.css';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = { text: "" };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({ text: value });
        console.log(value);

    }

    //drawPiano(selectedNotes, highlightedNotes, rootNotes) {
    drawPiano() {
        //var canvas = this.refs.pianoBoard;
        var canvas = document.getElementById("pianoBoard");
        var ctx = canvas.getContext('2d');

        this.setState({
            canvas: canvas,
            ctx: ctx
        }, function () {
            this.drawBoard();
            // this.drawShadow();
        })
    }

    drawBoard() {
        const { ctx, canvas } = this.state

        const canvasW = window.innerWidth;
        const canvasH = window.innerHeight;
        const pianoW = 850;
        const pianoH = 200;
        const pianoX = (canvasW / 2) - (pianoW / 2);
        const pianoY = (canvasH / 2) - (pianoH / 2);

        //canvas
        canvas.width = canvasW;
        canvas.height = canvasH;

        const keyboardContainerTopPadding = 55;
        const keyboardContainerBottomPadding = 5;
        const keyboardContainerSidePadding = 20;
        const keyboardContainerX = pianoX + keyboardContainerSidePadding;
        const keyboardContainerY = pianoY + keyboardContainerTopPadding;
        const keyboardContainerWidth = pianoW - (keyboardContainerSidePadding * 2);
        const keyboardContainerHeight = pianoH - (keyboardContainerTopPadding + keyboardContainerBottomPadding);
        const totalOctaves = 3;
        const notesPerOctave = 12;
        const whiteNoteIndexes = [1, 3, 5, 6, 8, 10, 12];
        const blackNoteIndexes = [2, 4, 7, 9, 11];
        const whiteNotesPerOctaveCount = 7;
        const blackNotesPerOctaveCount = 5;
        const whiteNoteCount = totalOctaves * whiteNotesPerOctaveCount;
        const blackNoteCount = totalOctaves * blackNotesPerOctaveCount;
        const whiteNoteWidth = keyboardContainerWidth / whiteNoteCount;
        const blackNoteWidth = whiteNoteWidth * 0.6;
        const whiteNoteHeight = keyboardContainerHeight;
        const blackNoteHeight = whiteNoteHeight * 0.7
        const whiteNoteGap = 1;
        const pianoHighlightShadowSize = 2;

        const pianoWhiteNoteColor = "white";

        const primaryBackgroundColor = "#f1d4d4"; //purple
        const pianoKeyboardColor = "#ac8daf";
        const pianoShadowColor = "#010059";
        const pianoHighlightColor = "#484c7f";
        const pianoKeybedBackgroundColor = "#484c7f";
        const pianoNoteSelectedShadowColor = "#010059";

        //Draw canvas background
        ctx.fillStyle = primaryBackgroundColor;
        ctx.fillRect(0, 0, canvasW, canvasH);

        //Draw keyboard background
        ctx.fillStyle = pianoKeyboardColor;
        ctx.highlightStyle = pianoHighlightColor;
        ctx.shadowStyle = pianoShadowColor;
        ctx.highlightSize = pianoHighlightShadowSize;
        ctx.shadowSize = pianoHighlightShadowSize;
        ctx.fillRect(pianoX, pianoY, pianoW, pianoH);

        //Draw background behind the keys
        ctx.fillStyle = pianoKeybedBackgroundColor;
        ctx.fillRect(keyboardContainerX, keyboardContainerY, keyboardContainerWidth, keyboardContainerHeight);

        //Draw shadow below the keys
        ctx.beginPath();
        ctx.moveTo(keyboardContainerX + 1, pianoY + pianoH - keyboardContainerBottomPadding);
        ctx.lineTo(keyboardContainerX + keyboardContainerBottomPadding + 1, pianoY + pianoH);
        ctx.lineTo(pianoX + pianoW, pianoY + pianoH);
        ctx.lineTo(pianoX + pianoW - keyboardContainerSidePadding, pianoY + pianoH - keyboardContainerBottomPadding);
        ctx.closePath();
        ctx.fillStyle = pianoShadowColor;
        ctx.fill();

        // Draw white keys

        let i = 0;
        let currentOctave = 0;
        for (i = 0; i < whiteNoteCount; i++) {
            currentOctave = Math.floor(i / whiteNotesPerOctaveCount);
            const x = i * whiteNoteWidth + keyboardContainerX + 1;
            const y = keyboardContainerY;
            const w = whiteNoteWidth - whiteNoteGap;
            const h = whiteNoteHeight;
            const noteIndex = whiteNoteIndexes[i % whiteNoteIndexes.length];
            //const indexToCheck = noteIndex + (currentOctave * notesPerOctave);
            //let textColor = "black";

            //Draw white key
            ctx.fillStyle = pianoWhiteNoteColor;
            ctx.fillRect(x, y, w, h);

            //Draw top shadow
            ctx.fillStyle = pianoNoteSelectedShadowColor;
            ctx.fillRect(x, y, w, 2);

        }

        //Draw white keys

        const blackNoteOffsets = [1, 1, 2, 2, 2];
        currentOctave = 0;
        const octaveWidth = keyboardContainerWidth / totalOctaves;
        for (i = 0; i < blackNoteCount; i++) {
            currentOctave = Math.floor(i / blackNotesPerOctaveCount);
            const offsetIndex = i % blackNoteOffsets.length;
            const offset = blackNoteOffsets[offsetIndex];
            const x = (currentOctave * octaveWidth) + ((offsetIndex + offset) * whiteNoteWidth) - (blackNoteWidth / 2) + keyboardContainerX;
            const y = keyboardContainerY;
            const w = blackNoteWidth;
            const h = blackNoteHeight;
            const noteIndex = blackNoteIndexes[i % blackNoteIndexes.length];
            //const indexToCheck = noteIndex + (currentOctave * notesPerOctave);

            ctx.fillStyle = "black";
            ctx.fillRect(x, y, w, h);

            ctx.fillStyle = "#555";
            ctx.fillRect(x, y + h - 7, w, 7);


        }

    }

    componentDidMount() {
        this.drawPiano();
    }


    render() {

        const canvas = React.useRef(null);

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
                                placeholder="Type in a valid chord!"
                                autoComplete="off"
                                onChange={this.handleInputChange}
                                value={this.state.text}

                            />
                        </div>
                    </div>
                </div>
                <canvas id="pianoBoard" ref="pianoBoard" resize="true" width="100%" height="100%" />
            </div >
        )
    }
}

export default Board
