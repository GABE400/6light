import type React from "react";
import Image from "next/image";

interface HeroShopsProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroShops: React.FC<HeroShopsProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Shop Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl px-4">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroShops;
