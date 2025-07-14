import { Button, Modal } from '@mui/material';
import './tool-modal.scss';
import CloseSVG from '@/svg/Close';
import Tool, { ToolProp } from '@/ui/tool/tool';

interface Prop {
    tools: ToolProp[];
    isOpen: boolean;
    handleToolModal: () => void;
}

export default function ToolModal({ tools, isOpen, handleToolModal }: Prop) {
    function handleModal() {
        handleToolModal();
    }
    return (
        <Modal
            open={isOpen}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-tool"
        >
            <div className="modal-tool">
                <div className="modal-header">
                    <h3 className="title">Tools</h3>
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
                <div className="content">
                    {tools.map((tool, index) => (
                        <Tool
                            name={tool.name}
                            image={tool.image}
                            link={tool.link}
                            key={`${tool}-${index}`}
                            showName
                        />
                    ))}
                </div>
                <div className="modal-footer">
                    <Button color="inherit" onClick={handleModal}>
                        Ok
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
