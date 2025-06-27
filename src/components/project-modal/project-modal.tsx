import { Button, Modal } from "@mui/material";
import "./project-modal.scss";
import { ProjectInterface } from "@/utils/projects";
import CloseSVG from "@/svg/Close";
import LinkUI from "@/ui/links/link";
import LinkSVG from "@/svg/Link";
import GithubSVG from "@/svg/Github";

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
                    <div className="link-container">
                        {project?.link
                            ? Object.entries(project.link).map(
                                  ([key, value]) => (
                                      <LinkUI key={key} href={value}>
                                          <>
                                              {key === "github" ? (
                                                  <>
                                                      <GithubSVG
                                                          width={20}
                                                          height={20}
                                                          viewBox="6 0 25 35"
                                                      />
                                                      See the code
                                                  </>
                                              ) : key === "live" ? (
                                                  <>
                                                      <LinkSVG
                                                          width={20}
                                                          height={20}
                                                          viewBox="6 0 25 35"
                                                      />
                                                      See the project
                                                  </>
                                              ) : null}
                                          </>
                                      </LinkUI>
                                  )
                              )
                            : null}
                    </div>
                    <Button color="inherit" onClick={handleModal}>
                        Ok
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
