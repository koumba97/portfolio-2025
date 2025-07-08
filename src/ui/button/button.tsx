import "./button.scss";
import Button from "@mui/material/Button";

interface Prop {
    children: React.ReactNode;
    type?: "contained" | "outlined";
    className?: string;
    onClick?: Function;
}

export default function ButtonUI({
    children,
    type = "contained",
    onClick,
    className,
}: Prop) {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <Button
            className={`button ${type} ${className}`}
            variant={type}
            onClick={handleClick}
        >
            {children}
        </Button>
    );
}
