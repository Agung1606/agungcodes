import Link from "next/link";

export default function ContactMe() {
  return (
    <Link
      href="mailto:agngsptra928@gmail.com"
      className="bg-red hover:bg-yellow py-2 px-6 rounded-md text-white font-IBMPlex font-semibold"
    >
      Contact Me
    </Link>
  );
}
