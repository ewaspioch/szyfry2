import React from 'react';

function RightShift(props) {
    let seed = props.seed;
    let seed2 = seed;
    let n = seed.length;
    for (let a = 1; a < n; a++) {
        seed2 = setCharAt(seed2, a, seed.charAt(a - 1));
    }
    seed2 = setCharAt(seed2, 0, '0');
    return seed2;
}

function Feedback(props) {
    let seed = props.seed;
    let tap = props.tap;
    let n = seed.length;
    let w = '0';
    for (let a = 0; a < n; a++) {
        if (tap.charAt(a) === '1') {
            if (!(w - '0') !== !(seed.charAt(a) - '0')) {
                w = '1';
            }
            else {
                w = '0';
            }
        }
    }
    return w;
}

function LSFR(props) {
    let output = RightShift(props);
    output = setCharAt(output, 0, Feedback(props));
    return output;
}

function setCharAt(text, id, c) {
    if (id > text.length - 1)
        return text;
    return text.substring(0, id) + c + text.substring(id + 1);
}

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.handleSeedChange = this.handleSeedChange.bind(this);
        this.handleTapChange = this.handleTapChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);
        this.state = {
            seed: '',
            state: '',
            output: '',
            tap: ''
        };
    }

    handleSeedChange(newText) {
        let text = newText.target.value;
        this.setState({ seed: text });
        this.setState({ state: text });
        this.setState({ output: text.charAt(text.length - 1) });
    }
    handleTapChange(newText) {
        this.setState({ tap: newText.target.value });
    }
    handleGenerate(newSeed, newTap) {
        var props = { seed: newSeed, tap: newTap };
        let output = LSFR(props);
        let ch = output.charAt(output.length - 1);
        this.setState({ state: output });
        this.setState({ output: this.state.output + ch });
    }

    startGenerating() {
        this.timerID = setInterval(
            () => this.handleGenerate(this.state.state, this.state.tap),
            1000
        );
    }

    stopGenerating() {
        clearInterval(this.timerID);
    }
    

    render() {
        const seed = this.state.seed;
        const state = this.state.state;
        const output = this.state.output;
        const tap = this.state.tap;

        return (
            <div>
                <p>
                    Seed:&emsp;
                    <input value={seed} onChange={this.handleSeedChange} />
                </p>
                <p>
                    Wielomian:&emsp;
                    <input value={tap} onChange={this.handleTapChange} />
                </p>
                <button onClick={() => this.startGenerating()}>Generuj</button>
                <button onClick={() => this.stopGenerating()}>Stop</button>
                <p></p>
                {output}
            </div>
        );
    }
}

export default Generator