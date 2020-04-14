import React from 'react';
import successSvg from './assets/success.svg'

export default class Toast extends React.Component {
  
    constructor (props) {
      super(props)
      this.state = {
        visible: false
      }
    }
    
    componentWillReceiveProps (nextProps) {
        if (this.props.visible !== nextProps.visible) {
            this.setState({
            visible: nextProps.visible
            })
        }
    }

    render () {
      let classes = `toast success `
      classes += this.state.visible ? 'visible' : ''
      return (
        <div className={classes}>
          <figure>
            <img src={successSvg} />
          </figure>
          <p>{ this.props.message }</p>
        </div>
      )
    }
}



