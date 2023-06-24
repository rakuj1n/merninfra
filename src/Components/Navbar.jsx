import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to='/orders'>Order History</Link>
            <Link to='/orders/new'>New Order</Link>
        </nav>
    )
}