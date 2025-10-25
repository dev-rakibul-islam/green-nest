import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";

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
      // Open Gmail so the user can check the reset email
      window.open("https://mail.google.com/", "_blank", "noopener,noreferrer");
    } catch (err) {
      const msg = err.message || "Failed to send reset email";
      setMessage(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Forgot Password</h2>
          {message && <div className="text-sm">{message}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Send Reset Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
