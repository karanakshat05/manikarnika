
// 'use client';
// import React from 'react';
// import VideoSequence from './VideoSequence';

// type EDMFumeDenseHeroProps = {
//   videos?: string[];
//   headlineTop?: string;
//   headlineMain?: string;
//   overlayOpacity?: number; // 0..100 (Tailwind bg-black/X)
//   cycleSeconds?: number;   // full burst cycle including idle
//   density?: number;        // 0..1.4 overall opacity multiplier
// };

// const EDMFumeDenseHero: React.FC<EDMFumeDenseHeroProps> = ({
//   videos = ['/Videos/hero2.mp4', '/Videos/hero1.mp4'],
//   headlineTop = 'Welcome to',
//   headlineMain = 'Manikarnika Events',
//   overlayOpacity = 62,     // darker overlay to keep dense fumes readable
//   cycleSeconds = 11,       // brisk cycles with idle
//   density = 1.2,           // heavier appearance
// }) => {
//   const overlayClass = `bg-black/${Math.max(0, Math.min(100, Math.round(overlayOpacity)))}`;
//   const vars = {
//     // @ts-ignore
//     '--cycle': `${cycleSeconds}s`,
//     '--dens': `${density}`,
//   } as React.CSSProperties;

//   return (
//     <section className="fixed inset-0 w-screen h-screen overflow-hidden">
//       <div className="relative w-full h-full">
//         {/* Background videos */}
//         <VideoSequence videos={videos} />

//         {/* Fumes layer (above video, below text) */}
//         <div className="absolute inset-0 pointer-events-none z-10 isolate fume-stack" style={vars}>
//           {/* Mask tightly to headline band so video elsewhere stays clean */}
//           <div className="fx band-mask">
//             {/* Floor haze just under main line for grounding */}
//             <div className="floor-haze" />

//             {/* Dense, slim, curved fume columns (non-rectilinear) */}
//             <div className="fume at-12 fast curl-left  seed-a" />
//             <div className="fume at-24 mid  curl-right seed-b" />
//             <div className="fume at-38 slow curl-left  seed-c" />
//             <div className="fume at-52 mid  curl-right seed-d" />
//             <div className="fume at-66 fast curl-left  seed-e" />
//             <div className="fume at-78 slow curl-right seed-f" />
//             <div className="fume at-88 mid  curl-left  seed-g" />
//           </div>

//           {/* Edge separation so letters remain crisp over dense plumes */}
//           <div className="fx edge-sep" />
//         </div>

//         {/* Overlay + Headline */}
//         <div className={`absolute inset-0 z-20 flex items-center justify-center ${overlayClass}`}>
//           <h1 className="text-center select-none">
//             <span className="block text-4xl md:text-6xl font-semibold headline-fill">{headlineTop}</span>
//             <span className="block text-6xl md:text-8xl font-black tracking-wide headline-fill">
//               {headlineMain}
//             </span>
//           </h1>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Headline fills: subtle motion; keep it readable over dense fumes */
//         .headline-fill {
//           background: linear-gradient(90deg,#78e0d8 0%,#6fb6ff 30%,#8b3cff 65%,#b328b8 100%);
//           background-size: 180% 180%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: headlineShift calc(var(--cycle) * 0.9) ease-in-out infinite alternate;
//           text-shadow:
//             0 0 8px rgba(170,210,255,0.2),
//             0 0 14px rgba(150,140,255,0.16);
//           filter: brightness(1.08) contrast(1.16) saturate(1.06);
//         }
//         @keyframes headlineShift {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }

//         .fume-stack { isolation: isolate; } /* prevent blending bleeding out of stack [4][2] */
//         .fx { position: absolute; inset: 0; pointer-events: none; }

//         /* Tight band mask = concentrated around the headline (cross-browser with -webkit-) */
//         .band-mask {
//           display: grid; place-items: center; overflow: hidden;
//           mask-image: radial-gradient(82% 42% at 50% 52%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0) 100%);
//           -webkit-mask-image: radial-gradient(82% 42% at 50% 52%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0) 100%);
//         } /* CSS masking is widely supported with -webkit- prefix fallback[7][19][13] */

//         /* Floor haze: thin, smooth, non-grainy */
//         .floor-haze {
//           position: absolute; top: 54%; left: 50%; transform: translateX(-50%);
//           width: 78%; height: 8.5rem; border-radius: 60% / 100%;
//           background:
//             radial-gradient(160% 120% at 50% 100%, rgba(160,150,255,0.16) 0%, transparent 80%),
//             radial-gradient(160% 120% at 50% 100%, rgba(210,200,255,0.10) 0%, transparent 82%);
//           mix-blend-mode: screen; /* predictable additive without overblow[2][9] */
//           filter: blur(12px) brightness(1.10);
//           opacity: 0.44;
//         }

