import Image, { ImageProps } from "next/image";

export function ShoeImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} {...props} />;
}
