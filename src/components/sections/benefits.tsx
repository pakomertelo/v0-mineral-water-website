import { benefits } from "@/src/data/site-content"

export function Benefits() {
  return (
    <section id="benefits" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">
            Why AQUA PURA
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
            Nature Knows Best
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Every element of AQUA PURA is designed by nature and preserved
            through our commitment to purity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group rounded-sm border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <span className="font-serif text-4xl font-bold text-accent/30 transition-colors group-hover:text-accent/60">
                {benefit.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
