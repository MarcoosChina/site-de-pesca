import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  const sections = [
    { href: "/iscas", title: "Iscas", image: "https://images.unsplash.com/photo-1497051788610-0963f1d03593", description: "Veja as melhores iscas para pesca." },
    { href: "/equipamentos", title: "Equipamentos", image: "https://images.unsplash.com/photo-1594751035716-eba12d5d01e4", description: "Explore varas, molinetes e mais." },
    { href: "/peixes", title: "Peixes", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9", description: "Descubra peixes de água doce e salgada." },
    { href: "/forum", title: "Fórum", image: "https://images.unsplash.com/photo-1510838684897-1c3c0d19ef0b", description: "Participe da comunidade de pescadores." },
  ];
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Bem‑vindo ao Site de Pesca</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((s) => (
          <Link key={s.href} href={s.href}>
            <Card
              title={s.title}
              image={s.image}
              description={s.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
