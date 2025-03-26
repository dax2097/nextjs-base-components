import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Mi Empresa</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-400">Inicio</Link></li>
            <li><Link href="/contacto" className="hover:text-gray-400">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;