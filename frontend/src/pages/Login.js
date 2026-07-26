import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post('http://localhost:5000/auth/login', form);
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            setError(err.response?.data.error, 'Login failed');
        }
    };
    return (
        <div className=" min-h-screen bg-paper flex item-center justify-center p-8">
            <div className="w-full max-w-sm border border-ink/10 rounded-xl p-8">
                <div className="flex item-center gap-2 justify-center mb-6">
                    <LogIn size={22} className="text-amber" />
                    <h1 className="font-display text-2xl font-semibold text-ink">LogIn</h1>
                </div>

                {error && <p className="text-rose text-sm mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="email" type="email" placeholder="Email"
                        value={form.email} onChange={handleChange}
                        className="border border-ink/20 rounded-xl px-4 py-2 outline-none focus:border-amber" required
                    />
                    <input
                        name="password" type="password" placeholder="Password"
                        value={form.password} onChange={handleChange}
                        className="border border-ink/20 rounded-xl px-4 py-2 outline-none focus:border-amber" required
                    />
                    <button type="submit"
                        className="bg-amber text-ink font-medium py-2 rounded-lg hover:brightness-95 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-ink/60 mt-6">
                    Don't have an account?{''}'
                    <Link to="/signup" className="text-forest hover:text-amber">Signup</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;