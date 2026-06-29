import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HeroScene } from "@/components/hero-scene/hero-scene";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-screen items-start overflow-hidden pt-28 pb-16 sm:pt-32"
      style={{ background: "linear-gradient(168deg,#FBF7EF 0%,#F7E8D6 55%,#F3D8BC 100%)" }}
    >
      {/* Interactive clay Pita Catch scene (decoration, never blocks paint) */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Static hero content — server-rendered, sits above the canvas */}
      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#9a5a3c]">
            Digital tools for any business
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-display-xl font-extrabold leading-[1.04] tracking-tight text-[#1c150f]">
            Built for you.
            <br />
            Run it your way.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#3a2c20]/75">
            Some tools run themselves. Some you run in one tap. None need setup,
            none need an agency.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="pointer-events-auto mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="#products"
              size="lg"
              className="!bg-[#2A1D14] !text-[#F6EEE2] hover:!bg-[#3a2a1e]"
            >
              See the tools
            </Button>
            <Button
              href="#how-it-works"
              variant="outline"
              size="lg"
              className="!border-[#3a2c20]/30 !text-[#3a2c20] hover:!bg-[#3a2c20]/[0.06]"
            >
              How it works
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}