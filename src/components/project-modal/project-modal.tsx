import { Button, Modal } from "@mui/material";
import "./project-modal.scss";
import { ProjectInterface } from "@/utils/projects";
import ArrowLeftSVG from "@/svg/ArrowLeft";
import CloseSVG from "@/svg/Close";

interface Prop {
    project: ProjectInterface;
    isOpen: boolean;
    handleDescriptionModal: Function;
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
                <div className="header-modal">
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
            </div>
        </Modal>
    );
}
