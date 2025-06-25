import { Button, Modal } from "@mui/material";
import "./project-modal.scss";
import { ProjectInterface } from "@/utils/projects";
import CloseSVG from "@/svg/Close";

interface Prop {
    project: ProjectInterface;
    isOpen: boolean;
    handleDescriptionModal: () => void;
}

export default function ProjectModal({
    project,
    isOpen,
    handleDescriptionModal,
}: Prop) {
    function handleModal() {
        handleDescriptionModal();
    }
    return (
        <Modal
            open={isOpen}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-description">
                <div className="modal-header">
                    <h3 className="title">{project?.name}</h3>
                    <Button
                        className="close-button"
                        color="inherit"
                        onClick={handleModal}
                    >
                        <CloseSVG
                            width={30}
                            height={30}
                            viewBox="5 5 120 120"
                        />
                    </Button>
                </div>
                <p className="content">{project?.description}</p>
                <div className="modal-footer">
                    <div className="link-container">links</div>
                    <Button color="inherit" onClick={handleModal}>
                        Ok
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
