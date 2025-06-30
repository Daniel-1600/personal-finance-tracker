import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust import if needed

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);

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

        <CardContent className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-input bg-background text-foreground rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-input bg-background text-foreground rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-input bg-background text-foreground rounded"
          />
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <button className="w-full bg-primary text-primary-foreground py-2 rounded">
            {isLogin ? "Log In" : "Register"}
          </button>
          <p className="text-sm text-muted-foreground text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="text-primary ml-1 underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Log In"}
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
