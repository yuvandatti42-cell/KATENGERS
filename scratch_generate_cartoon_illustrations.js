import fs from 'fs';
import path from 'path';

// Helper to wrap SVG in full standard file string
function saveSvg(filePath, width, height, content) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Common Gradients & Filters -->
    <linearGradient id="bgGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <linearGradient id="bgGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5722" />
      <stop offset="100%" stop-color="#E64A19" />
    </linearGradient>
    <linearGradient id="bgGradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FFA000" />
    </linearGradient>
    <linearGradient id="bgGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E88E5" />
      <stop offset="100%" stop-color="#1565C0" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#FF8C00" />
    </linearGradient>
    <linearGradient id="ironRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D32F2F" />
      <stop offset="100%" stop-color="#8E0000" />
    </linearGradient>
    <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0E0E0" />
      <stop offset="100%" stop-color="#9E9E9E" />
    </linearGradient>
    <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#00E5FF" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D500F9" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#D500F9" stop-opacity="0" />
    </radialGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000" flood-opacity="0.3" />
    </filter>
  </defs>

  ${content}
</svg>`;
  fs.writeFileSync(filePath, svg);
  console.log(`Saved: ${filePath}`);
}

// -------------------------------------------------------------
// 1. CAPTAIN WHISKER (AI Architect - Cyber Visor & HUD)
// -------------------------------------------------------------
const architectSvg = `
  <!-- Background Badge -->
  <rect width="400" height="400" rx="40" fill="url(#bgGradDark)" />
  <circle cx="200" cy="200" r="170" fill="#1E293B" stroke="#00E5FF" stroke-width="4" stroke-dasharray="10 6" />
  
  <!-- Holographic Grid Lines -->
  <path d="M 50 200 H 350 M 200 50 V 350" stroke="#00E5FF" stroke-opacity="0.2" stroke-width="2" />
  <circle cx="200" cy="200" r="130" fill="none" stroke="#00E5FF" stroke-opacity="0.15" stroke-width="2" />

  <g filter="url(#dropShadow)">
    <!-- Body / Suit -->
    <path d="M 120 380 Q 200 310 280 380 L 310 400 H 90 Z" fill="#091428" stroke="#1A1D1D" stroke-width="4" />
    <!-- Armor Collars & Glow Core -->
    <path d="M 150 340 L 200 380 L 250 340 L 230 400 H 170 Z" fill="#1E293B" stroke="#00E5FF" stroke-width="3" />
    <circle cx="200" cy="370" r="12" fill="#00E5FF" />
    <circle cx="200" cy="370" r="6" fill="#FFFFFF" />

    <!-- Cat Head & Ears (Adult Male Cool Cat) -->
    <!-- Left Ear -->
    <path d="M 120 170 L 90 60 L 165 125 Z" fill="#334155" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 155 L 105 85 L 155 125 Z" fill="#FF7676" opacity="0.8" />
    <!-- Right Ear -->
    <path d="M 280 170 L 310 60 L 235 125 Z" fill="#334155" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 155 L 295 85 L 245 125 Z" fill="#FF7676" opacity="0.8" />

    <!-- Head Base (Sleek Grey/Slate Adult Cat) -->
    <ellipse cx="200" cy="200" rx="90" ry="80" fill="#475569" stroke="#1A1D1D" stroke-width="5" />
    <!-- Cheeks Tuft -->
    <path d="M 110 210 Q 90 230 115 250 Q 140 260 170 265" fill="#475569" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 290 210 Q 310 230 285 250 Q 260 260 230 265" fill="#475569" stroke="#1A1D1D" stroke-width="4" />

    <!-- Muzzle / Nose / Mouth -->
    <ellipse cx="200" cy="235" rx="35" ry="25" fill="#F8FAFC" stroke="#1A1D1D" stroke-width="3" />
    <polygon points="200,222 190,212 210,212" fill="#E11D48" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 232 Q 200 242 210 232" fill="none" stroke="#1A1D1D" stroke-width="4" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 140 230 L 70 215 M 135 240 L 65 240 M 140 250 L 75 260" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 260 230 L 330 215 M 265 240 L 335 240 M 260 250 L 325 260" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Cyber AI Visor (Glove / Futuristic Goggles) -->
    <path d="M 125 165 Q 200 150 275 165 Q 285 205 270 215 Q 200 225 130 215 Q 115 205 125 165 Z" fill="#00E5FF" opacity="0.85" stroke="#1A1D1D" stroke-width="4" />
    <!-- Visor Glow lines & Tech UI -->
    <path d="M 140 180 H 260 M 150 195 H 220" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.9" />
    <circle cx="160" cy="180" r="4" fill="#FFFFFF" />
    <circle cx="240" cy="180" r="4" fill="#FFFFFF" />
  </g>

  <!-- Floating Hologram AI Code Nodes -->
  <g opacity="0.8">
    <rect x="50" y="80" width="70" height="35" rx="8" fill="#0F172A" stroke="#00E5FF" stroke-width="2" />
    <text x="60" y="102" fill="#00E5FF" font-family="monospace" font-size="12" font-weight="bold">&lt;AI/&gt;</text>
    
    <rect x="280" y="90" width="80" height="35" rx="8" fill="#0F172A" stroke="#00E5FF" stroke-width="2" />
    <text x="290" y="112" fill="#00E5FF" font-family="monospace" font-size="11" font-weight="bold">RAG 99.9%</text>
  </g>
