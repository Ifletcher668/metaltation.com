import {Link} from 'gatsby';
import React from 'react';
import config from '../../../utils/website';

const Links: React.FC<IProps> = (props: IProps) => {
    const menuItems = [];
    // gets menu items from config object
    for (const route in config.routes) {
        if (Object.prototype.hasOwnProperty.call(config.routes, route)) {
            menuItems.push(config.routes[route]);
        }
    }

    const capitalize = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    return (
        <>
            {menuItems.map((item, idx) => {
                return (
                    <>
                        <li key={idx} className="nav-link">
                            {item.external ? (
                                <a href={item.path}>{capitalize(item.name)}</a>
                            ) : (
                                <Link to={item.path}>
                                    {capitalize(item.name)}
                                </Link>
                            )}
                        </li>
                    </>
                );
            })}
        </>
    );
};

export default Links;
