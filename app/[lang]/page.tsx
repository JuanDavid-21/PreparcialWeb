import { getDictionary } from "../../lib/dictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <h1>{dict.welcome}</h1>
      <p>{dict.home}</p>
      <p>{dict.profile}</p>
      <p>LANG: {lang}</p>
    </main>
  );
}