//         /* Column X positions (align to letter tips visually) */
//         .at-12 { left: 12%; } .at-24 { left: 24%; } .at-38 { left: 38%; }
//         .at-52 { left: 52%; } .at-66 { left: 66%; } .at-78 { left: 78%; } .at-88 { left: 88%; }

//         /* Curve families for non-rectilinear drift */
//         .curl-left  { --dx1:-1.6%; --dx2: 0.9%; --dx3:-1.9%; }
//         .curl-right { --dx1: 1.6%; --dx2:-0.9%; --dx3: 1.9%; }

//         /* Speeds and easing */
//         .fast { --dur: calc(var(--cycle) * 0.46); --ease: cubic-bezier(.26,.62,.24,1); --delay: 0s; }
//         .mid  { --dur: calc(var(--cycle) * 0.56); --ease: cubic-bezier(.28,.60,.24,1); --delay: calc(var(--cycle)*0.12); }
//         .slow { --dur: calc(var(--cycle) * 0.70); --ease: cubic-bezier(.30,.58,.25,1); --delay: calc(var(--cycle)*0.24); }

//         /* Seed yaw (swirl bias) for per-emitter uniqueness */
//         .seed-a { --yaw:  2.8deg; } .seed-b { --yaw: -2.3deg; } .seed-c { --yaw:  1.9deg; }
//         .seed-d { --yaw: -2.1deg; } .seed-e { --yaw:  2.5deg; } .seed-f { --yaw: -1.8deg; }
//         .seed-g { --yaw:  1.7deg; }

//         /* DENSE, SLIM, ORGANIC FUMES */
//         .fume {
//           position: absolute; bottom: 46%; transform: translateX(-50%);
//           width: 11vmax; height: 42vmax; border-radius: 50%;
//           /* Dense core + body + cool rim + slim vertical tail (no fine noise layers) */
//           background:
//             radial-gradient(14% 12% at 50% 86%, rgba(120,0,200,0.64) 0%, transparent 100%),
//             radial-gradient(20% 16% at 52% 78%, rgba(179,40,184,0.44) 0%, transparent 100%),
//             radial-gradient(22% 16% at 48% 82%, rgba(110,180,255,0.26) 0%, transparent 100%),
//             linear-gradient(180deg, rgba(220,215,255,0.12) 0%, rgba(220,215,255,0.06) 38%, transparent 84%);
//           background-blend-mode: screen, screen, screen, screen; /* consistent blend[2][9][4] */
//           filter: blur(8px) brightness(1.12) contrast(1.18) saturate(1.10);
//           mix-blend-mode: screen; /* more predictable than plus-lighter across browsers[3][15][2] */
//           opacity: calc(0.80 * var(--dens)); /* solid density */
//           will-change: transform, opacity, filter;
//           animation:
//             curvePath var(--dur) var(--ease) infinite,
//             swirl     calc(var(--dur)*0.95) linear infinite,
//             life      var(--dur) var(--ease) infinite;
//           animation-delay: var(--delay), var(--delay), var(--delay);
//         }

//         /* Big S-curve with restrained lateral spread (keeps columns slim) */
//         @keyframes curvePath {
//           0%   { transform: translate(calc(-50% + 0%),  0)    scale(0.92,1.06); }
//           22%  { transform: translate(calc(-50% + var(--dx1)), -24%) scale(0.96,1.10); }
//           48%  { transform: translate(calc(-50% + var(--dx2)), -54%) scale(1.00,1.14) skewX(0.5deg); }
//           76%  { transform: translate(calc(-50% + var(--dx3)), -88%) scale(1.04,1.19) skewX(-0.5deg); }
//           100% { transform: translate(calc(-50% + 0%), -118%) scale(1.07,1.22); }
//         }

//         /* Micro-eddies: tiny rotation and drift to remove any straight-line feel */
//         @keyframes swirl {
//           0%   { transform: translate(calc(-50% + 0%), 0) rotate(0deg); }
//           25%  { transform: translate(calc(-50% + .35%), -9%) rotate(var(--yaw)); }
//           50%  { transform: translate(calc(-50% - .35%), -18%) rotate(calc(var(--yaw) * -0.8)); }
//           75%  { transform: translate(calc(-50% + .25%), -27%) rotate(calc(var(--yaw) * 0.5)); }
//           100% { transform: translate(calc(-50% + 0%), -36%) rotate(0deg); }
//         }

