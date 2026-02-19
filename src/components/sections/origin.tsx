import Image from "next/image"

export function Origin() {
  return (
    <section id="origin" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/assets/images/mountain-source.jpg"
              alt="Alpine mountain spring, the source of AQUA PURA"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">
              Our Origin
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              From the Heart of the Alps
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Deep within the pristine alpine formations of Central Europe,
                water begins a centuries-long journey through layers of ancient
                rock, naturally absorbing essential minerals along the way.
              </p>
              <p>
                AQUA PURA is drawn from a protected spring at 2,400 meters
                elevation, where the air is pure and the water untouched by
                modern pollution. Every drop carries the essence of nature&apos;s
                most careful filtration process.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">2,400m</p>
                <p className="mt-1 text-sm text-muted-foreground">Elevation</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">200+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years of Filtration</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">7.4</p>
                <p className="mt-1 text-sm text-muted-foreground">pH Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
