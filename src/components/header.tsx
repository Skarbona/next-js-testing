import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <Link href="/">
                <h1 className="text-2xl">My App</h1>
            </Link>
            <nav>
                <ul className="flex space-x-4">

                    <li>
                        <Link href="/performance">Performance</Link>
                    </li>
                    <li>
                        <Link href="/reliability">Reliability</Link>
                    </li>
                    <li>
                        <Link href="/scale">Scale</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}