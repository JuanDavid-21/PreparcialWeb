// components/Footers.tsx
interface FootersProps {
  devId?: string;
}

export default function Footers({ devId = "SIS3710" }: FootersProps) {
  return (
    <footer className="app-footer">
      <span>© 2026 Harry Potter App. Todos los derechos reservados.</span>
      <span>Desarrollado para: {devId}</span>
    </footer>
  );
}