import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeadersProps {
  lang: string;
}

export default function Header({ lang }: HeadersProps) {
  return (
    <header className="app-header">
      <Link href={`/${lang}`}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          alt="Harry Potter"
          width={180}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
