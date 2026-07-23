import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Copy,
  Check,
  Send,
  MapPin,
  Terminal,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "joelcarlos02@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (formData.name && formData.email && formData.message) {
  //     setMessageSent(true);
  //     setTimeout(() => {
  //       setMessageSent(false);
  //       setFormData({ name: "", email: "", message: "" });
  //     }, 4000);
  //   }
  // };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative bg-theme-page border-t border-theme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-theme pb-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-theme-accent">
            <Terminal className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </div>
          <span className="font-mono text-xs text-theme-muted uppercase">
            DIRECT INQUIRY & CONTACT
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-6">
            <div className="tech-card p-6 space-y-6">
              <h3 className="font-display text-lg font-bold uppercase text-theme-primary">
                [ CONTACT DETAILS ]
              </h3>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between p-3 bg-theme-page border border-theme">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 shrink-0 " />
                    <div className="truncate">
                      <div className="text-[10px] text-theme-muted uppercase">
                        EMAIL
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="font-bold text-theme-primary hover:text-theme-accent truncate block"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-theme-secondary hover:text-theme-primary shrink-0"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a
                  href="https://www.linkedin.com/in/joel-carlos"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-theme-page border border-theme hover:border-theme-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <div>
                    <div className="text-[10px] text-theme-muted uppercase">
                      LINKEDIN
                    </div>
                    <div className="font-bold text-theme-primary hover:text-theme-accent">
                      linkedin.com/in/joel-carlos
                    </div>
                  </div>
                </a>

                {/* <div className="flex items-center gap-3 p-3 bg-theme-page border border-theme">
                  <MapPin className="w-4 h-4 text-theme-accent shrink-0" />
                  <div>
                    <div className="text-[10px] text-theme-muted uppercase">LOCATION</div>
                    <div className="font-bold text-theme-primary">
                      Cabanatuan City, Philippines
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              action="https://formsubmit.co/joelcarlos02@gmail.com"
              method="POST"
              className="tech-card p-6 space-y-4"
            >
              <h3 className="font-display text-lg font-bold uppercase text-theme-primary">
                [ DIRECT MESSAGE ]
              </h3>

              {messageSent ? (
                <div className="p-4 font-mono text-xs bg-emerald-500/10 border border-emerald-500/40 text-emerald-500 flex items-center gap-3">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your message has been sent. I will respond as
                    soon as possible.
                  </span>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1 font-mono text-xs">
                      <label className="text-theme-muted uppercase font-bold">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2 rounded-none bg-theme-page border border-theme text-theme-primary focus:outline-none focus:border-theme-accent"
                      />
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      <label className="text-theme-muted uppercase font-bold">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2 rounded-none bg-theme-page border border-theme text-theme-primary focus:outline-none focus:border-theme-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs">
                    <label className="text-theme-muted uppercase font-bold">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Joel, I'd like to discuss a senior frontend opportunity..."
                      className="w-full px-3.5 py-2 rounded-none bg-theme-page border border-theme text-theme-primary focus:outline-none focus:border-theme-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 font-mono text-xs font-bold uppercase tracking-wider rounded-none text-white bg-theme-accent hover:bg-theme-accent-hover transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>[ SEND MESSAGE ]</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
