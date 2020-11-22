require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `${process.env.GATSBY_SITE_NAME}`,
        description: `${process.env.GATSBY_SITE_DESCRIPTION}`,
        author: `@${process.env.GATSBY_SITE_AUTHOR}`,
        siteUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`,
        social: {
            twitter: 'https://www.twitter.com/sagar7993',
            facebook: 'https://www.facebook.com/sagar7993',
            email: 'sagar7993@gmail.com',
            linkedin: 'https://www.linkedin.com/in/sagar-jain-006074a1',
            github: 'https://www.github.com/sagar7993',
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            // TODO: watch in case this doesn't work in prod
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    // include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `${process.env.GATSBY_SITE_NAME}`,
                short_name: `${process.env.GATSBY_SITE_NAME}`,
                start_url: '/',
                background_color:
                    process.env.GATSBY_PRIMARY_ACCENT_COLOR || '#0047E0',
                theme_color:
                    process.env.GATSBY_PRIMARY_ACCENT_COLOR || '#0047E0',
                display: 'minimal-ui',
                icon: 'src/assets/images/logo.png',
            },
        },

        // TODO:
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         path: './src/data/comments',
        //         name: 'comments',
        //     },
        // },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                pageTransitionDelay: 0,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Metal Mania`,
                        variants: [`400`, `500`, `700`],
                    },
                    {
                        family: `Mina`,
                        variants: [`400`, `500`, `700`],
                    },
                ],
            },
        },
        'gatsby-plugin-advanced-sitemap',
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'STRAPI',
                fieldName: 'strapi',
                url: process.env.GATSBY_STRAPI_URL,
                refetchInterval: process.env.NODE_ENV === 'development' && 50,
            },
        },
        {
            resolve: 'gatsby-source-instagram',
            options: {
                username: process.env.GATSBY_INSTAGRAM_SOURCE,
            },
        },
        {
            resolve: `gatsby-plugin-pinterest-twitter-facebook`,
            options: {
                delayTimer: 100,
                pinterest: {
                    enable: true,
                    tall: true,
                    round: false,
                },
                twitter: {
                    enable: true,
                    containerSelector: '.twitter-container',
                    handle: process.env.GATSBY_TWITTER_SOURCE,
                    showFollowButton: true,
                    showTimeline: true,
                    showFollowerCount: true,
                    timelineTweetCount: 1,
                    width: null,
                    height: null,
                    noHeader: true,
                    noFooter: true,
                    noBorders: true,
                    noScrollbar: true,
                    transparent: true,
                },
                facebook: {
                    enable: true,
                    containerSelector: '.facebook-container',
                    profile: process.env.GATSBY_FACEBOOK_SOURCE,
                    // width: 340,
                    // height: 500,
                    tabs: 'timeline, events, messages',
                    hideCover: false,
                    showFacepile: true,
                    smallHeader: false,
                    adaptContainerWidth: true,
                },
            },
        },
        // {
        //     resolve: 'gatsby-plugin-offline',
        //     options: {
        //         precachePages: [
        //             '',
        //             '/posts/*',
        //             '/post/*',
        //             '/tag/*',
        //             '/category/*',
        //             '/about',
        //         ],
        //     },
        // },
        'gatsby-plugin-typescript',
        'gatsby-plugin-sass',
        // 'gatsby-plugin-eslint',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-robots-txt',
        'gatsby-transformer-sharp',
        'gatsby-transformer-yaml',
    ],
}
