import {Link} from 'gatsby'
import React from 'react'
import {useStrapi} from '../../utils/graphql/queries/useStrapi'
import Title from '../Title'
import config from '../../utils/website'
import {formatDateOnSlug} from '../../utils/formatDate'
// Component to render ALL BLOGS as cards
const Blogs = () => {
    const {
        strapi: {blogs},
    } = useStrapi()

    return (
        <>
            {blogs.map((blog, idx) => {
                const {title, band_information, theme, slug, published} = blog

                return (
                    <article key={idx} className="past-events">
                        <Link
                            to={`${
                                config.routes.pastEvents.path
                            }/${formatDateOnSlug(published)}/${slug}`}
                        >
                            <hr />
                            <Title level={5}>{title}</Title>
                            <Title level={6}>
                                Featuring music by{' '}
                                <span>{band_information.band_name}</span>
                            </Title>
                            <p>{theme}</p>
                            <hr />
                        </Link>
                    </article>
                )
            })}
        </>
    )
}

export default Blogs
