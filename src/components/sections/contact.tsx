"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Info */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
              Contact
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-5xl text-balance">
              Get in Touch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 md:text-lg">
              Whether you&apos;re a retailer, restaurateur, or simply a water
              enthusiast, we&apos;d love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/50" />
                <div>
                  <p className="font-medium text-primary-foreground">
                    Headquarters
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    Bergstrasse 42, 6020 Innsbruck, Austria
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/50" />
                <div>
                  <p className="font-medium text-primary-foreground">Email</p>
                  <p className="text-sm text-primary-foreground/60">
                    hello@aquapura.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/50" />
                <div>
                  <p className="font-medium text-primary-foreground">Phone</p>
                  <p className="text-sm text-primary-foreground/60">
                    +43 512 000 000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-primary-foreground/70"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/40 focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-primary-foreground/70"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/40 focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-primary-foreground/70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/40 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-primary-foreground/70"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/40 focus:outline-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
