import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';

// Background Images
import bg1 from '../assets/images/background/BG1.jpg';
import bg2 from '../assets/images/background/BG-2.jpg';
import bg3 from '../assets/images/background/BG-3.jpg';
import bg4 from '../assets/images/background/BG-4.jpg';
import bg5 from '../assets/images/background/BG-5.png';
import bg6 from '../assets/images/background/BG-6.jpg';
import bg8 from '../assets/images/background/BG-8.jpg';
import bg9 from '../assets/images/background/BG-9.jpg';
import bg10 from '../assets/images/background/BG-10.png';
import bg11 from '../assets/images/background/BG-11.png';
import bg18 from '../assets/images/background/BG-18.jpg';
import bg20 from '../assets/images/background/BG-20.jpg';
import bg21 from '../assets/images/background/BG-21.jpg';
import bg23 from '../assets/images/background/BG-23-1.jpg';
import charStudy from '../assets/images/background/grandfather.png';

// Character Images
import charAman from '../assets/images/character/aman.png';
import charBaljit from '../assets/images/character/baljit.png';
import charBikram from '../assets/images/character/bikram_face_turnaround.png';
import charCharu from '../assets/images/character/charu.png';
import charCharuBro from '../assets/images/character/charu_brother.png';
import charCleaner from '../assets/images/character/cleaner_character.png';
import charGrandfather from '../assets/images/character/grandfather.png';
import charGrandmother from '../assets/images/character/grandmother.png';
import charIas from '../assets/images/character/IAS_officer_lady.png';
import charChef from '../assets/images/character/indian_chef.jpg';
import charMother from '../assets/images/character/mother.png';
import charMother2 from '../assets/images/character/mother_2.png';
import charNurse from '../assets/images/character/nurse_didi.png';
import charPolice from '../assets/images/character/police_constable.png';
import charPuja from '../assets/images/character/puja.png';
import charSneha from '../assets/images/character/sneha.png';

// Graphic Design Images
import gr1 from '../assets/images/graphic/_40x10_1pc.jpg';
import gr2 from '../assets/images/graphic/20x20_grteen_Car.jpg';
import gr3 from '../assets/images/graphic/b8229df8_3fa2_4c24_aa87_09e6029d964b.jpg';
import gr4 from '../assets/images/graphic/Backdrop_Normal_Frontlit_Black_Back_Flex.jpg';
import gr5 from '../assets/images/graphic/BAISAKHI.jpg';
import gr6 from '../assets/images/graphic/Banner_flex_5x3_2pcs_with_Eyelid.jpg';

import gr8 from '../assets/images/graphic/Budhi_machinary_BACK_LIT_8x3ft_1pcs.jpg';
import gr9 from '../assets/images/graphic/childrens_day.png';
import gr10 from '../assets/images/graphic/childrens_day2.png';
import gr11 from '../assets/images/graphic/childrens_day3.png';
import gr12 from '../assets/images/graphic/dress_sale.jpg';
import gr13 from '../assets/images/graphic/Dussehra_Illustrative_Social_Media_Post.png';
import gr14 from '../assets/images/graphic/FLYER_DESIGN_FOR_DHANRETAS.jpg';
import gr15 from '../assets/images/graphic/ganesh_cake.jpg';
import gr16 from '../assets/images/graphic/gocool_cake.jpg';
import gr17 from '../assets/images/graphic/HDFC_Standee_5x2ft_PCS.jpg';
import gr18 from '../assets/images/graphic/hoording_jewellery.jpg';
import gr19 from '../assets/images/graphic/IMG_20221015_110936.jpg';
import gr20 from '../assets/images/graphic/IMG_20220914_WA0000.jpg';
import gr21 from '../assets/images/graphic/IMG_20220914_WA0001.jpg';
import gr22 from '../assets/images/graphic/IMG_20220914_WA0002.jpg';
import gr23 from '../assets/images/graphic/IMG_20220914_WA0004.jpg';
import gr24 from '../assets/images/graphic/IMG_20220914_WA0005.jpg';
import gr25 from '../assets/images/graphic/IMG_20220922_WA0003.jpg';
import gr26 from '../assets/images/graphic/IMG_20220922_WA0009.jpg';
import gr27 from '../assets/images/graphic/IMG_20220924_WA0007.jpg';
import gr28 from '../assets/images/graphic/IMG_20221012_WA0001.jpg';
import gr29 from '../assets/images/graphic/IMG_20221012_WA0002.jpg';
import gr30 from '../assets/images/graphic/IMG_20221012_WA0003.jpg';
import gr31 from '../assets/images/graphic/IMG_20221012_WA0005.jpg';
import gr32 from '../assets/images/graphic/IMG_20221012_WA0007.jpg';
import gr33 from '../assets/images/graphic/IMG_20221012_WA0008.jpg';
import gr34 from '../assets/images/graphic/KALPANA_SQUARE_25x30ft_NL.jpg';
import gr35 from '../assets/images/graphic/nike_shoes_figma.png';
import gr36 from '../assets/images/graphic/normalflex64x78inch_1pcs_hindi.jpg';
import gr37 from '../assets/images/graphic/NR_FIRE_STATION_CHATRAPUR.jpg';
import gr38 from '../assets/images/graphic/OOH_BLACK_BACK_8x8ft_2pcs.jpg';
import gr39 from '../assets/images/graphic/pizza_fast_food.jpg';
import gr40 from '../assets/images/graphic/promise_day.jpg';
import gr41 from '../assets/images/graphic/Rhino_BLT_6x4ft_2pcs.jpg';
import gr42 from '../assets/images/graphic/siva_ratri_template.jpg';
import gr43 from '../assets/images/graphic/valentine_day.jpg';
import gr44 from '../assets/images/graphic/VISITING_CARD_FRONT1.jpg';
import gr45 from '../assets/images/graphic/VITITING_CARD_BACK1.jpg';
import gr46 from '../assets/images/graphic/WEB_DESIGN.jpg';
import gr47 from '../assets/images/graphic/wedding_card.jpg';
import gr48 from '../assets/images/graphic/Yellow_And_Blue_Modern_Happy_Mens_Day.png';


