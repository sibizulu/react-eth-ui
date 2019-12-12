import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Segment, Form, Header } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import * as config from '../config'

const required = value => (value ? undefined : 'Required')

let Minting = props => {
    const { handleSubmit } = props
    return (
        <Segment color={config.COLOR}>
            <Form onSubmit={handleSubmit}>
                <Header as="h4">Minting Token</Header>
                <Field
                    name="ether"
                    component={InputField}
                    placeholder="Enter ether"
                    label="Ether"
                    validate={[required]}
                />
                <Form.Button
                    content="Submit"
                    color={config.BUTTON_ACTION_COLOR}
                />
            </Form>
        </Segment>
    )
}

Minting = reduxForm({
    form: 'contact',
    initialValues: {
        token: 'ssss'
    }
})(Minting)

export default Minting
