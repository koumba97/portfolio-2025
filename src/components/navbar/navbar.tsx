'use client';

import './navbar.scss';
import { Link } from 'next-view-transitions';
import SuitcaseSVG from '@/svg/Suitcase';
import ToolSVG from '@/svg/Tool';
import UserSVG from '@/svg/User';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import GridSVG from '@/svg/Grid';
import { Locals } from '@/utils/locals';
import { useLang } from '@/context/language-context';

export default function NavBar() {
    const { lang } = useLang();
    let pathname = usePathname();
    pathname = pathname === '/' ? '' : pathname.split('/')[1];

    return (
        <div
            className="bottom-navbar"
            style={{ viewTransitionName: 'anything' }}
        >
            <Link href="/">
                <Tooltip title={Locals.home[lang]} placement="top">
                    <Button
                        className={`${
                            pathname === '' || pathname === 'project'
                                ? 'active'
                                : null
                        }
                        nav-button`}
                        style={{
                            pointerEvents:
                                pathname === 'project'
                                    ? 'initial'
                                    : pathname === ''
                                      ? 'none'
                                      : undefined,
                        }}
                        color="inherit"
                    >
                        <GridSVG
                            width={20}
                            height={20}
                            viewBox="-5 -5 90 90"
                            filled={pathname === '' || pathname === 'project'}
                        />
                    </Button>
                </Tooltip>
            </Link>

            <Link href="/about-me">
                <Tooltip title={Locals.aboutMe[lang]} placement="top">
                    <Button
                        className={`${pathname === 'about-me' ? 'active' : null}
                        nav-button`}
                        color="inherit"
                    >
                        <UserSVG
                            width={24}
                            height={24}
                            viewBox="2 4 20 20"
                            filled={pathname === 'about-me'}
                        />
                    </Button>
                </Tooltip>
            </Link>

            <Link href="/experience">
                <Tooltip title={Locals.experience[lang]} placement="top">
                    <Button
                        className={`${pathname === 'experience' ? 'active' : null}
                        nav-button`}
                        color="inherit"
                    >
                        <SuitcaseSVG
                            width={20}
                            height={20}
                            viewBox="0 1 20 20"
                            filled={pathname === 'experience'}
                        />
                    </Button>
                </Tooltip>
            </Link>

            {/* <Link href="/skills">
                <Tooltip title={Locals.skills[lang]} placement="top">
                    <Button
                        className={`${pathname === 'skills' ? 'active' : null}
                        nav-button`}
                        color="inherit"
                    >
                        <ToolSVG
                            width={24}
                            height={24}
                            viewBox="0 0 37 37"
                            filled={pathname === 'skills'}
                        />
                    </Button>
                </Tooltip>
            </Link> */}
        </div>
    );
}
