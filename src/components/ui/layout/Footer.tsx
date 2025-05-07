import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} M{"'"}entend-tu ? Tous droits
          réservés.
        </p>
        <p>
          Créé avec ❤️ par <Link href="https://lmcgroup.xyz/" className="text-blue-500 hover:underline">LMC Group</Link>
        </p>
      </div>
    </footer>
  );
}
