import React from 'react'
import MarkdownField from 'react-markdown'
import Title from '../../Title'

export interface Props {
    data: StrapiBodyContent
}

const TextWithImageField: React.FC<Props> = ({
    data: {header, rich_text, image_right_side},
}: Props) => {
    return (
        <section className={image_right_side ? 'img-right' : 'img-left'}>
            {header && <Title level={3}>{header}</Title>}
            <MarkdownField
                className="markdown"
                children={rich_text}
                allowDangerousHtml
            />
        </section>
    )
}

export default TextWithImageField
