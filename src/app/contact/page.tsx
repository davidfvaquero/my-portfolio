"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Error al enviar el mensaje. Intenta de nuevo más tarde.");
      }
    } catch {
      setError("Error al enviar el mensaje. Intenta de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 pt-32">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white rounded px-4 py-2 font-semibold hover:bg-gray-800 transition-colors disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {success && <p className="text-green-600 font-medium">¡Mensaje enviado correctamente!</p>}
        {error && <p className="text-red-600 font-medium">{error}</p>}
      </form>
    </main>
  );
} 