import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const endpoint = isLogin
      ? "http://localhost:3000/api/login"
      : "http://localhost:3000/api/register";
    const payload = isLogin
      ? { email, password }
      : { name: username, email, password };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        setSuccess(
          data.message || (isLogin ? "Login successful" : "Account created")
        );
      }
    } catch (error) {
      console.error(error);
      setError("Network or server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <Card className="w-full max-w-md border border-border rounded-xl shadow-md">
        <CardHeader>
          <CardTitle>{isLogin ? "Log In" : "Register"}</CardTitle>
          <CardDescription>
            {isLogin
              ? "Welcome back! Log in to continue."
              : "Create a new account below."}
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-input bg-background text-foreground rounded"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-input bg-background text-foreground rounded"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-input bg-background text-foreground rounded"
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded"
            >
              {isLogin ? "Log In" : "Register"}
            </button>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            {success && (
              <p className="text-sm text-green-500 text-center">{success}</p>
            )}

            <p className="text-sm text-muted-foreground text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="text-primary ml-1 underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Register" : "Log In"}
              </button>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
