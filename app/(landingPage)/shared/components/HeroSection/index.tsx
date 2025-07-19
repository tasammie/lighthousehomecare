import { ImgComp } from "@/components/ImgComp";
import Link from "next/link";

export type Breadcrumb = { label: string; href?: string };

export interface HeroSectionProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageSrc: string;
  imageAlt?: string;
  heightClass?: string;
}

export default function HeroSection({
  title,
  breadcrumbs,
  imageSrc,
  imageAlt = "",
  heightClass = "h-screen",
}: HeroSectionProps) {
  return (
    <div className={`relative w-full overflow-hidden ${heightClass}`}>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <ImgComp
        src={imageSrc}
        alt={imageAlt}
        className="absolute w-full h-full object-cover"
      />

      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-20 px-4 md:px-0">
        <h1 className="text-white text-[60px] font-bold mb-4">{title}</h1>
        <nav className="flex items-center space-x-2 text-white text-sm">
          {breadcrumbs.map((bc, idx) => (
            <span key={idx} className="flex items-center">
              {bc.href ? (
                <Link href={bc.href} className="hover:underline">
                  {bc.label}
                </Link>
              ) : (
                <span className="font-semibold">{bc.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
