import Image from "next/image"; // Importer le composant Image de Next.js

export function Article({
  title,
  content,
  className,
  imageUrl, // Nouvelle prop pour l'URL de l'image
  imageAlt, // Nouvelle prop pour le texte alternatif de l'image
  ...props
}: {
  title: string;
  content: string;
  className?: string;
  imageUrl?: string; // Rendre optionnel
  imageAlt?: string; // Rendre optionnel
}) {
  return (
    <article
      className={`flex flex-col gap-4 items-center justify-center bg-zinc-800 p-8 rounded-lg shadow-lg ${className}`}
      {...props}
    >
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-zinc-300 text-center">{content}</p>
      {imageUrl && imageAlt && (
        <div className="w-full max-w-md mb-6 overflow-hidden rounded-lg shadow-md">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={600} // Largeur indicative, Next/Image optimisera
            height={400} // Hauteur indicative, Next/Image optimisera
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </article>
  );
}
