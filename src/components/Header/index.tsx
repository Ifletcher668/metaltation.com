import React from 'react';
import {Link} from 'gatsby';
import config from '../../utils/website';
import CoverImage from '../../assets/images/Metal-tations.svg';

import {Menu, MobileMenu} from './Menus';

export const Header = () => {
    return (
        <header className="site-header max-width">
            <Link className="cover-image" to={config.routes.home.path}>
                <CoverImage />
            </Link>
            <span className="tagline">
                Finding Inner Peace Amidst the Insanity of Life
            </span>
            <Menu />
            <MobileMenu />
        </header>
    );
};

export default Header;
