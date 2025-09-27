import React, { createContext, ReactNode, useState } from "react";

export interface ModalContextType{
    statusModal: boolean;
    setStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export interface ModalProviderProps{
    children: ReactNode;
}

export const ModalProvider = ({ children } : ModalProviderProps) => {
    const [statusModal, setStatusModal] = useState(false)

    const handleOpenModal = () => {
        setStatusModal(true)
    }
    const handleCloseModal = () => {
        setStatusModal(false)
    }

    return <ModalContext.Provider value={{ statusModal, setStatusModal, handleCloseModal, handleOpenModal }}>
        { children }
    </ModalContext.Provider>
}