import React from 'react';
const ReactMarkdown = require('react-markdown')

class BMBlock extends React.Component {

    constructor(props){
        super(props)
        this.state = {height:100, text:this.props.text}

        this.handleTextChange = this.handleTextChange.bind(this);
    }    

    componentDidMount(){
        this.setState({height:document.getElementById('block-'+this.props.name).offsetHeight-40})
    }

    handleTextChange(event){
        this.props.textChange(event.target.value)
    }

    render() {
        return (<div className="bmi-block" id={'block-'+this.props.name}>
            <p className="bm-name">{this.props.name}</p>
        
        {   this.props.edit ? 
            <textarea style={{height:this.state.height}} value={this.props.text} onChange={(e)=> this.handleTextChange(e)} ></textarea>
            : <ReactMarkdown source={this.props.text} />
        }
        
        </div>)
    }
}

export default BMBlock;