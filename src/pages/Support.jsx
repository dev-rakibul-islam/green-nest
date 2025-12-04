import React from "react";
import GlassCard from "../components/GlassCard";
import {
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
  Clock,
  MapPin,
} from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Dhaka, Chattogram, and Sylhet deliveries arrive within 48 hours. Other cities require 3-5 business days depending on the courier schedule.",
  },
  {
    question: "Can I track soil moisture advice for my order?",
    answer:
      "Yes. Each item includes QR codes that unlock tailored watering reminders and troubleshooting videos.",
  },
  {
    question: "Do you offer repotting services?",
    answer:
      "We provide complimentary repotting for bundle orders and pop-up events inside partner cafes every month.",
  },
];

const Support = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-7xl px-4 md:px-8 py-12 space-y-10 mt-10">
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
          help center
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#007C56] tracking-tight">
          Real humans, 7 days a week
        </h1>
        <p className="text-base-content/70 max-w-2xl mx-auto">
          Reach us for order status, care questions, or workshop details. We
          usually respond within 2 working hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">Contact options</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-base-content/70">
                  +880 1324-556677 (8am-10pm)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-base-content/70">
                  care@greennest.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-base-content/70">+880 1700-112233</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Response time</p>
                <p className="text-sm text-base-content/70">
                  Under 2h (10am-10pm BST)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-medium">Studio pickup</p>
                <p className="text-sm text-base-content/70">
                  House 12, Road 7, Dhanmondi, Dhaka
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">Quick help</h2>
          <ul className="space-y-4">
            {faqs.map((faq) => (
              <li
                key={faq.question}
                className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-emerald-500" />
                  <p className="font-medium">{faq.question}</p>
                </div>
                <p className="mt-1 text-sm text-base-content/70">
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
};

export default Support;
