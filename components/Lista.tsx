import { getFirst12Characters } from "@/lib/HP";
import Card from "@/components/Card";

export default async function Lista({ lang }: { lang: string }) {
  const characters = await getFirst12Characters();

  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-2">
        Personajes de Harry Potter
      </h1>

      <p className="text-center text-sm text-gray-600 mb-6">
        Explora el universo mágico de Harry Potter: un listado completo de
        personajes con su casa, especie y datos principales.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((c) => (
          <Card key={c.id} character={c} lang={lang} />
        ))}
      </div>
    </section>
  );
}