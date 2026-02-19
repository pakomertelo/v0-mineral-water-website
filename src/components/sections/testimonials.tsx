import { testimonials } from "@/src/data/site-content"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
            Trusted by Connoisseurs
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-sm border border-border bg-card p-8"
            >
              <Quote className="h-8 w-8 text-accent/30" />
              <blockquote className="mt-4 text-base leading-relaxed text-card-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
