import {graphql, useStaticQuery} from 'gatsby';

export const useImage: () => {[key: string]: FluidImage} = () =>
    useStaticQuery(graphql`
        query {
            sidebarProfileImg: file(
                relativePath: {eq: "colleen-fletcher-metal-tations.png"}
            ) {
                ...FluidImage
            }
            bannerImg: file(relativePath: {eq: "banner.png"}) {
                ...FluidImage
            }
        }
    `);
