import React from 'react'

import Form from '../components/Form';
import Container from '../components/Container';

class NewEntryScreen extends React.Component {

    state = {
        name: '',
        message: '',
    }

    onNameChange = (ev) => {
        this.setState({
            name: ev.target.value
        })
    }

    onMessageChange = (ev) => {
        this.setState({
            message: ev.target.value
        })
    }

    onSubmit = (ev) => {
        const {name, message} = this.state;
        const {addEntry} = this.props.screenProps;
        this.setState({
            name: '',
            message: '',
        })
        addEntry({
            name,
            message
        })

    }

    render() {
        const {name, message} = this.state
        return (<Container>
            <Form
                message={message}
                name={name}
                onNameChange={this.onNameChange}
                onMessageChange={this.onMessageChange}
                onSubmit={this.onSubmit} />
        </Container>);
    }
}

export default NewEntryScreen
