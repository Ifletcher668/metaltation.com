import React, {useContext} from 'react';
import {FaTimes} from 'react-icons/fa';
import {mobileMenuContext} from '../../../utils/context';
import Links from './links';

const MobileMenu: React.FC<IProps> = (props: IProps) => {
    const {isMobileMenuOpen, toggleMobileMenu} = useContext(mobileMenuContext);

    return (
        <>
            <nav
                className={`mobile-menu${
                    isMobileMenuOpen ? ' ' + 'show' : ' ' + 'hide'
                }`}
            >
                <div className="mobile-menu-header">
                    <button
                        type="button"
                        className="close-btn"
                        onClick={() => toggleMobileMenu()}
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul
                    className={`${isMobileMenuOpen ? 'mobile-menu-links' : ''}`}
                >
                    <Links />
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;