`;

// -------------------------------------------------------------
// 2. PIXEL PAW (UI/UX Designer Cat - Stylus & Floating Canvas)
// -------------------------------------------------------------
const designerSvg = `
  <!-- Background Badge -->
  <rect width="400" height="400" rx="40" fill="url(#bgGradYellow)" />
  <circle cx="200" cy="200" r="170" fill="#FFFBEB" opacity="0.4" />
  
  <g filter="url(#dropShadow)">
    <!-- Torso / Designer Apron/Jacket -->
    <path d="M 110 380 Q 200 300 290 380 L 320 400 H 80 Z" fill="#1E293B" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 160 330 L 200 370 L 240 330" stroke="#FF5722" stroke-width="6" stroke-linecap="round" />

    <!-- Cat Head & Ears (Cool Calico / Orange-White Adult Cat) -->
    <!-- Left Ear -->
    <path d="M 120 170 L 85 55 L 165 120 Z" fill="#D97706" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 155 L 100 80 L 155 120 Z" fill="#FFEDD5" />
    <!-- Right Ear -->
    <path d="M 280 170 L 315 55 L 235 120 Z" fill="#B45309" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 155 L 300 80 L 245 120 Z" fill="#FFEDD5" />

    <!-- Head Base -->
    <ellipse cx="200" cy="195" rx="88" ry="78" fill="#F59E0B" stroke="#1A1D1D" stroke-width="5" />
    <!-- White Face Patch -->
    <path d="M 160 170 Q 200 130 240 170 Q 260 230 200 265 Q 140 230 160 170 Z" fill="#FFFFFF" />

    <!-- Cool Glasses (Round Artist Specs) -->
    <circle cx="160" cy="180" r="30" fill="none" stroke="#1A1D1D" stroke-width="5" />
    <circle cx="160" cy="180" r="26" fill="#00E5FF" opacity="0.25" />
    <circle cx="240" cy="180" r="30" fill="none" stroke="#1A1D1D" stroke-width="5" />
    <circle cx="240" cy="180" r="26" fill="#00E5FF" opacity="0.25" />
    <line x1="190" y1="180" x2="210" y2="180" stroke="#1A1D1D" stroke-width="5" />

    <!-- Eyes (Focused Confident Expression) -->
    <ellipse cx="160" cy="180" rx="12" ry="15" fill="#1E293B" />
    <circle cx="164" cy="174" r="4" fill="#FFFFFF" />
    <ellipse cx="240" cy="180" rx="12" ry="15" fill="#1E293B" />
    <circle cx="244" cy="174" r="4" fill="#FFFFFF" />

    <!-- Nose & Mouth -->
    <polygon points="200,210 192,200 208,200" fill="#F43F5E" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 218 Q 200 226 210 218" fill="none" stroke="#1A1D1D" stroke-width="4" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 215 L 60 205 M 125 225 L 55 225 M 130 235 L 65 245" stroke="#1A1D1D" stroke-width="3" stroke-linecap="round" />
    <path d="M 270 215 L 340 205 M 275 225 L 345 225 M 270 235 L 335 245" stroke="#1A1D1D" stroke-width="3" stroke-linecap="round" />

    <!-- Paw holding Glowing Stylus Pencil -->
    <g transform="translate(230, 270)">
      <path d="M 0 40 L 40 -30 L 60 -10 L 20 60 Z" fill="#EC4899" stroke="#1A1D1D" stroke-width="3" />
      <polygon points="40,-30 60,-10 70,-25" fill="#00E5FF" stroke="#1A1D1D" stroke-width="2" />
      <!-- Cat Paw -->
      <circle cx="5" cy="45" r="22" fill="#F59E0B" stroke="#1A1D1D" stroke-width="4" />
      <circle cx="-2" cy="35" r="6" fill="#FFFFFF" />
      <circle cx="12" cy="35" r="6" fill="#FFFFFF" />
    </g>
  </g>

  <!-- Floating UI Color Palettes & Widgets -->
  <rect x="40" y="100" width="50" height="80" rx="10" fill="#FFFFFF" stroke="#1A1D1D" stroke-width="3" />
  <circle cx="65" cy="120" r="10" fill="#FF5722" />
  <circle cx="65" cy="145" r="10" fill="#FFC107" />
  <circle cx="65" cy="165" r="7" fill="#00E5FF" />
