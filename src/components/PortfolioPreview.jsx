// src/components/PortfolioPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush, Mic, Footprints, ArrowRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const artImages = [
    { src: '/Amy_drawings_pics/2025-01-20_13-02-10_388.jpeg', alt: 'Artwork 1' },
    { src: '/Amy_drawings_pics/2025-01-20_12-38-03_787 (2025-01-20T19_40_27.083).png', alt: 'Artwork 2' },
    { src: '/Amy_drawings_pics/2025-01-20_12-28-28_831.png', alt: 'Artwork 3' },
];

const danceImages = [
    { src: '/Amy_dancing_pics/20240428_140635.jpg', alt: 'Dance 1' },
    { src: '/Amy_dancing_pics/2022-04-24_14-04-10_691.jpeg', alt: 'Dance 2' },
    { src: '/Amy_dancing_pics/2024-04-21_12-18-58_201.jpeg', alt: 'Dance 3' },
];

const speechImages = [
    { src: '/Amy_speech_pics/20190504_211328.jpeg', alt: 'Speech 1' },
    { src: '/Amy_speech_pics/2023-07-28_16-15-49_867.jpeg', alt: 'Speech 2' },
    { src: '/Amy_speech_pics/20240802_141347.jpeg', alt: 'Speech 3' },
];


function FeatureSection({ icon, title, description, images, linkTo, linkText, imageFirst = false, alignButtonRight = false }) {
    const content = (
        <div>
            
            <h3 className="text-3xl font-bold mb-4 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            
            <div className={alignButtonRight ? 'md:text-right' : ''}>
                <Link
                    to={linkTo}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                    {linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    );

    const imageCarousel = (
        <div className="aspect-[4/3] w-full">
            <ImageCarousel images={images} />
        </div>
    );

    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={imageFirst ? 'md:order-last' : ''}>
                {content}
            </div>
            <div>
                {imageCarousel}
            </div>
        </div>
    );
}


function PortfolioPreview() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-28 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                        A Glimpse into My Passions
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Discover the worlds of art, dance, and expression that I love to explore.
                    </p>
                </div>
                <div className="grid gap-20 md:gap-28">
                    {/* Feature 1: Art  */}
                    <FeatureSection
                        icon={<Paintbrush className="inline-block h-4 w-4 mr-1" />}
                        title="ART: Sketch the stress away"
                        description="if u wanna add something here it will look like this "
                        images={artImages}
                        linkTo="/art"
                        linkText="View Art Gallery"
                        alignButtonRight={true} 
                    />

                    {/* Feature 2: Dance  */}
                    <FeatureSection
                        icon={<Footprints className="inline-block h-4 w-4 mr-1" />}
                        title="DANCE: Where passion meets the beat"
                        description=""
                        images={danceImages}
                        linkTo="/dance"
                        linkText="Explore Dance Showcase"
                        imageFirst={true}
                    // alignButtonRight 默认为 false
                    />

                    {/* Feature 3: Speech */}
                    <FeatureSection
                        icon={<Mic className="inline-block h-4 w-4 mr-1" />}
                        title="Speech: Speak to be heard, voice to be felt"
                        description=""
                        images={speechImages}
                        linkTo="/speeches"
                        linkText="See All Speeches"
                        alignButtonRight={true} 
                    />
                </div>
            </div>
        </section>
    );
}

export default PortfolioPreview;
