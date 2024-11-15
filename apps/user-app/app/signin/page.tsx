"use client";

import { signIn } from "next-auth/react";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setError(""); // Clear previous errors

    // Attempt to sign in using NextAuth credentials
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirection
      phone,
      password,
    });

    if (result?.error) {
      // Handle login error
      setError("Invalid phone number or password.");
    } else {
      // Redirect to /dashboard on successful login
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-6">
        <div className="space-y-4 w-[400px]">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="1111111111"
              className="mt-1 w-full p-2 rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full p-2 rounded-md border border-gray-300"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-center w-full">
            <Button onClick={handleSignIn}>Sign in with Credentials</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
