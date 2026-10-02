/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Computation & Validation Engine
 * Authoritative equations, SI unit validation, and robust error checking.
 */

export const CONSTANTS = {
  k_SI: 8.99e9,          // N·m²/C² (Coulomb's constant in air/vacuum)
  e_charge: 1.60217663e-19, // C (Elementary charge magnitude)
  m_electron: 9.1093837e-31, // kg (Electron rest mass)
  m_proton: 1.6726219e-27,   // kg (Proton rest mass)
  I0: 1.0e-12,           // W/m² (Reference hearing threshold)
  g: 9.80,               // m/s² (Gravitational acceleration)
  k_CGS: 1.0             // dyne·cm²/statC² (CGS electrostatic constant)
};

/**
 * Unit conversion helper
 */
export function convertUnit(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) return value;
  
  // Charge
  if (fromUnit === "C" && toUnit === "uC") return value * 1e6;
  if (fromUnit === "uC" && toUnit === "C") return value * 1e-6;
  if (fromUnit === "C" && toUnit === "nC") return value * 1e9;
  if (fromUnit === "nC" && toUnit === "C") return value * 1e-9;
  if (fromUnit === "C" && toUnit === "statC") return value * 2.99792458e9;
  if (fromUnit === "statC" && toUnit === "C") return value / 2.99792458e9;
  
  // Distance
  if (fromUnit === "m" && toUnit === "cm") return value * 100;
  if (fromUnit === "cm" && toUnit === "m") return value / 100;
  if (fromUnit === "m" && toUnit === "mm") return value * 1000;
  if (fromUnit === "mm" && toUnit === "m") return value / 1000;
  
  // Force
  if (fromUnit === "N" && toUnit === "dynes") return value * 1e5;
  if (fromUnit === "dynes" && toUnit === "N") return value * 1e-5;

  return value;
}

/**
 * Coulomb's Law Calculator
 * F = k|q1*q2| / r^2
 */
export function calculateCoulomb(q1_C, q2_C, r_m) {
  if (r_m <= 0) {
    throw new Error("Separation distance r must be strictly positive (r > 0 m).");
  }
  const magnitude = (CONSTANTS.k_SI * Math.abs(q1_C * q2_C)) / (r_m * r_m);
  const isRepulsive = (q1_C * q2_C > 0);
  const nature = isRepulsive ? "Repulsive" : "Attractive";
  return {
    magnitude,
    nature,
    isRepulsive,
    formula: "F = \\frac{k|q_1 q_2|}{r^2}",
    steps: [
      `|q_1 q_2| = |(${q1_C.toExponential(3)})(${q2_C.toExponential(3)})| = ${Math.abs(q1_C * q2_C).toExponential(3)}\\text{ C}^2`,
      `r^2 = (${r_m.toFixed(4)})^2 = ${(r_m * r_m).toFixed(6)}\\text{ m}^2`,
      `F = \\frac{(8.99 \\times 10^9)(${Math.abs(q1_C * q2_C).toExponential(3)})}{${(r_m * r_m).toFixed(6)}} = ${magnitude.toPrecision(4)}\\text{ N}`
    ]
  };
}

/**
 * Electric Field Calculator
 * E = k|Q| / r^2
 */
export function calculateElectricField(Q_C, r_m) {
  if (r_m <= 0) {
    throw new Error("Distance r from source charge must be strictly positive (r > 0 m).");
  }
  const magnitude = (CONSTANTS.k_SI * Math.abs(Q_C)) / (r_m * r_m);
  const direction = Q_C >= 0 ? "Radially Outward" : "Radially Inward";
  return {
    magnitude,
    direction,
    isPositive: Q_C >= 0,
    steps: [
      `|Q| = ${Math.abs(Q_C).toExponential(3)}\\text{ C}`,
      `r^2 = (${r_m.toFixed(4)})^2 = ${(r_m * r_m).toFixed(6)}\\text{ m}^2`,
      `E = \\frac{(8.99 \\times 10^9)(${Math.abs(Q_C).toExponential(3)})}{${(r_m * r_m).toFixed(6)}} = ${magnitude.toPrecision(4)}\\text{ N/C}`
    ]
  };
}

/**
 * Electric Potential Calculator
 * V = kQ / r
 */
export function calculateElectricPotential(Q_C, r_m) {
  if (r_m <= 0) {
    throw new Error("Distance r must be strictly positive (r > 0 m).");
  }
  const value = (CONSTANTS.k_SI * Q_C) / r_m;
  return {
    value,
    steps: [
      `V = \\frac{(8.99 \\times 10^9)(${Q_C.toExponential(3)})}{${r_m.toFixed(4)}} = ${value.toPrecision(4)}\\text{ V}`
    ]
  };
}

