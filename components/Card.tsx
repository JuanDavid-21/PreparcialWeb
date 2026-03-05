import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/lib/HP";

const BgColorHouses: Record<string, string> = {
  Gryffindor: "bg-[#740001]",
  Slytherin: "bg-[#1A472A]",
  Ravenclaw: "bg-[#0E1A40]",
  Hufflepuff: "bg-[#FFD800]",
  NoHouse: "bg-[#D1D5DB]",
};

const BorderColorHouses: Record<string, string> = {
  Gryffindor: "border-[#740001]",
  Slytherin: "border-[#1A472A]",
  Ravenclaw: "border-[#0E1A40]",
  Hufflepuff: "border-[#FFD800]",
  NoHouse: "border-[#D1D5DB]",
};

function normalizeHouse(house?: string) {
  if (!house) return "NoHouse";
  return BgColorHouses[house] ? house : "NoHouse";
}

export default function CharacterCard({
  character,
  lang,
}: {
  character: Character;
  lang: string;
}) {
  const houseKey = normalizeHouse(character.house);
  const imgSrc =
    character.image && character.image.trim() !== ""
      ? character.image
      : "/placeholder.png";

  return (
    <Link href={`/${lang}/character/${character.id}`} className="block">
      <article
        className={`rounded-xl overflow-hidden border-4 ${BorderColorHouses[houseKey]} bg-white shadow`}
      >
        <div
          className={`py-2 text-center text-white font-bold ${BgColorHouses[houseKey]}`}
        >
          {character.name}
        </div>

        <div className="relative w-full aspect-[3/4]">
          <Image
            src={imgSrc}
            alt={character.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </article>
    </Link>
  );
}