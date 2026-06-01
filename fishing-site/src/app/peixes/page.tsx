import Card from "@/components/Card";
import { fish } from "@/data/fish";

export default function PeixesPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Peixes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fish.map((f) => (
          <Card
            key={f.id}
            title={f.name}
            image={f.image}
            description={
              f.habitat === "freshwater"
                ? "Água doce"
                : "Água salgada"
            }
          />
        ))}
      </div>
    </div>
  );
}