const Work = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // Graphic Design (Newly Added)
        { id: 101, title: 'Banner Design', category: 'graphic', image: gr1, tags: ['Print', 'Banner'], description: "Professional banner design." },
        { id: 102, title: 'Car Branding', category: 'graphic', image: gr2, tags: ['Branding', 'Vehicle'], description: "Vehicle wrap design." },
        { id: 103, title: 'Graphic Art', category: 'graphic', image: gr3, tags: ['Art', 'Design'], description: "Creative graphic art piece." },
        { id: 104, title: 'Backdrop Flex', category: 'graphic', image: gr4, tags: ['Print', 'Backdrop'], description: "Event backdrop design." },
        { id: 105, title: 'Baisakhi Flyer', category: 'graphic', image: gr5, tags: ['Festival', 'Flyer'], description: "Festival celebration flyer." },
        { id: 106, title: 'Flex Banner', category: 'graphic', image: gr6, tags: ['Print', 'Advertising'], description: "Marketing flex banner." },

        { id: 108, title: 'Backlit Board', category: 'graphic', image: gr8, tags: ['Signage', 'Advertising'], description: "Backlit signage design." },
        { id: 109, title: 'Children\'s Day', category: 'graphic', image: gr9, tags: ['Social Media', 'Post'], description: "Social media creative." },
        { id: 110, title: 'Children\'s Day V2', category: 'graphic', image: gr10, tags: ['Social Media', 'Design'], description: "Alternative design." },
        { id: 111, title: 'Children\'s Day V3', category: 'graphic', image: gr11, tags: ['Social Media', 'Art'], description: "Creative variation." },
        { id: 112, title: 'Dress Sale', category: 'graphic', image: gr12, tags: ['Sale', 'Promo'], description: "Promotional sale creative." },
        { id: 113, title: 'Dussehra Post', category: 'graphic', image: gr13, tags: ['Festival', 'Social'], description: "Festive social media post." },
        { id: 114, title: 'Dhanteras Flyer', category: 'graphic', image: gr14, tags: ['Festival', 'Flyer'], description: "Dhanteras promotional flyer." },
        { id: 115, title: 'Ganesh Cake', category: 'graphic', image: gr15, tags: ['Product', 'Ad'], description: "Product advertisement." },
        { id: 116, title: 'Gocool Cake', category: 'graphic', image: gr16, tags: ['Food', 'In-Store'], description: "Bakery promotion designed." },
        { id: 117, title: 'HDFC Standee', category: 'graphic', image: gr17, tags: ['Corporate', 'Standee'], description: "Corporate standee design." },
        { id: 118, title: 'Jewellery Hoarding', category: 'graphic', image: gr18, tags: ['OOH', 'Hoarding'], description: "Outdoor advertising hoarding." },
        { id: 119, title: 'Design Concept 1', category: 'graphic', image: gr19, tags: ['Concept', 'Draft'], description: "Design concept exploration." },
        { id: 120, title: 'Design Concept 2', category: 'graphic', image: gr20, tags: ['Concept', 'Layout'], description: "Layout study." },
        { id: 121, title: 'Design Concept 3', category: 'graphic', image: gr21, tags: ['Visual', 'Art'], description: "Visual development." },
        { id: 122, title: 'Design Concept 4', category: 'graphic', image: gr22, tags: ['Design', 'Work'], description: "Creative work sample." },
        { id: 123, title: 'Design Concept 5', category: 'graphic', image: gr23, tags: ['Draft', 'Process'], description: "Design in process." },
        { id: 124, title: 'Design Concept 6', category: 'graphic', image: gr24, tags: ['Art', 'Final'], description: "Finalized artwork." },
        { id: 125, title: 'Design Concept 7', category: 'graphic', image: gr25, tags: ['Print', 'Media'], description: "Print media design." },
        { id: 126, title: 'Design Concept 8', category: 'graphic', image: gr26, tags: ['Digital', 'Web'], description: "Digital asset." },
        { id: 127, title: 'Design Concept 9', category: 'graphic', image: gr27, tags: ['Creative', 'Visual'], description: "Creative visual." },
        { id: 128, title: 'Design Concept 10', category: 'graphic', image: gr28, tags: ['Design', 'Project'], description: "Project asset." },
        { id: 129, title: 'Design Concept 11', category: 'graphic', image: gr29, tags: ['Layout', 'Composition'], description: "Compositional study." },
        { id: 130, title: 'Design Concept 12', category: 'graphic', image: gr30, tags: ['Art', 'Style'], description: "Stylistic exploration." },
        { id: 131, title: 'Design Concept 13', category: 'graphic', image: gr31, tags: ['Visual', 'Brand'], description: "Branding element." },
        { id: 132, title: 'Design Concept 14', category: 'graphic', image: gr32, tags: ['Design', 'Ad'], description: "Advertisement draft." },
        { id: 133, title: 'Design Concept 15', category: 'graphic', image: gr33, tags: ['Creative', 'Work'], description: "Creative work." },
        { id: 134, title: 'Kalpana Square', category: 'graphic', image: gr34, tags: ['Large Format', 'OOH'], description: "Large format outdoor design." },
        { id: 135, title: 'Nike Shoes Concept', category: 'graphic', image: gr35, tags: ['UI', 'Concept'], description: "Figma design concept." },
        { id: 136, title: 'Hindi Flex', category: 'graphic', image: gr36, tags: ['Regional', 'Print'], description: "Regional language flex." },
        { id: 137, title: 'Fire Station Design', category: 'graphic', image: gr37, tags: ['Public', 'Signage'], description: "Public signage." },
        { id: 138, title: 'Black Back Flex', category: 'graphic', image: gr38, tags: ['OOH', 'Print'], description: "Outdoor display design." },
        { id: 139, title: 'Pizza Ad', category: 'graphic', image: gr39, tags: ['Food', 'Social'], description: "Food advertisement." },
        { id: 140, title: 'Promise Day', category: 'graphic', image: gr40, tags: ['Social', 'Event'], description: "Social media occasion post." },
        { id: 141, title: 'Rhino BLT', category: 'graphic', image: gr41, tags: ['Branding', 'Print'], description: "Brand collateral." },
        { id: 142, title: 'Shiv Ratri', category: 'graphic', image: gr42, tags: ['Festival', 'Template'], description: "Festival template." },
        { id: 143, title: 'Valentine Day', category: 'graphic', image: gr43, tags: ['Event', 'Social'], description: "Valentine's Day post." },
        { id: 144, title: 'Visiting Card Front', category: 'graphic', image: gr44, tags: ['Stationery', 'Card'], description: "Business card front design." },
        { id: 145, title: 'Visiting Card Back', category: 'graphic', image: gr45, tags: ['Stationery', 'Card'], description: "Business card back design." },
        { id: 146, title: 'Web Design Banner', category: 'graphic', image: gr46, tags: ['Web', 'Banner'], description: "Website banner." },
        { id: 147, title: 'Wedding Card', category: 'graphic', image: gr47, tags: ['Invitation', 'Print'], description: "Wedding invitation design." },
        { id: 148, title: 'Men\'s Day', category: 'graphic', image: gr48, tags: ['Social', 'Post'], description: "Men's Day social media post." },


        // UI/UX Design (7-9)
        {
            id: 7,
            title: 'UX research Process',
            category: 'ui-ux',
            image: img7,
            tags: ['Figma', 'Mobile App', 'Prototyping'],
            description: "A visual representation of the UX research process, showcasing a user-centered approach from problem discovery to solution validation."
        },
        {
            id: 8,
            title: 'Wireframing',
            category: 'ui-ux',
            image: img8,
            tags: ['Figma', 'Web Design', 'Data Viz'],
            description: "Low-fidelity mobile wireframes created to define screen structure, content hierarchy, and user flow. These wireframes focus on usability, navigation clarity, and layout consistency before moving into visual design."
        },
        {
            id: 9,
            title: 'Low-High Fidelity Mockups',
            category: 'ui-ux',
            image: img9,
            tags: ['Adobe XD', 'Web App', 'Interaction'],
            description: "A visual journey from wireframes to high-fidelity mockups, showcasing structured thinking and polished UI execution."
        },
        // Background Design
        {
            id: 10,
            title: 'Background Concept 1',
            category: 'background',
            image: bg1,
            tags: ['Background', 'Concept Art', 'Environment'],
            description: "Atmospheric background design exploring depth and mood."
        },
        {
            id: 11,
            title: 'Background Concept 2',
            category: 'background',
            image: bg2,
            tags: ['Background', 'Layout', 'Scenery'],
            description: "Detailed environmental layout for background scenes."
        },
        {
            id: 12,
            title: 'Background Concept 3',
            category: 'background',
            image: bg3,
            tags: ['Background', 'Digital Painting', 'Landscape'],
            description: "Digital landscape painting focused on lighting and texture."
        },
        {
            id: 13,
            title: 'Background Concept 4',
            category: 'background',
            image: bg4,
            tags: ['Background', 'Environment', 'Art'],
            description: "Creative background artwork for visual storytelling."
        },
        {
            id: 14,
            title: 'Background Concept 5',
            category: 'background',
            image: bg5,
            tags: ['Background', 'Illustration', 'Design'],
            description: "Illustrative background element designed for seamless integration."
        },
        {
            id: 15,
            title: 'Background Concept 6',
            category: 'background',
            image: bg6,
            tags: ['Background', 'Scene', 'Digital Art'],
            description: "Scenic background design with a focus on color harmony."
        },
        {
            id: 16,
            title: 'Background Concept 8',
            category: 'background',
            image: bg8,
            tags: ['Background', 'Environment', 'Composition'],
            description: "Composition study for background environments."
        },
        {
            id: 17,
            title: 'Background Concept 9',
            category: 'background',
            image: bg9,
            tags: ['Background', 'Visual Dev', 'Art'],
            description: "Visual development piece for background settings."
        },
        {
            id: 18,
            title: 'Background Concept 10',
            category: 'background',
            image: bg10,
            tags: ['Background', 'Design', 'Creative'],
            description: "Creative background design with unique stylistic elements."
        },
        {
            id: 19,
            title: 'Background Concept 11',
            category: 'background',
            image: bg11,
            tags: ['Background', 'Illustration', 'Digital'],
            description: "Digital illustration for background use."
        },
        {
            id: 20,
            title: 'Background Concept 18',
            category: 'background',
            image: bg18,
            tags: ['Background', 'Art', 'Scenery'],
            description: "Scenic background art."
        },
        {
            id: 21,
            title: 'Background Concept 20',
            category: 'background',
            image: bg20,
            tags: ['Background', 'Layout', 'Design'],
            description: "Background layout design."
        },
        {
            id: 22,
            title: 'Background Concept 21',
            category: 'background',
            image: bg21,
            tags: ['Background', 'Environment', 'Art'],
            description: "Environmental background art."
        },
        {
            id: 23,
            title: 'Background Concept 23',
            category: 'background',
            image: bg23,
            tags: ['Background', 'Digital', 'Painting'],
            description: "Digital background painting."
        },
        {
            id: 24,
            title: 'Character Study',
            category: 'background',
            image: charStudy,
            tags: ['Character', 'Design', 'Art'],
            description: "Character study and design work."
        },
        // Character Design
        {
            id: 25,
            title: 'Aman',
            category: 'character',
            image: charAman,
            tags: ['Character', 'Design', 'Portrait'],
            description: "Character design exploring personality and style."
        },
        {
            id: 26,
            title: 'Baljit',
            category: 'character',
            image: charBaljit,
            tags: ['Character', 'Expression', 'Art'],
            description: "Expressive character illustration."
        },
        {
            id: 27,
            title: 'Bikram Turnaround',
            category: 'character',
            image: charBikram,
            tags: ['Character', 'Concept', 'Turnaround'],
            description: "Full face turnaround sheet for character modeling/animation reference."
        },
        {
            id: 28,
            title: 'Charu',
            category: 'character',
            image: charCharu,
            tags: ['Character', 'Design', 'Illustration'],
            description: "Detailed character design."
        },
        {
            id: 29,
            title: 'Charu\'s Brother',
            category: 'character',
            image: charCharuBro,
            tags: ['Character', 'Family', 'Concept'],
            description: "Supporting character design."
        },
        {
            id: 30,
            title: 'Cleaner',
            category: 'character',
            image: charCleaner,
            tags: ['Character', 'Profession', 'Study'],
            description: "Character study focusing on professional attire and posture."
        },
        {
            id: 31,
            title: 'Grandfather',
            category: 'character',
            image: charGrandfather,
            tags: ['Character', 'Elderly', 'Portrait'],
            description: "Character design of an elderly figure."
        },
        {
            id: 32,
            title: 'Grandmother',
            category: 'character',
            image: charGrandmother,
            tags: ['Character', 'Elderly', 'Expression'],
            description: "Character design focused on warmth and expression."
        },
        {
            id: 33,
            title: 'IAS Officer',
            category: 'character',
            image: charIas,
            tags: ['Character', 'Professional', 'Saree'],
            description: "Character design representing a professional role."
        },
        {
            id: 34,
            title: 'Indian Chef',
            category: 'character',
            image: charChef,
            tags: ['Character', 'Culinary', 'Digital Paint'],
            description: "Digital painting of a chef character."
        },
        {
            id: 35,
            title: 'Mother',
            category: 'character',
            image: charMother,
            tags: ['Character', 'Family', 'Design'],
            description: "Character design exploring maternal themes."
        },
        {
            id: 36,
            title: 'Mother Variant',
            category: 'character',
            image: charMother2,
            tags: ['Character', 'Variation', 'Concept'],
            description: "Alternative costume or pose design."
        },
        {
            id: 37,
            title: 'Nurse',
            category: 'character',
            image: charNurse,
            tags: ['Character', 'Medical', 'Uniform'],
            description: "Character design of a healthcare professional."
        },
        {
            id: 38,
            title: 'Police Constable',
            category: 'character',
            image: charPolice,
            tags: ['Character', 'Uniform', 'Authority'],
            description: "Character study of a police constable."
        },
        {
            id: 39,
            title: 'Puja',
            category: 'character',
            image: charPuja,
            tags: ['Character', 'Design', 'Style'],
            description: "Stylish character illustration."
        },
        {
            id: 40,
            title: 'Sneha',
            category: 'character',
            image: charSneha,
            tags: ['Character', 'Portrait', 'Modern'],
            description: "Modern character design."
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="work" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-heading text-primary mb-6">Featured Work</h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {['all', 'graphic', 'background', 'character', 'ui-ux'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize
                                    ${filter === cat
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-transparent text-text border-gray-200 hover:border-primary/50'
                                    }`}
                            >
                                {cat === 'ui-ux' ? 'UI/UX Design' : cat === 'graphic' ? 'Graphic Design' : cat === 'background' ? 'Background Design' : cat === 'character' ? 'Character Design' : 'All Projects'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 flex-wrap translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute top-6 right-6 p-2 bg-white rounded-full text-primary opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto max-h-[60vh] object-contain bg-gray-100"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white text-primary rounded-full backdrop-blur-md transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wide">
                                        {selectedProject.category === 'ui-ux' ? 'UI/UX Design' : selectedProject.category === 'graphic' ? 'Graphic Design' : selectedProject.category === 'background' ? 'Background Design' : 'Character Design'}
                                    </span>
                                    <div className="flex gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="text-sm text-text/60 border border-gray-200 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-primary mb-4">{selectedProject.title}</h3>
                                <p className="text-text/80 leading-relaxed text-lg mb-8">
                                    {selectedProject.description || "Project description not available."}
                                </p>

                                <button onClick={() => setSelectedProject(null)} className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Work;