`;

// -------------------------------------------------------------
// 3. BYTE CLAW (Full-Stack Ninja Cat - Cyber Blades & Code Matrix)
// -------------------------------------------------------------
const engineerSvg = `
  <!-- Background Badge -->
  <rect width="400" height="400" rx="40" fill="url(#bgGradOrange)" />
  <circle cx="200" cy="200" r="170" fill="#1A1D1D" opacity="0.3" />

  <g filter="url(#dropShadow)">
    <!-- Ninja Suit Body -->
    <path d="M 110 380 Q 200 290 290 380 L 320 400 H 80 Z" fill="#0F172A" stroke="#1A1D1D" stroke-width="4" />
    <!-- V-Strap Armor -->
    <path d="M 140 330 L 200 390 L 260 330" stroke="#FF5722" stroke-width="8" stroke-linecap="round" />

    <!-- Cat Head & Ears (Ginger Tiger Ninja Cat) -->
    <!-- Left Ear -->
    <path d="M 115 165 L 75 45 L 160 115 Z" fill="#EA580C" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 120 150 L 90 70 L 150 115 Z" fill="#FFEDD5" />
    <!-- Right Ear -->
    <path d="M 285 165 L 325 45 L 240 115 Z" fill="#EA580C" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 280 150 L 310 70 L 250 115 Z" fill="#FFEDD5" />

    <!-- Head Base (Tiger Stripes) -->
    <ellipse cx="200" cy="190" rx="90" ry="80" fill="#F97316" stroke="#1A1D1D" stroke-width="5" />
    <!-- Tiger Stripes on forehead -->
    <path d="M 185 125 L 200 145 L 215 125 M 170 140 L 190 155 M 230 140 L 210 155" stroke="#7C2D12" stroke-width="5" stroke-linecap="round" />

    <!-- Ninja Headband (Orange/Red tied with fluttering tails) -->
    <path d="M 110 155 Q 200 140 290 155 L 295 175 Q 200 160 105 175 Z" fill="#EF4444" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 290 165 Q 340 150 370 170 Q 330 180 295 175 Z" fill="#EF4444" stroke="#1A1D1D" stroke-width="3" />

    <!-- Sharp Intense Eyes -->
    <polygon points="135,185 175,190 140,205" fill="#FEF08A" stroke="#1A1D1D" stroke-width="3" />
    <ellipse cx="155" cy="194" rx="4" ry="8" fill="#1A1D1D" />
    <polygon points="265,185 225,190 260,205" fill="#FEF08A" stroke="#1A1D1D" stroke-width="3" />
    <ellipse cx="245" cy="194" rx="4" ry="8" fill="#1A1D1D" />

    <!-- Mask Covering lower face -->
    <path d="M 120 210 Q 200 240 280 210 Q 270 275 200 275 Q 130 275 120 210 Z" fill="#1E293B" stroke="#1A1D1D" stroke-width="4" />

    <!-- Whiskers poking through mask -->
    <path d="M 115 225 L 45 210 M 110 240 L 40 235" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 285 225 L 355 210 M 290 240 L 360 235" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Glowing Cyber Energy Katana / Dagger in Paw -->
    <g transform="translate(60, 240) rotate(-35)">
      <rect x="0" y="0" width="14" height="150" rx="4" fill="#00E5FF" stroke="#FFFFFF" stroke-width="2" />
      <rect x="-10" y="140" width="34" height="10" rx="2" fill="#1E293B" stroke="#1A1D1D" stroke-width="2" />
      <rect x="-4" y="150" width="22" height="40" fill="#F97316" stroke="#1A1D1D" stroke-width="2" />
    </g>
  </g>
