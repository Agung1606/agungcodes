import Image from "next/image";
import SocialMedia from "../shared/SocialMedia";
import ContactMe from "../shared/ContactMe";

export default function Landing() {
  return (
    <section id="home" className="banner">
      <div className="w-5/6 h-full md:min-h-screen mx-auto md:flex md:justify-between md:items-center gap-16 py-10">
        {/* DESC */}
        <div className="basis-2/5 z-30 mt-3 xs:mt-12">
          <p className="text-white text-4xl xs:text-5xl font-playfair z-10 text-center md:text-start">
            Agung{" "}
            <span className="xs:relative text-white xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[28px] before:-top-[80px] before:z-[-1]">
              Saputra
            </span>
          </p>
          <p className="mt-5 xs:mt-10 sm:text-lg mb-7 font-IBMPlex text-center md:text-start text-white">
            as a software developer, I bring a combination of technical
            expertise, creativity, and a passion for delivering exceptional
            software experiences. I am excited to contribute my skills and
            collaborate with a team of like-minded professionals to create
            impactful applications that make a difference in the lives of users.
          </p>

          <div className="flex mt-5 justify-center md:justify-start">
            <ContactMe />
          </div>

          <SocialMedia />
        </div>

        {/* AGUNG'S PHOTO */}
        <div className="flex justify-center basis-3/5 mt-12">
          <Image
            src={"/assets/user-picture.png"}
            alt="user-picutre"
            width={650}
            height={750}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
