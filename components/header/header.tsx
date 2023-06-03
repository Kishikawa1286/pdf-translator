import 'server-only';

export default function Header() {
  return (
    <header className="flex  items-center justify-between bg-gray-900 p-3">
      <h1 className="text-lg font-medium text-white">PDF Translator</h1>
      <nav className="md:mr-4"></nav>
    </header>
  );
}
