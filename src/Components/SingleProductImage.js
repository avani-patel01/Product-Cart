import React from 'react'

function SingleProductImage(props) {
    const { image } = props
    return (
        <div>

            {image && <img src={image[0].url} alt="p.name" width="100%" height="100%" />
            }

        </div>
    )
}

export default SingleProductImage