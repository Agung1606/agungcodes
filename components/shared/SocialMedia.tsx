import Link from "next/link";
import Image from "next/image";
import { SOCIALMEDIA } from "@/constants";

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-12 mt-16">
      {SOCIALMEDIA.map((link) => (
        <Link
          key={link.key}
          href={link.url}
          target="_blank"
          className="md:bg-deep-blue/60 md:p-2 md:rounded-full"
        >
          <Image
            src={link.image}
            alt="social-media-icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
}
