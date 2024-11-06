'use client';

import Link from 'next/link';
import classes from './nav-link.module.css';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps): JSX.Element {
    const path = usePathname();  // hook which give currently active path i.e., path after the domain

    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
    );
}

