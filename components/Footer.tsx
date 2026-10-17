export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-[#86868b] mb-2">
          Construido con Next.js, Framer Motion y mucho ☕
        </p>
        <p className="text-xs text-[#c7c7cc]">
          © {new Date().getFullYear()} Sebastián Sierra. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
