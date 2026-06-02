import Image from "next/image";

type CardProps = {
  title: string;
  image: string;
  description: string;
  href?: string;
};

export default function Card({ title, image, description, href }: CardProps) {
  const container = (
    <div className="border rounded overflow-hidden shadow-lg">
      <div className="relative w-full aspect-square">
        <Image src={image} alt={title} fill style={{ objectFit: "contain", objectPosition: "center" }} />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-90 transition-opacity">
      {container}
    </a>
  ) : (
    container
  );
}
