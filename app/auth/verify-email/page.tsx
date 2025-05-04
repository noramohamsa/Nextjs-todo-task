// app/auth/verify-email/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";

export default function VerifyEmailPage() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState(Array(6).fill(""));

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d{6}$/.test(pasted)) return;

    const newCode = pasted.split("");
    setCode(newCode);
    newCode.forEach((char, idx) => {
      if (inputRefs.current[idx]) inputRefs.current[idx]!.value = char;
    });
    inputRefs.current[5]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join("");
    console.log("Submitted code:", enteredCode);
    // ممكن تبعتي الكود لـ API هنا
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Verify Email</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          We've sent a 6-digit code to your email. Please enter it below.
        </p>

        <div className="flex justify-between mb-6 space-x-2">
          {code.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChange(index, e.target.value)}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
