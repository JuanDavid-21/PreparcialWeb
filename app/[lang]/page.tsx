import type { Metadata } from "next";
import Lista from "@/components/Lista";

export const metadata: Metadata = {
  title: "Listado de personajes - HarryPotterApp",
  description:
    "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales.",
};

export default function Page({ params }: { params: { lang: string } }) {
  return <Lista lang={params.lang} />;
}