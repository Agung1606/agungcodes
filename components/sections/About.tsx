import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-5/6 h-full md:min-h-screen mx-auto md:flex md:justify-between md:items-center py-16 gap-16"
    >
      <div className="flex justify-center basis-2/5">
        <Image
          src={"/assets/about-me.png"}
          alt="picutre"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>

      <div className="basis-3/5 mt-4 xs:mt-0">
        <h1 className="font-bold font-IBMPlex text-4xl sm:text-5xl text-deep-blue text-center md:text-end">
          About Me
        </h1>
        <p className="mt-5 xs:mt-8 mb-4 font-IBMPlex sm:text-lg text-center md:text-end text-deep-blue">
          As a software developer, I am passionate about creating innovative and
          user-friendly applications. With a strong foundation in React,
          Next.js, JavaScript and TypeScript I have a deep understanding of
          software development principles and best practices. I thrive in an
          agile development environment, collaborating with cross-functional
          teams to deliver high-quality and performant software solutions.
        </p>
        <p className="font-IBMPlex sm:text-lg text-center md:text-end text-deep-blue">
          My expertise includes building intuitive user interfaces, implementing
          responsive designs, and integrating with various APIs and backend
          services. I am also proficient in debugging and optimizing application
          performance to ensure smooth and efficient operation across different
          devices and platforms.
        </p>
      </div>
    </section>
  );
}
