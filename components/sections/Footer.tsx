import ContactMe from "../shared/ContactMe";
import SocialMedia from "../shared/SocialMedia";

export default function Footer() {
  return (
    <footer className="banner03">
      <div className="w-5/6 mx-auto py-6">
        <SocialMedia />
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-0 mt-4">
          <p className="uppercase font-playfair text-2xl font-semibold text-white">Agung Saputra</p>
          <ContactMe />
        </div>
      </div>
    </footer>
  );
}
