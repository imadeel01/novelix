import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getBookCover } from '../utils/getCover';

function BookCard({ book }) {
    const { addToCart } = useCart();
    const [cover, setCover] = useState(null);

    useEffect(() => {
        getBookCover(book.title, book.author).then(setCover);
    }, [book.title, book.author]);
    return (
        <div className="flex flex-col bg-paper border border-ink/10 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-72 bg-forest/10 flex item-center justify-center">
                {cover ? (
                    <img src={cover} alt={book.title} className="h-full w-full object-contain" />
                ) : (
                    <span className="text-forest/40 font-display text-sm px-4 text-center">{book.title}</span>
                )}
            </div>
            <div className="flex flex-col flex-1 p-5">
                <Link to={`/book/${book._id}`}>
                    <h2 className="font-display text-lg font-semibold text-ink hover:text-amber transition-colors">{book.title}</h2>
                </Link>
                <p className=" text-ink/70 text-sm mt-1">{book.author}</p>
                <p className=" text-ink/50 text-xs mt-1">{book.genre} . {book.publishedYear}</p>

                <button onClick={() => addToCart(book)} className=" mt-auto pt-4">
                    <span className=" flex item-center justify-center gap-2 w-full bg-amber text-ink font-medium py-4 rounded-lg hover:brightness-95 transition">
                        <ShoppingCart size={16} /> Add to cart
                    </span>
                </button>
            </div>
        </div>
    )
}

export default BookCard;