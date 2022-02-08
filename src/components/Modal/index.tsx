import React, { Dispatch, SetStateAction } from 'react';
import * as SC from './styles';

interface ModalProps {
    visible: boolean;
    handleVisibility: Dispatch<SetStateAction<boolean>>
}

const Modal = ({
    visible,
    handleVisibility
}: ModalProps) => {
    return (
        <SC.Container
            onClick={() => handleVisibility(false)}
        >
            <SC.Modal>
                <h1>hi</h1>
            </SC.Modal>
        </SC.Container>
    );
}

export default Modal;