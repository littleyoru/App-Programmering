import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

class GenderIcon extends Component {

    constructor(props) {
        super(props)
    }

    render () {

        let icon = this.props.sex === 'F' ? 'female-symbol' : 'male-symbol'

        return (
            <Icon name={icon} type='foundation' color='#148C80' />
        )
    }
}

export default GenderIcon;