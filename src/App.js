import './App.css';
import { Component } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import KDScale from './KDScale';
import '../node_modules/react-vis/dist/style.css';
import Graph from './Graph';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {residueString: "", graphData: []}; 
        this.updateTextValue = this.updateTextValue.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    
    updateTextValue (event) {
        this.setState( { residueString: event.target.value } );
    }

    updateData (event) {
        this.setState( { graphData: KDScale.calculate(this.state.residueString, 9) } );
    }

    render () {
        return (
            <div>
                <h1>Protein Scale Graph Generator</h1>
                <Graph graphData={this.state.graphData} xLabel = "Residue" yLabel = "Hydrophobicity" />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Scale</FormLabel>
                    <RadioGroup aria-label="scale" name="scale1" >
                        <FormControlLabel value="1" control={<Radio />} label="K-D Hydrophobicity" />
                        <FormControlLabel value="2" control={<Radio />} label="Unimplemented" />
                        <FormControlLabel value="3" control={<Radio />} label="Unimplemented" />
                        <FormControlLabel value="4" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    value = { this.state.residueString }
                    label = "Enter 1-letter residue string"
                    multiline
                    onChange = { this.updateTextValue }
                    variant="outlined"
                    type="text"
                    />
                <TextField
                    value = { this.state.window }
                    label = "Window size (Unimplemented)"
                    onChange = { this.updateWindowValue }
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