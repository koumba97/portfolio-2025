import './link.scss';

interface Prop {
    children: React.ReactNode;
    href: string;
}

export default function LinkUI({ children, href }: Prop) {
    return (
        <a
            className="link"
            target="_blank"
            href={href}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
