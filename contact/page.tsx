'use client';
import React, { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Enviando...');
        try {
            const res = await fetch('/api/landing/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('¡Mensaje enviado!');
                console.log('Email preview URL:', data.preview);
            } else {
                setStatus('Error al enviar');
            }
        } catch (err) {
            setStatus('Error al enviar');
        }
    };

    return (
        <div className="min-h-screen bg-[#02040a] flex items-center justify-center text-[#f5f5dc] font-body">
            <form onSubmit={handleSubmit} className="bg-[#02040a]/80 p-8 rounded-xl border border-[#f5f5dc]/20 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Solicita una Demo</h2>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 bg-[#02040a] border border-[#f5f5dc]/30 rounded text-[#f5f5dc]"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 bg-[#02040a] border border-[#f5f5dc]/30 rounded text-[#f5f5dc]"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-3 py-2 bg-[#02040a] border border-[#f5f5dc]/30 rounded text-[#f5f5dc]"
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-[#f5f5dc] text-[#02040a] rounded hover:bg-white transition-colors"
                >
                    Enviar
                </button>
                {status && <p className="mt-4 text-center">{status}</p>}
            </form>
        </div>
    );
}
