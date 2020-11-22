import React, {RefObject, createRef, useState} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ReadingProgressBar from '../ReadingProgressBar';
import Sidebar from '../Sidebar';
import BackgroundImage from 'gatsby-background-image';
import {useImage} from '../../utils/graphql/queries/localImages';
import TransitionWrapper from '../Sections/TransitionWrapper';
import config from '../../utils/website';
import {mobileMenuContext as Context} from '../../utils/context';

export interface Props extends IProps {
    children: React.ReactNode;
    location: Location;
}

const Layout: React.FC<Props> = ({children, location}) => {
    const target: RefObject<HTMLDivElement> = createRef();
    const {bannerImg} = useImage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <ReadingProgressBar target={target} />

            <div className={`grid wrapper`} ref={target}>
                <Context.Provider
                    value={{
                        isMobileMenuOpen,
                        toggleMobileMenu,
                    }}
                >
                    <Header />
                </Context.Provider>
                <TransitionWrapper className="max-width">
                    <BackgroundImage
                        fluid={bannerImg.childImageSharp.fluid}
                        className="site-banner max-width"
                    >
                        <div className="tagline">
                            <span>Metal Music.</span>
                            <span>Meditation.</span>
                        </div>
                        <button className="btn">
                            Call to Action (newsletter)
                        </button>
                    </BackgroundImage>
                    <section className="content max-width">
                        <main role="main" id="main" className="main grid">
                            {children}
                        </main>
                        {location.pathname !==
                            config.routes.nextSession.path && (
                            <Sidebar target={target} />
                        )}
                    </section>
                    <Footer />
                </TransitionWrapper>
            </div>
        </>
    );
};

export default Layout;
