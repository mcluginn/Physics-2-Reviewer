/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Verified Question Bank
 * Sourced from Midterm Examination Topics-Only Tutoring Reviewer (Questions 1 - 31)
 */

export const PRACTICE_QUESTIONS = [
  // PART A - CONCEPTS
  {
    id: "q1",
    section: "Part A - Concepts",
    number: 1,
    topicId: "coulomb-law",
    topicTitle: "Electric Charge & Coulomb's Law",
    difficulty: "Foundation",
    question: "What is the magnitude of the elementary charge carried by a proton?",
    options: [
      "1.60 × 10⁻¹⁹ C",
      "1.60 × 10⁻¹⁸ C",
      "9.11 × 10⁻³¹ C",
      "8.99 × 10⁹ C"
    ],
    correctIndex: 0,
    hint: "Recall the fundamental quantum of charge symbolized by e.",
    firstStep: "The elementary charge e is approximately 1.602 × 10⁻¹⁹ C.",
    fullSolution: `**CONCEPT:**
The elementary electric charge is the magnitude of electric charge carried by a single proton (or electron).

**VALUE:**
$$e = 1.602 \\times 10^{-19}\\text{ C} \\approx 1.60 \\times 10^{-19}\\text{ C}$$

* $9.11 \\times 10^{-31}\\text{ kg}$ is the rest mass of an electron (not charge).
* $8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$ is Coulomb's constant $k$.`,
    finalAnswer: "1.60 × 10⁻¹⁹ C"
  },
  {
    id: "q2",
    section: "Part A - Concepts",
    number: 2,
    topicId: "coulomb-law",
    topicTitle: "Electric Charge & Coulomb's Law",
    difficulty: "Foundation",
    question: "If the separation between two fixed charges is tripled, by what factor does the magnitude of the Coulomb force change?",
    options: [
      "3",
      "1/3",
      "1/9",
      "9"
    ],
    correctIndex: 2,
    hint: "Coulomb's Law follows an inverse-square relationship with distance.",
    firstStep: "Write $F \\propto 1/r^2$. Replace $r$ with $3r$.",
    fullSolution: `**FORMULA:**
$$F = \\frac{k|q_1 q_2|}{r^2}$$

**RELATIONSHIP:**
When the distance is tripled ($r' = 3r$):
$$F' = \\frac{k|q_1 q_2|}{(3r)^2} = \\frac{k|q_1 q_2|}{9r^2} = \\frac{1}{9} F$$

The force decreases to one-ninth (1/9) of its original value.`,
    finalAnswer: "1/9"
  },
  {
    id: "q3",
    section: "Part A - Concepts",
    number: 3,
    topicId: "electric-field",
    topicTitle: "Electric Field & Superposition",
    difficulty: "Foundation",
    question: "The electric field of a negative point charge is directed:",
    options: [
      "Radially outward",
      "Radially inward",
      "Tangentially",
      "Along an equipotential line"
    ],
    correctIndex: 1,
    hint: "The electric field direction is defined by the force on a positive test charge.",
    firstStep: "A positive test charge is attracted toward a negative charge.",
    fullSolution: `**PHYSICAL PRINCIPLE:**
The electric field $\\vec{E}$ at any location represents the force per unit positive test charge $\\vec{E} = \\vec{F}/q_0$.
Because a positive test charge is attracted toward a negative charge, electric field lines point **radially inward** toward negative source charges.`,
    finalAnswer: "Radially inward"
  },
  {
    id: "q4",
    section: "Part A - Concepts",
    number: 4,
    topicId: "electric-potential",
    topicTitle: "Electric Potential",
    difficulty: "Foundation",
    question: "Which statement correctly describes electric potential?",
    options: [
      "It is a vector measured in N/C.",
      "It is a scalar measured in V.",
      "It is a vector measured in J.",
      "It is a scalar measured in F."
    ],
    correctIndex: 1,
    hint: "Electric potential is work per unit charge.",
    firstStep: "Volt = Joule / Coulomb.",
    fullSolution: `**PHYSICAL PRINCIPLE:**
Electric potential $V$ is defined as potential energy per unit charge ($V = U/q_0$).
* It is a **SCALAR** quantity (it has no direction in space).
* Its SI unit is the **Volt (V)**, where $1\\text{ V} = 1\\text{ J/C}$.
* N/C is the unit for electric field (vector). Farad (F) is capacitance.`,
    finalAnswer: "It is a scalar measured in V."
  },
  {
    id: "q5",
    section: "Part A - Concepts",
    number: 5,
    topicId: "wave-basics",
    topicTitle: "Wave Fundamentals",
    difficulty: "Foundation",
    question: "Which equation correctly relates wave speed, frequency, and wavelength?",
    options: [
      "v = f / λ",
      "v = λ / f",
      "v = fλ",
      "v = f²λ"
    ],
    correctIndex: 2,
    hint: "Speed = distance / time = wavelength × frequency.",
    firstStep: "Unit check: $[f] = 1/\\text{s}$, $[\\lambda] = \\text{m}$, so $[f\\lambda] = \\text{m/s}$.",
    fullSolution: `**GOVERNING EQUATION:**
$$v = f\\lambda$$
where $v$ is wave speed (m/s), $f$ is frequency (Hz or 1/s), and $\\lambda$ is wavelength (m).`,
    finalAnswer: "v = fλ"
  },
  {
    id: "q6",
    section: "Part A - Concepts",
    number: 6,
    topicId: "wave-basics",
    topicTitle: "Wave Fundamentals",
    difficulty: "Foundation",
    question: "Sound propagating in air is classified as:",
    options: [
      "A transverse electromagnetic wave",
      "A transverse mechanical wave",
      "A longitudinal mechanical wave",
      "An electrostatic wave"
    ],
    correctIndex: 2,
    hint: "Air molecules oscillate back and forth parallel to the wave direction.",
    firstStep: "Mechanical waves require a physical medium; longitudinal means oscillations are parallel to propagation.",
    fullSolution: `**PHYSICAL CLASSIFICATION:**
Sound in air requires a physical medium (mechanical) and propagates via pressure oscillations where air particles oscillate back and forth parallel to the direction of wave travel (longitudinal).`,
    finalAnswer: "A longitudinal mechanical wave"
  },
  {
    id: "q7",
    section: "Part A - Concepts",
    number: 7,
    topicId: "coulomb-law",
    topicTitle: "Electric Charge & Coulomb's Law",
    difficulty: "Application",
    question: "In electrostatic spray painting, why are charged paint droplets attracted to the workpiece?",
    options: [
      "The paint is heated.",
      "The grounded workpiece is electrically attracted to the charged droplets.",
      "The droplets become lighter.",
      "The paint resonates acoustically."
    ],
    correctIndex: 1,
    hint: "Charged droplets induce image charges in the grounded conductive workpiece.",
    firstStep: "Electrostatic attraction acts between opposite or induced charges.",
    fullSolution: `**ENGINEERING APPLICATION:**
In electrostatic coating, paint droplets are given an electrostatic charge (typically negative). The metal workpiece is grounded (or held at opposite polarity). The electric field creates strong electrostatic attraction ($F = qE$) that pulls droplets directly to the workpiece, wrapping around edges and minimizing overspray.`,
    finalAnswer: "The grounded workpiece is electrically attracted to the charged droplets."
  },

  // PART B - CALCULATIONS
  {
    id: "q8",
    section: "Part B - Calculations",
    number: 8,
    topicId: "coulomb-law",
    topicTitle: "Electric Charge & Coulomb's Law",
    difficulty: "Foundation",
    question: "Two charges +5.0 μC and +2.0 μC are separated by 0.30 m. Find the magnitude of the electrostatic force.",
    options: [
      "0.50 N",
      "1.00 N",
      "1.50 N",
      "2.00 N"
    ],
    correctIndex: 1,
    hint: "Convert μC to Coulombs (10⁻⁶ C) and use F = k|q₁q₂|/r².",
    firstStep: "F = (8.99 × 10⁹)(5.0 × 10⁻⁶)(2.0 × 10⁻⁶) / (0.30)².",
    fullSolution: `**GIVEN:**
* $q_1 = +5.0\\;\\mu\\text{C} = 5.0 \\times 10^{-6}\\text{ C}$
* $q_2 = +2.0\\;\\mu\\text{C} = 2.0 \\times 10^{-6}\\text{ C}$
* $r = 0.30\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**REQUIRED:**
* Electrostatic force magnitude $F$

**FORMULA:**
$$F = \\frac{k|q_1 q_2|}{r^2}$$

**SUBSTITUTION & COMPUTATION:**
$$F = \\frac{(8.99 \\times 10^9)(5.0 \\times 10^{-6})(2.0 \\times 10^{-6})}{(0.30)^2} = \\frac{0.0899}{0.0900} = 0.9989\\text{ N} \\approx 1.00\\text{ N}$$

**ANSWER:**
$$F = 1.00\\text{ N} \\text{ (Repulsive)}$$`,
    finalAnswer: "1.00 N"
  },
  {
    id: "q9",
    section: "Part B - Calculations",
    number: 9,
    topicId: "electric-field",
    topicTitle: "Electric Field & Superposition",
    difficulty: "Foundation",
    question: "A point charge of -7.0 μC produces what electric field magnitude at a distance of 0.50 m?",
    options: [
      "1.26 × 10⁵ N/C",
      "2.52 × 10⁵ N/C",
      "3.15 × 10⁵ N/C",
      "5.04 × 10⁵ N/C"
    ],
    correctIndex: 1,
    hint: "Use E = k|Q|/r² with |Q| = 7.0 × 10⁻⁶ C.",
    firstStep: "E = (8.99 × 10⁹)(7.0 × 10⁻⁶) / (0.50)².",
    fullSolution: `**GIVEN:**
* $Q = -7.0\\;\\mu\\text{C} = -7.0 \\times 10^{-6}\\text{ C}$
* $r = 0.50\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**FORMULA:**
$$E = \\frac{k|Q|}{r^2}$$

**COMPUTATION:**
$$E = \\frac{(8.99 \\times 10^9)(7.0 \\times 10^{-6})}{(0.50)^2} = \\frac{62930}{0.25} = 2.5172 \\times 10^5\\text{ N/C} \\approx 2.52 \\times 10^5\\text{ N/C}$$

**ANSWER:**
$$E = 2.52 \\times 10^5\\text{ N/C}$$`,
    finalAnswer: "2.52 × 10⁵ N/C"
  },
  {
    id: "q10",
    section: "Part B - Calculations",
    number: 10,
    topicId: "force-and-acceleration",
    topicTitle: "Force & Acceleration in an Electric Field",
    difficulty: "Foundation",
    question: "A charge q = -3.0 nC is placed in a uniform electric field of magnitude 4.0 × 10⁴ N/C. Find the magnitude of the force.",
    options: [
      "1.2 × 10⁻³ N",
      "1.2 × 10⁻⁴ N",
      "7.5 × 10⁻⁴ N",
      "4.0 × 10⁻³ N"
    ],
    correctIndex: 1,
    hint: "Force magnitude is F = |q|E. Remember 1 nC = 10⁻⁹ C.",
    firstStep: "F = (3.0 × 10⁻⁹ C)(4.0 × 10⁴ N/C).",
    fullSolution: `**GIVEN:**
* $q = -3.0\\text{ nC} = -3.0 \\times 10^{-9}\\text{ C}$
* $E = 4.0 \\times 10^4\\text{ N/C}$

**FORMULA:**
$$F = |q|E$$

**COMPUTATION:**
$$F = (3.0 \\times 10^{-9}\\text{ C})(4.0 \\times 10^4\\text{ N/C}) = 1.20 \\times 10^{-4}\\text{ N}$$

**ANSWER:**
$$F = 1.2 \\times 10^{-4}\\text{ N}$$`,
    finalAnswer: "1.2 × 10⁻⁴ N"
  },
  {
    id: "q11",
    section: "Part B - Calculations",
    number: 11,
    topicId: "force-and-acceleration",
    topicTitle: "Force & Acceleration in an Electric Field",
    difficulty: "Application",
    question: "A particle has charge 2.0 × 10⁻⁹ C and mass 5.0 × 10⁻⁸ kg in a uniform field of 3.0 × 10⁴ N/C. Find its acceleration magnitude.",
    options: [
      "1.2 × 10³ m/s²",
      "2.4 × 10³ m/s²",
      "3.0 × 10³ m/s²",
      "6.0 × 10³ m/s²"
    ],
    correctIndex: 0,
    hint: "Combine F = qE and F = ma: a = qE/m.",
    firstStep: "a = (2.0 × 10⁻⁹ × 3.0 × 10⁴) / (5.0 × 10⁻⁸).",
    fullSolution: `**GIVEN:**
* $q = 2.0 \\times 10^{-9}\\text{ C}$
* $m = 5.0 \\times 10^{-8}\\text{ kg}$
* $E = 3.0 \\times 10^4\\text{ N/C}$

**FORMULA:**
$$a = \\frac{F}{m} = \\frac{qE}{m}$$

**COMPUTATION:**
$$a = \\frac{(2.0 \\times 10^{-9})(3.0 \\times 10^4)}{5.0 \\times 10^{-8}} = \\frac{6.0 \\times 10^{-5}}{5.0 \\times 10^{-8}} = 1.20 \\times 10^3\\text{ m/s}^2$$

**ANSWER:**
$$a = 1.2 \\times 10^3\\text{ m/s}^2$$`,
    finalAnswer: "1.2 × 10³ m/s²"
  },
  {
    id: "q12",
    section: "Part B - Calculations",
    number: 12,
    topicId: "electric-potential",
    topicTitle: "Electric Potential",
    difficulty: "Foundation",
    question: "A charge +9.0 nC is 0.45 m from a point. Find the electric potential there.",
    options: [
      "90 V",
      "120 V",
      "180 V",
      "240 V"
    ],
    correctIndex: 2,
    hint: "Use V = kQ/r.",
    firstStep: "V = (8.99 × 10⁹)(9.0 × 10⁻⁹) / 0.45.",
    fullSolution: `**GIVEN:**
* $Q = +9.0\\text{ nC} = 9.0 \\times 10^{-9}\\text{ C}$
* $r = 0.45\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**FORMULA:**
$$V = \\frac{kQ}{r}$$

**COMPUTATION:**
$$V = \\frac{(8.99 \\times 10^9)(9.0 \\times 10^{-9})}{0.45} = \\frac{80.91}{0.45} = 179.8\\text{ V} \\approx 180\\text{ V}$$

**ANSWER:**
$$V = 180\\text{ V}$$`,
    finalAnswer: "180 V"
  },
  {
    id: "q13",
    section: "Part B - Calculations",
    number: 13,
    topicId: "work-and-potential-energy",
    topicTitle: "Work & Multi-Charge Potential Energy",
    difficulty: "Foundation",
    question: "A 5.0 nC charge moves from Va = 100 V to Vb = 40 V. Find the work done by the electric field.",
    options: [
      "1.0 × 10⁻⁷ J",
      "2.0 × 10⁻⁷ J",
      "3.0 × 10⁻⁷ J",
      "4.0 × 10⁻⁷ J"
    ],
    correctIndex: 2,
    hint: "Work done by the electric field is W = q(Va - Vb).",
    firstStep: "Va - Vb = 100 - 40 = 60 V.",
    fullSolution: `**GIVEN:**
* $q = 5.0\\text{ nC} = 5.0 \\times 10^{-9}\\text{ C}$
* $V_a = 100\\text{ V}$
* $V_b = 40\\text{ V}$

**FORMULA:**
$$W_{\\text{field}} = q(V_a - V_b)$$

**COMPUTATION:**
$$W = (5.0 \\times 10^{-9}\\text{ C})(100\\text{ V} - 40\\text{ V}) = (5.0 \\times 10^{-9})(60) = 3.00 \\times 10^{-7}\\text{ J}$$

**ANSWER:**
$$W = 3.0 \\times 10^{-7}\\text{ J}$$`,
    finalAnswer: "3.0 × 10⁻⁷ J"
  },
  {
    id: "q14",
    section: "Part B - Calculations",
    number: 14,
    topicId: "work-and-potential-energy",
    topicTitle: "Work & Multi-Charge Potential Energy",
    difficulty: "Application",
    question: "Two charges +4.0 μC and -5.0 μC are 0.80 m apart. Find their electric potential energy.",
    options: [
      "-0.225 J",
      "-0.450 J",
      "+0.225 J",
      "+0.450 J"
    ],
    correctIndex: 0,
    hint: "Use U = kq₁q₂/r with signs included.",
    firstStep: "U = (8.99 × 10⁹)(4.0 × 10⁻⁶)(-5.0 × 10⁻⁶) / 0.80.",
    fullSolution: `**GIVEN:**
* $q_1 = +4.0\\;\\mu\\text{C} = 4.0 \\times 10^{-6}\\text{ C}$
* $q_2 = -5.0\\;\\mu\\text{C} = -5.0 \\times 10^{-6}\\text{ C}$
* $r = 0.80\\text{ m}$

**FORMULA:**
$$U = \\frac{k q_1 q_2}{r}$$

**COMPUTATION:**
$$U = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})(-5.0 \\times 10^{-6})}{0.80} = \\frac{-0.1798}{0.80} = -0.22475\\text{ J} \\approx -0.225\\text{ J}$$

**ANSWER:**
$$U = -0.225\\text{ J}$$`,
    finalAnswer: "-0.225 J"
  },
  {
    id: "q15",
    section: "Part B - Calculations",
    number: 15,
    topicId: "wave-basics",
    topicTitle: "Wave Fundamentals",
    difficulty: "Foundation",
    question: "A wave has frequency 25 Hz and speed 15 m/s. Find its wavelength.",
    options: [
      "0.40 m",
      "0.60 m",
      "1.50 m",
      "2.50 m"
    ],
    correctIndex: 1,
    hint: "Use λ = v/f.",
    firstStep: "λ = 15 / 25.",
    fullSolution: `**GIVEN:**
* $f = 25\\text{ Hz}$
* $v = 15\\text{ m/s}$

**FORMULA:**
$$\\lambda = \\frac{v}{f}$$

**COMPUTATION:**
$$\\lambda = \\frac{15\\text{ m/s}}{25\\text{ Hz}} = 0.60\\text{ m}$$

**ANSWER:**
$$\\lambda = 0.60\\text{ m}$$`,
    finalAnswer: "0.60 m"
  },
  {
    id: "q16",
    section: "Part B - Calculations",
    number: 16,
    topicId: "speed-of-sound-temp",
    topicTitle: "Speed of Sound vs. Temperature",
    difficulty: "Foundation",
    question: "Estimate the speed of sound at 18°C using v ≈ 331 + 0.6T.",
    options: [
      "338.8 m/s",
      "341.8 m/s",
      "349.0 m/s",
      "356.8 m/s"
    ],
    correctIndex: 1,
    hint: "Substitute T = 18 directly into v ≈ 331 + 0.6T.",
    firstStep: "0.6 × 18 = 10.8.",
    fullSolution: `**GIVEN:**
* $T = 18^\\circ\\text{C}$

**FORMULA:**
$$v \\approx 331 + 0.6T$$

**COMPUTATION:**
$$v = 331 + 0.6(18) = 331 + 10.8 = 341.8\\text{ m/s}$$

**ANSWER:**
$$v = 341.8\\text{ m/s}$$`,
    finalAnswer: "341.8 m/s"
  },
  {
    id: "q17",
    section: "Part B - Calculations",
    number: 17,
    topicId: "sound-intensity-decibels",
    topicTitle: "Sound Intensity & Decibels",
    difficulty: "Foundation",
    question: "A sound intensity is 1.0 × 10⁻⁷ W/m². Determine the intensity level.",
    options: [
      "40 dB",
      "50 dB",
      "60 dB",
      "70 dB"
    ],
    correctIndex: 1,
    hint: "β = 10 log10(I / I₀) where I₀ = 1.0 × 10⁻¹² W/m².",
    firstStep: "I / I₀ = 10⁻⁷ / 10⁻¹² = 10⁵.",
    fullSolution: `**GIVEN:**
* $I = 1.0 \\times 10^{-7}\\text{ W/m}^2$
* $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$

**FORMULA:**
$$\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$$

**COMPUTATION:**
$$\\beta = 10 \\log_{10}\\left(\\frac{1.0 \\times 10^{-7}}{1.0 \\times 10^{-12}}\\right) = 10 \\log_{10}(10^5) = 10 \\times 5 = 50\\text{ dB}$$

**ANSWER:**
$$\\beta = 50\\text{ dB}$$`,
    finalAnswer: "50 dB"
  },
  {
    id: "q18",
    section: "Part B - Calculations",
    number: 18,
    topicId: "doppler-effect",
    topicTitle: "The Doppler Effect",
    difficulty: "Application",
    question: "A source emits 500 Hz while moving toward a stationary observer at 24 m/s. If the speed of sound is 340 m/s, find the observed frequency.",
    options: [
      "462 Hz",
      "500 Hz",
      "538 Hz",
      "575 Hz"
    ],
    correctIndex: 2,
    hint: "Source approaches stationary observer: f' = f [v / (v - vs)].",
    firstStep: "Denominator is 340 - 24 = 316 m/s.",
    fullSolution: `**GIVEN:**
* $f = 500\\text{ Hz}$
* $v = 340\\text{ m/s}$
* $v_s = 24\\text{ m/s}$ (moving toward)
* $v_o = 0\\text{ m/s}$

**FORMULA:**
$$f' = f \\left(\\frac{v}{v - v_s}\\right)$$

**COMPUTATION:**
$$f' = 500 \\left(\\frac{340}{340 - 24}\\right) = 500 \\left(\\frac{340}{316}\\right) = 500 \\times 1.07595 = 537.97\\text{ Hz} \\approx 538\\text{ Hz}$$

**ANSWER:**
$$f' = 538\\text{ Hz}$$`,
    finalAnswer: "538 Hz"
  },
  {
    id: "q19",
    section: "Part B - Calculations",
    number: 19,
    topicId: "sound-intensity-decibels",
    topicTitle: "Sound Intensity & Decibels",
    difficulty: "Application",
    question: "An isotropic source produces 0.36 W/m² at 2 m. What is the intensity at 8 m?",
    options: [
      "0.18 W/m²",
      "0.09 W/m²",
      "0.045 W/m²",
      "0.0225 W/m²"
    ],
    correctIndex: 3,
    hint: "Use inverse-square ratio: I₂ = I₁ (r₁ / r₂)². Here distance is multiplied by 4.",
    firstStep: "(2 / 8)² = (1 / 4)² = 1 / 16.",
    fullSolution: `**GIVEN:**
* $I_1 = 0.36\\text{ W/m}^2$
* $r_1 = 2\\text{ m}$
* $r_2 = 8\\text{ m}$

**FORMULA:**
$$I_2 = I_1 \\left(\\frac{r_1}{r_2}\\right)^2$$

**COMPUTATION:**
$$I_2 = 0.36 \\left(\\frac{2}{8}\\right)^2 = 0.36 \\left(\\frac{1}{4}\\right)^2 = \\frac{0.36}{16} = 0.0225\\text{ W/m}^2$$

**ANSWER:**
$$I_2 = 0.0225\\text{ W/m}^2$$`,
    finalAnswer: "0.0225 W/m²"
  },
  {
    id: "q20",
    section: "Part B - Calculations",
    number: 20,
    topicId: "closed-pipe-resonance",
    topicTitle: "Resonance in Closed Air Columns",
    difficulty: "Foundation",
    question: "A closed pipe has length 0.60 m and the speed of sound is 336 m/s. Find the fundamental frequency.",
    options: [
      "100 Hz",
      "140 Hz",
      "160 Hz",
      "280 Hz"
    ],
    correctIndex: 1,
    hint: "For a tube closed at one end, f₁ = v / (4L).",
    firstStep: "4L = 4 × 0.60 = 2.40 m.",
    fullSolution: `**GIVEN:**
* $L = 0.60\\text{ m}$
* $v = 336\\text{ m/s}$

**FORMULA:**
$$f_1 = \\frac{v}{4L}$$

**COMPUTATION:**
$$f_1 = \\frac{336}{4(0.60)} = \\frac{336}{2.40} = 140\\text{ Hz}$$

**ANSWER:**
$$f_1 = 140\\text{ Hz}$$`,
    finalAnswer: "140 Hz"
  },

  // PART C - ADVANCED APPLICATIONS
  {
    id: "q21",
    section: "Part C - Advanced Applications",
    number: 21,
    topicId: "neutral-point",
    topicTitle: "Electrostatic Neutral Point",
    difficulty: "Engineering",
    question: "Two positive charges QA = 4.0 μC and QB = 16 μC are 0.30 m apart. How far from QA is the neutral point between them?",
    options: [
      "0.050 m",
      "0.100 m",
      "0.150 m",
      "0.200 m"
    ],
    correctIndex: 1,
    hint: "Equate fields: √QA / x = √QB / (d - x).",
    firstStep: "√4 / x = √16 / (0.30 - x) => 2 / x = 4 / (0.30 - x).",
    fullSolution: `**GIVEN:**
* $Q_A = 4.0\\;\\mu\\text{C}$
* $Q_B = 16\\;\\mu\\text{C}$
* $d = 0.30\\text{ m}$

**FORMULA:**
$$\\frac{\\sqrt{Q_A}}{x} = \\frac{\\sqrt{Q_B}}{d - x}$$

**COMPUTATION:**
$$\\frac{\\sqrt{4.0}}{x} = \\frac{\\sqrt{16}}{0.30 - x} \\implies \\frac{2}{x} = \\frac{4}{0.30 - x}$$
$$2(0.30 - x) = 4x \\implies 0.60 - 2x = 4x \\implies 6x = 0.60 \\implies x = 0.100\\text{ m}$$

**ANSWER:**
$$x = 0.100\\text{ m}$$`,
    finalAnswer: "0.100 m"
  },
  {
    id: "q22",
    section: "Part C - Advanced Applications",
    number: 22,
    topicId: "charged-spheres-equilibrium",
    topicTitle: "Equilibrium of Suspended Charged Spheres",
    difficulty: "Engineering",
    question: "Two identical charged spheres are separated symmetrically by 0.08 m. Each has mass 6.0 × 10⁻⁵ kg, and each string has length 0.15 m. Estimate the charge on each sphere at equilibrium.",
    options: [
      "1.1 × 10⁻⁸ C",
      "1.5 × 10⁻⁸ C",
      "2.0 × 10⁻⁸ C",
      "4.0 × 10⁻⁸ C"
    ],
    correctIndex: 0,
    hint: "Find sin θ = (d/2)/L, θ, tan θ, Fe = mg tan θ, and Q = d√(Fe/k).",
    firstStep: "sin θ = 0.04 / 0.15 = 0.2667, θ = 15.47°, tan θ = 0.2767.",
    fullSolution: `**GIVEN:**
* $d = 0.08\\text{ m}$
* $L = 0.15\\text{ m}$
* $m = 6.0 \\times 10^{-5}\\text{ kg}$
* $g = 9.80\\text{ m/s}^2$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**EQUILIBRIUM FORMULAS:**
$$\\sin\\theta = \\frac{d/2}{L} = \\frac{0.04}{0.15} = 0.2667 \\implies \\theta = 15.47^\\circ$$
$$\\tan\\theta = \\tan(15.47^\\circ) = 0.2767$$
$$F_e = mg\\tan\\theta = (6.0 \\times 10^{-5})(9.80)(0.2767) = 1.627 \\times 10^{-4}\\text{ N}$$
$$Q = d\\sqrt{\\frac{F_e}{k}} = 0.08\\sqrt{\\frac{1.627 \\times 10^{-4}}{8.99 \\times 10^9}} = 0.08(1.345 \\times 10^{-7}) = 1.076 \\times 10^{-8}\\text{ C} \\approx 1.1 \\times 10^{-8}\\text{ C}$$

**ANSWER:**
$$Q \\approx 1.1 \\times 10^{-8}\\text{ C}$$`,
    finalAnswer: "1.1 × 10⁻⁸ C"
  },
  {
    id: "q23",
    section: "Part C - Advanced Applications",
    number: 23,
    topicId: "cgs-electrostatics",
    topicTitle: "CGS Electrostatic System",
    difficulty: "Foundation",
    question: "In the CGS electrostatic system, charges of 80 statC and -40 statC are separated by 8.0 cm. What is the attraction force?",
    options: [
      "25 dynes",
      "50 dynes",
      "100 dynes",
      "200 dynes"
    ],
    correctIndex: 1,
    hint: "In CGS electrostatic units, k = 1, so F = |q₁q₂| / r² in dynes.",
    firstStep: "F = (80 × 40) / (8.0)².",
    fullSolution: `**GIVEN:**
* $q_1 = 80\\text{ statC}$
* $q_2 = -40\\text{ statC}$
* $r = 8.0\\text{ cm}$
* $k = 1\\text{ (CGS esu)}$

**FORMULA:**
$$F = \\frac{|q_1 q_2|}{r^2}$$

**COMPUTATION:**
$$F = \\frac{80 \\times 40}{64} = \\frac{3200}{64} = 50\\text{ dynes}$$

**ANSWER:**
$$F = 50\\text{ dynes}$$`,
    finalAnswer: "50 dynes"
  },
  {
    id: "q24",
    section: "Part C - Advanced Applications",
    number: 24,
    topicId: "vector-components-efield",
    topicTitle: "Vector Components of Electric Field",
    difficulty: "Engineering",
    question: "A positive charge Q = +5.0 μC is located 0.10 m to the right of point P. What is the x-component of its field at P?",
    options: [
      "-4.50 × 10⁶ N/C",
      "-2.25 × 10⁶ N/C",
      "+4.50 × 10⁶ N/C",
      "+2.25 × 10⁶ N/C"
    ],
    correctIndex: 0,
    hint: "Calculate magnitude E = k|Q|/r². Determine direction: positive charge pushes AWAY from itself.",
    firstStep: "Since Q is to the right of P, its field at P pushes toward the left (-x direction).",
    fullSolution: `**GIVEN:**
* $Q = +5.0\\;\\mu\\text{C} = 5.0 \\times 10^{-6}\\text{ C}$
* $r = 0.10\\text{ m}$ (located to the right of $P$)

**FORMULA:**
$$E = \\frac{k|Q|}{r^2}$$

**COMPUTATION:**
$$E = \\frac{(8.99 \\times 10^9)(5.0 \\times 10^{-6})}{(0.10)^2} = \\frac{44950}{0.01} = 4.495 \\times 10^6\\text{ N/C} \\approx 4.50 \\times 10^6\\text{ N/C}$$

**DIRECTION:**
The field points radially away from the positive charge. Since the charge is to the right ($+x$) of $P$, the field at $P$ points left ($-x$).
$$E_x = -4.50 \\times 10^6\\text{ N/C}$$

**ANSWER:**
$$E_x = -4.50 \\times 10^6\\text{ N/C}$$`,
    finalAnswer: "-4.50 × 10⁶ N/C"
  },
  {
    id: "q25",
    section: "Part C - Advanced Applications",
    number: 25,
    topicId: "work-and-potential-energy",
    topicTitle: "Work & Multi-Charge Potential Energy",
    difficulty: "Engineering",
    question: "Three point charges are on a line: q₁ = +2 nC, q₂ = -4 nC, and q₃ = +3 nC, with r₁₂ = 0.12 m, r₂₃ = 0.18 m, and r₁₃ = 0.30 m. Find the total potential energy.",
    options: [
      "Approximately -1.02 × 10⁻⁶ J",
      "Approximately -4.80 × 10⁻⁷ J",
      "Approximately +4.80 × 10⁻⁷ J",
      "Approximately +1.02 × 10⁻⁶ J"
    ],
    correctIndex: 0,
    hint: "Sum pairwise energies: U_total = U₁₂ + U₂₃ + U₁₃.",
    firstStep: "Compute U₁₂ = kq₁q₂/r₁₂, U₂₃ = kq₂q₃/r₂₃, U₁₃ = kq₁q₃/r₁₃.",
    fullSolution: `**GIVEN:**
* $q_1 = +2.0 \\times 10^{-9}\\text{ C}, \\; q_2 = -4.0 \\times 10^{-9}\\text{ C}, \\; q_3 = +3.0 \\times 10^{-9}\\text{ C}$
* $r_{12} = 0.12\\text{ m}, \\; r_{23} = 0.18\\text{ m}, \\; r_{13} = 0.30\\text{ m}$

**FORMULA:**
$$U_{\\text{total}} = k \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_2 q_3}{r_{23}} + \\frac{q_1 q_3}{r_{13}} \\right)$$

**PAIRWISE CONTRIBUTIONS:**
* $U_{12} = \\frac{(8.99 \\times 10^9)(2 \\times 10^{-9})(-4 \\times 10^{-9})}{0.12} = -5.993 \\times 10^{-7}\\text{ J}$
* $U_{23} = \\frac{(8.99 \\times 10^9)(-4 \\times 10^{-9})(3 \\times 10^{-9})}{0.18} = -5.993 \\times 10^{-7}\\text{ J}$
* $U_{13} = \\frac{(8.99 \\times 10^9)(2 \\times 10^{-9})(3 \\times 10^{-9})}{0.30} = +1.798 \\times 10^{-7}\\text{ J}$

**TOTAL SUM:**
$$U_{\\text{total}} = (-5.993 - 5.993 + 1.798) \\times 10^{-7}\\text{ J} = -1.0188 \\times 10^{-6}\\text{ J} \\approx -1.02 \\times 10^{-6}\\text{ J}$$

**ANSWER:**
$$U_{\\text{total}} \\approx -1.02 \\times 10^{-6}\\text{ J}$$`,
    finalAnswer: "Approximately -1.02 × 10⁻⁶ J"
  },
  {
    id: "q26",
    section: "Part C - Advanced Applications",
    number: 26,
    topicId: "multiple-sound-sources",
    topicTitle: "Multiple Identical Sound Sources",
    difficulty: "Application",
    question: "A single machine produces a level of 68 dB. Six identical independent machines operate simultaneously. What is the combined level?",
    options: [
      "70.8 dB",
      "75.8 dB",
      "78.8 dB",
      "408 dB"
    ],
    correctIndex: 1,
    hint: "Use β_total = β₁ + 10 log10(N).",
    firstStep: "10 log10(6) ≈ 7.78 dB.",
    fullSolution: `**GIVEN:**
* $\\beta_1 = 68.0\\text{ dB}$
* $N = 6$

**FORMULA:**
$$\\beta_{\\text{total}} = \\beta_1 + 10 \\log_{10}(N)$$

**COMPUTATION:**
$$\\beta_{\\text{total}} = 68.0 + 10 \\log_{10}(6) = 68.0 + 10(0.77815) = 68.0 + 7.78 = 75.78\\text{ dB} \\approx 75.8\\text{ dB}$$

**ANSWER:**
$$\\beta_{\\text{total}} \\approx 75.8\\text{ dB}$$`,
    finalAnswer: "75.8 dB"
  },
  {
    id: "q27",
    section: "Part C - Advanced Applications",
    number: 27,
    topicId: "doppler-effect",
    topicTitle: "The Doppler Effect",
    difficulty: "Application",
    question: "A source emits 700 Hz and travels east at 20 m/s. An observer travels east in front of the source at 10 m/s. Let the speed of sound be 340 m/s. Find the observed frequency.",
    options: [
      "680 Hz",
      "700 Hz",
      "721 Hz",
      "742 Hz"
    ],
    correctIndex: 2,
    hint: "Source moves toward observer (v - vs in denominator), observer moves away from source (v - vo in numerator).",
    firstStep: "f' = 700 × (340 - 10) / (340 - 20) = 700 × (330 / 320).",
    fullSolution: `**GIVEN:**
* $f = 700\\text{ Hz}$
* $v = 340\\text{ m/s}$
* $v_s = 20\\text{ m/s}$ (East, toward observer)
* $v_o = 10\\text{ m/s}$ (East, away from source)

**FORMULA:**
$$f' = f \\left(\\frac{v - v_o}{v - v_s}\\right)$$

**COMPUTATION:**
$$f' = 700 \\left(\\frac{340 - 10}{340 - 20}\\right) = 700 \\left(\\frac{330}{320}\\right) = 700(1.03125) = 721.88\\text{ Hz} \\approx 721\\text{ Hz}$$

**ANSWER:**
$$f' = 721\\text{ Hz}$$`,
    finalAnswer: "721 Hz"
  },

  // PART D - CHALLENGE PROBLEMS
  {
    id: "q28",
    section: "Part D - Challenge",
    number: 28,
    topicId: "coulomb-law",
    topicTitle: "Collinear Charges Force Balance",
    difficulty: "Challenge",
    question: "Three collinear charges are placed on the x-axis: qA = +4.0 μC at x = 0, qB = -2.0 μC at x = 0.20 m, and qC = +6.0 μC at x = 0.50 m. Determine the net electrostatic force on the middle charge qB.",
    options: [
      "0.60 N directed to the left (-x)",
      "0.60 N directed to the right (+x)",
      "3.00 N directed to the left (-x)",
      "3.00 N directed to the right (+x)"
    ],
    correctIndex: 0,
    hint: "qA attracts qB to the left (-x). qC attracts qB to the right (+x). Find each force magnitude.",
    firstStep: "rAB = 0.20 m, rBC = 0.30 m. FAB = k|qA qB|/(0.20)², FCB = k|qC qB|/(0.30)².",
    fullSolution: `**GIVEN:**
* $q_A = +4.0\\;\\mu\\text{C}$ at $x_A = 0$
* $q_B = -2.0\\;\\mu\\text{C}$ at $x_B = 0.20\\text{ m}$
* $q_C = +6.0\\;\\mu\\text{C}$ at $x_C = 0.50\\text{ m}$
* $r_{AB} = 0.20\\text{ m}, \\quad r_{BC} = 0.30\\text{ m}$

**FORCE FROM $q_A$ ON $q_B$:**
Since $q_A > 0$ and $q_B < 0$, $q_A$ attracts $q_B$ to the left ($-x$):
$$F_{AB} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})(2.0 \\times 10^{-6})}{(0.20)^2} = \\frac{0.07192}{0.040} = 1.798\\text{ N} \\quad (-\\hat{i})$$

**FORCE FROM $q_C$ ON $q_B$:**
Since $q_C > 0$ and $q_B < 0$, $q_C$ attracts $q_B$ to the right ($+x$):
$$F_{CB} = \\frac{(8.99 \\times 10^9)(6.0 \\times 10^{-6})(2.0 \\times 10^{-6})}{(0.30)^2} = \\frac{0.10788}{0.090} = 1.199\\text{ N} \\quad (+\\hat{i})$$

**NET FORCE:**
$$F_{\\text{net}} = +1.199 - 1.798 = -0.599\\text{ N} \\approx -0.60\\text{ N}$$

**ANSWER:**
$$|\\vec{F}_{\\text{net}}| = 0.60\\text{ N} \\text{ directed toward the left (in the } -x \\text{ direction)}$$`,
    finalAnswer: "0.60 N directed to the left (-x)"
  },
  {
    id: "q29",
    section: "Part D - Challenge",
    number: 29,
    topicId: "neutral-point",
    topicTitle: "Electrostatic Neutral Point Location",
    difficulty: "Challenge",
    question: "A two-charge system has QA = +8.0 μC and QB = +2.0 μC, separated by 0.40 m. Determine the location of the neutral point between them measured from the smaller charge QB.",
    options: [
      "0.133 m from QB",
      "0.200 m from QB",
      "0.267 m from QB",
      "0.080 m from QB"
    ],
    correctIndex: 0,
    hint: "Let y be the distance from QB. Then distance from QA is (0.40 - y). √QB / y = √QA / (0.40 - y).",
    firstStep: "√2 / y = √8 / (0.40 - y) => √2 / y = 2√2 / (0.40 - y) => 1 / y = 2 / (0.40 - y).",
    fullSolution: `**GIVEN:**
* $Q_A = +8.0\\;\\mu\\text{C}$
* $Q_B = +2.0\\;\\mu\\text{C}$
* $d = 0.40\\text{ m}$

**EQUATING FIELD MAGNITUDES:**
$$\\frac{\\sqrt{Q_B}}{y} = \\frac{\\sqrt{Q_A}}{d - y}$$
where $y$ is measured from $Q_B$.
$$\\frac{\\sqrt{2.0}}{y} = \\frac{\\sqrt{8.0}}{0.40 - y} = \\frac{2\\sqrt{2.0}}{0.40 - y} \\implies \\frac{1}{y} = \\frac{2}{0.40 - y}$$
$$0.40 - y = 2y \\implies 3y = 0.40 \\implies y = \\frac{0.40}{3} \\approx 0.133\\text{ m}$$

**ANSWER:**
$$y \\approx 0.133\\text{ m} \\text{ from } Q_B \\text{ (or } 0.267\\text{ m from } Q_A\\text{)}$$`,
    finalAnswer: "0.133 m from QB"
  },
  {
    id: "q30",
    section: "Part D - Challenge",
    number: 30,
    topicId: "doppler-effect",
    topicTitle: "Train Whistle Doppler Pursuit",
    difficulty: "Challenge",
    question: "A train whistle emits 450 Hz while the train moves east at 16 m/s. A car ahead moves east at 10 m/s. If the speed of sound is 343 m/s, determine the frequency heard by the driver.",
    options: [
      "442 Hz",
      "450 Hz",
      "458 Hz",
      "466 Hz"
    ],
    correctIndex: 2,
    hint: "Same direction motion: f' = f [(v - vo) / (v - vs)].",
    firstStep: "f' = 450 × (343 - 10) / (343 - 16) = 450 × (333 / 327).",
    fullSolution: `**GIVEN:**
* $f = 450\\text{ Hz}$
* $v = 343\\text{ m/s}$
* $v_s = 16\\text{ m/s}$ (East, pursuing)
* $v_o = 10\\text{ m/s}$ (East, fleeing ahead)

**FORMULA:**
$$f' = f \\left(\\frac{v - v_o}{v - v_s}\\right)$$

**COMPUTATION:**
$$f' = 450 \\left(\\frac{343 - 10}{343 - 16}\\right) = 450 \\left(\\frac{333}{327}\\right) = 450(1.0183486) = 458.26\\text{ Hz} \\approx 458\\text{ Hz}$$

**ANSWER:**
$$f' = 458\\text{ Hz}$$`,
    finalAnswer: "458 Hz"
  },
  {
    id: "q31",
    section: "Part D - Challenge",
    number: 31,
    topicId: "vector-components-efield",
    topicTitle: "2D Electric Field Superposition",
    difficulty: "Challenge",
    question: "Two positive charges Q₁ = +4.0 μC and Q₂ = +7.0 μC are placed at (-0.15 m, 0) and (+0.15 m, 0). Find the magnitude of the net electric field at (0, 0.20 m).",
    options: [
      "8.5 × 10⁵ N/C",
      "1.0 × 10⁶ N/C",
      "1.29 × 10⁶ N/C",
      "1.58 × 10⁶ N/C"
    ],
    correctIndex: 2,
    hint: "Distance to both charges is r = √(0.15² + 0.20²) = 0.25 m. Resolve into Ex and Ey.",
    firstStep: "E₁ = 5.75 × 10⁵ N/C, E₂ = 1.01 × 10⁶ N/C. cos θ = 0.60, sin θ = 0.80.",
    fullSolution: `**GIVEN:**
* $Q_1 = +4.0\\;\\mu\\text{C}$ at $(-0.15, 0)\\text{ m}$
* $Q_2 = +7.0\\;\\mu\\text{C}$ at $(+0.15, 0)\\text{ m}$
* Observation point at $(0, 0.20)\\text{ m}$
* Distance $r = \\sqrt{(0.15)^2 + (0.20)^2} = \\sqrt{0.0225 + 0.0400} = 0.25\\text{ m}$
* $\\cos\\theta = 0.15 / 0.25 = 0.60, \\quad \\sin\\theta = 0.20 / 0.25 = 0.80$

**FIELD MAGNITUDES:**
$$E_1 = \\frac{kQ_1}{r^2} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})}{(0.25)^2} = 5.7536 \\times 10^5\\text{ N/C}$$
$$E_2 = \\frac{kQ_2}{r^2} = \\frac{(8.99 \\times 10^9)(7.0 \\times 10^{-6})}{(0.25)^2} = 1.0069 \\times 10^6\\text{ N/C}$$

**COMPONENTS:**
* $E_{1x} = +E_1 \\cos\\theta = +3.452 \\times 10^5\\text{ N/C}$
* $E_{1y} = +E_1 \\sin\\theta = +4.603 \\times 10^5\\text{ N/C}$
* $E_{2x} = -E_2 \\cos\\theta = -6.041 \\times 10^5\\text{ N/C}$
* $E_{2y} = +E_2 \\sin\\theta = +8.055 \\times 10^5\\text{ N/C}$

**NET VECTOR:**
$$E_{\\text{net}, x} = +3.452 \\times 10^5 - 6.041 \\times 10^5 = -2.589 \\times 10^5\\text{ N/C}$$
$$E_{\\text{net}, y} = +4.603 \\times 10^5 + 8.055 \\times 10^5 = +1.2658 \\times 10^6\\text{ N/C}$$
$$E_{\\text{net}} = \\sqrt{(-2.589 \\times 10^5)^2 + (1.2658 \\times 10^6)^2} \\approx 1.292 \\times 10^6\\text{ N/C}$$

**ANSWER:**
$$E_{\\text{net}} \\approx 1.29 \\times 10^6\\text{ N/C}$$`,
    finalAnswer: "1.29 × 10⁶ N/C"
  }
];
