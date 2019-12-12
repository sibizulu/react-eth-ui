import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Segment, Form, Button, Header, Divider } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import * as config from '../config'

const TokenSend = props => {
    const { handleSubmit, onSubmit } = props
    return (
        <Segment color={config.COLOR}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header as="h4">Token Transfer</Header>
                <Divider />
                <Field
                    name="From"
                    type="string"
                    label="From"
                    component={InputField}
                    placeholder="Sender wallet address"
                    readOnly
                />
                <Field
                    name="Token"
                    type="string"
                    label="Token address"
                    component={InputField}
                    placeholder="Token address"
                    readOnly
                />
                <Field
                    name="To"
                    type="string"
                    label="Receiver wallet address"
                    component={InputField}
                    placeholder="Receiver wallet address"
                />

                <Field
                    name="Amount"
                    type="string"
                    label="Amount"
                    component={InputField}
                    placeholder="amount"
                />
                <Form.Button
                    content="Submit"
                    color={config.BUTTON_ACTION_COLOR}
                />
            </Form>
        </Segment>
    )
}

export default reduxForm({
    form: 'tokenSend'
})(TokenSend)