/**
 * Electric Potential Energy Calculator
 * U = kq1q2 / r
 */
export function calculatePotentialEnergy(q1_C, q2_C, r_m) {
  if (r_m <= 0) {
    throw new Error("Distance r must be strictly positive (r > 0 m).");
  }
  const value = (CONSTANTS.k_SI * q1_C * q2_C) / r_m;
  const bound = value < 0;
  return {
    value,
    bound,
    interpretation: bound ? "Bound system (requires work to separate)" : "Repulsive state (stored electrostatic energy)",
    steps: [
      `q_1 q_2 = (${q1_C.toExponential(3)})(${q2_C.toExponential(3)}) = ${(q1_C * q2_C).toExponential(3)}\\text{ C}^2`,
      `U = \\frac{(8.99 \\times 10^9)(${(q1_C * q2_C).toExponential(3)})}{${r_m.toFixed(4)}} = ${value.toPrecision(4)}\\text{ J}`
    ]
  };
}

/**
 * Wave Relationship Calculator
 * v = f * lambda
 * Solves for the missing parameter among v, f, lambda.
 */
export function calculateWave(v, f, lambda) {
  if (v !== null && f !== null) {
    if (f <= 0) throw new Error("Frequency must be greater than zero.");
    const computedLambda = v / f;
    return {
      solved: "lambda",
      value: computedLambda,
      unit: "m",
      formula: "\\lambda = \\frac{v}{f}",
      computation: `\\lambda = \\frac{${v.toFixed(2)}\\text{ m/s}}{${f.toFixed(2)}\\text{ Hz}} = ${computedLambda.toPrecision(4)}\\text{ m}`
    };
  } else if (v !== null && lambda !== null) {
    if (lambda <= 0) throw new Error("Wavelength must be greater than zero.");
    const computedF = v / lambda;
    return {
      solved: "f",
      value: computedF,
      unit: "Hz",
      formula: "f = \\frac{v}{\\lambda}",
      computation: `f = \\frac{${v.toFixed(2)}\\text{ m/s}}{${lambda.toFixed(4)}\\text{ m}} = ${computedF.toPrecision(4)}\\text{ Hz}`
    };
  } else if (f !== null && lambda !== null) {
    if (f <= 0 || lambda <= 0) throw new Error("Frequency and wavelength must be positive.");
    const computedV = f * lambda;
    return {
      solved: "v",
      value: computedV,
      unit: "m/s",
      formula: "v = f\\lambda",
      computation: `v = (${f.toFixed(2)}\\text{ Hz})(${lambda.toFixed(4)}\\text{ m}) = ${computedV.toPrecision(4)}\\text{ m/s}`
    };
  }
  throw new Error("Please supply any 2 of the 3 variables: Wave Speed (v), Frequency (f), or Wavelength (λ).");
}

/**
 * Speed of Sound in Air vs Temperature
 * v ≈ 331 + 0.6T
 */
export function calculateSpeedOfSound(tempC) {
  if (tempC < -100 || tempC > 200) {
    throw new Error("Temperature should be within normal meteorological/engineering range (-100°C to 200°C).");
  }
  const speed = 331.0 + 0.6 * tempC;
  return {
    speed,
    steps: [
      `v \\approx 331 + 0.6(${tempC.toFixed(1)}) = 331 + ${(0.6 * tempC).toFixed(2)} = ${speed.toFixed(2)}\\text{ m/s}`
    ]
  };
}

/**
 * Sound Intensity & Decibels
 * beta = 10 * log10(I / I0)
 */
export function calculateSoundLevel(intensity_W_m2) {
  if (intensity_W_m2 <= 0) {
    throw new Error("Sound intensity I must be strictly positive (I > 0 W/m²).");
  }
  const ratio = intensity_W_m2 / CONSTANTS.I0;
  const beta = 10.0 * Math.log10(ratio);
  return {
    beta,
    intensity: intensity_W_m2,
    steps: [
      `\\frac{I}{I_0} = \\frac{${intensity_W_m2.toExponential(3)}}{1.0 \\times 10^{-12}} = ${ratio.toExponential(3)}`,
      `\\beta = 10 \\log_{10}(${ratio.toExponential(3)}) = ${beta.toFixed(2)}\\text{ dB}`
    ]
  };
}

/**
 * Intensity from Decibels
 * I = I0 * 10^(beta / 10)
 */
export function calculateIntensityFromDecibels(beta_dB) {
  const intensity = CONSTANTS.I0 * Math.pow(10, beta_dB / 10.0);
  return {
    intensity,
    beta: beta_dB,
    steps: [
      `I = (1.0 \\times 10^{-12}) \\times 10^{${beta_dB.toFixed(1)} / 10} = ${intensity.toExponential(4)}\\text{ W/m}^2`
    ]
  };
}

/**
 * Multiple Identical Sound Sources
 * beta_total = beta_1 + 10 * log10(N)
 */
export function calculateMultipleSoundSources(single_dB, N) {
  if (N <= 0 || !Number.isInteger(N)) {
    throw new Error("Number of sources N must be an integer ≥ 1.");
  }
  const deltaBeta = 10.0 * Math.log10(N);
  const total_dB = single_dB + deltaBeta;
  return {
    total_dB,
    deltaBeta,
    N,
    single_dB,
    steps: [
      `\\Delta\\beta = 10\\log_{10}(${N}) = ${deltaBeta.toFixed(2)}\\text{ dB}`,
      `\\beta_{\\text{total}} = ${single_dB.toFixed(1)} + ${deltaBeta.toFixed(2)} = ${total_dB.toFixed(2)}\\text{ dB}`
    ]
  };
}

/**
 * Doppler Effect Calculator
 * f' = f * (v ± vo) / (v ∓ vs)
 */
export function calculateDoppler({ f_Hz, v_sound, v_s, v_o, sourceDirection, obsDirection }) {
  if (f_Hz <= 0) throw new Error("Emitted frequency f must be > 0 Hz.");
  if (v_sound <= 0) throw new Error("Speed of sound v must be > 0 m/s.");
  if (v_s < 0 || v_o < 0) throw new Error("Velocities must be specified as positive magnitudes with direction selected.");
  
  // Signs:
  // obsDirection: "toward" => +vo, "away" => -vo, "stationary" => 0
  // sourceDirection: "toward" => -vs, "away" => +vs, "stationary" => 0
  let numSign = 0;
  if (obsDirection === "toward") numSign = +1;
  else if (obsDirection === "away") numSign = -1;

  let denSign = 0;
  if (sourceDirection === "toward") denSign = -1;
  else if (sourceDirection === "away") denSign = +1;

  const numerator = v_sound + (numSign * v_o);
  const denominator = v_sound + (denSign * v_s);

  if (denominator <= 0) {
    throw new Error("Source speed exceeds sound speed! Sonic boom / Mach cone occurs (v_s ≥ v).");
  }

  const f_obs = f_Hz * (numerator / denominator);
  const isShiftUp = f_obs > f_Hz;

  return {
    f_obs,
    isShiftUp,
    numerator,
    denominator,
    steps: [
      `\\text{Numerator (Observer): } v ${numSign >= 0 ? "+" : "-"} v_o = ${v_sound} ${numSign >= 0 ? "+" : "-"} ${v_o} = ${numerator.toFixed(2)}\\text{ m/s}`,
      `\\text{Denominator (Source): } v ${denSign >= 0 ? "+" : "-"} v_s = ${v_sound} ${denSign >= 0 ? "+" : "-"} ${v_s} = ${denominator.toFixed(2)}\\text{ m/s}`,
      `f' = ${f_Hz.toFixed(1)} \\left( \\frac{${numerator.toFixed(2)}}{${denominator.toFixed(2)}} \\right) = ${f_obs.toFixed(2)}\\text{ Hz}`
    ]
  };
}

/**
 * Resonance in Closed Pipe (one end closed)
 * fn = n * v / (4L), n = 1, 3, 5...
 */
export function calculateClosedPipe(L_m, v_sound, harmonicNumber = 1) {
  if (L_m <= 0) throw new Error("Pipe length L must be > 0 m.");
  if (v_sound <= 0) throw new Error("Speed of sound v must be > 0 m/s.");
  if (harmonicNumber % 2 === 0 || harmonicNumber <= 0) {
    throw new Error("In a pipe closed at one end, only ODD harmonics exist (n = 1, 3, 5...).");
  }

  const lambda_1 = 4.0 * L_m;
  const f_1 = v_sound / (4.0 * L_m);
  const f_n = harmonicNumber * f_1;
  const lambda_n = lambda_1 / harmonicNumber;

  return {
    f_1,
    f_n,
    lambda_1,
    lambda_n,
    harmonicNumber,
    steps: [
      `\\lambda_1 = 4L = 4(${L_m.toFixed(4)}) = ${lambda_1.toFixed(4)}\\text{ m}`,
      `f_1 = \\frac{v}{4L} = \\frac{${v_sound.toFixed(1)}}{4(${L_m.toFixed(4)})} = ${f_1.toFixed(2)}\\text{ Hz}`,
      harmonicNumber > 1 ? `f_${harmonicNumber} = ${harmonicNumber} \\times ${f_1.toFixed(2)} = ${f_n.toFixed(2)}\\text{ Hz}` : ""
    ].filter(Boolean)
  };
}

