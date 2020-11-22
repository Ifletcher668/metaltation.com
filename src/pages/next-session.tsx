import React, {useState} from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import {useStrapi} from '../utils/graphql/queries/useStrapi';
import {useImage} from '../utils/graphql/queries/chakraImages';
import Title from '../components/Title';
import Grid from '../components/Sections/GridWrapper';
import BackgroundImage from 'gatsby-background-image';
import {formatDatePublished} from '../utils/formatDate';

export interface Props {
    location: Location;
}

export default (props: Props) => {
    const {
        strapi: {
            nextSession: {band_name, theme, location, date, about, why},
        },
    } = useStrapi();
    const imgs = Object.values(useImage());

    const gridItems = [
        {band: band_name},
        {why: why},
        {about: about},
        {date: formatDatePublished(date)},
        {'sign-up': 'sign up here!'},
        {location: location},
        {theme: theme},
    ];
    return (
        <Layout location={props.location}>
            <SEO title="About Me" />
            <Title level={1}>Next Session</Title>
            <Grid className="next-session">
                {imgs.map((img, idx) => {
                    const data = gridItems[idx];
                    return <Images key={idx} data={data} img={img} />;
                })}
            </Grid>
        </Layout>
    );
};

const Images = ({data, img}: Props) => {
    const [className, setClassName] = useState<string>('hide');
    const [styles, setStyles] = useState<{[key: string]: string}>({});

    return (
        <BackgroundImage
            onMouseOver={() => {
                setClassName('show');
                setStyles({
                    transform: 'scale(1.7)',
                    transition: '0.5s ease-out',
                });
            }}
            onMouseOut={() => {
                setClassName('hide');
                setStyles({});
            }}
            style={{
                gridArea: Object.keys(data),
                minWidth: '200px',
                minHeight: '200px',
                ...styles,
            }}
            fluid={img.childImageSharp.fluid}
        >
            <p className={className}>{Object.values(data)}</p>
        </BackgroundImage>
    );
};
