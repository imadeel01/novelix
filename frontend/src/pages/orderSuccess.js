import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function OrderSuccess() {
    return (
        <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-8 text-center">
            <CheckCircle size={48} className="text-forest mb-4" />
            <h1 className="font-display text-3xl font-semibold text-ink">Order placed!</h1>
            <p className="text-ink/60 mt-2">Thanks for your order.</p>
            <Link
                to="/"
                className="mt-6 bg-amber text-ink font-medium px-6 py-2 rounded-lg hover:brightness-95 transition"
            >
                Back to Home
            </Link>
        </div>
    );
}

export default OrderSuccess;