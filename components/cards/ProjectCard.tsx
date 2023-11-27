import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function ProjectCard({ title, image }: Props) {
  return (
    <div className="card">
      <div className=" p-2 flex flex-col justify-center items-center">
        <h3 className="font-IBMPlex font-semibold text-lg text-white">
          {title}
        </h3>
        <div className="relative w-72 h-56 md:w-96 md:h-64">
          <Image
            src={image}
            alt="project-image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
