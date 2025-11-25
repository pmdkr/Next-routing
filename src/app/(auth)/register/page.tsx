"use client";
import { useState } from "react";
export default function Register() {

    const [input, setInput] = useState("");
    return (
        <div className="text-5xl text-center">

            <input className="border-amber-950" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <h1>Register</h1>
        </div>
    )
}