import CareBannerComponent from "../../shared/components/CareBannerComponent";

export default function CareBanner() {
  return (
    // <div className="relative w-full bg-gray-200 flex items-center justify-center h-[422px]">
    //   {/* Dark Overlay */}
    //   <div className="absolute inset-0 bg-black/50 z-10" />
    //   <Image
    //     src="/images/image-banner.webp"
    //     alt="Elderly care background"
    //     layout="fill"
    //     objectFit="cover"
    //     className="opacity-50"
    //   />
    //   <div className="relative z-10 text-center text-white space-y-5">
    //     <h1 className="text-4xl font-bold">Looking for the Right Care?</h1>
    //     <p className="text-2xl mt-2">
    //       Let&apos;s talk about how we can support you.
    //     </p>

    //     <CustomButton text="Get Started Today" />
    //   </div>
    // </div>
    <CareBannerComponent
      text="Looking for the Right Care?"
      description="Let's talk about how we can support you."
      buttonText="Get Started Today"
      buttonLink="/contact"
      imageSrc="/images/image-banner.webp"
      imageAlt="Elderly care background"
    />
  );
}
