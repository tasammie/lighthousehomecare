import type { StaticImageData } from "next/image";
import Image from "next/image";

type imgCom = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  props?: React.HtmlHTMLAttributes<HTMLDivElement>;
  priority?: boolean;
};

export const ImgComp = ({
  src,
  alt,
  className,
  width,
  height,
  props,
  priority,
}: imgCom) => {
  return (
    <Image
      src={src}
      width={Number(width) || 400}
      height={Number(height) || 400} // sizes="(max-width: 768px) 100vw, (max-width: 1--header-height) 50vw, 50vw"
      sizes="(max-width: 768px) 100vw, 50vw"
      alt={alt}
      className={className}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      {...props}
    />
  );
};
