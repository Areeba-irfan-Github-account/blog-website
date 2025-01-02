'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Comments from '@/app/components/Comments';


interface Post {
    id: number;
    title: string;
    date: string;
    content: string;
    imageUrl: string;


}



const posts: Post[] = [

    {
        id: 1,
        title: "Innovative Trends in Robotics",
        date: "October 10, 2023",
        content: `
        <p><span className='text-custom-dark-blue text-2xl block p-2'>The Rise of Autonomous Robotics Autonomous </span>Robotics is rapidly advancing, transforming industries and daily life. Explore the latest innovations, from autonomous drones to smart manufacturing, shaping the future of technology Robots have revolutionized industries ranging from manufacturing to healthcare. These robots, equipped with advanced sensors, AI, and machine learning algorithms, can make decisions, navigate environments, and execute tasks without human intervention. Autonomous drones, self-driving cars, and robotic delivery systems are just a few examples of how this technology is transforming everyday life. As the sophistication of these systems grows, we can expect to see them integrate even more seamlessly into areas such as logistics, exploration, and emergency response.</p>
        <p><span className='text-custom-dark-blue text-2xl block p-2'>Collaborative Robots (Cobots)</span> Unlike traditional robots, which often operate in isolation, collaborative robots or "cobots" are designed to work alongside humans. These machines are equipped with sensors to detect human presence and ensure safety while performing tasks. Cobots are increasingly being used in industries like manufacturing, where they assist with repetitive or physically demanding tasks, allowing human workers to focus on more complex duties. As cobots become more affordable and easier to deploy, small and medium-sized businesses are also beginning to leverage their benefits.</p>
        <p><span className='text-custom-dark-blue text-2xl block p-2'>Robotics in Healthcare</span> The healthcare industry has seen some of the most exciting advancements in robotics, from robotic-assisted surgeries to rehabilitation robots. Surgical robots allow for minimally invasive procedures with high precision, reducing recovery times and improving patient outcomes. In addition, robotic prosthetics, exoskeletons, and rehabilitation devices are empowering individuals with mobility impairments, enhancing their quality of life. As AI-driven diagnostics and personalized treatment options continue to develop, the role of robotics in healthcare will expand even further.</p>
        <p><span className='text-custom-dark-blue text-2xl block p-2'>Smart Manufacturing and Industry 4.0</span> Robotics is a key driver of Industry 4.0, where smart factories leverage automation, IoT, and data analytics to optimize production processes. Advanced robots, capable of self-optimization and learning from data, are playing a central role in making manufacturing more efficient, flexible, and cost-effective. Robotics integrated with IoT (Internet of Things) devices can provide real-time monitoring, predictive maintenance, and adaptive production lines, reducing downtime and waste in manufacturing environments.</p>
        <p><span className='text-custom-dark-blue text-2xl block p-2'>The Future of Robotics:</span> Ethics and Workforce Impact As robotics continue to advance, ethical considerations are becoming increasingly important. The potential for job displacement due to automation has raised concerns about the future workforce. While robots enhance productivity, there’s an ongoing debate about how to balance technological progress with job creation and human well-being. Moreover, discussions about robot ethics, including AI decision-making and accountability, are growing. Ensuring that robotics development is guided by ethical principles will be key to shaping a future where humans and robots can thrive together.
    `,
        imageUrl: '/blogg-8.webp',
    },
    {
        id: 2,
        title: "Intelligent AI-Powered Personal Assistants",
        date: "2023-10-01",
        content: `
    <p><span className='text-custom-dark-blue text-2xl block p-2'>AI-powered personal assistants, like Siri, Alexa, and Google Assistant, have become integral to daily routines, offering convenience, efficiency, and accessibility. These intelligent systems use natural language processing (NLP) and machine learning to understand voice commands, execute tasks, and even learn from user preferences. From setting reminders and sending messages to controlling smart home devices, AI assistants streamline everyday tasks, enhancing productivity while reducing the need for manual interaction.</p>
    <p><span className='text-custom-dark-blue text-2xl block p-2'>One of the standout features of AI-powered personal assistants is their ability to provide personalized experiences. These assistants learn from user behavior and preferences, allowing them to deliver more relevant recommendations and services over time. Whether it's suggesting a playlist based on your music taste or predicting your preferred route for commuting, AI assistants offer a tailored experience that adapts to individual needs. This level of personalization is set to grow, as AI models become more sophisticated in anticipating and fulfilling user demands.</p>
    <p><span className='text-custom-dark-blue text-2xl block p-2'>AI assistants are at the core of smart home ecosystems, enabling seamless control over a wide range of connected devices. From adjusting thermostats and lighting to managing security systems and appliances, AI-powered assistants act as the central hub for smart homes. Their integration across different devices allows for hands-free management of daily tasks, providing comfort, security, and efficiency in household operations. This interconnectedness is transforming how people interact with their environments, making homes smarter and more intuitive.</p>
    <p><span className='text-custom-dark-blue text-2xl block p-2'>AI-powered assistants are not just for personal use; they are increasingly being integrated into the workplace to improve productivity and efficiency. In business settings, AI assistants can schedule meetings, manage emails, set up reminders, and even automate routine tasks like generating reports. Additionally, virtual assistants like Microsoft's Cortana and IBM's Watson are helping businesses streamline customer service with AI-driven chatbots, reducing the burden on human employees and providing instant support to customers.</p>
    <p><span className='text-custom-dark-blue text-2xl block p-2'>The Future of Robotics:</span> While AI-powered personal assistants offer numerous benefits, there are challenges to consider, particularly in terms of privacy and data security. These systems require access to personal information to function effectively, raising concerns about how this data is stored and used. Additionally, as AI assistants become more integrated into daily life, ensuring their ethical use, transparency, and accountability is crucial. Looking ahead, advancements in AI and machine learning will continue to drive the evolution of these systems, making them even more intuitive, responsive, and capable of assisting with increasingly complex tasks.
    ` ,
        imageUrl: "/blog-9.webp",
    },
    {
        id: 3,
        title: "Revolutionizing Communication: Large Language Models (LLMs)",
        date: "2023-10-01",
        content: `
    <p><span className='text-custom-dark-blue text-2xl block p-2'> The Power of Large Language Models  </span>Large Language Models (LLMs), such as GPT-4, are transforming how we communicate with technology. These AI systems are designed to understand and generate human-like text based on vast amounts of data. By leveraging advanced machine learning techniques, LLMs can engage in complex conversations, write essays, and even generate creative content. Their ability to comprehend context and produce coherent, relevant text has revolutionized applications in industries ranging from customer service to content creation, offering unprecedented levels of interaction between humans and machines.</p>
    
                       <p> <span className='text-custom-dark-blue text-2xl block p-2'>Enhancing Customer Service and Support</span> One of the most significant impacts of LLMs is in customer service, where they are streamlining communication between companies and clients. Chatbots powered by LLMs can handle a wide array of queries, providing quick, accurate responses that reduce the need for human intervention. These AI-driven systems are not only available 24/7, but they can also manage multiple conversations simultaneously, improving efficiency. As a result, businesses can enhance their customer support, offering faster and more personalized experiences while reducing operational costs.</p>
    
                      <p>  <span className='text-custom-dark-blue text-2xl block p-2'> Accelerating Content Creation</span> LLMs are transforming the way content is created by automating tasks that previously required significant time and effort. Whether it’s generating blog posts, drafting emails, or writing reports, LLMs can produce high-quality text quickly and efficiently. This has opened up new opportunities for writers, marketers, and businesses, allowing them to focus on strategy and creativity while leaving routine writing tasks to AI. Furthermore, LLMs can adapt their tone and style to match the intended audience, providing a level of customization that enhances the overall quality of content.</p>
    
                      <p><span className='text-custom-dark-blue text-2xl block p-2'>Facilitating Research and Knowledge Expansion</span>  In academia and research, LLMs are revolutionizing how information is processed and disseminated. Researchers can use LLMs to summarize complex papers, generate literature reviews, and even brainstorm ideas for new projects. These models can sift through vast amounts of data, providing insights and connections that might not be immediately apparent to human readers. As a result, LLMs are speeding up the research process and helping professionals in various fields stay up-to-date with the latest developments by offering concise and accessible summaries of extensive information.</p>
    
                       <p><span className='text-custom-dark-blue text-2xl block p-2'>Ethical Considerations and Future Potential </span> While LLMs offer numerous benefits, their widespread use raises important ethical concerns, particularly around issues of bias, misinformation, and data privacy. As LLMs are trained on massive datasets, they can inadvertently learn and propagate biases present in the data, leading to skewed or harmful outputs. Additionally, the misuse of LLMs for generating misleading or false information is a growing concern. Addressing these challenges will be crucial as LLMs continue to evolve and play a more significant role in communication. Looking forward, the potential for LLMs to revolutionize industries and enhance human capabilities is immense, but it must be balanced with ethical considerations to ensure responsible and beneficial use.</p>
                        
    ` ,
        imageUrl: "/blog-11.jpeg",
    },
    {
        id: 4,
        title: "Blockchain Meets AI: A New Era of Innovation",
        date: "2023-10-01",
        content: `
    <p><span className='text-custom-dark-blue text-2xl block p-2'>  The Intersection of Blockchain and AI   </span>Blockchain and Artificial Intelligence (AI) are two of the most transformative technologies of our time, and their convergence is opening new avenues for innovation. Blockchain, known for its decentralized and secure nature, ensures data transparency and immutability, while AI brings intelligent decision-making and automation to the table. By combining the strengths of both, industries are unlocking new possibilities, such as secure AI model training, enhanced data integrity, and decentralized intelligence. Together, these technologies are poised to reshape the future of industries like finance, healthcare, supply chain, and more.</p>
    
                       <p> <span className='text-custom-dark-blue text-2xl block p-2'>Enhancing Data Security and Privacy</span> One of the key advantages of integrating blockchain with AI is the ability to enhance data security and privacy. AI systems often require massive datasets to function effectively, but the centralization of data poses risks such as hacking and misuse. Blockchain’s decentralized ledger provides a solution by offering a secure and transparent way to store and manage data. With blockchain, AI can access reliable data without compromising privacy, ensuring that sensitive information is protected and only accessible to authorized parties. This combination strengthens trust in AI systems and reduces the risk of data breaches.</p>
    
                      <p>  <span className='text-custom-dark-blue text-2xl block p-2'> Decentralized AI Model Training</span> Training AI models typically requires enormous computational resources, which are often concentrated in the hands of a few tech giants. Blockchain can democratize this process by enabling decentralized AI model training. Through blockchain-based platforms, individuals and organizations can contribute computational power and data in a decentralized manner, incentivized by cryptocurrency rewards. This not only reduces the costs of training AI models but also promotes transparency in the development process. Decentralization can lead to more diverse AI models, reflecting a broader range of perspectives and datasets.</p>
    
                      <p><span className='text-custom-dark-blue text-2xl block p-2'>Revolutionizing Industries Through Smart Contracts</span>  Blockchain’s smart contracts—self-executing contracts with the terms of the agreement directly written into code—are gaining a new layer of intelligence through AI. By incorporating AI into smart contracts, businesses can automate more complex decision-making processes, making contracts adaptive and responsive to real-time data. For example, in supply chain management, AI-enhanced smart contracts can track and predict demand, ensuring automatic replenishment of stock based on forecasts. In finance, they can execute trades or loans automatically based on market conditions. The combination of blockchain and AI brings efficiency, accuracy, and intelligence to automated agreements.</p>
    
                       <p><span className='text-custom-dark-blue text-2xl block p-2'>Addressing Challenges and Looking Ahead </span> While the convergence of blockchain and AI holds great promise, it also presents challenges. Scalability, energy consumption, and the complexity of integration are significant hurdles that must be addressed. Blockchain’s decentralized nature can be slow and energy-intensive, while AI requires vast computational resources, potentially straining existing infrastructures. Moreover, ethical concerns surrounding AI decisions, data biases, and transparency need careful consideration as blockchain is not inherently equipped to solve these issues. Nevertheless, as research continues and innovations arise, the fusion of blockchain and AI is set to drive a new era of technological advancement, fundamentally changing the way industries operate and pushing the boundaries of what’s possible in automation, security, and intelligence.</p>
    ` ,
        imageUrl: "/blog-6.jpeg",
    },
    {
        id: 5,
        title: "The Evolving Landscape of Creativity",
        date: "2023-10-01",
        content: `  <p><span className='text-custom-dark-blue text-2xl block p-2'>  Creativity in the Digital Age  </span>Technology is transforming creativity, from AI-generated art to digital storytelling. Explore how these innovations are reshaping artistic expression and inspiring new forms of creativity.The definition of creativity has expanded dramatically in the digital age, transforming how individuals and industries approach innovation. Traditional forms of artistic expression such as painting, writing, and music have been revolutionized by technology, making creative tools more accessible than ever. With platforms like social media, anyone can share their work globally, and digital tools like graphic design software and AI-powered content generators are enabling new forms of creative output. This democratization of creativity has allowed more voices to be heard and is reshaping what it means to be creative.</p>
    
                       <p> <span className='text-custom-dark-blue text-2xl block p-2'>AI and the Rise of Creative Collaboration</span> Artificial intelligence (AI) is playing an increasingly prominent role in the creative process, acting as both a collaborator and a tool for creators. AI-powered systems can generate visual art, compose music, write stories, and even assist with filmmaking. Rather than replacing human creativity, AI is enhancing it by providing new ways to experiment with ideas and automate repetitive tasks. Creators can use AI to push the boundaries of their work, exploring concepts they may not have considered otherwise. This fusion of human imagination and machine learning is leading to a new era of collaborative creativity.</p>
    
                      <p>  <span className='text-custom-dark-blue text-2xl block p-2'> The Role of Virtual and Augmented Reality</span> Virtual reality (VR) and augmented reality (AR) are opening up new dimensions for creative expression by providing immersive environments where creators and audiences can interact in novel ways. Artists are using VR to build fully immersive worlds, allowing users to step inside their creations, while AR is being used to overlay digital elements onto the physical world, creating interactive experiences. These technologies are not only transforming entertainment but also education, marketing, and even therapy, offering unique, multisensory ways to engage with content.</p>
    
                      <p><span className='text-custom-dark-blue text-2xl block p-2'>Creativity in Business and Entrepreneurship</span>  Creativity is no longer confined to the arts—it is increasingly valued in business and entrepreneurship. As industries face rapid technological change and global competition, creative thinking is essential for problem-solving and innovation. Companies are encouraging a culture of creativity to develop unique products, services, and solutions. From designing user-friendly apps to crafting compelling marketing campaigns, creativity drives differentiation in the marketplace. In today’s economy, the most successful businesses are those that can harness creativity to stay ahead of the curve.</p>
    
                       <p><span className='text-custom-dark-blue text-2xl block p-2'>The Future of Creativity</span> As technology continues to evolve, so too will the ways in which we create and share ideas. Emerging technologies like AI, blockchain, and the metaverse will further expand the horizons of creativity, enabling even more innovative forms of expression and collaboration. However, this evolving landscape also raises questions about authenticity, ownership, and the role of human creativity in an increasingly automated world. As we navigate these challenges, one thing is clear: creativity will remain a crucial part of how we understand and shape the future, blending the best of human ingenuity with cutting-edge technology.</p>` ,
        imageUrl: "/blog-12.jpg",
    },
    // ... other posts
]


const PostDetails
    = ({ params }: { params: { post: string } }) => {
        const post = posts.find((p) => p.id === parseInt(params.post, 10));

        if (!post) {
            return (
                <div className="flex items-center justify-center min-h-screen text-custom-dark-blue">
                    <div className="text-center p-8 bg-white shadow-xl rounded-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
                        <p className="text-gray-600 mb-6">Sorry, the post you're looking for doesn't exist.</p>
                        <Link href="/blog" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                            Return to Blog
                        </Link>
                    </div>
                </div>
            );
        }

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen bg-gray-50"
            >
                <div className="container mx-auto px-4 py-16">
                    <motion.article
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white shadow-2xl rounded-lg overflow-hidden"
                    >
                        <div className="relative h-96 w-full">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{post.title}</h1>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">

                            </div>
                            <div
                                className="prose prose-lg max-w-none text-custom-dark-blue"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </motion.article>
                    <div className="mt-12">
                        <Comments blogId={post.id.toString()} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-center mt-12"
                    >
                        <Link href="/post" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                            Back to Blog
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        )
    }

export default PostDetails
