import React from 'react';
import GridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import BMBlock from './BMBlock';

class BMGrid extends React.Component {

    state = {width:1200, layout:[]}
    
    constructor(props){
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this);
    }    
    
    componentDidMount(){
        this.setState({width:window.innerWidth, height:window.innerHeight*0.06, layout:this.props.layout, texts:this.props.texts})
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions(){
        let layout = this.state.layout
        this.setState({width:window.innerWidth, height:window.innerHeight*0.06, layout:this.props.layout})
        console.log('resized')
    }

    handleTextChange(value, index){
        this.props.textChange(value, index)
    }

    handleChartResize = (layout) => {
        console.log('this is the layout', layout);
        this.props.changeLayout(layout)
    }
    
    getBlocks(){
        return this.props.layout.map((block, index) => 
        (<div  className = "bm-block" key={block.i}>
            <BMBlock edit={this.props.edit} textChange={(value)=>this.handleTextChange(value, block.i)} text={this.props.texts[block.i]} name={block.i} ></BMBlock>
        </div>))
    }

    render() {
        return (
        <GridLayout 
            className="layout bl-layout" 
            layout={this.props.layout} cols={10}  
            width={this.state.width}
            onLayoutChange={this.handleChartResize}
            rowHeight={this.state.height}>
            {this.getBlocks()}
        </GridLayout>
        )
    }
}

export default BMGrid;