"use client";

import { useState } from 'react';
import { AuthShell, Field } from '../login/page';
import { User, Mail, Lock } from "lucide-react";
import Link from 'next/link';

export default function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [err, setErr] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle signin logic here
        console.log('Signin:', { name, email, password });
    };

    return (
        <AuthShell title="Create your account" subtitle="Start sharing your world in seconds.">
            <form onSubmit={handleSubmit} className="space-y-3">
                <Field icon={<User className="w-4 h-4" />} type="text" placeholder="Display name" value={name} onChange={setName} />
                <Field icon={<Mail className="w-4 h-4" />} type="email" placeholder="you@email.com" value={email} onChange={setEmail} />
                <Field icon={<Lock className="w-4 h-4" />} type="password" placeholder="Password" value={password} onChange={setPassword} />
                <Field icon={<Lock className="w-4 h-4" />} type="password" placeholder="Confirm password" value={confirm} onChange={setConfirm} />
                {err && <p className="text-xs text-destructive">{err}</p>}
                <button type="submit" className="w-full py-2.5 rounded-xl gradient-primary text-white font-medium shadow-md">Create account</button>
            </form>
            <p className="text-sm text-center text-muted-foreground mt-5">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
            </p>
        </AuthShell>
  );
}