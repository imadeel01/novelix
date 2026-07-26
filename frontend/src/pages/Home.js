import { useCart } from '../context/CartContext';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import BookCard from '../components/BookCard';


function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    //Feaching All books form the backend using axios
    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then((res) => {
                console.log('Books:', res.data); //temporary log to check the response
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching books:', err);
                setLoading(false);
            })
    }, []);
    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-2xl font-display text-forest'>Loading books...</h1>
            </div>
        );
    }

    return (
        <div className="p-8 bg-paper min-h-screen">
            <h1 className="text-3xl font-display font-semibold text-center text-ink mb-8">All books</h1>
            {/* Book Grid */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lh:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {books.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default Home;