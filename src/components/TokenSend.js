import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'

const TokenSend = props => {
    const { handleSubmit, onSubmit } = props
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field
                name="From"
                type="string"
                label="Sender wallet address"
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
            <Button primary size="huge">
                Send
            </Button>
        </Form>
    )
}

export default reduxForm({
    form: 'tokenSend'
})(TokenSend)
