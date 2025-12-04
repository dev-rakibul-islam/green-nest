import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import GlassCard from "../components/GlassCard";
import { Mail, ArrowRight } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await forgotPassword(email);
      const msg = "Password reset sent. Check your email.";
      setMessage(msg);
      toast.success(msg);
      window.open("https://mail.google.com/", "_blank", "noopener,noreferrer");
    } catch (err) {
      const msg = err.message || "Failed to send reset email";
      setMessage(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <GlassCard className="w-full max-w-xl p-8 space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
            reset access
          </p>
          <h1 className="text-3xl font-bold">Forgot your password?</h1>
          <p className="text-base-content/70 text-sm">
            Enter the email you use for GreenNest and we will send a secure
            reset link. The link expires after 15 minutes.
          </p>
        </div>

        {message && (
          <div className="alert alert-info text-sm text-left">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="form-control">
            <span className="label-text text-xs uppercase tracking-wide text-emerald-500">
              Email address
            </span>
            <div className="input input-bordered flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="grow"
              />
            </div>
          </label>
          <button
            type="submit"
            className="btn bg-[#007C56] text-white w-full inline-flex items-center justify-center gap-2"
          >
            Send reset email <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/70 p-4 text-sm text-emerald-800">
          Tip: check your spam folder if the email takes longer than 2 minutes.
        </div>
      </GlassCard>
    </div>
  );
};

export default ForgotPassword;
