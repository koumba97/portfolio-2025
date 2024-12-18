import "./button.scss";

interface Prop {
    children: any;
    type?: "filled" | "outlined";
}

export default function ButtonUI({ children, type = "filled" }: Prop) {
    return <button className={`button ${type}`}>{children}</button>;
}
