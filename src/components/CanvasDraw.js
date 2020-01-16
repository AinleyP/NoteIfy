import React, { useEffect, Component } from "react";
import * as matchingNotes from './Constant.js'

const scaleWidth = 500;
const scaleHeight = 500;

const drawWhiteKeys = (props) => {

}

const drawingPiano = (canvas, scaleX, scaleY, selectedNote) => {

    //var canvas = document.getElementById("pianoBoard");
    var ctx = canvas.getContext('2d');
    ctx.scale(scaleX, scaleY);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    const canvasW = window.innerWidth;
    const canvasH = window.innerHeight;
    const pianoW = 700;
    const pianoH = 170;
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
    const blackNoteHeight = whiteNoteHeight * 0.65;
    const whiteNoteGap = 1;
    const pianoHighlightShadowSize = 2;
    const pianoWhiteNoteColor = "white";
    const pianoBlackNoteColor = "black"

    const primaryBackgroundColor = "#f1d4d4";
    const pianoKeyboardColor = "#7a7a7a";
    const pianoShadowColor = "#3f3f3f";
    const pianoHighlightColor = "#484c7f";
    const pianoKeybedBackgroundColor = "#9a9a9a";
    const pianoNoteSelectedColor = "#1ba7d1";
    const pianoNoteSelectedShadowColor = "#3f3f3f";

    ctx.fillStyle = "#efb4b4";
    ctx.fillRect(0, 0, canvasW, canvasH);


    //Draw canvas background
    ctx.fillStyle = primaryBackgroundColor;
    ctx.fillRect(0, 0, canvasW, canvasH / 2);


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

    // console.log(props.testState);


    let i = 0;
    let currentOctave = 0;
    for (i = 0; i < whiteNoteCount; i++) {
        currentOctave = Math.floor(i / whiteNotesPerOctaveCount);
        const x = i * whiteNoteWidth + keyboardContainerX + 1;
        const y = keyboardContainerY;
        const w = whiteNoteWidth - whiteNoteGap;
        const h = whiteNoteHeight;
        const noteIndex = whiteNoteIndexes[i % whiteNoteIndexes.length];
        const indexToCheck = noteIndex + (currentOctave * notesPerOctave);
        let textColor = '#888';

        const data = matchingNotes.noteData.testData;

        //Draw highlighted key
        if (data[selectedNote.text]) {

            //console.log(data[selectedNote.text]);
            ctx.fillStyle = pianoWhiteNoteColor;
            ctx.fillRect(x, y, w, h);

            for (let j = 0; j < data[selectedNote.text].length; j++) {
                if (indexToCheck === data[selectedNote.text][j]) {
                    ctx.fillStyle = pianoNoteSelectedColor;
                    ctx.fillRect(x, y, w, h);


                }
            }

            if (indexToCheck === data[selectedNote.text][0]) {
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x + w / 2, y + h - 15, 6, 0, Math.PI * 5, false);
                ctx.closePath();
                ctx.fill();
            }

            //Draw top shadow
            ctx.fillStyle = pianoNoteSelectedShadowColor;
            ctx.fillRect(x, y, w, 2);

        } else {
            //Draw white key
            ctx.fillStyle = pianoWhiteNoteColor;
            ctx.fillRect(x, y, w, h);

            //Draw top shadow
            ctx.fillStyle = pianoNoteSelectedShadowColor;
            ctx.fillRect(x, y, w, 2);
        }

    }

    //Draw black keys

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
        const indexToCheck = noteIndex + (currentOctave * notesPerOctave);

        const data = matchingNotes.noteData.testData;

        //Draw highlighted key
        if (data[selectedNote.text]) {

            //console.log(data[selectedNote.text]);
            ctx.fillStyle = pianoBlackNoteColor;
            ctx.fillRect(x, y, w, h);

            for (let j = 0; j < data[selectedNote.text].length; j++) {
                if (indexToCheck === data[selectedNote.text][j]) {
                    ctx.fillStyle = pianoNoteSelectedColor;
                    ctx.fillRect(x, y, w, h);
                }

                if (indexToCheck === data[selectedNote.text][0]) {
                    ctx.fillStyle = "white";
                    ctx.beginPath();
                    ctx.arc(x + w / 2, y + h - 15, 6, 0, Math.PI * 5, false);
                    ctx.closePath();
                    ctx.fill();
                }

                //Draw top shadow
                ctx.fillStyle = pianoNoteSelectedShadowColor;
                ctx.fillRect(x, y, w, 2);
            }

        } else {
            //Draw white key
            ctx.fillStyle = "black";
            ctx.fillRect(x, y, w, h);

            ctx.fillStyle = "#555";
            ctx.fillRect(x, y + h - 7, w, 7);
        }

    }

}

const CanvasDraw = (props) => {
    const selectedNote = props.testState;
    const [scale, setScale] = React.useState({ x: 1, y: 1 });
    const canvas = React.useRef(null);

    const calculateScaleX = () => (!canvas.current ? 0 : canvas.current.clientWidth / scaleWidth);
    const calculateScaleY = () => (!canvas.current ? 0 : canvas.current.clientHeight / scaleHeight);

    const resized = () => {
        canvas.current.width = canvas.current.clientWidth;
        canvas.current.height = canvas.current.clientHeight;
        setScale({ x: calculateScaleX(), y: calculateScaleY() });
    };

    //useEffect(() => resized(), []);

    useEffect(() => {
        const currentCanvas = canvas.current;
        currentCanvas.addEventListener("resize", resized);
        return () => currentCanvas.removeEventListener("resize", resized);
    });

    useEffect(() => {
        drawingPiano(canvas.current, scale.x, scale.y, selectedNote);
    }, [scale, selectedNote]);

    return <canvas ref={canvas} style={{ width: "100%", height: "100%" }} />;
}

export default CanvasDraw;