`;

// -------------------------------------------------------------
// 4. SHADOW PURR (Security Officer - Black Panther Guard & Shield)
// -------------------------------------------------------------
const securitySvg = `
  <!-- Background Badge -->
  <rect width="400" height="400" rx="40" fill="url(#bgGradDark)" />
  <circle cx="200" cy="200" r="170" fill="url(#purpleGlow)" />

  <g filter="url(#dropShadow)">
    <!-- Tactical Armor Shoulders -->
    <path d="M 100 380 Q 200 290 300 380 L 330 400 H 70 Z" fill="#090D16" stroke="#1A1D1D" stroke-width="4" />
    <!-- Armor Lines -->
    <path d="M 140 330 L 200 380 L 260 330" stroke="#A855F7" stroke-width="5" stroke-linecap="round" />

    <!-- Cat Head & Ears (Sleek Black Panther Cat) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#0F172A" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 100 70 L 155 110 Z" fill="#64748B" opacity="0.5" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#0F172A" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 300 70 L 245 110 Z" fill="#64748B" opacity="0.5" />

    <!-- Head Base (Midnight Black Fur) -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#1E293B" stroke="#1A1D1D" stroke-width="5" />

    <!-- Glowing Purple Cyber Eye Mask & Eyes -->
    <path d="M 120 160 Q 200 145 280 160 Q 290 200 270 205 Q 200 215 130 205 Q 110 200 120 160 Z" fill="#581C87" opacity="0.7" stroke="#C084FC" stroke-width="3" />
    
    <!-- Piercing Neon Cyan Cat Eyes -->
    <ellipse cx="160" cy="180" rx="14" ry="16" fill="#00E5FF" />
    <ellipse cx="160" cy="180" rx="4" ry="14" fill="#090D16" />
    <circle cx="164" cy="174" r="4" fill="#FFFFFF" />

    <ellipse cx="240" cy="180" rx="14" ry="16" fill="#00E5FF" />
    <ellipse cx="240" cy="180" rx="4" ry="14" fill="#090D16" />
    <circle cx="244" cy="174" r="4" fill="#FFFFFF" />

    <!-- Nose & Mouth -->
    <polygon points="200,205 193,197 207,197" fill="#C084FC" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 213 Q 200 221 210 213" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 210 L 55 195 M 125 220 L 50 220 M 130 230 L 60 240" stroke="#C084FC" stroke-width="3" stroke-linecap="round" />
    <path d="M 270 210 L 345 195 M 275 220 L 350 220 M 270 230 L 340 240" stroke="#C084FC" stroke-width="3" stroke-linecap="round" />

    <!-- Glowing Cyber Security Shield (Foreground Left) -->
    <g transform="translate(40, 210)">
      <path d="M 30 0 L 90 0 L 100 60 Q 60 120 20 100 Q 10 40 30 0 Z" fill="#0F172A" stroke="#00E5FF" stroke-width="4" />
      <path d="M 40 15 L 80 15 L 88 55 Q 55 95 30 80 Z" fill="url(#cyanGlow)" opacity="0.6" />
      <!-- Lock Icon on Shield -->
      <rect x="48" y="45" width="24" height="20" rx="4" fill="#00E5FF" />
      <path d="M 54 45 V 37 A 6 6 0 0 1 66 37 V 45" fill="none" stroke="#00E5FF" stroke-width="3" />
    </g>
  </g>
`;

// -------------------------------------------------------------
// 5. CAPTAIN AMERICLAW (Captain America Suit & Shield)
// -------------------------------------------------------------
const capAmericaSvg = `
  <rect width="400" height="400" rx="200" fill="url(#bgGradBlue)" />
  <circle cx="200" cy="200" r="185" fill="none" stroke="#FFFFFF" stroke-width="6" opacity="0.3" />

  <g filter="url(#dropShadow)">
    <!-- Suit Shoulders -->
    <path d="M 100 380 Q 200 300 300 380 L 330 400 H 70 Z" fill="#1E3A8A" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 170 330 H 230 V 400 H 170 Z" fill="#FFFFFF" />
    <path d="M 190 330 H 210 V 400 H 190 Z" fill="#DC2626" />

    <!-- Cat Head & Ears (in Cap Helmet) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#1E3A8A" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 100 70 L 155 110 Z" fill="#3B82F6" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#1E3A8A" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 300 70 L 245 110 Z" fill="#3B82F6" />

    <!-- Head Helmet Base -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#2563EB" stroke="#1A1D1D" stroke-width="5" />
    <!-- Cap 'A' Symbol on Helmet -->
    <text x="200" y="140" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="36" stroke="#1A1D1D" stroke-width="2">A</text>

    <!-- Lower Face (Fur exposed) -->
    <path d="M 130 180 Q 200 200 270 180 Q 270 255 200 265 Q 130 255 130 180 Z" fill="#F8FAFC" stroke="#1A1D1D" stroke-width="4" />

    <!-- Heroic Blue Eyes -->
    <ellipse cx="160" cy="180" rx="14" ry="16" fill="#0284C7" stroke="#1A1D1D" stroke-width="2" />
    <circle cx="164" cy="174" r="5" fill="#FFFFFF" />
    <ellipse cx="240" cy="180" rx="14" ry="16" fill="#0284C7" stroke="#1A1D1D" stroke-width="2" />
    <circle cx="244" cy="174" r="5" fill="#FFFFFF" />

    <!-- Nose & Mouth -->
    <polygon points="200,205 192,195 208,195" fill="#EF4444" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 215 Q 200 225 210 215" fill="none" stroke="#1A1D1D" stroke-width="4" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 215 L 55 200 M 125 225 L 50 225 M 130 235 L 60 245" stroke="#1A1D1D" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 270 215 L 345 200 M 275 225 L 350 225 M 270 235 L 340 245" stroke="#1A1D1D" stroke-width="3.5" stroke-linecap="round" />

    <!-- Vibranium Shield (Foreground Right) -->
    <g transform="translate(240, 220)">
      <circle cx="60" cy="60" r="60" fill="#DC2626" stroke="#1A1D1D" stroke-width="4" />
      <circle cx="60" cy="60" r="46" fill="#FFFFFF" />
      <circle cx="60" cy="60" r="32" fill="#DC2626" />
      <circle cx="60" cy="60" r="20" fill="#2563EB" />
      <!-- Star in Center -->
      <polygon points="60,43 65,54 77,54 67,61 71,73 60,65 49,73 53,61 43,54 55,54" fill="#FFFFFF" />
    </g>
  </g>
