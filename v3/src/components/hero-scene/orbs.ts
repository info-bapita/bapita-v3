/** The six product orbs — fixed hue per product. Names render INSIDE the orb. */
export interface OrbDef {
  id: "book" | "seo" | "analytics" | "social" | "outreach" | "bots";
  label: string;
  color: string;
  /** resting home position in the field, used for drift + respawn */
  home: [number, number, number];
}

export const ORBS: OrbDef[] = [
  // 3 LEFT
  { id: "book",      label: "Online booking", color: "#E8920A", home: [-3.6,  1.8,  0   ] },
  { id: "seo",       label: "SEO tools",      color: "#2E84D8", home: [-4.0,  0.5, -0.3 ] },
  { id: "analytics", label: "Analytics",      color: "#16A6B3", home: [-3.5, -0.7,  0.2 ] },
  // 3 RIGHT
  { id: "social",    label: "Social posts",   color: "#23A36A", home: [ 3.6,  1.8,  0   ] },
  { id: "outreach",  label: "Outreach tools", color: "#8163E6", home: [ 4.0,  0.5, -0.3 ] },
  { id: "bots",      label: "Chat bots",      color: "#E64F86", home: [ 3.5, -0.7,  0.2 ] },
];

/** Bowl sits on the bottom fold line, large, half-visible. */
export const BOWL_CENTER: [number, number, number] = [0, -3.4, 0];
export const BOWL_RADIUS = 2.4;