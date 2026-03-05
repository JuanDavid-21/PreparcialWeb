const dictionaries = {
  en: () => import('../dictionaries/en.json').then((m) => m.default),
  es: () => import('../dictionaries/es.json').then((m) => m.default),
}


export const getDictionary = async (lang?: string) => {
  const safeLang = (lang ?? "en").toLowerCase(); // si viene undefined => "en"
  const key = safeLang === "es" || safeLang.startsWith("es-") ? "es" : "en";
  return dictionaries[key]();
}
//Esto carga el JSON dinámicamente en el servidor.