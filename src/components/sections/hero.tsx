import Image from "next/image"
import { siteConfig } from "@/src/data/site-content"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/hero-water.jpg"
        alt="Crystal clear mineral water"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/60">
          Premium Mineral Water
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-primary-foreground md:text-7xl lg:text-8xl text-balance">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#origin"
            className="inline-block rounded-sm bg-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-opacity hover:opacity-90"
          >
            Discover Our Story
          </a>
          <a
            href="#product"
            className="inline-block rounded-sm border border-primary-foreground/30 px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:border-primary-foreground/60"
          >
            View Products
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  )
}
