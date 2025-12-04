import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import GlassCard from "../components/GlassCard";
import {
  Mail,
  Image as ImageIcon,
  User as UserIcon,
  Save,
  Calendar,
  ShieldCheck,
  BadgeCheck,
  Link as LinkIcon,
} from "lucide-react";
import LazyImage from "../components/LazyImage";

const Profile = () => {
  const { user, loading, updateProfile } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  }, [user]);

  useEffect(() => {
    setIsModified(name !== user?.displayName || photoURL !== user?.photoURL);
  }, [name, photoURL, user]);

  const meta = useMemo(() => {
    const created = user?.metadata?.creationTime
      ? new Date(user.metadata.creationTime)
      : null;
    const lastSignIn = user?.metadata?.lastSignInTime
      ? new Date(user.metadata.lastSignInTime)
      : null;
    const provider = user?.providerData?.[0]?.providerId || "email";
    return { created, lastSignIn, provider };
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setMessage("");
    setSubmitting(true);
    try {
      await updateProfile({ displayName: name, photoURL });
      const msg = "Profile updated successfully";
      setMessage(msg);
      toast.success(msg);
    } catch (err) {
      const msg = err?.message || "Failed to update profile";
      setMessage(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] grid place-items-center">
        <span
          className="loading loading-ring loading-lg"
          aria-label="Loading profile"
        />
      </div>
    );
  }
  if (!user) return null;

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-10">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-80 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="hidden md:block">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500">
              My Profile
            </span>
          </h1>
          <p className="mt-2 text-sm opacity-80">
            Personalize your account and avatar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.25fr,0.75fr] gap-6 items-start">
          {/* Main Profile Card */}
          <GlassCard className="p-0 overflow-hidden">
            {/* Cover */}
            <div className="relative h-32 md:h-40 bg-linear-to-r from-emerald-600/60 via-teal-500/50 to-emerald-700/60">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.2),transparent_45%)]" />
            </div>

            {/* Avatar + Basic info */}
            <div className="px-6 md:px-8 -mt-12 pb-2">
              <div className="flex items-end gap-4">
                <div className="relative shrink-0">
                  <LazyImage
                    src={
                      previewError
                        ? "/images/avatar-placeholder.svg"
                        : photoURL ||
                          user.photoURL ||
                          "/images/avatar-placeholder.svg"
                    }
                    alt="avatar"
                    className="size-24 md:size-28 rounded-2xl object-cover ring-4 ring-white/30 shadow-xl"
                    onError={() => setPreviewError(true)}
                  />
                  <div className="absolute -inset-1 rounded-2xl -z-10 bg-linear-to-r from-emerald-400/30 to-teal-300/30 blur-lg" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <div className="font-semibold text-xl md:text-2xl flex items-center gap-2">
                      <UserIcon className="size-5 opacity-70" />
                      {user.displayName || "Anonymous"}
                    </div>
                    {user.emailVerified ? (
                      <span className="badge badge-success/80 gap-1">
                        <BadgeCheck className="size-3.5" /> Verified
                      </span>
                    ) : (
                      <span className="badge badge-warning/80 gap-1">
                        <ShieldCheck className="size-3.5" /> Unverified
                      </span>
                    )}
                  </div>
                  <div className="text-sm opacity-85 flex items-center gap-2 mt-1">
                    <Mail className="size-4 opacity-70" />
                    <span className="truncate">{user.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable form */}
            <div className="px-6 md:px-8 pt-4 pb-6">
              {message && (
                <div className="alert alert-info/70 text-sm mb-4">
                  {message}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div>
                  <label className="label pb-1">
                    <span className="label-text font-medium flex items-center gap-2">
                      <UserIcon className="size-4 opacity-70" /> Display Name
                    </span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input w-full bg-white/10 border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="label pb-1">
                    <span className="label-text font-medium flex items-center gap-2">
                      <ImageIcon className="size-4 opacity-70" /> Photo URL
                    </span>
                  </label>
                  <input
                    value={photoURL}
                    onChange={(e) => {
                      setPreviewError(false);
                      setPhotoURL(e.target.value);
                    }}
                    className="input w-full bg-white/10 border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                    placeholder="https://example.com/avatar.jpg"
                  />
                  <p className="mt-1 text-xs opacity-70">
                    Paste an image URL to update your avatar.
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    disabled={!isModified || submitting}
                    className="btn bg-[#007C56] text-white inline-flex items-center gap-2"
                  >
                    <Save className="size-4" />{" "}
                    {submitting ? "Saving..." : "Update Profile"}
                  </button>
                </div>
              </form>
            </div>
          </GlassCard>

          {/* Sidebar info */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="text-base font-semibold mb-3">Account details</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 opacity-90">
                  <LinkIcon className="size-4 opacity-70" />
                  <span className="font-medium">UID:</span>
                  <span className="truncate" title={user?.uid}>
                    {user?.uid
                      ? `${user.uid.slice(0, 8)}…${user.uid.slice(-4)}`
                      : "—"}
                  </span>
                </li>
                <li className="flex items-center gap-2 opacity-90">
                  <ShieldCheck className="size-4 opacity-70" />
                  <span className="font-medium">Provider:</span>
                  <span className="truncate">{meta.provider}</span>
                </li>
                <li className="flex items-center gap-2 opacity-90">
                  <Calendar className="size-4 opacity-70" />
                  <span className="font-medium">Member since:</span>
                  <span>
                    {meta.created ? meta.created.toLocaleDateString() : "—"}
                  </span>
                </li>
                <li className="flex items-center gap-2 opacity-90">
                  <Calendar className="size-4 opacity-70" />
                  <span className="font-medium">Last sign-in:</span>
                  <span>
                    {meta.lastSignIn
                      ? meta.lastSignIn.toLocaleDateString()
                      : "—"}
                  </span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-base font-semibold mb-3">Live preview</h2>
              <div className="flex items-center gap-3">
                <LazyImage
                  src={
                    previewError
                      ? "/images/avatar-placeholder.svg"
                      : photoURL ||
                        user.photoURL ||
                        "/images/avatar-placeholder.svg"
                  }
                  alt="avatar preview"
                  className="size-12 rounded-xl object-cover ring-2 ring-white/20"
                  onError={() => setPreviewError(true)}
                />
                <div>
                  <div className="font-medium">
                    {name || user.displayName || "Anonymous"}
                  </div>
                  <div className="text-xs opacity-80 flex items-center gap-1">
                    <Mail className="size-3.5 opacity-70" />
                    {user.email}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
      {/* Mobile design - block md:hidden */}
      <div className="block md:hidden">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-sm text-gray-500">Manage your account details</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex flex-col items-center mb-4">
            <LazyImage
              src={photoURL || "/images/avatar-placeholder.svg"}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
            <h2 className="mt-2 text-lg font-semibold">
              {user.displayName || "Anonymous"}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Display Name
              </label>
              <div className="relative mt-1">
                <UserIcon className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <div className="relative mt-1">
                <ImageIcon className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isModified || submitting}
              className="w-full py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Saving..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
