import React from 'react'


// catch all segments
/**
 * 
 * <localhost:3000 />
 <docs />

 it will catch all routes that contain docs in path
*/

const Docs = async ({ params }: {
    params: Promise<{ slug: string[] }>
}) => {
    const { slug } = await params;
    if (slug.length === 2) {
        return <h1>viewing docs for  feature {slug[0]} and concept {slug[1]}</h1>
    } else if (slug.length === 1) {
        return <h1>viewing docs for feature slug[0]</h1>

    }


}

export default Docs;
