import react from "react";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, removeFromCart } = useCart();
    if (cart.length === 0) {
        return (
            <div className="p-8 min-h-screen bg-paper flex flex-col items-center justify-center text-center">
                <ShoppingBag size={40} className="text-ink/30 mb-4" />
                <h1 className="font-display text-2xl font-semibold text-ink">Your cart is empty</h1>
            </div>
        );
    }
    return (
        <div className="p-8 bg-paper min-h-screen">
            <h1 className="font-display text-3xl font-semibold text-center text-ink mb-10">Your Cart </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {cart.map((book) => (
                    <div
                        key={book._id} className="flex flex-col bg-white border border-ink/10 rounded-xl p-5"
                    >
                        <h2 className="font-display text-lg font-semibold text-ink">{book.title}</h2>
                        <p className="text-ink/70 text-sm mt-1">{book.author}</p>
                        <p className="text-ink/50 text-xs mt-1">Quantity: {book.quantity}</p>
                        <button onClick={() => removeFromCart(book._id)} className="mt-auto pt-4">
                            <span className="flex items-center justify-center gap-2 w-full bg-rose font-medium py-2 rounded-lg hover:brightness-95 transition">
                                <Trash2 size={16} /> Remove
                            </span>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="max-w-6xl mx-auto mt-10 text-center">
                    <Link
                        to="/checkout"
                        className="inline-block bg-forest text-paper font-medium px-8 py-3 rounded-lg hover:brightness-110 transition"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;