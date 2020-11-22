import React from 'react'

import {graphql} from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Instagram from '../components/Instagram'
import Twitter from '../components/Twitter'
import Facebook from '../components/Facebook'
import Title from '../components/Title'
import StrapiDynamicZone from '../components/StrapiDynamicZone'

export interface Props {
    data: {
        strapi: {
            aboutPage: StrapiAboutPage
        }
    }
    location: Location
}

export const AboutPage = ({
    data: {
        strapi: {aboutPage},
    },
    location,
}: Props) => {
    return (
        <Layout location={location}>
            <SEO title="About Me" />
            <Title level={1}>{aboutPage.header}</Title>
            <StrapiDynamicZone components={aboutPage.body} />
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query {
        strapi {
            aboutPage {
                header
                body {
                    __typename
                    ... on STRAPI_ComponentGeneralTextWithImage {
                        header
                        image_right_side
                        rich_text
                        media {
                            url
                            caption
                            alternativeText
                            imageFile {
                                ...FluidImage
                            }
                        }
                    }
                }
            }
        }
    }
`
