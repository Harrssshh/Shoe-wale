import Image, { ImageProps } from "next/image";

export function ShoeImage({ alt, ...props }: ImageProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image alt={alt} {...props} />;
}
