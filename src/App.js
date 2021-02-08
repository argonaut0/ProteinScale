import './App.css';
import { Component } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import KDScale from './KDScale';
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {value: "", data: []}; 
        this.updateTextValue = this.updateTextValue.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    
    updateTextValue (event) {
        this.setState( { value: event.target.value } );
    }

    updateData (event) {
        this.setState( { data: KDScale.calculate(this.state.value, 9) } );
    }

    render () {
        return (
            <div>
                <h1>Protein Scale Graph Generator</h1>
                {this.state.data.length > 0 ?
                    <XYPlot height={300} width={500}>
                        <VerticalGridLines/>
                        <HorizontalGridLines/>
                        <XAxis title="Residue Position"/>
                        <YAxis title="Hydrophobicity"/>
                        <LineSeries data={this.state.data}/>

                    </XYPlot>
                    :
                    <div></div>
                    }
                <FormControl component="fieldset">
                    <FormLabel component="legend">Scale</FormLabel>
                    <RadioGroup aria-label="scale" name="scale1" >
                        <FormControlLabel value="K-D Hydrophobicity" control={<Radio />} label="KD" />
                        <FormControlLabel value="placeholder" control={<Radio />} label="what" />
                        <FormControlLabel value="" control={<Radio />} label="wheee" />
                        <FormControlLabel value="" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    value = { this.state.value }
                    label = "Enter 1-letter residue string"
                    id = "input"
                    multiline
                    onChange = { this.updateTextValue }
                    variant="outlined"
                    type="text"
                    />
                <TextField
                    value = { this.state.window }
                    label = "Window size"
                    id = "window"
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