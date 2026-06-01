import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  const sections = [
    { href: "/iscas", title: "Iscas", image: "/img/iscas/spinnerbait.jpg", description: "Veja as melhores iscas para pesca." },
    { href: "/equipamentos", title: "Equipamentos", image: "/img/equipamentos/linha-monofilamento.jpg", description: "Explore varas, molinetes e mais." },
    { href: "/peixes", title: "Peixes", image: "/img/peixes/peixes.jpg", description: "Descubra peixes de água doce e salgada." },
    { href: "/forum", title: "Fórum", image: "/img/forum/forum.jpg", description: "Participe da comunidade de pescadores." },
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
