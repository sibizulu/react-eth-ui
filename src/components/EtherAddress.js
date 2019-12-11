import React, { useRef, useState } from 'react'
import { Segment, Button, Grid, Popup } from 'semantic-ui-react'
import * as config from '../config'
import ModalPopup from '../utils/modalPopup'

const EtherAddress = props => {
    const [copySuccess, setCopySuccess] = useState('')
    const [openSuccess, setOpenSuccess] = useState(false)
    const textAreaRef = useRef(null)

    const copyToClipboard = e => {
        textAreaRef.current.select()
        document.execCommand('copy')
        e.target.focus()
        setCopySuccess('Copied!')
    }

    const closeModel = () => setOpenSuccess(false)
    const openModel = () => setOpenSuccess(true)

    return (
        <>
            <Segment color={config.COLOR}>
                <Grid>
                    <Grid.Column width={12}>
                        <textarea
                            readOnly
                            ref={textAreaRef}
                            value={props.address}
                            style={{
                                opacity: 0.01,
                                height: 0,
                                position: 'absolute',
                                zIndex: -1
                            }}
                        />
                        {props.address}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button
                            floated="right"
                            basic
                            color={config.COLOR}
                            icon="qrcode"
                            onClick={openModel}
                        />
                        {document.queryCommandSupported('copy') && (
                            <Popup
                                trigger={
                                    <Button
                                        onClick={copyToClipboard}
                                        floated="right"
                                        basic
                                        color={config.COLOR}
                                        icon="copy"
                                    />
                                }
                                content={copySuccess}
                                on="click"
                                hideOnScroll
                                inverted
                            />
                        )}
                    </Grid.Column>
                </Grid>
            </Segment>
            <ModalPopup
                open={openSuccess}
                close={closeModel}
                qrcode={props.address}
            />
        </>
    )
}

export default EtherAddress
