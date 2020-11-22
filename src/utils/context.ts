import React, {createContext} from 'react';

type MobileMenuContext = {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: Function;
};

const ctx: MobileMenuContext = {
    isMobileMenuOpen: false,
    toggleMobileMenu: () => {},
};

export const mobileMenuContext = createContext(ctx);
