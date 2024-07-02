import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

export default function Article() {
    return (
        <div>Article</div>
    )
}

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata): Promise<Metadata> {
    console.log("🚀 ~ parent:", await parent)
    console.log("🚀 ~ searchParams:", searchParams)
    console.log("🚀 ~ params:", params)

    // read route params
    const id = params.id

    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: 'product.title',
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}