/**
 * Neutral Point Between Two Like Charges
 * x = d * sqrt(QA) / (sqrt(QA) + sqrt(QB))
 */
export function calculateNeutralPoint(QA, QB, d_m) {
  if (d_m <= 0) throw new Error("Separation distance d must be > 0 m.");
  if (QA <= 0 || QB <= 0) {
    throw new Error("Both charges must be like positive charges (QA > 0, QB > 0) for a neutral point between them.");
  }
  const sqrtA = Math.sqrt(QA);
  const sqrtB = Math.sqrt(QB);
  const x_from_A = (d_m * sqrtA) / (sqrtA + sqrtB);
  const x_from_B = d_m - x_from_A;

  return {
    x_from_A,
    x_from_B,
    d: d_m,
    steps: [
      `\\sqrt{Q_A} = ${sqrtA.toFixed(4)}, \\quad \\sqrt{Q_B} = ${sqrtB.toFixed(4)}`,
      `x = \\frac{${d_m.toFixed(4)} \\times ${sqrtA.toFixed(4)}}{${sqrtA.toFixed(4)} + ${sqrtB.toFixed(4)}} = ${x_from_A.toFixed(4)}\\text{ m from } Q_A`,
      `\\text{Distance from } Q_B = ${d_m.toFixed(4)} - ${x_from_A.toFixed(4)} = ${x_from_B.toFixed(4)}\\text{ m}`
    ]
  };
}

/**
 * Charged Spheres Static Equilibrium
 * Q = d * sqrt( (m * g * tan(theta)) / k )
 */
export function calculateChargedSpheres(m_kg, L_m, d_m) {
  if (m_kg <= 0 || L_m <= 0 || d_m <= 0) {
    throw new Error("Mass, string length, and separation must all be strictly positive.");
  }
  if (d_m >= 2 * L_m) {
    throw new Error("Separation d cannot exceed twice the string length (2L).");
  }

  const sinTheta = (d_m / 2.0) / L_m;
  const thetaRad = Math.asin(sinTheta);
  const thetaDeg = (thetaRad * 180.0) / Math.PI;
  const tanTheta = Math.tan(thetaRad);

  const Fe = m_kg * CONSTANTS.g * tanTheta;
  const Q = d_m * Math.sqrt(Fe / CONSTANTS.k_SI);

  return {
    Q,
    Fe,
    thetaDeg,
    sinTheta,
    tanTheta,
    steps: [
      `\\sin\\theta = \\frac{d/2}{L} = \\frac{${(d_m / 2).toFixed(4)}}{${L_m.toFixed(4)}} = ${sinTheta.toFixed(4)} \\implies \\theta = ${thetaDeg.toFixed(2)}^\\circ`,
      `\\tan\\theta = \\tan(${thetaDeg.toFixed(2)}^\\circ) = ${tanTheta.toFixed(4)}`,
      `F_e = mg\\tan\\theta = (${m_kg.toExponential(3)})(${CONSTANTS.g.toFixed(2)})(${tanTheta.toFixed(4)}) = ${Fe.toExponential(4)}\\text{ N}`,
      `Q = ${d_m.toFixed(4)} \\sqrt{\\frac{${Fe.toExponential(4)}}{8.99 \\times 10^9}} = ${Q.toExponential(4)}\\text{ C}`
    ]
  };
}

/**
 * CGS Electrostatic Coulomb's Law
 * F = |q1 * q2| / r^2 (dynes)
 */
export function calculateCGSCoulomb(q1_statC, q2_statC, r_cm) {
  if (r_cm <= 0) throw new Error("Distance r in CGS must be > 0 cm.");
  const F_dynes = (Math.abs(q1_statC * q2_statC)) / (r_cm * r_cm);
  const F_Newtons = F_dynes * 1e-5;
  const isRepulsive = (q1_statC * q2_statC > 0);

  return {
    F_dynes,
    F_Newtons,
    isRepulsive,
    nature: isRepulsive ? "Repulsive" : "Attractive",
    steps: [
      `|q_1 q_2| = |(${q1_statC.toFixed(2)})(${q2_statC.toFixed(2)})| = ${Math.abs(q1_statC * q2_statC).toFixed(2)}\\text{ statC}^2`,
      `r^2 = (${r_cm.toFixed(2)})^2 = ${(r_cm * r_cm).toFixed(4)}\\text{ cm}^2`,
      `F = \\frac{${Math.abs(q1_statC * q2_statC).toFixed(2)}}{${(r_cm * r_cm).toFixed(4)}} = ${F_dynes.toFixed(2)}\\text{ dynes} = ${F_Newtons.toExponential(3)}\\text{ N}`
    ]
  };
}
