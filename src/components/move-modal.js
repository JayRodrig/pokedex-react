import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MoveModal = props => {
    console.log(props)
    const clickHandler = () => {
        props.toggle();
    }
    return (
        <div>
            <Modal isOpen={props.activeModal} toggle={clickHandler} centered>
            <ModalHeader toggle={clickHandler} className='modal-title'>
                </ModalHeader>
                <ModalBody>
                    <div className='modal-divs modal-moveName col col-12'><p>{(props.activeMove.moveName) ? `${props.activeMove.moveName.slice(0,1).toUpperCase()}${props.activeMove.moveName.slice(1)}`
                        : 'Loading...'}</p></div>
                    <div className='modal-divs'>
                        <p>Type: 
                             {(props.activeMove.moveType) ? ` ${props.activeMove.moveType.slice(0,1).toUpperCase()}${props.activeMove.moveType.slice(1)}` 
                                : 'Loading...'}
                        </p>
                    </div>   
                    <div className='modal-divs'>
                        <p>Power: {props.activeMove.movePower}</p>
                    </div>   
                    <div className='modal-divs'>
                        <p>PP: {props.activeMove.movePP}</p>
                    </div>   
                </ModalBody>
            </Modal>
        </div>
    )
}

export default MoveModal;