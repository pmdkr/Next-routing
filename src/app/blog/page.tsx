import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "blog",
};
const  page = async() => {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("intentionaly delay");
        },2000)
    })
    return (
        <div>
            <h1 className='text-center text-5xl'>blog page</h1>
        </div>
    )
}

export default page
