import React from 'react'
import TextField from './Components/text'
import TextWithImageField from './Components/textWithImage'

export interface IDynamicZone {
    components: StrapiBodyContent[]
}

const StrapiDynamicZone: React.FC<IDynamicZone> = ({
    components,
}: IDynamicZone) => {
    return components.map(
        ({__typename, rich_text, image_right_side, header, media}, idx) => {
            if (__typename === 'STRAPI_ComponentGeneralText') {
                const data = {
                    header,
                    rich_text,
                }
                return <TextField key={idx} data={data} />
            } else if (__typename === 'STRAPI_ComponentGeneralTextWithImage') {
                const data = {
                    header,
                    rich_text,
                    image_right_side,
                    media,
                }
                return <TextWithImageField key={idx} data={data} />
            } else {
                return <h1>No data from Strapi</h1>
            }
        },
    )
}

export default StrapiDynamicZone
