import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/books/${id}`)
            .then((res) => setBook(res.data))
            .catch((err) => console.error('Error fetching book:', err));
    }, [id]);

    if (!book) {
        return (
            <div className="p-8 min-h-screen bg-paper flex items-center justify-center">
                <h1 className="font-display text-xl text-ink">Loading....</h1>
            </div>
        );
    }

    return (
        <div className="p-8 max-h-screen bg-paper">
            <div className="max-w-2xl mx-auto">
                <Link to="/" className="flex item-center gap-1 text-forest hover:text-amber transition w-fit">
                    <ArrowLeft size={16} /> Back to books
                </Link>
                <h1 className="font-display text-3xl font-semibold text-ink mt-6">{book.title}</h1>
                <p className="text-ink/70 mt-2 font-sm">{book.description}</p>
                <p className="text-ink/80 leading-relaxed mt-6">{book.description}</p>
            </div>
        </div>
    );
}

export default BookDetail;