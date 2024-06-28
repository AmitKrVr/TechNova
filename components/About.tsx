import Head from 'next/head';
import { items } from '@/lib/constant';
import CompanyOverview from './CompanyOverview';



export default function About() {

    return (
        <section id='about' className="min-h-screen w-full mx-auto flex flex-col pt-20">
            <Head>
                <title>About Us | TechNova Solutions</title>
                <meta name="description" content="Learn about TechNova Solutions - Innovative tech solutions for businesses." />
            </Head>

            <div className='space-y-3 flex flex-col items-center w-full'>
                <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
                    About TechNova Solutions
                </h1>

                {items.map(item => (
                    <CompanyOverview key={item.id} title={item.title} image={item.image} description={item.description} className={item.className} />
                ))}

            </div>

            {/* <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">About TechNova Solutions</h1>

                <section className="bg-blue-600 text-white rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
                    <p className="mb-4">Contact us today to discuss how we can help you achieve your goals.</p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                        Contact Us
                    </button>
                </section>
            </main> */}
        </section >
    );
}