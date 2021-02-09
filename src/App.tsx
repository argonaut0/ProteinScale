import './App.css';
import { Component } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import KDScale from './KDScale';
import '../node_modules/react-vis/dist/style.css';
import Graph from './Graph';
import { DataPoint } from './Graph';

type AppState = {
    residueString: string,
    graphData: DataPoint[],
    windowSize: number,
    radio: string
};

class App extends Component<any, AppState> {
    constructor (props?: any) {
        super(props);
        this.state = {
            residueString: "MLELLPTAVEGVSQAQITGRPEWIWLALGTALMGLGTLYFLVKGMGVSDPDAKKFYAITTLVPAIAFTMYLSMLLGYGLTMVPFGGEQNPIYWARYADWLFTTPLLLLDLALLVDADQGTILALVGADGIMIGTGLVGALTKVYSYRFVWWAISTAAMLYILYVLFFGFTSKAESMRPEVASTFKVLRNVTVVLWSAYPVVWLIGSEGAGIVPLNIETLLFMVLDVSAKVGFGLILLRSRAIFGEAEAPEPSAGDGAAATSD",
            graphData: [],
            windowSize: 7,
            radio: "1"
        };
        this.updateTextValue = this.updateTextValue.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateWindowSize = this.updateWindowSize.bind(this);
        this.updateRadio = this.updateRadio.bind(this);
    }
    
    updateTextValue (event: any): void {
        this.setState( { residueString: event.target.value } );
    }

    updateWindowSize (event: any): void {
        this.setState( { windowSize: event.target.value } );
    }

    updateData (): void {
        this.setState( { graphData: KDScale.calculate(this.state.residueString, this.state.windowSize) } );
    }

    updateRadio (event: any): void {
        this.setState( { radio: event.target.value } );
    }

    render () {
        return (
            <div className="App">
                <h1>Protein Scale Graph Generator</h1>
                <Graph graphData={this.state.graphData} xLabel = "Residue" yLabel = "Hydrophobicity" />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Scale</FormLabel>
                    <RadioGroup aria-label="scale" name="scale1" onChange={ this.updateRadio } value={this.state.radio}>
                        <FormControlLabel value="1" control={<Radio />} label="K-D Hydrophobicity" />
                        <FormControlLabel value="2" disabled control={<Radio />} label="Unimplemented" />
                        <FormControlLabel value="3" disabled control={<Radio />} label="Unimplemented" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    value = { this.state.residueString }
                    label = "Enter 1-letter residue string"
                    multiline
                    spellCheck={false}
                    onChange = { this.updateTextValue }
                    variant="outlined"
                    type="text"
                    />
                <TextField
                    value = { this.state.windowSize }
                    label = "Window size"
                    onChange = { this.updateWindowSize }
                    type = "number"
                    variant="outlined"
                    />
                <Button
                    variant = "contained"
                    color = "primary"
                    onClick = { this.updateData }
                    >
                    Generate Graph 
                </Button>
            </div>
        );
    }
}

export default App;