import React from 'react';
import GridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import BMBlock from './BMBlock';

class BMGrid extends React.Component {

    state = {width:1200}
    
    constructor(props){
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
    }    
    
    componentDidMount(){
        this.setState({width:window.innerWidth, height:window.innerHeight*0.06})
    }


    handleTextChange(value, index){
        this.props.textChange(value, index)
    }
    
    getBlocks(){
        return this.props.layout.map((block, index) => 
        (<div  className = "bm-block" key={block.i}>
            <BMBlock edit={this.props.edit} textChange={(value)=>this.handleTextChange(value, index)} text={block.text} name={block.i} ></BMBlock>
        </div>))
    }

    render() {
        return (
        <GridLayout 
            className="layout bl-layout" 
            layout={this.props.layout} cols={10}  
            width={this.state.width}
            rowHeight={this.state.height}>
            {this.getBlocks()}
        </GridLayout>
        )
    }
}

export default BMGrid;