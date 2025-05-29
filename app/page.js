import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-black grid md:grid-cols-2 gap-8 p-8 mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mt-8">
          Welcome to BitLinks
        </h1>
        <p className="text-lg text-center mt-4">
          Your one-stop solution for shortening URLs and managing links.
        </p>
        <div className='flex gap-6 mt-3'>
            <Link href={"/shorten"}><button className='bg-purple-900 p-3 text-white py-1 rounded-lg font-bold'>Try Now</button></Link>
            <Link href={"/github"}><button className='bg-purple-900 p-3 text-white py-1 rounded-lg font-bold'>GitHub</button></Link>
        </div>
      </div>
      <div>
        <Image
          src="/vector.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-auto object-cover mix-blend-darken"
        />
      </div>
    </div>
  );
}
