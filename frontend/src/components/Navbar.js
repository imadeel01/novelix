import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Home, ShoppingCart, LogIn, UserPlus } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="bg-forest px-6 py-4 justify-between flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-paper">
                <BookOpen size={24} className="text-amber" />
                <span className="font-display text-2xl font-semibold">Novelix</span>
            </Link>

            {/* Nav Links */}

            <div className=" flex items-center gap-6 font-body text-sm">
                <Link to="/" className="flex items-center gap-1 text-paper hover:text-amber transition-colors">
                    <Home size={18} />
                    <span>Home</span>
                </Link>
                <Link to="/cart" className="flex text-paper items-center gap-1 hover:text-amber transition-colors">
                    <ShoppingCart size={18} />
                    <span>Cart {cart.length > 0 && `(${cart.length})`}</span>
                </Link>
                <Link to="/login" className="flex items-center gap-1 text-paper hover:text-amber transition-colors">
                    <LogIn size={18} />
                    <span>Login</span>
                </Link>
                <Link to="/signup" className="flex items-center gap-1 text-paper hover:text-amber transition-colors">
                    <UserPlus size={18} />
                    <span>Signup</span>
                </Link>
            </div>
        </nav>
    );
}
export default Navbar;