import Image from "next/image";
import type { Character } from "@/lib/HP";

const BorderColorHouses: Record<string, string> = {
  Gryffindor: "border-[#740001]",
  Slytherin: "border-[#1A472A]",
  Ravenclaw: "border-[#0E1A40]",
  Hufflepuff: "border-[#FFD800]",
  NoHouse: "border-[#D1D5DB]",
};

function normalizeHouse(house?: string) {
  if (!house) return "NoHouse";
  return BorderColorHouses[house] ? house : "NoHouse";
}

function valueOrDash(v?: string | number | null) {
  if (v === undefined || v === null) return "-";
  if (typeof v === "string" && v.trim() === "") return "-";
  return String(v);
}

export default function CharacterDetail({ character }: { character: Character }) {
  const houseKey = normalizeHouse(character.house);
  const imgSrc =
    character.image && character.image.trim() !== ""
      ? character.image
      : "/placeholder.png";

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6 text-[#FDB608]">
        {character.name}
      </h1>

      <div
        className={`mx-auto max-w-3xl border-4 ${BorderColorHouses[houseKey]} rounded-xl overflow-hidden bg-white shadow`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Info */}
          <div className="p-6 text-sm leading-7">
            <p>
              <strong>Casa:</strong> {valueOrDash(character.house)}
            </p>
            <p>
              <strong>Género:</strong> {valueOrDash(character.gender)}
            </p>

            <p className="mt-4">
              <strong>Varita:</strong>{" "}
              {character.wand?.wood || character.wand?.core || character.wand?.length
                ? ""
                : "-"}
            </p>
            <p>
              <strong>Madera:</strong> {valueOrDash(character.wand?.wood)}
            </p>
            <p>
              <strong>Núcleo:</strong> {valueOrDash(character.wand?.core)}
            </p>
            <p>
              <strong>Longitud:</strong> {valueOrDash(character.wand?.length)}
            </p>
          </div>

          {/* Imagen */}
          <div className="relative w-full aspect-[3/4] md:aspect-auto md:min-h-[420px]">
            <Image
              src={imgSrc}
              alt={character.name}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}