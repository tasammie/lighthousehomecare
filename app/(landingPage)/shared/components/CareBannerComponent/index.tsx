import CustomButton from "@/components/CustomButton";
import Image from "next/image";

type Props = {
  text: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
};
export default function CareBannerComponent({
  text,
  imageSrc,
  imageAlt,
  description,
  buttonText,
}: // buttonLink,
Props) {
  return (
    <div className="relative w-full bg-gray-200 flex items-center justify-center h-[422px]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src={imageSrc || "/images/image-banner.webp"}
        alt={imageAlt || "Elderly care background"}
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="relative z-10 text-center text-white space-y-5 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold">{text}</h1>
        <p className="text-2xl mt-2">{description}</p>

        <CustomButton text={buttonText} link="contact" />
      </div>
    </div>
  );
}
