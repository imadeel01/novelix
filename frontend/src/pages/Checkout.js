import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Checkout() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({ address: '', houseNo: '', pin: '', contact: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order details:', { form, cart });
        navigate('/order-success');
    };

    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen bg-paper p-8">
            <div className="max-w-md mx-auto bg-white border border-ink/10 rounded-xl p-8">
                <div className="flex items-center gap-2 justify-center mb-6">
                    <MapPin size={22} className="text-amber" />
                    <h1 className="font-display text-2xl font-semibold text-ink">Delivery details</h1>
                </div>
                <p className="text-center text-ink/60 text-sm mb-6">{total} item(s) in cart</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <input
                        name="houseNo"
                        placeholder="House / Flat number"
                        value={form.houseNo}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <input
                        name="pin"
                        placeholder="PIN / ZIP code"
                        value={form.pin}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <input
                        name="contact"
                        placeholder="Contact number"
                        value={form.contact}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-amber text-ink font-medium py-2 rounded-lg hover:brightness-95 transition"
                    >
                        Continue to payment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;