import { Testimonial, card, services } from "../types/types";

const NAVLINKS = [
    {
        id: 0,
        name: 'BOOK NOW',
        to: '/book'
    }
    , {
        id: 1,
        name: 'SERVICES',
        to: '#services'
    }
    , {
        id: 2,
        name: 'ABOUT',
        to: '#about'
    }
    , {
        id: 3,
        name: 'TESTIMONIALS',
        to: '#testimonials'
    }
]

const SERVICES_INFO: card[] = [
    {
        id: 0,
        image: '/SampleImage1.png',
        type: 'Manicure',
        description: "Indulge in a luxurious manicure and transform your nails into a work of art with expert shaping, cuticle care, massage, and a wide selection of nail polish options."
    },
    {
        id: 1,
        image: '/SampleImage2.png',
        type: 'Acrylic Nails',
        description: "Elevate your style with our premium acrylic nail services, designed to give you durable, glamorous nails that make a statement."
    },
    {
        id: 2,
        image: '/SampleImage3.png',
        type: 'Gel Nails',
        description: "Experience the ultimate in nail elegance with our exquisite gel nail treatments, ensuring a long-lasting, glossy finish that enhances your natural beauty."
    },
    {
        id: 3,
        image: '/SampleImage4.png',
        type: 'Nail Art',
        description: "Unleash your creativity and showcase your unique style with our captivating nail art services, where our talented artists turn your nails into miniature masterpieces."
    },
]

const TESTIMONIALS: Testimonial[] = [
    {
        id: 0,
        image: '/TestimonialImage1.png',
        name: 'Jane Doe',
        description: 'I had a wonderful experience at the salon. The staff was friendly, and the service was top-notch. I love my new nails!'
    },
    {
        id: 1,
        image: '/TestimonialImage2.png',
        name: 'John Smith',
        description: 'The best nail salon in town! They have a wide selection of nail polish colors and the quality of their work is excellent.'
    },
    {
        id: 2,
        image: '/TestimonialImage3.png',
        name: 'Emma Brown',
        description: 'I am a regular customer and I am always satisfied with their services. Highly recommended!'
    },
    {
        id: 3,
        image: '/TestimonialImage4.png',
        name: 'Oliver Johnson',
        description: 'Great atmosphere, professional staff, and fantastic nail art designs. I will definitely come back!'
    }
];





const SERVICE_LIST: services[] = [
    {
        id: 0,
        name: 'Basic Manicure',
        description: 'Includes nail shaping, cuticle care, hand massage, and regular nail polish.',
        duration: '30min - 45min',
        price: 25
    },
    {
        id: 1,
        name: 'Gel Manicure',
        description: 'Includes nail shaping, cuticle care, hand massage, and gel nail polish.',
        duration: '45min - 1h',
        price: 35
    },
    {
        id: 2,
        name: 'Acrylic Nails',
        description: 'Includes nail shaping, cuticle care, application of acrylic nails, and regular nail polish.',
        duration: '1h - 1h 30min',
        price: 45
    },
    {
        id: 3,
        name: 'Nail Art Design',
        description: 'Includes nail shaping, cuticle care, hand massage, and custom nail art design.',
        duration: '1h - 1h 15min',
        price: 50
    },
    {
        id: 4,
        name: 'French Manicure',
        description: 'Includes nail shaping, cuticle care, hand massage, and French nail polish.',
        duration: '30min - 45min',
        price: 30
    },
    {
        id: 5,
        name: 'Pedicure',
        description: 'Includes nail shaping, cuticle care, foot massage, and regular nail polish.',
        duration: '45min - 1h',
        price: 40
    },
    {
        id: 6,
        name: 'SNS Dipping Powder',
        description: 'Includes nail shaping, cuticle care, application of SNS dipping powder, and regular nail polish.',
        duration: '1h - 1h 30min',
        price: 55
    },
    {
        id: 7,
        name: 'Nail Repair',
        description: 'Includes nail repair, cuticle care, hand massage, and regular nail polish.',
        duration: '15min - 30min',
        price: 15
    },
    {
        id: 8,
        name: 'Nail Extension',
        description: 'Includes nail shaping, cuticle care, application of nail extensions, and regular nail polish.',
        duration: '1h - 1h 15min',
        price: 60
    },
    {
        id: 9,
        name: 'Nail Polish Change',
        description: 'Includes nail shaping, cuticle care, and change of nail polish.',
        duration: '15min - 30min',
        price: 10
    }
];

export { NAVLINKS, SERVICES_INFO, TESTIMONIALS, SERVICE_LIST }