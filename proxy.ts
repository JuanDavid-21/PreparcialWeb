import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

function getLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  const lang = header?.split(",")[0]?.split("-")[0];
  return (locales as readonly string[]).includes(lang ?? "")
    ? (lang as (typeof locales)[number])
    : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si ya viene con /en o /es, no redirijas
  if (locales.some((l) => pathname.startsWith(`/${l}`))) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
