import React from 'react'
import MarkdownField from 'react-markdown'

export interface Props {
    data: StrapiBodyContent
}

const TextField: React.FC<Props> = ({data: {rich_text}}: Props) => {
    return <MarkdownField source={rich_text} />
}

export default TextField
