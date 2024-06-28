type Item = {
    id: number;
    className: string;
    title: string;
    image: string;
    description: string[];
};

export const items: Item[] = [
    {
        id: 1,
        className: "order-first md:order-last md:justify-end",
        title: "Company Overview",
        image: "/company-overview.svg",
        description: ["TechNova Solutions was established in 2024 with a vision to revolutionize the way businesses leverage technology. We specialize in providing innovative tech solutions that drive growth and efficiency. Our mission is to empower organizations across various industries by delivering cutting-edge technology services and products that address their unique challenges and opportunities.", "At TechNova Solutions, we offer a comprehensive range of services, including software development, IT consulting, cloud computing, cybersecurity, and data analytics. Our team of experienced professionals is dedicated to understanding the specific needs of our clients and crafting tailored solutions that maximize their potential.", "Our approach is centered around three core principles: innovation, reliability, and customer-centricity. We continuously invest in research and development to stay ahead of industry trends and ensure that our clients benefit from the latest advancements in technology. By maintaining a strong commitment to quality and service excellence, we have built long-lasting relationships with our clients, helping them achieve sustainable growth and success."],
    },
    {
        id: 2,
        className: "order-last md:order-first md:justify-start",
        title: "Our Mission",
        image: "/mission.svg",
        description: ["Our mission is to empower businesses of all sizes with cutting-edge technology solutions that solve real-world problems and fuel digital transformation. At TechNova Solutions, we believe that technology is the key to unlocking a brighter future for organizations across every industry. By providing innovative and reliable tech services, we help businesses streamline their operations, enhance their productivity, and achieve their strategic goals.", "We are committed to understanding the unique challenges faced by each of our clients and tailoring our solutions to meet their specific needs. Whether it’s developing custom software, offering expert IT consulting, implementing robust cloud computing infrastructures, ensuring top-notch cybersecurity, or leveraging data analytics for actionable insights, we strive to deliver excellence in every project we undertake.", "Our approach is driven by three core principles: innovation, reliability, and customer-centricity. We continuously invest in research and development to stay ahead of the technological curve, ensuring that our clients benefit from the latest advancements in the industry. Our solutions are designed to be scalable, adaptable, and future-proof, enabling businesses to stay competitive in an ever-evolving digital landscape."]
    },
    // {
    //     id: 2,
    //     className: "",
    //     title: "Our Services",
    //     image: "",
    //     description: "At TechNova Solutions, we specialize in",
    //     listItems: ["Custom Software Development", "Cloud Solutions", "AI and Machine Learning Integration", "Cybersecurity Services", "Digital Transformation Consulting"]
    // },
    // {
    //     id: 3,
    //     className: "",
    //     title: "Our Team",
    //     image: "",
    //     description: "Our team consists of passionate tech enthusiasts, experienced developers, and industry experts who bring diverse skills and perspectives to every project.",
    // },
    // {
    //     id: 4,
    //     className: "",
    //     title: "Core Values",
    //     image: "",
    //     description: "",
    //     listItems: [
    //         {
    //             title: "Innovation",
    //             description: "We constantly push the boundaries of what's possible in tech."
    //         },
    //         {
    //             title: "Client-Centric",
    //             description: "Our clients' success is our top priority."
    //         },
    //         {
    //             title: "Integrity",
    //             description: "We operate with transparency and honesty in all our dealings."
    //         },
    //         {
    //             title: "Excellence",
    //             description: "We strive for the highest quality in everything we do."
    //         },
    //     ]
    // },
    // {
    //     id: 5,
    //     className: "",
    //     title: "Achievements",
    //     image: "",
    //     description: "Since our inception, we've successfully completed over [X] projects, serving clients across [Y] industries, and have maintained a [Z]% client satisfaction rate.",
    // },
];
