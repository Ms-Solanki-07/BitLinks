import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()
  const client = await clientPromise;
  const db = client.db('BitLinks')
  const collection = db.collection('links')

  // check if the short link already exists
  const existingLink = await collection.findOne({ shortUrl: body.shortUrl });
  if (existingLink) {
    return Response.json({ success: false, error: true, message: 'Short url already exists' });
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  })

  return Response.json({ success: true, error: false, message: 'Url Generated successfully' });
}