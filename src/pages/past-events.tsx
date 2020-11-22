import React from 'react'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {useStrapi} from '../utils/graphql/queries/useStrapi'
import Title from '../components/Title'
import Blogs from '../components/Blogs'

// import {ChildImageSharp, InstagramFeed} from '../contracts/post'
// import Instagram from '../components/Instagram'
// import Twitter from '../components/Twitter'
// import Facebook from '../components/Facebook'

export interface Props {
    location: Location
}

export default (props: Props) => {
    return (
        <Layout location={props.location}>
            <SEO title="About Me" />
            <Title level={1}>Past Events</Title>
            <Blogs />
        </Layout>
    )
}
