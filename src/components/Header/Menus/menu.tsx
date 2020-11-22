import React, {useContext, useEffect, useState} from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import {mobileMenuContext} from '../../../utils/context';
import Links from './links';

export default () => {
    const {toggleMobileMenu} = useContext(mobileMenuContext);
    const [fullMenu, setFullMenu] = useState<boolean>(true);

    const changeMenuListener = () => {
        window.innerWidth >= 1200 ? setFullMenu(true) : setFullMenu(false);
    };

    // verify which menu to use on first render
    useEffect(() => {
        changeMenuListener();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', changeMenuListener);
        return window.addEventListener('resize', changeMenuListener);
    }, [window.innerWidth]);

    return (
        <nav role="navbar" className={`navbar${fullMenu ? '' : ' ' + 'flex'}`}>
            {fullMenu && (
                <ul className="site-navigation">
                    <Links />
                </ul>
            )}
            {!fullMenu && (
                <button
                    type="button"
                    className="toggle-menu"
                    onClick={() => toggleMobileMenu()}
                >
                    <FaAlignJustify />
                </button>
            )}
        </nav>
    );
};