`;

// -------------------------------------------------------------
// 6. THOR PAWS (Thor Helmet, Cape & Mjolnir Hammer)
// -------------------------------------------------------------
const thorSvg = `
  <rect width="400" height="400" rx="200" fill="url(#bgGradDark)" />
  
  <!-- Lightning Arcs Background -->
  <path d="M 50 50 L 100 120 L 70 160 L 150 240 M 350 50 L 300 130 L 330 180" stroke="#00E5FF" stroke-width="4" fill="none" opacity="0.8" />

  <g filter="url(#dropShadow)">
    <!-- Red Fluttering Cape -->
    <path d="M 70 240 Q 50 340 90 400 L 310 400 Q 350 340 330 240 Z" fill="#DC2626" stroke="#1A1D1D" stroke-width="4" />

    <!-- Armor Chest -->
    <path d="M 110 380 Q 200 300 290 380 L 320 400 H 80 Z" fill="#334155" stroke="#1A1D1D" stroke-width="4" />
    <circle cx="160" cy="340" r="16" fill="url(#silverGrad)" stroke="#1A1D1D" stroke-width="3" />
    <circle cx="240" cy="340" r="16" fill="url(#silverGrad)" stroke="#1A1D1D" stroke-width="3" />

    <!-- Cat Head & Ears (Thor Helmet with Wings) -->
    <!-- Wing Left -->
    <path d="M 100 130 L 30 70 L 90 85 L 60 40 L 110 75 Z" fill="#E2E8F0" stroke="#1A1D1D" stroke-width="4" />
    <!-- Wing Right -->
    <path d="M 300 130 L 370 70 L 310 85 L 340 40 L 290 75 Z" fill="#E2E8F0" stroke="#1A1D1D" stroke-width="4" />

    <!-- Left Ear -->
    <path d="M 120 150 L 90 40 L 165 100 Z" fill="#CBD5E1" stroke="#1A1D1D" stroke-width="4" />
    <!-- Right Ear -->
    <path d="M 280 150 L 310 40 L 235 100 Z" fill="#CBD5E1" stroke="#1A1D1D" stroke-width="4" />

    <!-- Head / Helmet -->
    <ellipse cx="200" cy="180" rx="88" ry="78" fill="#94A3B8" stroke="#1A1D1D" stroke-width="5" />
    <path d="M 130 140 H 270 V 165 H 130 Z" fill="#64748B" stroke="#1A1D1D" stroke-width="3" />

    <!-- Golden Fur Face exposed -->
    <path d="M 130 175 Q 200 195 270 175 Q 260 250 200 260 Q 140 250 130 175 Z" fill="#F59E0B" stroke="#1A1D1D" stroke-width="4" />

    <!-- Fierce Thunder Eyes -->
    <ellipse cx="160" cy="180" rx="14" ry="16" fill="#00E5FF" stroke="#1A1D1D" stroke-width="2" />
    <circle cx="164" cy="174" r="5" fill="#FFFFFF" />
    <ellipse cx="240" cy="180" rx="14" ry="16" fill="#00E5FF" stroke="#1A1D1D" stroke-width="2" />
    <circle cx="244" cy="174" r="5" fill="#FFFFFF" />

    <!-- Nose & Mouth -->
    <polygon points="200,202 192,192 208,192" fill="#B91C1C" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 212 Q 200 222 210 212" fill="none" stroke="#1A1D1D" stroke-width="4" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 215 L 55 200 M 125 225 L 50 225" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 270 215 L 345 200 M 275 225 L 350 225" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Mjolnir Hammer (Foreground Left) -->
    <g transform="translate(40, 210) rotate(-20)">
      <rect x="30" y="30" width="70" height="45" rx="6" fill="url(#silverGrad)" stroke="#1A1D1D" stroke-width="4" />
      <rect x="58" y="75" width="14" height="70" fill="#78350F" stroke="#1A1D1D" stroke-width="3" />
      <!-- Lightning Sparks around hammer -->
      <path d="M 20 20 L 40 40 M 110 20 L 90 35 M 10 60 L 30 65" stroke="#00E5FF" stroke-width="3" />
    </g>
  </g>
