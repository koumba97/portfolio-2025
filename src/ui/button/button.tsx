import "./button.scss";
import Button from "@mui/material/Button";

interface Prop {
    children: string;
    type?: "contained" | "outlined";
}

export default function ButtonUI({ children, type = "contained" }: Prop) {
    return (
        <Button className={`button ${type}`} variant={type}>
            {children}
        </Button>
    );
}
