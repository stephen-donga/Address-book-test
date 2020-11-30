import Link from 'next/link';


const Navbar = () =>(
    <nav className="navbar">
        <Link href="/">
            <a>Address Book</a>
        </Link>
        <Link href="/contact">
            <a>Contact List</a>
        </Link>
    </nav>
);

export default Navbar;