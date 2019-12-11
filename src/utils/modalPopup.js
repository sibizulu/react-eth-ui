import React from 'react'
import { Modal, Button, Icon, Segment } from 'semantic-ui-react'
import QR from './QR'

const ModalPopup = props => {
    return (
        <Modal
            size={props.size ? props.size : 'mini'}
            open={props.open ? props.open : false}>
            <Modal.Header>Ethereum Address</Modal.Header>
            <Modal.Content>
                <p>
                    To send funds to this Ethereum address, scan this code using
                    your mobile wallet app
                </p>

                {props.qrcode && (
                    <Segment textAlign="center">
                        <QR value={props.qrcode} />
                    </Segment>
                )}
            </Modal.Content>
            <Modal.Actions>
                <Button color="green" onClick={props.close} inverted>
                    <Icon name="checkmark" /> Got it
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalPopup
