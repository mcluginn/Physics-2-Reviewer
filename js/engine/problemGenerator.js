/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Algorithmic Problem Generator
 * Generates fresh randomized practice problems with physically realistic numbers,
 * verified calculations, 4 plausible options, and full 6-step engineering solutions.
 */

import { CONSTANTS } from "./physicsMath.js";

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateProblem(topicId = "all") {
  const generators = {
    "coulomb-law": generateCoulombProblem,
    "electric-field": generateEFieldProblem,
    "force-and-acceleration": generateAccelerationProblem,
    "electric-potential": generatePotentialProblem,
    "work-and-potential-energy": generateWorkEnergyProblem,
    "wave-basics": generateWaveProblem,
    "speed-of-sound-temp": generateSoundSpeedProblem,
    "sound-intensity-decibels": generateSoundIntensityProblem,
    "multiple-sound-sources": generateMultipleSourcesProblem,
    "doppler-effect": generateDopplerProblem,
    "closed-pipe-resonance": generateClosedPipeProblem,
    "neutral-point": generateNeutralPointProblem,
    "cgs-electrostatics": generateCGSProblem
  };

  if (topicId === "all" || !generators[topicId]) {
    const keys = Object.keys(generators);
    const chosenKey = randChoice(keys);
    return generators[chosenKey]();
  }
  return generators[topicId]();
}

// 1. Coulomb's Law
function generateCoulombProblem() {
  const q1_uC = randInt(2, 9) * (Math.random() < 0.5 ? 1 : -1);
  const q2_uC = randInt(2, 9) * (Math.random() < 0.5 ? 1 : -1);
  const r_cm = randChoice([10, 15, 20, 25, 30, 40, 50]);
  const r_m = r_cm / 100;
  
  const q1_C = q1_uC * 1e-6;
  const q2_C = q2_uC * 1e-6;
  const F = (CONSTANTS.k_SI * Math.abs(q1_C * q2_C)) / (r_m * r_m);
  const nature = (q1_uC * q2_uC > 0) ? "Repulsive" : "Attractive";
  const ansStr = `${F.toFixed(2)} N (${nature})`;

  // Distractors
  const d1 = `${(F * 0.5).toFixed(2)} N (${nature})`;
  const d2 = `${(F * 2.0).toFixed(2)} N (${nature === "Repulsive" ? "Attractive" : "Repulsive"})`;
  const d3 = `${(F * 4.0).toFixed(2)} N (${nature})`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-coulomb-" + Date.now(),
    topicId: "coulomb-law",
    topicTitle: "Electric Charge & Coulomb's Law",
    prompt: `Two point charges $q_1 = ${q1_uC > 0 ? "+" : ""}${q1_uC}.0\\;\\mu\\text{C}$ and $q_2 = ${q2_uC > 0 ? "+" : ""}${q2_uC}.0\\;\\mu\\text{C}$ are placed in air separated by a distance of $r = ${r_cm}\\text{ cm}$. Find the magnitude and nature of the electrostatic force.`,
    options,
    correctIndex,
    correctValue: F,
    unit: "N",
    hint: "Convert microcoulombs to Coulombs (10⁻⁶ C) and centimeters to meters (0.01 m). Apply F = k|q₁q₂|/r².",
    firstStep: `$q_1 = ${q1_uC} \\times 10^{-6}\\text{ C}$, $q_2 = ${q2_uC} \\times 10^{-6}\\text{ C}$, $r = ${r_m.toFixed(2)}\\text{ m}$.`,
    fullSolution: `**GIVEN:**
* $q_1 = ${q1_uC > 0 ? "+" : ""}${q1_uC}.0\\;\\mu\\text{C} = ${q1_uC} \\times 10^{-6}\\text{ C}$
* $q_2 = ${q2_uC > 0 ? "+" : ""}${q2_uC}.0\\;\\mu\\text{C} = ${q2_uC} \\times 10^{-6}\\text{ C}$
* $r = ${r_cm}\\text{ cm} = ${r_m.toFixed(2)}\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**REQUIRED:**
* Force magnitude $F$ and interaction nature (attractive/repulsive)

**FORMULA:**
$$F = \\frac{k|q_1 q_2|}{r^2}$$

**SUBSTITUTION & COMPUTATION:**
$$F = \\frac{(8.99 \\times 10^9)|(${q1_uC} \\times 10^{-6})(${q2_uC} \\times 10^{-6})|}{(${r_m.toFixed(2)})^2} = \\frac{${(CONSTANTS.k_SI * Math.abs(q1_C * q2_C)).toFixed(5)}}{${(r_m * r_m).toFixed(4)}} = ${F.toFixed(2)}\\text{ N}$$

**INTERPRETATION:**
Because the charges are ${q1_uC * q2_uC > 0 ? "of like sign, they repel each other" : "of opposite sign, they attract each other"}.`,
    finalAnswer: ansStr
  };
}

// 2. Electric Field
function generateEFieldProblem() {
  const Q_uC = randInt(3, 15) * (Math.random() < 0.5 ? 1 : -1);
  const r_cm = randChoice([20, 25, 30, 40, 50, 60]);
  const r_m = r_cm / 100;
  const Q_C = Q_uC * 1e-6;
  const E = (CONSTANTS.k_SI * Math.abs(Q_C)) / (r_m * r_m);
  const dir = Q_uC > 0 ? "Radially Outward" : "Radially Inward";
  const ansStr = `${(E / 1e5).toFixed(2)} × 10⁵ N/C (${dir})`;

  const d1 = `${((E * 0.5) / 1e5).toFixed(2)} × 10⁵ N/C (${dir})`;
  const d2 = `${((E * 2.0) / 1e5).toFixed(2)} × 10⁵ N/C (${dir === "Radially Outward" ? "Radially Inward" : "Radially Outward"})`;
  const d3 = `${((E * 1.5) / 1e5).toFixed(2)} × 10⁵ N/C (${dir})`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-efield-" + Date.now(),
    topicId: "electric-field",
    topicTitle: "Electric Field & Superposition",
    prompt: `An isolated point charge $Q = ${Q_uC > 0 ? "+" : ""}${Q_uC}.0\\;\\mu\\text{C}$ is placed in vacuum. Determine the electric field intensity and direction at a distance $r = ${r_cm}\\text{ cm}$ from the charge.`,
    options,
    correctIndex,
    correctValue: E,
    unit: "N/C",
    hint: "Use E = k|Q|/r². Remember positive charges point outward, negative charges point inward.",
    firstStep: `Convert $r = ${r_cm}\\text{ cm} = ${r_m.toFixed(2)}\\text{ m}$. Compute $r^2 = ${(r_m*r_m).toFixed(4)}\\text{ m}^2$.`,
    fullSolution: `**GIVEN:**
* $Q = ${Q_uC > 0 ? "+" : ""}${Q_uC}.0\\;\\mu\\text{C} = ${Q_uC} \\times 10^{-6}\\text{ C}$
* $r = ${r_cm}\\text{ cm} = ${r_m.toFixed(2)}\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**FORMULA:**
$$E = \\frac{k|Q|}{r^2}$$

**COMPUTATION:**
$$E = \\frac{(8.99 \\times 10^9)(${Math.abs(Q_uC)} \\times 10^{-6})}{(${r_m.toFixed(2)})^2} = \\frac{${(8.99e9 * Math.abs(Q_C)).toFixed(1)}}{${(r_m * r_m).toFixed(4)}} = ${E.toExponential(3)}\\text{ N/C}$$

**DIRECTION:**
Field points ${dir.toLowerCase()} because $Q$ is ${Q_uC > 0 ? "positive" : "negative"}.`,
    finalAnswer: ansStr
  };
}

// 3. Acceleration in Electric Field
function generateAccelerationProblem() {
  const q_nC = randChoice([2.0, 3.0, 4.0, 5.0, 6.0]);
  const m_micro_kg = randChoice([2.0, 4.0, 5.0, 8.0]); // mass in 10^-8 kg
  const E_kNC = randChoice([20, 30, 40, 50]); // in 10^3 N/C
  
  const q_C = q_nC * 1e-9;
  const m_kg = m_micro_kg * 1e-8;
  const E_val = E_kNC * 1e3;
  
  const F = q_C * E_val;
  const a = F / m_kg;
  
  const ansStr = `${(a / 1e3).toFixed(2)} × 10³ m/s²`;
  const d1 = `${((a * 0.5) / 1e3).toFixed(2)} × 10³ m/s²`;
  const d2 = `${((a * 2.0) / 1e3).toFixed(2)} × 10³ m/s²`;
  const d3 = `${((a * 0.2) / 1e3).toFixed(2)} × 10³ m/s²`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-accel-" + Date.now(),
    topicId: "force-and-acceleration",
    topicTitle: "Force & Acceleration in an Electric Field",
    prompt: `A particle carrying charge $q = +${q_nC.toFixed(1)}\\text{ nC}$ and mass $m = ${m_micro_kg.toFixed(1)} \\times 10^{-8}\\text{ kg}$ is injected into a uniform electric field of magnitude $E = ${E_kNC} \\times 10^3\\text{ N/C}$. Calculate the particle's acceleration magnitude.`,
    options,
    correctIndex,
    correctValue: a,
    unit: "m/s²",
    hint: "Calculate force F = qE, then use Newton's 2nd Law a = F/m = qE/m.",
    firstStep: `F = (${q_nC.toFixed(1)} × 10⁻⁹ C) × (${E_kNC} × 10³ N/C) = ${(F).toExponential(2)} N.`,
    fullSolution: `**GIVEN:**
* $q = ${q_nC.toFixed(1)}\\text{ nC} = ${q_C.toExponential(2)}\\text{ C}$
* $m = ${m_micro_kg.toFixed(1)} \\times 10^{-8}\\text{ kg}$
* $E = ${E_val.toExponential(2)}\\text{ N/C}$

**FORMULA:**
$$a = \\frac{qE}{m}$$

**COMPUTATION:**
$$a = \\frac{(${q_C.toExponential(2)})(${E_val.toExponential(2)})}{${m_kg.toExponential(2)}} = \\frac{${F.toExponential(3)}}{${m_kg.toExponential(2)}} = ${a.toPrecision(3)}\\text{ m/s}^2$$`,
    finalAnswer: ansStr
  };
}

// 4. Electric Potential
function generatePotentialProblem() {
  const Q_nC = randChoice([6.0, 9.0, 12.0, 15.0, 18.0]);
  const r_cm = randChoice([30, 45, 60, 75, 90]);
  const r_m = r_cm / 100;
  const Q_C = Q_nC * 1e-9;
  const V = (CONSTANTS.k_SI * Q_C) / r_m;
  const ansStr = `${Math.round(V)} V`;

  const d1 = `${Math.round(V * 0.5)} V`;
  const d2 = `${Math.round(V * 1.5)} V`;
  const d3 = `${Math.round(V * 2.0)} V`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-pot-" + Date.now(),
    topicId: "electric-potential",
    topicTitle: "Electric Potential",
    prompt: `A point charge $Q = +${Q_nC.toFixed(1)}\\text{ nC}$ is located at a distance of $r = ${r_cm}\\text{ cm}$ from point $P$. Determine the electric potential at $P$.`,
    options,
    correctIndex,
    correctValue: V,
    unit: "V",
    hint: "Use V = kQ/r. Note that potential is scalar, not vector.",
    firstStep: `r = ${r_m.toFixed(2)} m. V = (8.99 × 10⁹)(Q) / r.`,
    fullSolution: `**GIVEN:**
* $Q = +${Q_nC.toFixed(1)}\\text{ nC} = ${Q_C.toExponential(2)}\\text{ C}$
* $r = ${r_cm}\\text{ cm} = ${r_m.toFixed(2)}\\text{ m}$

**FORMULA:**
$$V = \\frac{kQ}{r}$$

**COMPUTATION:**
$$V = \\frac{(8.99 \\times 10^9)(${Q_C.toExponential(2)})}{${r_m.toFixed(2)}} = ${V.toFixed(1)}\\text{ V} \\approx ${Math.round(V)}\\text{ V}$$`,
    finalAnswer: ansStr
  };
}

// 5. Work & Potential Energy
function generateWorkEnergyProblem() {
  const q_nC = randChoice([3.0, 4.0, 5.0, 8.0]);
  const Va = randChoice([80, 100, 120, 150]);
  const Vb = randChoice([20, 30, 40, 50]);
  const deltaV = Va - Vb;
  const W = (q_nC * 1e-9) * deltaV;
  const ansStr = `${(W * 1e7).toFixed(1)} × 10⁻⁷ J`;

  const d1 = `${((W * 0.5) * 1e7).toFixed(1)} × 10⁻⁷ J`;
  const d2 = `${((W * 1.5) * 1e7).toFixed(1)} × 10⁻⁷ J`;
  const d3 = `${((W * 2.0) * 1e7).toFixed(1)} × 10⁻⁷ J`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-work-" + Date.now(),
    topicId: "work-and-potential-energy",
    topicTitle: "Work & Multi-Charge Potential Energy",
    prompt: `A charge $q = +${q_nC.toFixed(1)}\\text{ nC}$ moves in an electrostatic field from an initial point $a$ with potential $V_a = ${Va}\\text{ V}$ to a final point $b$ with potential $V_b = ${Vb}\\text{ V}$. Find the work done BY the electric field on this charge.`,
    options,
    correctIndex,
    correctValue: W,
    unit: "J",
    hint: "Work done BY the electric field is W = q(Va - Vb).",
    firstStep: `Potential difference: Va - Vb = ${Va} - ${Vb} = ${deltaV} V.`,
    fullSolution: `**GIVEN:**
* $q = ${q_nC.toFixed(1)}\\text{ nC} = ${q_nC} \\times 10^{-9}\\text{ C}$
* $V_a = ${Va}\\text{ V}$
* $V_b = ${Vb}\\text{ V}$

**FORMULA:**
$$W_{\\text{field}} = q(V_a - V_b)$$

**COMPUTATION:**
$$W = (${q_nC} \\times 10^{-9}\\text{ C})(${Va}\\text{ V} - ${Vb}\\text{ V}) = (${q_nC} \\times 10^{-9})(${deltaV}) = ${W.toExponential(3)}\\text{ J}$$`,
    finalAnswer: ansStr
  };
}

// 6. Wave Basics
function generateWaveProblem() {
  const f_Hz = randChoice([15, 20, 25, 30, 40, 50]);
  const lambda_m = randChoice([0.5, 0.6, 0.8, 1.2, 1.5, 2.0]);
  const v = f_Hz * lambda_m;
  const ansStr = `${v.toFixed(1)} m/s`;

  const d1 = `${(v * 0.5).toFixed(1)} m/s`;
  const d2 = `${(v * 1.5).toFixed(1)} m/s`;
  const d3 = `${(v * 2.0).toFixed(1)} m/s`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-wave-" + Date.now(),
    topicId: "wave-basics",
    topicTitle: "Wave Fundamentals",
    prompt: `A mechanical wave has a frequency of $f = ${f_Hz}\\text{ Hz}$ and a wavelength of $\\lambda = ${lambda_m.toFixed(2)}\\text{ m}$. Calculate its propagation speed.`,
    options,
    correctIndex,
    correctValue: v,
    unit: "m/s",
    hint: "Use the universal wave equation v = fλ.",
    firstStep: `Multiply frequency by wavelength: v = (${f_Hz}) × (${lambda_m.toFixed(2)}).`,
    fullSolution: `**GIVEN:**
* $f = ${f_Hz}\\text{ Hz}$
* $\\lambda = ${lambda_m.toFixed(2)}\\text{ m}$

**FORMULA:**
$$v = f\\lambda$$

**COMPUTATION:**
$$v = (${f_Hz}\\text{ Hz})(${lambda_m.toFixed(2)}\\text{ m}) = ${v.toFixed(1)}\\text{ m/s}$$`,
    finalAnswer: ansStr
  };
}

// 7. Speed of Sound vs Temp
function generateSoundSpeedProblem() {
  const tempC = randChoice([15, 18, 20, 25, 28, 30, 35]);
  const v = 331 + 0.6 * tempC;
  const ansStr = `${v.toFixed(1)} m/s`;

  const d1 = `${(v - 10).toFixed(1)} m/s`;
  const d2 = `${(v + 10).toFixed(1)} m/s`;
  const d3 = `${(331 + tempC).toFixed(1)} m/s`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-soundspeed-" + Date.now(),
    topicId: "speed-of-sound-temp",
    topicTitle: "Speed of Sound vs. Temperature",
    prompt: `Using the authoritative examination approximation $v \\approx 331 + 0.6T$, estimate the speed of sound in air when the ambient temperature is $T = ${tempC}^\\circ\\text{C}$.`,
    options,
    correctIndex,
    correctValue: v,
    unit: "m/s",
    hint: "Do NOT convert to Kelvin. Substitute Celsius directly into v ≈ 331 + 0.6T.",
    firstStep: `0.6 × ${tempC} = ${(0.6 * tempC).toFixed(1)} m/s. Add to 331.`,
    fullSolution: `**GIVEN:**
* $T = ${tempC}^\\circ\\text{C}$

**FORMULA:**
$$v \\approx 331 + 0.6T$$

**COMPUTATION:**
$$v = 331 + 0.6(${tempC}) = 331 + ${(0.6 * tempC).toFixed(1)} = ${v.toFixed(1)}\\text{ m/s}$$`,
    finalAnswer: ansStr
  };
}

// 8. Sound Intensity & Decibels
function generateSoundIntensityProblem() {
  const exp = randChoice([5, 6, 7, 8, 9]); // 10^-exp
  const I = Math.pow(10, -exp);
  const beta = 10 * Math.log10(I / CONSTANTS.I0);
  const ansStr = `${Math.round(beta)} dB`;

  const d1 = `${Math.round(beta - 10)} dB`;
  const d2 = `${Math.round(beta + 10)} dB`;
  const d3 = `${Math.round(beta * 0.5)} dB`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-soundint-" + Date.now(),
    topicId: "sound-intensity-decibels",
    topicTitle: "Sound Intensity & Decibels",
    prompt: `An industrial acoustic probe measures a sound intensity of $I = 1.0 \\times 10^{-${exp}}\\text{ W/m}^2$. Calculate the sound intensity level in decibels (dB) relative to the hearing threshold $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$.`,
    options,
    correctIndex,
    correctValue: beta,
    unit: "dB",
    hint: "Use β = 10 log10(I / I₀).",
    firstStep: `I / I₀ = 10⁻${exp} / 10⁻¹² = 10^${12 - exp}.`,
    fullSolution: `**GIVEN:**
* $I = 1.0 \\times 10^{-${exp}}\\text{ W/m}^2$
* $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$

**FORMULA:**
$$\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$$

**COMPUTATION:**
$$\\beta = 10 \\log_{10}(10^{${12 - exp}}) = 10 \\times (${12 - exp}) = ${Math.round(beta)}\\text{ dB}$$`,
    finalAnswer: ansStr
  };
}

// 9. Multiple Sound Sources
function generateMultipleSourcesProblem() {
  const beta1 = randChoice([62, 65, 68, 70, 72]);
  const N = randChoice([4, 5, 6, 8, 10]);
  const deltaBeta = 10 * Math.log10(N);
  const total = beta1 + deltaBeta;
  const ansStr = `${total.toFixed(1)} dB`;

  const d1 = `${(beta1 + 3).toFixed(1)} dB`;
  const d2 = `${(total + 5).toFixed(1)} dB`;
  const d3 = `${(beta1 * N).toFixed(0)} dB`; // common mistake distractor!

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-multisource-" + Date.now(),
    topicId: "multiple-sound-sources",
    topicTitle: "Multiple Identical Sound Sources",
    prompt: `A single industrial exhaust blower produces a sound level of $\\beta_1 = ${beta1}\\text{ dB}$. If $N = ${N}$ identical blowers operate simultaneously, what is the combined sound intensity level?`,
    options,
    correctIndex,
    correctValue: total,
    unit: "dB",
    hint: "Decibels do not add linearly! Use β_total = β₁ + 10 log10(N).",
    firstStep: `Calculate increase: Δβ = 10 log10(${N}) ≈ ${deltaBeta.toFixed(2)} dB.`,
    fullSolution: `**GIVEN:**
* $\\beta_1 = ${beta1}\\text{ dB}$
* $N = ${N}$ identical sources

**FORMULA:**
$$\\beta_{\\text{total}} = \\beta_1 + 10 \\log_{10}(N)$$

**COMPUTATION:**
$$\\Delta\\beta = 10 \\log_{10}(${N}) = ${deltaBeta.toFixed(2)}\\text{ dB}$$
$$\\beta_{\\text{total}} = ${beta1} + ${deltaBeta.toFixed(2)} = ${total.toFixed(2)}\\text{ dB} \\approx ${total.toFixed(1)}\\text{ dB}$$`,
    finalAnswer: ansStr
  };
}

// 10. Doppler Effect
function generateDopplerProblem() {
  const f = randChoice([400, 500, 600, 700]);
  const vs = randChoice([15, 20, 24, 25]);
  const v = 340;
  const f_obs = f * (v / (v - vs));
  const ansStr = `${Math.round(f_obs)} Hz`;

  const d1 = `${Math.round(f * ((v - vs) / v))} Hz`;
  const d2 = `${Math.round(f_obs + 40)} Hz`;
  const d3 = `${f} Hz`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-doppler-" + Date.now(),
    topicId: "doppler-effect",
    topicTitle: "The Doppler Effect",
    prompt: `An emergency siren emits an acoustic tone at $f = ${f}\\text{ Hz}$ while travelling at $v_s = ${vs}\\text{ m/s}$ toward a stationary observer. If the speed of sound is $v = ${v}\\text{ m/s}$, calculate the frequency heard by the observer.`,
    options,
    correctIndex,
    correctValue: f_obs,
    unit: "Hz",
    hint: "Moving source approaching stationary observer: f' = f [v / (v - vs)].",
    firstStep: `Denominator: v - vs = ${v} - ${vs} = ${v - vs} m/s.`,
    fullSolution: `**GIVEN:**
* $f = ${f}\\text{ Hz}$
* $v = ${v}\\text{ m/s}$
* $v_s = ${vs}\\text{ m/s}$ (approaching)
* $v_o = 0\\text{ m/s}$ (stationary)

**FORMULA:**
$$f' = f \\left( \\frac{v}{v - v_s} \\right)$$

**COMPUTATION:**
$$f' = ${f} \\left( \\frac{${v}}{${v} - ${vs}} \\right) = ${f} \\left( \\frac{${v}}{${v - vs}} \\right) = ${f_obs.toFixed(2)}\\text{ Hz} \\approx ${Math.round(f_obs)}\\text{ Hz}$$`,
    finalAnswer: ansStr
  };
}

// 11. Closed Pipe Resonance
function generateClosedPipeProblem() {
  const L_m = randChoice([0.50, 0.60, 0.75, 0.80, 1.00]);
  const v = randChoice([336, 340, 344, 348]);
  const f1 = v / (4 * L_m);
  const ansStr = `${Math.round(f1)} Hz`;

  const d1 = `${Math.round(v / (2 * L_m))} Hz`; // open-pipe error
  const d2 = `${Math.round(f1 * 0.5)} Hz`;
  const d3 = `${Math.round(f1 * 3)} Hz`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-pipe-" + Date.now(),
    topicId: "closed-pipe-resonance",
    topicTitle: "Resonance in Closed Air Columns",
    prompt: `An organ pipe closed at one end has an acoustic length of $L = ${L_m.toFixed(2)}\\text{ m}$. If sound propagates at $v = ${v}\\text{ m/s}$ in the pipe, determine its fundamental resonant frequency $f_1$.`,
    options,
    correctIndex,
    correctValue: f1,
    unit: "Hz",
    hint: "For a pipe closed at one end, the fundamental frequency is f₁ = v / (4L).",
    firstStep: `4L = 4 × ${L_m.toFixed(2)} = ${(4 * L_m).toFixed(2)} m.`,
    fullSolution: `**GIVEN:**
* $L = ${L_m.toFixed(2)}\\text{ m}$
* $v = ${v}\\text{ m/s}$
* Closed at one end

**FORMULA:**
$$f_1 = \\frac{v}{4L}$$

**COMPUTATION:**
$$f_1 = \\frac{${v}}{4(${L_m.toFixed(2)})} = \\frac{${v}}{${(4 * L_m).toFixed(2)}} = ${f1.toFixed(2)}\\text{ Hz} \\approx ${Math.round(f1)}\\text{ Hz}$$`,
    finalAnswer: ansStr
  };
}

// 12. Neutral Point
function generateNeutralPointProblem() {
  // Let QA = a^2, QB = b^2 for clean math
  const a = randChoice([1, 2, 3]);
  const b = randChoice([2, 3, 4]);
  const QA = a * a;
  const QB = b * b;
  const d_cm = (a + b) * 5; // e.g. (2+4)*5 = 30 cm
  const d_m = d_cm / 100;
  const x_from_A = (d_m * a) / (a + b);
  const ansStr = `${x_from_A.toFixed(3)} m from QA`;

  const d1 = `${(d_m - x_from_A).toFixed(3)} m from QA`;
  const d2 = `${(d_m / 2).toFixed(3)} m from QA`;
  const d3 = `${(x_from_A * 0.5).toFixed(3)} m from QA`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-neutral-" + Date.now(),
    topicId: "neutral-point",
    topicTitle: "Electrostatic Neutral Point",
    prompt: `Two like positive point charges $Q_A = ${QA}.0\\;\\mu\\text{C}$ and $Q_B = ${QB}.0\\;\\mu\\text{C}$ are separated by $d = ${d_cm}\\text{ cm}$. At what distance from $Q_A$ along the connecting line is the net electric field zero?`,
    options,
    correctIndex,
    correctValue: x_from_A,
    unit: "m",
    hint: "Equate electric fields: √QA / x = √QB / (d - x).",
    firstStep: `√QA = ${a}, √QB = ${b}. Ratio: ${a}/x = ${b}/(${d_m.toFixed(2)} - x).`,
    fullSolution: `**GIVEN:**
* $Q_A = ${QA}.0\\;\\mu\\text{C}$, $Q_B = ${QB}.0\\;\\mu\\text{C}$
* $d = ${d_cm}\\text{ cm} = ${d_m.toFixed(2)}\\text{ m}$

**FORMULA:**
$$\\frac{\\sqrt{Q_A}}{x} = \\frac{\\sqrt{Q_B}}{d - x}$$

**COMPUTATION:**
$$\\frac{${a}}{x} = \\frac{${b}}{${d_m.toFixed(2)} - x} \\implies ${a}(${d_m.toFixed(2)} - x) = ${b}x \\implies ${(a * d_m).toFixed(2)} = ${a + b}x$$
$$x = \\frac{${(a * d_m).toFixed(2)}}{${a + b}} = ${x_from_A.toFixed(3)}\\text{ m}$$`,
    finalAnswer: ansStr
  };
}

// 13. CGS Electrostatics
function generateCGSProblem() {
  const q1 = randChoice([40, 60, 80, 100]);
  const q2 = randChoice([20, 30, 40, 50]);
  const r_cm = randChoice([4, 5, 8, 10]);
  const F_dynes = (q1 * q2) / (r_cm * r_cm);
  const ansStr = `${F_dynes.toFixed(0)} dynes`;

  const d1 = `${(F_dynes * 2).toFixed(0)} dynes`;
  const d2 = `${(F_dynes * 0.5).toFixed(0)} dynes`;
  const d3 = `${(F_dynes * 4).toFixed(0)} dynes`;

  const options = shuffle([ansStr, d1, d2, d3]);
  const correctIndex = options.indexOf(ansStr);

  return {
    id: "gen-cgs-" + Date.now(),
    topicId: "cgs-electrostatics",
    topicTitle: "CGS Electrostatic System",
    prompt: `In the CGS electrostatic system, two charges $q_1 = ${q1}\\text{ statC}$ and $q_2 = ${q2}\\text{ statC}$ are separated by $r = ${r_cm}.0\\text{ cm}$. Find the magnitude of the electrostatic force in dynes.`,
    options,
    correctIndex,
    correctValue: F_dynes,
    unit: "dynes",
    hint: "In CGS electrostatic units, k = 1, so F = |q₁q₂| / r² directly in dynes.",
    firstStep: `q₁q₂ = ${q1} × ${q2} = ${q1 * q2}. r² = ${r_cm}² = ${r_cm * r_cm}.`,
    fullSolution: `**GIVEN:**
* $q_1 = ${q1}\\text{ statC}$
* $q_2 = ${q2}\\text{ statC}$
* $r = ${r_cm}.0\\text{ cm}$
* $k_{\\text{CGS}} = 1\\text{ dyne}\\cdot\\text{cm}^2/\\text{statC}^2$

**FORMULA:**
$$F = \\frac{|q_1 q_2|}{r^2}$$

**COMPUTATION:**
$$F = \\frac{${q1 * q2}}{${r_cm * r_cm}} = ${F_dynes.toFixed(0)}\\text{ dynes}$$`,
    finalAnswer: ansStr
  };
}