`;

// -------------------------------------------------------------
// 7. SPIDER CAT (Spider-Man Suit & Web Shooting)
// -------------------------------------------------------------
const spiderSvg = `
  <rect width="400" height="400" rx="200" fill="url(#bgGradOrange)" />

  <!-- Web Network in BG -->
  <path d="M 200 0 L 200 400 M 0 200 L 400 200 M 50 50 L 350 350 M 350 50 L 50 350" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2" />

  <g filter="url(#dropShadow)">
    <!-- Red & Blue Suit Shoulders -->
    <path d="M 100 380 Q 200 300 300 380 L 330 400 H 70 Z" fill="#0284C7" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 160 320 Q 200 290 240 320 V 400 H 160 Z" fill="#DC2626" stroke="#1A1D1D" stroke-width="3" />
    <!-- Spider Emblem -->
    <ellipse cx="200" cy="350" rx="8" ry="12" fill="#1A1D1D" />
    <path d="M 200 345 L 180 335 M 200 345 L 220 335 M 200 355 L 175 365 M 200 355 L 225 365" stroke="#1A1D1D" stroke-width="3" />

    <!-- Cat Head & Ears (Full Spider Mask) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#DC2626" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 100 70 L 155 110 Z" fill="#B91C1C" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#DC2626" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 300 70 L 245 110 Z" fill="#B91C1C" />

    <!-- Head Mask Base -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#DC2626" stroke="#1A1D1D" stroke-width="5" />
    
    <!-- Web Lines on Mask -->
    <path d="M 200 110 V 260 M 115 185 H 285 M 135 135 L 265 235 M 265 135 L 135 235" stroke="#1A1D1D" stroke-width="2" opacity="0.6" />

    <!-- Iconic Large White Spidey Cat Eyes -->
    <path d="M 125 160 Q 165 145 185 185 Q 160 215 130 195 Z" fill="#FFFFFF" stroke="#1A1D1D" stroke-width="5" />
    <path d="M 275 160 Q 235 145 215 185 Q 240 215 270 195 Z" fill="#FFFFFF" stroke="#1A1D1D" stroke-width="5" />

    <!-- Whiskers (White Web Threads) -->
    <path d="M 120 210 L 40 195 M 115 225 L 35 225 M 120 235 L 45 245" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 280 210 L 360 195 M 285 225 L 365 225 M 280 235 L 355 245" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Web Shooting Paw in Foreground -->
    <g transform="translate(230, 240)">
      <circle cx="45" cy="45" r="24" fill="#DC2626" stroke="#1A1D1D" stroke-width="4" />
      <path d="M 45 25 L 110 -20 M 45 25 L 120 5 M 45 25 L 95 -40" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
    </g>
  </g>
`;

// -------------------------------------------------------------
// 8. BLACK MEOWTHAR (Black Panther Suit & Glowing Vibranium)
// -------------------------------------------------------------
const pantherSvg = `
  <rect width="400" height="400" rx="200" fill="url(#bgGradDark)" />
  <circle cx="200" cy="200" r="170" fill="url(#purpleGlow)" opacity="0.6" />

  <g filter="url(#dropShadow)">
    <!-- Suit Shoulders -->
    <path d="M 100 380 Q 200 290 300 380 L 330 400 H 70 Z" fill="#090D16" stroke="#1A1D1D" stroke-width="4" />
    <!-- Vibranium Necklace -->
    <path d="M 140 320 Q 200 370 260 320" fill="none" stroke="#E2E8F0" stroke-width="6" stroke-linecap="round" />
    <polygon points="200,355 193,335 207,335" fill="#C084FC" />

    <!-- Cat Head & Ears (Black Panther Mask) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#0F172A" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 105 75 L 155 110 Z" fill="#334155" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#0F172A" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 295 75 L 245 110 Z" fill="#334155" />

    <!-- Head Base -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#1E293B" stroke="#1A1D1D" stroke-width="5" />
    
    <!-- Purple Vibranium Tech Accents -->
    <path d="M 160 120 L 200 145 L 240 120 M 200 145 V 175" stroke="#C084FC" stroke-width="4" stroke-linecap="round" />

    <!-- Silver Panther Eyes -->
    <path d="M 130 170 Q 165 160 180 185 Q 155 200 135 190 Z" fill="#E2E8F0" stroke="#1A1D1D" stroke-width="4" />
    <ellipse cx="155" cy="178" rx="5" ry="10" fill="#090D16" />
    
    <path d="M 270 170 Q 235 160 220 185 Q 245 200 265 190 Z" fill="#E2E8F0" stroke="#1A1D1D" stroke-width="4" />
    <ellipse cx="245" cy="178" rx="5" ry="10" fill="#090D16" />

    <!-- Nose & Mouth -->
    <polygon points="200,205 193,197 207,197" fill="#C084FC" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 215 Q 200 223 210 215" fill="none" stroke="#E2E8F0" stroke-width="3.5" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 210 L 55 195 M 125 220 L 50 220 M 130 230 L 60 240" stroke="#C084FC" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 270 210 L 345 195 M 275 220 L 350 220 M 270 230 L 340 240" stroke="#C084FC" stroke-width="3.5" stroke-linecap="round" />

    <!-- Sharp Silver Claws in Foreground -->
    <g transform="translate(50, 240)">
      <path d="M 10 30 L 35 0 M 25 35 L 50 5 M 40 40 L 65 10" stroke="#E2E8F0" stroke-width="5" stroke-linecap="round" />
    </g>
  </g>
