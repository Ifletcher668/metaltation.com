import {graphql, useStaticQuery} from 'gatsby'

export const useImage: () => {[key: string]: FluidImage} = () =>
    useStaticQuery(graphql`
        query {
            crownChakra: file(relativePath: {eq: "crown-chakra.png"}) {
                ...FluidImage
            }
            thirdEyeChakra: file(relativePath: {eq: "third-eye-chakra.png"}) {
                ...FluidImage
            }
            throatChakra: file(relativePath: {eq: "throat-chakra.png"}) {
                ...FluidImage
            }
            solarPlexusChakra: file(
                relativePath: {eq: "solar-plexus-chakra.png"}
            ) {
                ...FluidImage
            }
            heartChakra: file(relativePath: {eq: "heart-chakra.png"}) {
                ...FluidImage
            }
            sacralChakra: file(relativePath: {eq: "sacral-chakra.png"}) {
                ...FluidImage
            }
            rootChakra: file(relativePath: {eq: "root-chakra.png"}) {
                ...FluidImage
            }
        }
    `)
