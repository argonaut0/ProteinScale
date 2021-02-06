import {Component} from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import KDScale from './KDScale';
import { Line } from '@nivo/line';

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
                    <Line 
                    width={300}
                    height={300}
                    data={ this.state.data }
                    />
                    : <div></div>
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
                    Hello!
                </Button>
            </div>
        );
    }
}

export default Input;