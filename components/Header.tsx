import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
            <Image src="/img/logo.svg" alt="Logo" width={150} height={33} />

            <nav className="hidden md:block space-x-8">
                <Link href="/nextjs" className="tracking-wide hover:text-gray-300">
                    Next.Js
                </Link>
                <Link href="/tailwind" className="tracking-wide hover:text-gray-300">
                    Tailwind
                </Link>
                <Link href="/framermotion" className="tracking-wide hover:text-gray-300">
                    Framer Motion
                </Link>
            </nav>
        </header>
    )
}

export default Header
