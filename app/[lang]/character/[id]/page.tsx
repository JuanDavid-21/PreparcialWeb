import type { Metadata } from "next";
import { getCharacterById } from "@/lib/HP";
import CharacterDetail from "@/components/Detalle";

export async function generateMetadata({
  params,
}: {
  params: { lang: string; id: string };
}): Promise<Metadata> {
  const character = await getCharacterById(params.id);

  return {
    title: `Detalle de ${character.name} - HarryPotterApp`,
    description:
      "Consulta información detallada de cada personaje del mundo mágico: casa, actor/actriz, varita, especie, ascendencia y otros datos relevantes.",
  };
}

export default async function Page({
  params,
}: {
  params: { lang: string; id: string };
}) {
  const character = await getCharacterById(params.id);
  return <CharacterDetail character={character} />;
}