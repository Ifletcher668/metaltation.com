import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Chakras from '../components/Chakras';
import Image from 'gatsby-image';
import {useImage} from '../utils/graphql/queries/chakraImages';
import TextWithImageGridWrapper from '../components/Sections/TextWithImageGridWrapper';
export interface Props {
    location: Location;
}

export default (props: Props) => {
    const images = Object.values(useImage());
    const maxSize: React.CSSProperties = {
        maxWidth: '200px',
        maxHeight: '200px',
    };

    return (
        <Layout location={props.location}>
            <SEO title="Home" />
            {symbols.map((section, idx) => {
                return (
                    <TextWithImageGridWrapper key={idx}>
                        <div className="text-grid">
                            {section.map((row, idx) => {
                                return (
                                    <div key={idx} className="row">
                                        {row.map((col, idx) => {
                                            return <p key={idx}>{col}</p>;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                        <Image
                            fluid={images[idx].childImageSharp.fluid}
                            style={maxSize}
                        />
                    </TextWithImageGridWrapper>
                );
            })}
        </Layout>
    );
};

//? formatting based on this schematic
// section [
//     row [
//         column []
//         column []
//     ]
// ]

export const symbols = [
    // Crown
    [
        [['Nurture'], ['Feelings']],
        [['Receptive'], ['Relationships']],
        [['Self'], ['Care']],
    ],
    // Third Eye
    [
        [['Clarity'], ['Creativity']],
        [['Regeneration'], ['Concentration']],
        [['I creatively live my life in prosperity']],
    ],
    // Throat
    [
        [['Communication'], ['Honesty']],
        [['I speak my personal truth']],
        [['Calm'], ['Nerves']],
    ],
    // Heart
    [
        [['Expand your loving relationships']],
        [['Compassion'], ['Love']],
        [['Heart'], ['Opportunity']],
    ],
    // Solar Plexus
    [
        [['Confidently walk with comfort & ease']],
        [['Live your life free of pain']],
        [['Courage'], ['Direction']],
    ],
    // Sacral
    [
        [["Beautiful, it's time to release your fear"]],
        [['Healthy'], ['Wellbeing']],
        [['Your life lived in harmony']],
    ],
    // Root
    [
        [['Security'], ['Grounded']],
        [['Transform while thriving in life']],
        [['Rid your body of negative energies']],
    ],
];
