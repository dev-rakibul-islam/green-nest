import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import GlassCard from "../components/GlassCard";
import { Mail, Lock, Eye, EyeOff, LogIn, Chrome } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { login, googleSignIn } = useAuth();

  function validate() {
    if (!email) return "Email is required";
    if (!password) return "Password is required";
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);
    try {
      await login(email, password);
      toast.success("Logged in successfully");
      navigate(from, { replace: true });
    } catch (err) {
      const msg = err.message || "Login failed";
      setError(msg);
      toast.error(msg);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Signed in with Google");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const msg = err.message || "Google sign-in failed";
        setError(msg);
        toast.error(msg);
      });
  };

  return (
    <div className="relative min-h-[70vh] grid place-items-center px-4 py-10 mt-0">
      <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-80 rounded-full bg-teal-400/20 blur-3xl" />

      <GlassCard className="w-full max-w-md p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Welcome back
            </span>
          </h2>
          <p className="text-sm opacity-80 mt-1">
            Log in to continue growing your GreenNest.
          </p>
        </div>

        {error && (
          <div className="alert alert-error/80 text-sm mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label pb-1">
              <span className="label-text font-medium flex items-center gap-2">
                <Mail className="size-4 opacity-70" /> Email
              </span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full bg-white/10 border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="label pb-1">
              <span className="label-text font-medium flex items-center gap-2">
                <Lock className="size-4 opacity-70" /> Password
              </span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full bg-white/10 border-white/20 backdrop-blur-md pr-12 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            <label className="label">
              <Link to="/forgot" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
          >
            <LogIn className="size-4" /> Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full inline-flex items-center justify-center gap-2"
        >
          <Chrome className="size-4" /> Continue with Google
        </button>

        <p className="text-sm mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>
      </GlassCard>
    </div>
  );
};

export default Login;