`;

// -------------------------------------------------------------
// 9. IRON PURR (Iron Man Suit & Arc Reactor)
// -------------------------------------------------------------
const ironManSvg = `
  <rect width="400" height="400" rx="200" fill="url(#ironRed)" />
  <circle cx="200" cy="200" r="185" fill="none" stroke="#FFD700" stroke-width="4" opacity="0.4" />

  <g filter="url(#dropShadow)">
    <!-- Red & Gold Armor Suit -->
    <path d="M 100 380 Q 200 290 300 380 L 330 400 H 70 Z" fill="#991B1B" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 150 330 L 200 370 L 250 330" fill="url(#goldGrad)" stroke="#1A1D1D" stroke-width="3" />
    
    <!-- Chest Arc Reactor (Glowing Paw Shape) -->
    <circle cx="200" cy="360" r="18" fill="#00E5FF" stroke="#FFFFFF" stroke-width="3" />
    <circle cx="200" cy="360" r="8" fill="#FFFFFF" />

    <!-- Cat Head & Ears (Iron Man Helmet) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#991B1B" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 105 75 L 155 110 Z" fill="url(#goldGrad)" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#991B1B" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 295 75 L 245 110 Z" fill="url(#goldGrad)" />

    <!-- Head Armor Helmet -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#991B1B" stroke="#1A1D1D" stroke-width="5" />
    <!-- Faceplate (Gold) -->
    <path d="M 135 140 Q 200 120 265 140 L 275 200 Q 200 265 125 200 Z" fill="url(#goldGrad)" stroke="#1A1D1D" stroke-width="4" />

    <!-- Glowing Cyan Slit Eyes -->
    <polygon points="145,175 185,178 180,192 148,188" fill="#00E5FF" stroke="#FFFFFF" stroke-width="2" />
    <polygon points="255,175 215,178 220,192 252,188" fill="#00E5FF" stroke="#FFFFFF" stroke-width="2" />

    <!-- Mouth Slot -->
    <line x1="180" y1="230" x2="220" y2="230" stroke="#1A1D1D" stroke-width="4" stroke-linecap="round" />

    <!-- Whiskers (Laser Energy Threads) -->
    <path d="M 120 215 L 45 205 M 115 230 L 40 230 M 120 240 L 50 250" stroke="#00E5FF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 280 215 L 355 205 M 285 230 L 360 230 M 280 240 L 350 250" stroke="#00E5FF" stroke-width="3.5" stroke-linecap="round" />
  </g>
`;

// -------------------------------------------------------------
// 10. CAPTAIN MEOWVEL (Captain Marvel Suit & Cosmic Energy)
// -------------------------------------------------------------
const meowvelSvg = `
  <rect width="400" height="400" rx="200" fill="url(#bgGradBlue)" />
  
  <!-- Cosmic Energy Rays -->
  <path d="M 200 200 L 50 20 M 200 200 L 350 20 M 200 200 L 20 200 M 200 200 L 380 200" stroke="#F59E0B" stroke-width="6" opacity="0.5" />

  <g filter="url(#dropShadow)">
    <!-- Red, Navy & Gold Suit -->
    <path d="M 100 380 Q 200 290 300 380 L 330 400 H 70 Z" fill="#1E3A8A" stroke="#1A1D1D" stroke-width="4" />
    <path d="M 160 320 L 200 290 L 240 320 V 400 H 160 Z" fill="#DC2626" stroke="#1A1D1D" stroke-width="3" />
    <!-- Gold Star on Chest -->
    <polygon points="200,325 205,338 218,338 207,346 211,358 200,350 189,358 193,346 182,338 195,338" fill="url(#goldGrad)" stroke="#1A1D1D" stroke-width="2" />

    <!-- Cat Head & Ears (Golden Fur Heroine) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#F59E0B" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 105 75 L 155 110 Z" fill="#FEF08A" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#F59E0B" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 295 75 L 245 110 Z" fill="#FEF08A" />

    <!-- Head Base -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#FBBF24" stroke="#1A1D1D" stroke-width="5" />
    
    <!-- Red & Gold Mohawk Helmet Crown -->
    <path d="M 170 115 Q 200 80 230 115 Z" fill="#DC2626" stroke="#1A1D1D" stroke-width="3" />

    <!-- Glowing Blue Eyes with Cosmic Glow -->
    <ellipse cx="160" cy="180" rx="14" ry="16" fill="#00E5FF" stroke="#1A1D1D" stroke-width="2" />
    <circle cx="164" cy="174" r="5" fill="#FFFFFF" />
    <ellipse cx="240" cy="180" rx="14" ry="16" fill="#00E5FF" stroke="#1A1D1D" stroke-width="2" />
    <circle cx="244" cy="174" r="5" fill="#FFFFFF" />

    <!-- Nose & Mouth -->
    <polygon points="200,205 192,195 208,195" fill="#E11D48" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 215 Q 200 225 210 215" fill="none" stroke="#1A1D1D" stroke-width="4" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 215 L 55 200 M 125 225 L 50 225 M 130 235 L 60 245" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 270 215 L 345 200 M 275 225 L 350 225 M 270 235 L 340 245" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
  </g>
`;

// -------------------------------------------------------------
// 11. BLACK CATDOW (Black Widow Tactical Suit & Shock Batons)
// -------------------------------------------------------------
const catdowSvg = `
  <rect width="400" height="400" rx="200" fill="url(#bgGradDark)" />

  <g filter="url(#dropShadow)">
    <!-- Black Tactical Suit Shoulders -->
    <path d="M 100 380 Q 200 290 300 380 L 330 400 H 70 Z" fill="#0F172A" stroke="#1A1D1D" stroke-width="4" />
    <!-- Red Hourglass Symbol -->
    <polygon points="200,320 215,305 185,305" fill="#DC2626" />
    <polygon points="200,320 215,335 185,335" fill="#DC2626" />

    <!-- Cat Head & Ears (Sleek Russian Blue Cat Heroine) -->
    <!-- Left Ear -->
    <path d="M 120 160 L 85 45 L 165 110 Z" fill="#334155" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 125 145 L 105 75 L 155 110 Z" fill="#F43F5E" opacity="0.6" />
    <!-- Right Ear -->
    <path d="M 280 160 L 315 45 L 235 110 Z" fill="#334155" stroke="#1A1D1D" stroke-width="5" stroke-linejoin="round" />
    <path d="M 275 145 L 295 75 L 245 110 Z" fill="#F43F5E" opacity="0.6" />

    <!-- Head Base -->
    <ellipse cx="200" cy="185" rx="88" ry="78" fill="#475569" stroke="#1A1D1D" stroke-width="5" />

    <!-- Piercing Emerald Green Eyes -->
    <ellipse cx="160" cy="180" rx="14" ry="16" fill="#10B981" stroke="#1A1D1D" stroke-width="2" />
    <ellipse cx="160" cy="180" rx="4" ry="14" fill="#090D16" />
    <circle cx="164" cy="174" r="4" fill="#FFFFFF" />

    <ellipse cx="240" cy="180" rx="14" ry="16" fill="#10B981" stroke="#1A1D1D" stroke-width="2" />
    <ellipse cx="240" cy="180" rx="4" ry="14" fill="#090D16" />
    <circle cx="244" cy="174" r="4" fill="#FFFFFF" />

    <!-- Nose & Mouth -->
    <polygon points="200,205 193,197 207,197" fill="#E11D48" stroke="#1A1D1D" stroke-width="2" />
    <path d="M 190 215 Q 200 223 210 215" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Whiskers -->
    <path d="M 130 210 L 55 195 M 125 220 L 50 220 M 130 230 L 60 240" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 270 210 L 345 195 M 275 220 L 350 220 M 270 230 L 340 240" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />

    <!-- Electric Shock Batons (Foreground Sides) -->
    <g transform="translate(40, 180) rotate(25)">
      <rect x="0" y="0" width="12" height="120" rx="4" fill="#00E5FF" stroke="#1A1D1D" stroke-width="3" />
    </g>
    <g transform="translate(340, 180) rotate(-25)">
      <rect x="0" y="0" width="12" height="120" rx="4" fill="#00E5FF" stroke="#1A1D1D" stroke-width="3" />
    </g>
  </g>
`;

// Save all Squad SVG files
saveSvg('public/squad/architect.svg', 400, 400, architectSvg);
saveSvg('public/squad/designer.svg', 400, 400, designerSvg);
saveSvg('public/squad/engineer.svg', 400, 400, engineerSvg);
saveSvg('public/squad/security.svg', 400, 400, securitySvg);

// Save all Team Carousel SVG files
saveSvg('src/assets/team/alex_architect.svg', 400, 400, capAmericaSvg);
saveSvg('src/assets/team/sarah_designer.svg', 400, 400, thorSvg);
saveSvg('src/assets/team/marcus_engineer.svg', 400, 400, spiderSvg);
saveSvg('src/assets/team/elena_security.svg', 400, 400, pantherSvg);
saveSvg('src/assets/team/purrfect_rag.svg', 400, 400, ironManSvg);
saveSvg('src/assets/team/captain_marvel.svg', 400, 400, meowvelSvg);
saveSvg('src/assets/team/black_widow.svg', 400, 400, catdowSvg);

console.log('All cartoon art SVG illustrations generated successfully!');
