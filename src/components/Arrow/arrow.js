import React from 'react'

export default class Arrow extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <img
                onClick={this.props.onSlideAction }
                src="/img/arrow.svg"
                className={ `arrow ${this.props.direction}` }
            />
        )
    }
}