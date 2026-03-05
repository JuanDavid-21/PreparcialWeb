export type Wand = {
  wood?: string;
  core?: string;
  length?: number | null; // en cm
};

export type Character = {
  id: string;
  name: string;
  gender?: string;
  house?: string;
  image?: string;
  wand?: Wand;
};

const API_LIST = "https://hp-api.onrender.com/api/characters";
const API_DETAIL = "https://hp-api.onrender.com/api/character";

export async function getFirst12Characters(): Promise<Character[]> {
  const res = await fetch(API_LIST, { cache: "no-store" });
  if (!res.ok) throw new Error("No se pudo obtener la lista de personajes");

  const data: Character[] = await res.json();
  return data.slice(0, 12);
}

export async function getCharacterById(id: string): Promise<Character> {
  const res = await fetch(`${API_DETAIL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("No se pudo obtener el detalle del personaje");

  const data: Character = await res.json();
  return data;
}