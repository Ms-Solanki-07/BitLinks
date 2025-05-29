import React from 'react'

const About = () => {
    return (
        <div className='mx-4'>
            {/* About Page */}
            <div className='text-black mx-auto max-w-2xl p-8 flex flex-col gap-4 rounded-xl bg-purple-200 my-6'>
                <h1 className='text-2xl font-bold text-center'>About BitLinks</h1>
                <p className='text-lg'>
                    BitLinks is a URL shortening service that allows you to create short, easy-to-share links from long URLs.
                    It is designed to help you manage and share your links efficiently.
                </p>
                <p className='text-lg'>
                    With BitLinks, you can generate custom short URLs, track link performance, and easily share your links across various platforms.
                </p>
                <p className='text-lg'>
                    Whether you're a business looking to promote your products or an individual wanting to share content, BitLinks makes it simple and effective.
                </p>
            </div>
            {/* follow us - following button for social media profile*/}
            <div className='text-black mx-auto max-w-2xl p-8 flex flex-col gap-4 rounded-xl bg-purple-200 my-6'>
                <h1 className='text-2xl font-bold text-center'>Follow Us</h1>
                <p className='text-lg'>
                    Stay updated with the latest news and features of BitLinks by following us on our social media profiles.
                </p>
                <p className='text-lg'>
                    Your support helps us grow and improve the service for everyone.
                </p>
                <div className='flex justify-center gap-4 mt-4'>
                    <a href="https://www.linkedin.com/in/ms-solanki-07-ms/" target="_blank" rel="noopener noreferrer">
                        <button className='bg-purple-900 p-3 text-white py-1 rounded-lg font-bold'>LinkedIn</button>
                    </a>
                </div>
            </div>

            <div className='text-black mx-auto max-w-2xl p-8 flex flex-col gap-4 rounded-xl bg-purple-200 my-6'>
                <h1 className='text-2xl font-bold text-center'>Contribute to BitLinks</h1>
                <p className='text-lg'>
                    BitLinks is an open-source project, and we welcome contributions from the community.
                    If you're interested in helping us improve the service, check out our GitHub repository.
                </p>
                <p className='text-lg'>
                    Your contributions can help us add new features, fix bugs, and enhance the overall user experience.
                </p>
                <p className='text-lg'>
                    Thank you for your interest in BitLinks!
                </p>
            </div>
        </div>
    )
}

export default About
