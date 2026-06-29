import { ORBS } from "./orbs";

const DARK: Record<string, string> = {
  book: "#B86800", seo: "#1A5392", analytics: "#0C6E78",
  social: "#0F6E45", outreach: "#4E37A8", bots: "#A82456",
};

/**
 * Static arranged composition shown when WebGL/physics can't (or shouldn't) run.
 * Six clay orbs rest in the side margins (3 left, 3 right), clear of the centered
 * text, above a toasted pita bowl that sits on the bottom fold line.
 */
export function StaticFallback({ animate = true }: { animate?: boolean }) {
  // 3 left, 3 right — order matches ORBS
  const spots = [
    { left: "8%",  top: "30%", animClass: "orb-float-0", delay: "0s"   }, // book
    { left: "5%",  top: "50%", animClass: "orb-float-2", delay: "1.6s" }, // seo
    { left: "9%",  top: "70%", animClass: "orb-float-4", delay: "1.2s" }, // analytics
    { left: "84%", top: "30%", animClass: "orb-float-1", delay: "0.8s" }, // social
    { left: "87%", top: "50%", animClass: "orb-float-3", delay: "0.4s" }, // outreach
    { left: "83%", top: "70%", animClass: "orb-float-0", delay: "2.0s" }, // bots
  ];
  const orbSize = "clamp(4rem, 8vw, 6rem)";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {ORBS.map((orb, i) => (
        <div
          key={orb.id}
          className={animate ? spots[i].animClass : ""}
          style={{ position: "absolute", left: spots[i].left, top: spots[i].top, animationDelay: spots[i].delay }}
        >
          <div
            style={{
              width: orbSize,
              height: orbSize,
              borderRadius: "52% 48% 50% 50% / 55% 52% 48% 45%",
              display: "grid",
              placeItems: "center",
              background: `radial-gradient(circle at 36% 27%, #ffffff66 0%, ${orb.color} 60%, ${DARK[orb.id]} 100%)`,
              boxShadow: `inset 8px 10px 16px rgba(255,255,255,0.35), inset -10px -12px 18px ${DARK[orb.id]}, 0 18px 26px -10px ${DARK[orb.id]}88`,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heebo), system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: 800,
                lineHeight: 1.05,
                textAlign: "center",
                color: "#fff",
                textShadow: "0 1px 3px rgba(60,30,10,0.55)",
                width: "80px",
              }}
            >
              {orb.label}
            </span>
          </div>
        </div>
      ))}

      {/* toasted pita bowl on the bottom fold line (top half visible) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-180px",
          transform: "translateX(-50%)",
          width: "560px",
          height: "420px",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "70px", borderRadius: "50%", background: "#c08438", boxShadow: "inset 0 12px 16px rgba(255,236,200,0.5), inset 0 -14px 20px rgba(110,64,20,0.5)" }} />
        <div style={{ position: "absolute", top: "34px", left: 0, right: 0, bottom: 0, borderRadius: "0 0 280px 280px / 0 0 260px 230px", background: "radial-gradient(circle at 50% 12%, #d9a55e 0%, #b9772f 52%, #7a481c 100%)", boxShadow: "inset 16px 20px 30px rgba(255,236,200,0.3), inset -18px -24px 38px rgba(90,52,18,0.6)" }} />
        <div style={{ position: "absolute", top: "10px", left: "7%", right: "7%", height: "64px", borderRadius: "50%", background: "radial-gradient(ellipse at center,#5e3614 0%,#7a481c 78%)", boxShadow: "inset 0 12px 22px rgba(0,0,0,0.5)" }} />
      </div>
    </div>
  );
}