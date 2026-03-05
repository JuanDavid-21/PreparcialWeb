import Headers from "@/components/Header";
import Footers from "@/components/Footer";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <Headers lang={params.lang} />
      <main className="app-main">{children}</main>
      <Footers devId="SIS3710" />
    </>
  );
}