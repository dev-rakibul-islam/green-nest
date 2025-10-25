import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "../assets/GreenNest Logo.png";
import LazyImage from "./LazyImage";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-green-50 p-0 md:p-2 backdrop-blur-sm  text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <section className="order-1 md:order-2 text-center md:place-self-center">
            <LazyImage
              src={logo}
              alt="GreenNest logo"
              className="mx-auto h-16 w-auto md:h-20 select-none"
              fetchPriority="low"
            />
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Nurture your space with vibrant, healthy plants.
            </p>
            <div className="mt-5 flex items-center justify-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-300 transition hover:bg-slate-100 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Facebook size={24} strokeWidth={1} color="#1877F2" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-300 transition hover:bg-slate-100 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Twitter size={24} strokeWidth={1} color="#1DA1F2" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-300 transition hover:bg-slate-100 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Instagram size={24} strokeWidth={1} color="#E1306C" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-300 transition hover:bg-slate-100 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Linkedin size={24} strokeWidth={1} color="#0077B5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-300 transition hover:bg-slate-100 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Youtube size={24} strokeWidth={1} color="#FF0000" />
              </a>
            </div>
          </section>

          <nav className="order-2 md:order-1" aria-label="Quick links">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6">
              <li>
                <Link className="text-slate-600 hover:text-slate-900" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900"
                  to="/plants"
                >
                  Plants
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <section className="order-3 md:text-right" aria-label="Contact info">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <li>
                <Link className="hover:text-slate-900" to="/contact">
                  Get in touch via Contact page
                </Link>
              </li>
              <li>
                phone:{" "}
                <Link className="hover:text-slate-900" to="tel:+1234567890">
                  +1 (234) 567-890
                </Link>
              </li>
              <li>
                email:{" "}
                <Link
                  className="hover:text-slate-900"
                  to="mailto:info@greennest.com"
                >
                  info@greennest.com
                </Link>
              </li>
              <li>address: 123 Green St, Plant City, PC 12345</li>
              <li>hours: Mon-Fri 9am - 6pm</li>
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-green-100 border-dashed pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {year} GreenNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
