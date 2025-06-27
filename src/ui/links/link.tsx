import "./link.scss";

interface Prop {
    children: React.ReactNode;
    href: string;
}

export default function LinkUI({ children, href }: Prop) {
    return (
        <a className="link" href={href}>
            {children}
        </a>
    );
}
