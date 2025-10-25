import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import GlassCard from "../components/GlassCard";
import {
  User,
  Mail,
  Image as ImageIcon,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  Chrome,
} from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup, updateProfile, googleSignIn } = useAuth();

  function validatePassword(pw) {
    if (!/[A-Z]/.test(pw))
      return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(pw))
      return "Password must contain at least one lowercase letter";
    if (pw.length < 6) return "Password must be at least 6 characters";
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const pwErr = validatePassword(password);
    if (pwErr) return setError(pwErr);
    if (!email) return setError("Email is required");
    try {
      await signup(email, password);
      await updateProfile({ displayName: name, photoURL });
      toast.success("Account created");
      navigate("/");
    } catch (err) {
      const msg = err.message || "Signup failed";
      setError(msg);
      toast.error(msg);
    }
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(() => {
        toast.success("Signed in with Google");
        navigate("/");
      })
      .catch((err) => {
        const msg = err.message || "Google sign-in failed";
        setError(msg);
        toast.error(msg);
      });
  };

  const strength = useMemo(() => {
    let s = 0;
    if (/[A-Z]/.test(password)) s += 1;
    if (/[a-z]/.test(password)) s += 1;
    if (password.length >= 6) s += 1;
    return s;
  }, [password]);

  return (
    <div className="relative min-h-[70vh] grid place-items-center px-4 py-10 mt-0">
      <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-80 rounded-full bg-teal-400/20 blur-3xl" />

      <GlassCard className="w-full max-w-lg p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Create an account
            </span>
          </h2>
          <p className="text-sm opacity-80 mt-1">
            Join GreenNest and grow with confidence.
          </p>
        </div>

        {error && (
          <div className="alert alert-error/80 text-sm mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label pb-1">
              <span className="label-text font-medium flex items-center gap-2">
                <User className="size-4 opacity-70" /> Full name
              </span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full bg-white/10 border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              placeholder="Your name"
            />
          </div>

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
                <ImageIcon className="size-4 opacity-70" /> Photo URL
              </span>
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input w-full bg-white/10 border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              placeholder="https://example.com/photo.jpg"
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
                placeholder="Create a password"
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
            <div className="mt-2 flex items-center gap-2">
              <div
                className={`h-1 w-16 rounded bg-white/20 ${
                  strength > 0 ? "bg-emerald-400/70" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-16 rounded bg-white/20 ${
                  strength > 1 ? "bg-emerald-400/80" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-16 rounded bg-white/20 ${
                  strength > 2 ? "bg-emerald-400" : ""
                }`}
              ></div>
            </div>
            <p className="text-xs opacity-70 mt-1">
              Password must be 6+ chars, with upper and lower case letters.
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
          >
            <UserPlus className="size-4" /> Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignUp}
          className="btn btn-outline w-full inline-flex items-center justify-center gap-2"
        >
          <Chrome className="size-4" /> Continue with Google
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </GlassCard>
    </div>
  );
};

export default Signup;
