"use client";

import { useState } from 'react';
import Link from 'next/link'
import { motion } from "framer-motion";
import { MapPin, Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setErr("Please fill in all fields"); return; }
    console.log('Login:', { email, password });
  };

return <AuthShell title="Welcome back" subtitle="Sign in to keep your circle close.">
    <form onSubmit={onSubmit} className="space-y-3">
      <Field icon={<Mail className="w-4 h-4" />} type="email" placeholder="you@email.com" value={email} onChange={setEmail} />
      <Field icon={<Lock className="w-4 h-4" />} type="password" placeholder="Password" value={password} onChange={setPassword} />
      {err && <p className="text-xs text-destructive">{err}</p>}
      <button type="submit" className="w-full py-2.5 rounded-xl gradient-primary text-white font-medium shadow-md">Sign in</button>
    </form>
    <p className="text-sm text-center text-muted-foreground mt-5">
      New to Pulse?{" "}
      <Link href="/register" className="text-primary font-medium hover:underline">Create an account</Link>
    </p>
  </AuthShell>;
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-secondary/40 to-accent/20 p-4">
      <motion.div
        initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-card rounded-3xl shadow-2xl p-7"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center text-white">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">Pulse</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground mt-1 mb-6">{subtitle}</p>
        {children}
      </motion.div>
    </div>
  );
}

export function Field({
  icon, type, placeholder, value, onChange,
}: { icon: React.ReactNode; type: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center gap-2 bg-secondary/60 focus-within:bg-background border border-transparent focus-within:border-primary/40 rounded-xl px-3 py-2.5 transition">
      <span className="text-muted-foreground">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none text-sm flex-1"
      />
    </label>
  );
}