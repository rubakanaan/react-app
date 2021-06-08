import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            show: false,
            setShow: false
        }
    }


    handleClose = () => {

        this.setState({
            setShow: false

        })
    }
    handleShow = () => {

        this.setState({
            setShow: true

        })
    }


    render() {

        return (
            <div>
{/* 
                <Modal.Img onClick={this.handleShow} src={this.props.img} alt='' />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Text>{this.props.description}</Modal.Text>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </div>
        )
    }
}

export default SelectedBeast;