//         /* Lifecycle: appear → dense peak → linger → slow fade → idle (restart) */
//         @keyframes life {
//           0%   { opacity: 0; }
//           12%  { opacity: calc(0.56 * var(--dens)); }
//           30%  { opacity: calc(0.90 * var(--dens)); } /* stronger peak */
//           58%  { opacity: calc(0.48 * var(--dens)); } /* linger */
//           82%  { opacity: calc(0.16 * var(--dens)); } /* fade */
//           90%  { opacity: 0; }                        /* disappear */
//           100% { opacity: 0; }                        /* idle gap */
//         }

//         /* Edge separation band for readability over dense plumes */
//         .edge-sep {
//           position: absolute; top: 47%; left: 0; right: 0; height: 4.8rem; margin: 0 auto;
//           background: radial-gradient(110% 240% at 50% 50%, rgba(210,220,255,0.18) 0%, rgba(210,220,255,0.08) 45%, transparent 72%);
//           mix-blend-mode: screen;
//           filter: blur(6px) brightness(1.10);
//           opacity: 0.26;
//         }

//         @media (max-width: 640px) {
//           .floor-haze { height: 7.8rem; filter: blur(11px) brightness(1.08); }
//           .fume { width: 10vmax; height: 36vmax; filter: blur(7.5px) brightness(1.10) contrast(1.16); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default EDMFumeDenseHero;
// 'use client';
// import React from 'react';
// import VideoSequence from './VideoSequence';

// type HeroWithFumeOverlayProps = {
//   baseVideos?: string[];
//   fumesVideo?: string;     // path to your 59s fumes video
//   fumesOpacity?: number;   // 0..1
//   fumesBlend?: 'normal' | 'screen' | 'plus-lighter' | 'overlay' | 'soft-light';
//   overlayOpacity?: number; // 0..100 Tailwind style for bg-black/X under text
// };

// const HeroWithFumeOverlay: React.FC<HeroWithFumeOverlayProps> = ({
//   baseVideos = ['/Videos/hero2.mp4', '/Videos/hero1.mp4'],
//   fumesVideo = '/Videos/fumes.mp4',
//   fumesOpacity = 0.75,
//   fumesBlend = 'screen',
//   overlayOpacity = 55,
// }) => {
//   const overlayClass = `bg-black/${Math.max(0, Math.min(100, Math.round(overlayOpacity)))}`;

//   return (
//     <section className="fixed inset-0 w-screen h-screen overflow-hidden">
//       <div className="relative w-full h-full">
//         {/* Base background videos */}
//         <VideoSequence videos={baseVideos} />

//         {/* Fumes overlay video: above base, below text */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
//           <video
//             className="w-full h-full object-cover px-30 py-80"
//             src={fumesVideo}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             style={{
//               opacity: fumesOpacity,
//               mixBlendMode: fumesBlend as any, // e.g., 'screen' for additive feel
//               filter: 'contrast(1.1) saturate(1.1)', // slight boost so fumes read but don’t overpower
//             }}
//           />
//         </div>

