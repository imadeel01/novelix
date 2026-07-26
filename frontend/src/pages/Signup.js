import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import axios from 'axios';

function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Updates one field at a time using the input's "name" attribute as the key
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // stops the browser's default full-page form reload
        setError('');
        try {
            await axios.post('http://localhost:5000/auth/signup', form);
            navigate('/login'); // send them to login after successful signup
        } catch (err) {
            setError(err.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="min-h-screen bg-paper flex items-center justify-center p-8">
            <div className="w-full max-w-sm bg-white border border-ink/10 rounded-xl p-8">
                <div className="flex items-center gap-2 justify-center mb-6">
                    <UserPlus size={22} className="text-amber" />
                    <h1 className="font-display text-2xl font-semibold text-ink">Create an account</h1>
                </div>

                {error && <p className="text-rose text-sm mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="border border-ink/20 rounded-lg px-4 py-2 outline-none focus:border-amber"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-amber text-ink font-medium py-2 rounded-lg hover:brightness-95 transition"
                    >
                        Signup
                    </button>
                </form>

                <p className="text-center text-sm text-ink/60 mt-6">
                    Already have an account?{' '}
                    <Link to="/login" className="text-forest hover:text-amber">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;