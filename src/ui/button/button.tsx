import "./button.scss";

interface Prop {
    children: any;
}

export default function ButtonUI({ children }: Prop) {
    return <div className="button dark">{children}</div>;
}
