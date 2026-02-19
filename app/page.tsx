import {
  Navbar,
  Hero,
  Origin,
  Benefits,
  Product,
  Testimonials,
  Contact,
  Footer,
} from "@/src/components/sections"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Origin />
      <Benefits />
      <Product />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
