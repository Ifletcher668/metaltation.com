import React, {RefObject, useEffect, useState} from 'react';
// import {Layout, Typography, Menu, Row, Affix} from 'antd'
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import Title from '../Title/index';
import config from '../../utils/website';
import {useImage} from '../../utils/graphql/queries/localImages';
import {useStrapi} from '../../utils/graphql/queries/useStrapi';
import {formatDateOnSlug} from '../../utils/formatDate';

interface Props {
    target: RefObject<HTMLElement>;
}

const Sidebar: React.FC<Props> = (props: Props) => {
    const {sidebarProfileImg} = useImage();
    const {
        strapi: {hashtags, blogs},
    } = useStrapi();

    const [loaded, setIsLoaded] = useState<boolean>(false);
    const [sticky, makeSticky] = useState<string>('');
    const [itemsToShow, setItemsToShow] = useState<number>(5);
    const [expanded, setExpanded] = useState<boolean>(false);
    // 1200px corresponds with sizes set in media queries
    const windowSizeWhenMadeStickySidebar = 1200;

    // wait until component mounts, then apply styles
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const listener = () => {
        if (window.innerWidth > windowSizeWhenMadeStickySidebar) {
            return makeSticky('sticky');
        } else {
            return makeSticky('');
        }
    };

    useEffect(() => {
        // checks inner width on first mount
        if (window.innerWidth > windowSizeWhenMadeStickySidebar) {
            makeSticky('sticky');
        } else {
            makeSticky('');
        }
        window.addEventListener('resize', listener);
        return () => window.addEventListener('resize', listener);
    }, []);

    const showHideButton = (length: number) => {
        return (
            <button
                className="btn"
                onClick={() => {
                    itemsToShow === 5
                        ? setItemsToShow(length)
                        : setItemsToShow(5);
                    setExpanded(!expanded);
                }}
            >
                {expanded ? 'Show Less' : 'Show More'}
            </button>
        );
    };
    // rerenders Array.map(s) when state change
    useEffect(() => {}, [expanded]);

    return (
        <>
            <aside
                id="sidebar"
                role="sidebar"
                className={`${sticky} ${loaded ? 'sidebar' : ''} `}
            >
                <section className="sidebar-item">
                    <Title level={5}>Past Events</Title>
                    {blogs.map((blog, idx) => {
                        const {title, published, slug} = blog;

                        if (
                            title.length > 16 &&
                            window.innerWidth > windowSizeWhenMadeStickySidebar
                        ) {
                            const shortenedTitle = title.slice(0, 16);
                            return (
                                <Link
                                    key={idx}
                                    to={`${
                                        config.routes.pastEvents.path
                                    }/${formatDateOnSlug(published)}/${slug}`}
                                >
                                    <Title level={6}>{shortenedTitle}...</Title>
                                </Link>
                            );
                        } else {
                            return (
                                <Link
                                    key={idx}
                                    to={`${
                                        config.routes.pastEvents.path
                                    }/${formatDateOnSlug(published)}/${slug}`}
                                >
                                    <Title level={6}>{title}</Title>
                                </Link>
                            );
                        }
                    })}
                    {blogs.length > 5 && showHideButton(blogs.length)}
                </section>
                <section className="sidebar-item">
                    <Title level={5}>Contact the Team</Title>
                    <Title level={6}>Send us a Message</Title>
                    <Title level={6}>208-841-9062</Title>
                </section>
                <section className="sidebar-item">
                    <Title level={5}>Life in #</Title>
                    {hashtags.slice(0, itemsToShow).map(({tag}, idx) => {
                        return (
                            <Title key={idx} level={6}>
                                {tag.startsWith('#') ? tag : `#${tag}`}
                            </Title>
                        );
                    })}
                    {hashtags.length > 5 && showHideButton(hashtags.length)}
                </section>
                <section className="sidebar-item">
                    <Image fluid={sidebarProfileImg.childImageSharp.fluid} />
                    <div className="sidebar-social-links">
                        <a href={config.socials.facebook} target="_blank">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href={config.socials.instagram} target="_blank">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </section>
            </aside>
        </>
    );
};

export default Sidebar;
