import { Component } from 'react';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

export default class Graph extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div>
                <XYPlot height={300} width={500}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title={this.props.xLabel}/>
                    <YAxis title={this.props.yLabel}/>
                    <LineSeries data={this.props.graphData}/>
                </XYPlot>
            </div>
        ) 
    }
}