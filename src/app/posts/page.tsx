'use client'

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Post {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}
const page = () => {
    const posts: Post[] = [
        {
            id: 1,
            title: 'Innovative Trends in Robotics',
            description: 'Robotics is rapidly advancing, transforming industries and daily life. Explore the latest innovations, from autonomous drones to smart manufacturing, shaping the future of technology.',
            imageUrl: '/blogg-8.webp',
        },
        {
            id: 2,
            title: 'Intelligent AI-Powered Personal Assistants',
            description: 'AI-powered personal assistants are changing how we manage tasks. Discover how these smart tools enhance productivity and simplify our daily routines.',
            imageUrl: '/blog-9.webp',
        },
        {
            id: 3,
            title: 'Revolutionizing Communication: Large Language Models (LLMs)',
            description: 'Large Language Models (LLMs) are reshaping communication by enabling seamless interactions with technology. Learn how these AI systems enhance writing and coding.',
            imageUrl: '/blog-11.jpeg',
        },
        {
            id: 4,
            title: 'Blockchain Meets AI: A New Era of Innovation',
            description: 'The fusion of blockchain and AI is revolutionizing industries. Explore how this powerful combination improves efficiency and transparency in business operations.',
            imageUrl: '/blog-6.jpeg',
        },
        {
            id: 5,
            title: 'The Evolving Landscape of Creativity',
            description: 'Technology is transforming creativity, from AI-generated art to digital storytelling. Explore how these innovations are reshaping artistic expression and inspiring new forms of creativity.',
            imageUrl: '/blog-12.jpg',
        },
    ];
  return (

    <div>
 <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
            <div className="container mx-auto px-4 py-16">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Articles and Updates
                </motion.h1>

                <div className="space-y-16">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="h-48 w-full object-cover md:h-full md:w-48"
                                    />
                                </div>
                                <div className="p-8">
                                    <h2 className="block mt-1 text-2xl leading-tight font-semibold text-white hover:underline">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 text-gray-300">
                                        {post.description}
                                    </p>
                                    <Link
                                        href={`/posts/${post.id}`}
                                        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export default page