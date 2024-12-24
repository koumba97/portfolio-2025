import StackContainer from "@/components/stack-container/stack-container";
import "./about-me.scss";

export default function AboutMe() {
    return (
        <div className="section-container">
            <div className="about-me-section section">
                <div className="text-container">
                    <h1 className="title">
                        About <span className="brand">me</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In in urna sit amet sapien accumsan consequat. Class
                        aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos. Vestibulum vitae nibh
                        neque.{" "}
                    </p>
                    <br />
                    <p>
                        Donec lacinia nec ipsum ac consectetur. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Etiam elementum ullamcorper
                        enim, id aliquam libero viverra sit amet.
                    </p>
                </div>
                <StackContainer />
            </div>
        </div>
    );
}
