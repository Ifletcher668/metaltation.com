import {graphql} from 'gatsby';

export const FluidImageFragment = graphql`
    fragment FluidImage on File {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`;
