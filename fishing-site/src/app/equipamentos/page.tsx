import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import { gear } from "@/data/gear";

export default function EquipamentosPage() {
  const categories = [
    { label: "Varas", key: "rod" as const },
    { label: "Molinetes", key: "reel-spin" as const },
    { label: "Carretilhas", key: "reel-bait" as const },
    { label: "Linhas", key: "line" as const },
  ];

  const tabs = categories.map((cat) => ({
    label: cat.label,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gear
          .filter((g) => g.category === cat.key)
          .map((item) => (
            <Card
              key={item.id}
              title={item.name}
              image={item.image}
              description={item.description}
            />
          ))}
      </div>
    ),
  }));

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Equipamentos</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
