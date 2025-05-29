"use client";

import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

const Shorten = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generated, setGenerated] = useState('')

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                setUrl("")
                setShortUrl("")
                console.log(result)
                toast(`${result.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => console.error(error));
    }


    return (<>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <div className='text-black md:mx-auto m-4 max-w-2xl p-8 flex flex-col gap-4 rounded-xl bg-purple-200 my-24'>
            <h1 className='text-2xl font-bold text-center'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input
                    type="text"
                    value={url}
                    className='p-3 py-2 focus:outline-purple-300 rounded-lg bg-purple-100 text-black'
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }} />
                <input
                    type="text"
                    value={shortUrl}
                    className='p-3 py-2 focus:outline-purple-300 rounded-lg bg-purple-100 text-black'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setShortUrl(e.target.value) }} />
                <button onClick={() => { generate() }} className='bg-purple-400 p-3 py-2 rounded-lg text-white mt-3 font-bold'>Generate</button>
            </div>
            {generated && <>
                <span className='font-bold text-lg'>Your Link:</span>
                <code><Link target="_blank" href={generated}>{generated}</Link></code>
            </>}
        </div>
    </>
    )
}

export default Shorten
