import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise;
    const db = client.db('BitLinks')
    const collection = db.collection('links')

    const existingLink = await collection.findOne({ shortUrl: shorturl });
    if (existingLink) {
        redirect(existingLink.url)
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {shorturl}</div>
}