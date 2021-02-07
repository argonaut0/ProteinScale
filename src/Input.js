import { Component } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import KDScale from './KDScale';
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries } from 'react-vis';

class Input extends Component {
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
        this.setState( { data: KDScale.calculate(this.state.value, 7) } );
    }

    render () {
        return (
            <div>
                {this.state.data.length > 0 ?
                    <XYPlot height={300} width={500}>
                        <LineSeries data={this.state.data}/>
                    </XYPlot>
                    :
                    <div></div>
                    }
                <TextField
                    value = { this.state.value }
                    id = "input"
                    multiline
                    onChange = { this.updateTextValue }
                    variant="outlined"
                    type="text"
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

export default Input;