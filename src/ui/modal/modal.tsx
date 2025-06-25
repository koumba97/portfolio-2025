import { useState } from "react";
import "./modal.scss";

interface Prop {
    isOpen: boolean;
    children: any;
}
export default function Modal({ isOpen = false, children }: Prop) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(isOpen);
    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-container">{children}</div>
        </div>
    );
}
