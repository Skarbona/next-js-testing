import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    image: StaticImageData;
    alt: string;
    title: string;
}

export default function Hero({ image, alt, title }: HeroProps) {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <h1 className="pt-48 flex justify-center items-center text-white text-6xl">{title}</h1>
        </div>
    );
}