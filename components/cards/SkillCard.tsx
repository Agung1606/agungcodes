import Image from "next/image";

interface Props {
  skillName: string;
  image: string;
}

export default function SkillCard({ skillName, image }: Props) {
  return (
    <div className="card">
      <div className="p-6 grid grid-cols-2 gap-4 justify-center items-center">
        <div className="relative w-16 h-16 m-auto">
          <Image
            src={image}
            alt="skill-image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <h3 className="font-IBMPlex uppercase font-semibold text-deep-blue">
          {skillName}
        </h3>
      </div>
    </div>
  );
}
