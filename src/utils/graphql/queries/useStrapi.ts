import {graphql, useStaticQuery} from 'gatsby'

export const useStrapi: () => Strapi = () =>
    useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                blogs {
                    slug
                    title
                    theme
                    published
                    body {
                        __typename
                        ... on STRAPI_ComponentGeneralText {
                            header
                            rich_text
                        }
                        ... on STRAPI_ComponentGeneralTextWithImage {
                            header
                            rich_text
                            image_right_side
                            media {
                                url
                                alternativeText
                                caption
                                imageFile {
                                    ...FluidImage
                                }
                            }
                        }
                        ... on STRAPI_ComponentGeneralMedia {
                            mediaField: media {
                                url
                                alternativeText
                                caption
                                imageFile {
                                    ...FluidImage
                                }
                            }
                        }
                    }
                    band_information {
                        band_name
                        band_bio
                        social_media {
                            youtube
                            instagram
                            twitter
                            facebook
                            website
                        }
                    }
                }
                hashtags {
                    tag
                }
                nextSession {
                    band_name
                    theme
                    location
                    date
                    about
                    why
                }
            }
        }
    `)
