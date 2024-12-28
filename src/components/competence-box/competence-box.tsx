import "./competence-box.scss";

interface Prop {
    title: string;
    description: string;
    stack: string[];
}

export default function CompetenceBox({ title, description, stack }: Prop) {
    return (
        <div className="competence-box">
            <h2>{title}</h2>
            <p>{description}</p>
            {stack.map((el, index) => {
                return <p key={index}>{el}</p>;
            })}
        </div>
    );
}
