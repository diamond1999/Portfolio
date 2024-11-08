import React from 'react'
import Header from '../components/Header'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="bg-gray-900 text-white">
        <Header />
        
        <section className="max-w-screen-xl mx-auto py-16 px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Profile Section */}
                <div className="w-full col-span-1 flex flex-col sm:-mt-10 items-center">
                    <div className="border-dashed border-green-400 animate-spin border-x-4 opacity-25 rounded-full w-[200px] h-[200px] mb-8"></div>
                    <div className="relative mb-8">
                        <img src="/Ajii.png" alt="Ajibola Oladapo's profile" className="bg-green-400 rounded-full bg-opacity-15 w-[150px] h-[150px] -mt-52 shadow-lg" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="col-span-3 text-gray-300">
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-400">Introduction</h3>
                        <p className="mt-4 text-lg leading-relaxed">I am Ajibola Oladapo, a passionate frontend developer committed to creating intuitive and visually compelling user interfaces. My focus is on providing exceptional user experiences and crafting clean, scalable code.</p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-400">Technical Expertise</h3>
                        <p className="mt-4 text-lg">I have a diverse set of tools at my disposal to build modern, high-performance web applications:</p>
                        <ul className="mt-4 space-y-2 pl-4 list-disc">
                            <li><span className="font-semibold">Core Technologies:</span> HTML5, CSS, JavaScript, TypeScript, React.js, Node.js.</li>
                            <li><span className="font-semibold">Styling:</span> Sass, Tailwind CSS, Bootstrap.</li>
                            <li><span className="font-semibold">Design Tools:</span> Figma, Canva, Adobe XD.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-400">Commitment to Quality</h3>
                        <p className="mt-4 text-lg leading-relaxed">I believe in the power of clean, maintainable code that stands the test of time. My approach to development focuses on delivering quality solutions that are scalable, efficient, and easy to maintain. I follow industry best practices and use modern tools to ensure long-term project sustainability.</p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-400">Responsive Design & Accessibility</h3>
                        <p className="mt-4 text-lg leading-relaxed">Ensuring an optimal user experience across all devices is paramount in today's mobile-first world. I design responsive websites that work seamlessly across desktops, tablets, and mobile devices. Additionally, I prioritize accessibility, ensuring my websites are inclusive and usable for all individuals.</p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold text-green-400">Staying Ahead of the Curve</h3>
                        <p className="mt-4 text-lg leading-relaxed">The tech landscape is constantly evolving, and I stay on top of the latest trends and technologies to deliver modern solutions. Whether it’s experimenting with new frameworks or exploring the latest design patterns, I am always looking to improve and innovate in my work.</p>
                    </section>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
