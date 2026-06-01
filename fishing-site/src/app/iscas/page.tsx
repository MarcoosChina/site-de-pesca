import Card from "@/components/Card";
import { baits } from "@/data/baits";

export default function IscasPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Iscas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {baits.map((bait) => (
          <Card
            key={bait.id}
            title={bait.name}
            image={bait.image}
            description={bait.description + "\nAlvo: " + bait.targetFish.join(", ")}
          />
        ))}
      </div>
    </div>
  );
}