//         {/* Text overlay on top */}
//         <div className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none ${overlayClass}`}>
//           <div className="relative flex flex-col items-center justify-center w-full">
//             <h1
//               className="relative text-5xl md:text-7xl font-extrabold text-center select-none bg-clip-text text-transparent tracking-wide headline-fill"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(90deg, #78d8ff 0%, #6c7bff 25%, #8b3cff 55%, #b328b8 80%, #ffd1ff 100%)',
//                 WebkitBackgroundClip: 'text',
//                 letterSpacing: '0.06em',
//                 textShadow:
//                   '0 0 8px rgba(170,210,255,0.18), 0 0 14px rgba(150,140,255,0.16), 0 0 18px rgba(210,150,255,0.12)',
//                 filter: 'brightness(1.1) contrast(1.16) saturate(1.06)',
//               }}
//             >
//               <span className="block">Welcome to</span>
//               <span className="block text-6xl md:text-8xl font-black tracking-wider">
//                 Manikarnika Events
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .headline-fill {
//           background-size: 180% 180%;
//           -webkit-text-fill-color: transparent;
//           animation: headlineShift 10s ease-in-out infinite alternate;
//         }
//         @keyframes headlineShift {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroWithFumeOverlay;


// 'use client';
// import React from 'react';
// import VideoSequence from './VideoSequence';

// type Props = {
//     baseVideos?: string[];
//     fumesVideo?: string;
//     // Visual controls
//     fumesOpacity?: number;      // 0..1 (strength of fumes)
//     fumesBlend?: 'screen'|'normal'|'overlay'|'soft-light'|'plus-lighter';
//     overlayOpacity?: number;    // 0..100 (bg-black/X behind text)
//     // Mask controls (band around headline)
//     bandHeightPct?: number;     // 30..70 -> vertical thickness of visible band
//     bandCenterPct?: number;     // 40..60 -> vertical center (% from top)
//     bandFeatherPct?: number;    // 0..50 -> softness of band edges
// };

// const HeroWithFumeMaskedBand: React.FC<Props> = ({
//     baseVideos = ['/Videos/hero2.mp4','/Videos/hero1.mp4'],
//     fumesVideo = '/Videos/fume.mp4',
//     fumesOpacity = 0.75, 
//     fumesBlend = 'screen',
//     overlayOpacity = 55,
//     bandHeightPct = 44,    // thinner band keeps fumes only around headline
//     bandCenterPct = 52,    // align to your headline baseline
//     bandFeatherPct = 40,   // soft edges so it feels integrated
// }) => {
//     const overlayClass = `bg-black/${Math.max(0, Math.min(100, Math.round(overlayOpacity)))}`;

//     // CSS variables to tweak mask without editing CSS
//     const vars = {
//         // @ts-ignore
//         '--band-h': `${bandHeightPct}%`,   // band height
//         '--band-y': `${bandCenterPct}%`,   // band vertical center
//         '--feather': `${bandFeatherPct}%`, // feather falloff
//     } as React.CSSProperties;

//     return (
//         <section className="relative w-full min-h-screen flex items-center justify-between overflow-hidden">
//             <div className="relative w-full h-screen">
//                 {/* Base background videos/images */}
//                 <VideoSequence videos={baseVideos} />

//                 {/* Fumes video limited to headline band */}
//                 <div className="absolute inset-0 z-10 pointer-events-none" style={vars}>
//                     <div className="mask-band">
//                         <video
//                             className="w-full h-full object-cover"
//                             src={fumesVideo}
//                             autoPlay
//                             muted
//                             loop
//                             playsInline
//                             preload="auto"
//                             style={{
//                                 opacity: fumesOpacity,               // transparency
//                                 mixBlendMode: fumesBlend as any,      // 'screen' is safe additive
//                                 filter: 'contrast(1.1) saturate(1.05) brightness(1.0)',
//                             }}
//                         />
//                     </div>
//                 </div>

//                 {/* Text overlay on top */}
//                 <div className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none ${overlayClass}`}>
//                     <div className="relative flex flex-col items-center justify-center w-full">
//                         {/* Optional thin glow band to keep text crisp over fumes */}
//                         <div className="edge-sep" />
//                         <h1
//                             className="relative z-10 text-5xl md:text-7xl font-extrabold text-center select-none bg-clip-text text-transparent tracking-wide"
//                             style={{
//                                 backgroundImage:
//                                     'linear-gradient(90deg,#78d8ff 0%,#6c7bff 25%,#8b3cff 55%,#b328b8 80%,#ffd1ff 100%)',
//                                 WebkitBackgroundClip: 'text',
//                                 letterSpacing: '0.06em',
//                                 textShadow:
//                                     '0 0 8px rgba(170,210,255,0.18), 0 0 14px rgba(150,140,255,0.16), 0 0 18px rgba(210,150,255,0.12)',
//                                 filter: 'brightness(1.08) contrast(1.14) saturate(1.06)',
//                             }}
//                         >
//               <span className="block">Welcome to</span>
//               <span className="block text-6xl md:text-8xl font-black tracking-wider">
//                 Manikarnika Events
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Mask the fumes to a soft band around the headline.
//            The radial is very wide horizontally and limited vertically. */
//         .mask-band {
//           position: absolute;
//           inset: 0;
//           mask-image:
//             radial-gradient(
//               120% var(--band-h) at 50% var(--band-y),
//               rgba(0,0,0,1) 0%,
//               rgba(0,0,0,0.98) calc(50% - var(--feather)/2),
//               rgba(0,0,0,0) 100%
//             );
//           -webkit-mask-image:
//             radial-gradient(
//               120% var(--band-h) at 50% var(--band-y),
//               rgba(0,0,0,1) 0%,
//               rgba(0,0,0,0.98) calc(50% - var(--feather)/2),
//               rgba(0,0,0,0) 100%
//             );
//         }

//         /* Thin edge glow to separate text from fumes subtly */
//         .edge-sep {
//           position: absolute;
//           top: 47%;
//           left: 0; right: 0;
//           height: 4.6rem;
//           margin: 0 auto;
//           background:
//             radial-gradient(110% 240% at 50% 50%, rgba(210,220,255,0.18) 0%, rgba(210,220,255,0.08) 45%, transparent 72%);
//           mix-blend-mode: screen;
//           filter: blur(6px) brightness(1.06);
//           opacity: 0.22;
//           z-index: 1;
//           pointer-events: none;
//         }

//         @media (max-width: 640px) {
//           .edge-sep { height: 4rem; filter: blur(5px); opacity: 0.2; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroWithFumeMaskedBand;
'use client';
import React from 'react';
import VideoSequence from './VideoSequence';

type Props = {
  baseVideos?: string[];
  fumesVideo?: string;
  fumesOpacity?: number;      
  fumesBlend?: 'screen'|'normal'|'overlay'|'soft-light'|'plus-lighter';
  overlayOpacity?: number;    
  bandHeightPct?: number;     
  bandCenterPct?: number;     
  bandFeatherPct?: number;    
  navbarHeight?: number;      // optional: if you have a fixed navbar height
};

const HeroWithFumeMaskedBand: React.FC<Props> = ({
  baseVideos = ['/Videos/hero2.mp4','/Videos/hero1.mp4'],
  fumesVideo = '/Videos/fume.mp4',
  fumesOpacity = 0.75, 
  fumesBlend = 'screen',
  overlayOpacity = 55,
  bandHeightPct = 44,
  bandCenterPct = 52,
  bandFeatherPct = 40,
  navbarHeight = 0 // set if your navbar is fixed (e.g., 80)
}) => {
  const overlayClass = `bg-black/${Math.max(0, Math.min(100, Math.round(overlayOpacity)))}`;

  const vars = {
    '--band-h': `${bandHeightPct}%`,   
    '--band-y': `${bandCenterPct}%`,   
    '--feather': `${bandFeatherPct}%`, 
  } as React.CSSProperties;

  return (
    <section
      className="relative w-screen flex items-center justify-between overflow-hidden"
      style={{
        // height: `calc(100vh - ${navbarHeight}px)`, // removes gap from navbar
        // marginTop: navbarHeight ? `-${navbarHeight}px` : 0,
        height: '100vh' // pull up to top
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Base background videos */}
        <VideoSequence videos={baseVideos} />

        {/* Fumes video masked to headline band */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={vars}>
          <div className="mask-band">
            <video
              className="absolute inset-0 w-screen h-full object-cover"
              src={fumesVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                opacity: fumesOpacity,
                mixBlendMode: fumesBlend as any,
                filter: 'contrast(1.1) saturate(1.05) brightness(1.0)',
              }}
            />
          </div>
        </div>

        {/* Overlay with text */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none ${overlayClass}`}>
          <div className="relative flex flex-col items-center justify-center w-full">
            <div className="edge-sep" />
            <h1
              className="relative z-10 text-5xl md:text-7xl font-extrabold text-center select-none bg-clip-text text-transparent tracking-wide"
              style={{
                backgroundImage:
                  'linear-gradient(90deg,#77d8ff 0%,#6c7bff 25%,#8b3cff 55%,#b328b8 80%,#ffd1ff 100%)',
                WebkitBackgroundClip: 'text',
                letterSpacing: '0.06em',
                textShadow:
                  '0 0 8px rgba(170,210,255,0.18), 0 0 14px rgba(150,140,255,0.16), 0 0 18px rgba(210,150,255,0.12)',
                filter: 'brightness(1.08) contrast(1.14) saturate(1.06)',
              }}
            >
              <span className="block">Welcome to</span>
              <span className="block text-6xl md:text-8xl font-black tracking-wider">
                Manikarnika Events
              </span>
            </h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-band {
          position: absolute;
          inset: 0;
          mask-image:
            radial-gradient(
              120% var(--band-h) at 50% var(--band-y),
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.98) calc(50% - var(--feather)/2),
              rgba(0,0,0,0) 100%
            );
          -webkit-mask-image:
            radial-gradient(
              120% var(--band-h) at 50% var(--band-y),
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.98) calc(50% - var(--feather)/2),
              rgba(0,0,0,0) 100%
            );
        }
        .edge-sep {
          position: absolute;
          top: 47%;
          left: 0; right: 0;
          height: 4.6rem;
          margin: 0 auto;
          background:
            radial-gradient(110% 240% at 50% 50%, rgba(210,220,255,0.18) 0%, rgba(210,220,255,0.08) 45%, transparent 72%);
          mix-blend-mode: screen;
          filter: blur(6px) brightness(1.06);
          opacity: 0.22;
          z-index: 1;
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .edge-sep { height: 4rem; filter: blur(5px); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};

export default HeroWithFumeMaskedBand;
