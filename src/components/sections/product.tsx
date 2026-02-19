import Image from "next/image"
import { minerals } from "@/src/data/site-content"

export function Product() {
  return (
    <section id="product" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <div className="order-2 md:order-1">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">
              The Product
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              Pure by Nature, Perfect by Design
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Each bottle of AQUA PURA is crafted from 100% recycled glass,
              preserving the water&apos;s natural purity while protecting our
              planet.
            </p>

            {/* Mineral Composition */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Mineral Composition
              </h3>
              <div className="mt-4 divide-y divide-border">
                {minerals.map((mineral) => (
                  <div
                    key={mineral.name}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <span className="font-medium text-foreground">
                        {mineral.name}
                      </span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {mineral.description}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-accent">
                      {mineral.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/assets/images/product-bottle.jpg"
                alt="AQUA PURA premium glass water bottle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
