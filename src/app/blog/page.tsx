import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "blog",
};
const page = () => {
    return (
        <div>
            <h1>blog page</h1>
        </div>
    )
}

export default page
