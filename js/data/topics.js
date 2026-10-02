/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Midterm Review Topics
 * Authoritative Content based on Midterm Examination Set A Reviewer
 */

export const TOPICS = [
  {
    id: "coulomb-law",
    number: "01",
    title: "Electric Charge & Coulomb's Law",
    category: "Electrostatics",
    shortDesc: "Elementary charge, electrostatic force, inverse-square law, attraction and repulsion.",
    concept: `Electric charge is an intrinsic property of matter. The fundamental elementary charge is $e = 1.602 \\times 10^{-19}\\text{ C}$. A proton carries $+e$ and an electron carries $-e$.

Coulomb's Law states that the electrostatic force between two stationary point charges is directly proportional to the product of their charge magnitudes and inversely proportional to the square of the distance between them.

The electrostatic force obeys Newton's third law: charge 1 exerts an equal and opposite force on charge 2 ($F_{12} = -F_{21}$). The force is directed along the line joining the charges:
* **Like charges** (+ and +, or - and -) **repel** each other.
* **Unlike charges** (+ and -) **attract** each other.`,
    engineeringContext: `**Electrostatic Spray Painting & Powder Coating:**
In industrial automotive manufacturing, paint droplets are charged with high negative voltage and sprayed toward the grounded metal car body. The strong electrostatic attraction ($F \\propto 1/r^2$) pulls droplets directly to the workpiece, wrapping around curved surfaces and drastically reducing overspray from 60% down to under 10%.`,
    formulaLatex: `F = \\frac{k|q_1 q_2|}{r^2}`,
    variables: [
      { symbol: "F", name: "Electrostatic Force", unit: "N (Newtons)", desc: "Magnitude of the force between charges" },
      { symbol: "k", name: "Coulomb's Constant", unit: "N·m²/C²", desc: "Electrostatic constant, k = 8.99 × 10⁹ N·m²/C²" },
      { symbol: "q_1, q_2", name: "Point Charges", unit: "C (Coulombs)", desc: "Quantities of charge (use absolute value for magnitude)" },
      { symbol: "r", name: "Separation Distance", unit: "m (meters)", desc: "Center-to-center distance between point charges" }
    ],
    whenToUse: `Use Coulomb's Law for point charges or spherical charge distributions outside their radius. The medium is assumed to be vacuum or air. Remember that doubling the distance cuts the force to $1/4$ ($F \\propto 1/r^2$), and tripling cuts it to $1/9$.`,
    workedExample: {
      title: "Electrostatic Force in Industrial Deposition",
      scenario: "In an electrostatic deposition system, two charged micro-particles are separated by $d = 0.12\\text{ m}$. Particle 1 has a charge of $q_1 = +3.50\\;\\mu\\text{C}$ and Particle 2 has a charge of $q_2 = -2.40\\;\\mu\\text{C}$. Calculate the magnitude and physical direction of the electrostatic force between them.",
      given: [
        "q_1 = +3.50\\;\\mu\\text{C} = 3.50 \\times 10^{-6}\\text{ C}",
        "q_2 = -2.40\\;\\mu\\text{C} = -2.40 \\times 10^{-6}\\text{ C}",
        "r = 0.12\\text{ m}",
        "k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2"
      ],
      required: "Electrostatic force magnitude $F$ and nature of force (attractive vs repulsive)",
      formula: "F = \\frac{k|q_1 q_2|}{r^2}",
      substitution: "F = \\frac{(8.99 \\times 10^9)|(3.50 \\times 10^{-6})(-2.40 \\times 10^{-6})|}{(0.12)^2}",
      computation: "F = \\frac{8.99 \\times 10^9 \\times 8.40 \\times 10^{-12}}{0.0144} = \\frac{0.075516}{0.0144} \\approx 5.244\\text{ N}",
      answer: "F = 5.24\\text{ N} \\text{ (Attractive, along the line joining the particles)}",
      interpretation: "Because the charges have opposite signs ($q_1 > 0$ and $q_2 < 0$), the force is attractive. If the separation were doubled to 0.24 m, the force would drop to 1.31 N."
    },
    commonMistakes: [
      "Inserting negative signs inside the magnitude calculation and concluding the force has 'negative magnitude'. Magnitudes are always positive; signs determine direction (attraction/repulsion).",
      "Forgetting to square the distance $r$ in the denominator ($r^2$).",
      "Not converting microcoulombs (μC) or nanocoulombs (nC) to Coulombs ($1\\;\\mu\\text{C} = 10^{-6}\\text{ C}$, $1\\text{ nC} = 10^{-9}\\text{ C}$).",
      "Confusing force $F$ (Newtons, $1/r^2$) with potential energy $U$ (Joules, $1/r$)."
    ],
    quickCheck: {
      question: "If two point charges are initially separated by distance $r$, and the separation is increased to $3r$, what happens to the electrostatic force?",
      options: [
        "It increases by a factor of 3",
        "It decreases to 1/3 of its initial value",
        "It decreases to 1/9 of its initial value",
        "It decreases to 1/6 of its initial value"
      ],
      correctIndex: 2,
      explanation: "By Coulomb's inverse-square law, $F \\propto 1/r^2$. When $r' = 3r$, $F' = k|q_1 q_2|/(3r)^2 = \\frac{1}{9} F$."
    },
    practiceProblems: [
      {
        id: "p1-1",
        level: "Level 1 — Foundation",
        prompt: "Two point charges $q_1 = +5.0\\;\\mu\\text{C}$ and $q_2 = +2.0\\;\\mu\\text{C}$ are placed in air separated by $0.30\\text{ m}$. Find the magnitude of the electrostatic force.",
        hint: "Convert microcoulombs to Coulombs ($10^{-6}\\text{ C}$) and apply $F = k|q_1 q_2|/r^2$.",
        firstStep: "Identify given quantities: $q_1 = 5.0 \\times 10^{-6}\\text{ C}$, $q_2 = 2.0 \\times 10^{-6}\\text{ C}$, $r = 0.30\\text{ m}$.",
        fullSolution: `**GIVEN:**
* $q_1 = +5.0\\;\\mu\\text{C} = 5.0 \\times 10^{-6}\\text{ C}$
* $q_2 = +2.0\\;\\mu\\text{C} = 2.0 \\times 10^{-6}\\text{ C}$
* $r = 0.30\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**REQUIRED:**
* Electrostatic force magnitude $F$

**FORMULA:**
$$F = \\frac{k|q_1 q_2|}{r^2}$$

**SUBSTITUTION:**
$$F = \\frac{(8.99 \\times 10^9)(5.0 \\times 10^{-6})(2.0 \\times 10^{-6})}{(0.30)^2}$$

**COMPUTATION:**
$$F = \\frac{0.0899}{0.0900} = 0.999\\text{ N} \\approx 1.00\\text{ N}$$

**ANSWER:**
$$F = 1.00\\text{ N} \\text{ (Repulsive)}$$`,
        finalAnswer: "1.00 N (Repulsive)"
      },
      {
        id: "p1-2",
        level: "Level 2 — Application",
        prompt: "A negative test charge $q_2 = -8.0\\text{ nC}$ experiences an attractive force of $1.80 \\times 10^{-3}\\text{ N}$ toward a positive source charge $q_1 = +25.0\\text{ nC}$. Determine the distance separating the two charges.",
        hint: "Rearrange Coulomb's Law to solve for $r$: $r = \\sqrt{\\frac{k|q_1 q_2|}{F}}$.",
        firstStep: "Isolate $r^2$: $r^2 = \\frac{k|q_1 q_2|}{F}$, then take the square root.",
        fullSolution: `**GIVEN:**
* $q_1 = +25.0\\text{ nC} = 25.0 \\times 10^{-9}\\text{ C}$
* $q_2 = -8.0\\text{ nC} = -8.0 \\times 10^{-9}\\text{ C}$
* $F = 1.80 \\times 10^{-3}\\text{ N}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**REQUIRED:**
* Separation distance $r$

**FORMULA:**
$$r = \\sqrt{\\frac{k|q_1 q_2|}{F}}$$

**SUBSTITUTION:**
$$r = \\sqrt{\\frac{(8.99 \\times 10^9)(25.0 \\times 10^{-9})(8.0 \\times 10^{-9})}{1.80 \\times 10^{-3}}}$$

**COMPUTATION:**
$$r = \\sqrt{\\frac{1.798 \\times 10^{-6}}{1.80 \\times 10^{-3}}} = \\sqrt{9.9889 \\times 10^{-4}} \\approx 0.0316\\text{ m} = 3.16\\text{ cm}$$

**ANSWER:**
$$r = 0.0316\\text{ m} \\text{ (or } 3.16\\text{ cm)}$$`,
        finalAnswer: "0.0316 m (3.16 cm)"
      },
      {
        id: "p1-3",
        level: "Level 3 — Engineering Problem",
        prompt: "In an electrostatic particulate filter, two identical dust particles each carrying charge $Q$ repel each other with a force of $4.50 \\times 10^{-4}\\text{ N}$ when separated by $15.0\\text{ mm}$. Calculate the charge $Q$ on each particle, and how many excess electrons this charge represents.",
        hint: "Because $q_1 = q_2 = Q$, $F = kQ^2/r^2$. Remember to convert $15.0\\text{ mm} = 0.015\\text{ m}$ and use $n = Q/e$.",
        firstStep: "Solve for $Q$: $Q = \\sqrt{\\frac{F r^2}{k}}$. Then $n = Q / (1.602 \\times 10^{-19}\\text{ C})$.",
        fullSolution: `**GIVEN:**
* $F = 4.50 \\times 10^{-4}\\text{ N}$
* $r = 15.0\\text{ mm} = 0.0150\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$
* $e = 1.602 \\times 10^{-19}\\text{ C}$

**REQUIRED:**
* Charge $Q$ on each particle
* Number of excess electrons $n$

**FORMULA:**
$$Q = r\\sqrt{\\frac{F}{k}}, \\quad n = \\frac{Q}{e}$$

**SUBSTITUTION:**
$$Q = 0.0150 \\times \\sqrt{\\frac{4.50 \\times 10^{-4}}{8.99 \\times 10^9}}$$

**COMPUTATION:**
$$\\frac{F}{k} = \\frac{4.50 \\times 10^{-4}}{8.99 \\times 10^9} = 5.0055 \\times 10^{-14}\\text{ C}^2/\\text{m}^2$$
$$\\sqrt{5.0055 \\times 10^{-14}} = 2.2373 \\times 10^{-7}\\text{ C/m}$$
$$Q = 0.0150 \\times 2.2373 \\times 10^{-7} = 3.356 \\times 10^{-9}\\text{ C} = 3.36\\text{ nC}$$
$$n = \\frac{3.356 \\times 10^{-9}}{1.602 \\times 10^{-19}} \\approx 2.095 \\times 10^{10}\\text{ electrons}$$

**ANSWER:**
$$Q = 3.36\\text{ nC}, \\quad n = 2.10 \\times 10^{10}\\text{ electrons}$$`,
        finalAnswer: "Q = 3.36 nC, n = 2.10 × 10¹⁰ electrons"
      },
      {
        id: "p1-4",
        level: "Challenge",
        prompt: "Three collinear point charges are placed on the x-axis: $q_A = +6.0\\;\\mu\\text{C}$ at $x = 0$, $q_B = -3.0\\;\\mu\\text{C}$ at $x = 0.20\\text{ m}$, and $q_C = +8.0\\;\\mu\\text{C}$ at $x = 0.60\\text{ m}$. Determine the magnitude and direction of the net electrostatic force acting on the middle charge $q_B$.",
        hint: "Find force $F_{AB}$ (acting toward $q_A$, so $-x$) and force $F_{CB}$ (acting toward $q_C$, so $+x$). The net force is the vector sum.",
        firstStep: "Calculate distances: $r_{AB} = 0.20\\text{ m}$, $r_{BC} = 0.60 - 0.20 = 0.40\\text{ m}$.",
        fullSolution: `**GIVEN:**
* $q_A = +6.0\\;\\mu\\text{C}$ at $x_A = 0\\text{ m}$
* $q_B = -3.0\\;\\mu\\text{C}$ at $x_B = 0.20\\text{ m}$
* $q_C = +8.0\\;\\mu\\text{C}$ at $x_C = 0.60\\text{ m}$
* $r_{AB} = |0.20 - 0| = 0.20\\text{ m}$
* $r_{BC} = |0.60 - 0.20| = 0.40\\text{ m}$

**REQUIRED:**
* Net electrostatic force on $q_B$: $\\vec{F}_{\\text{net}, B}$

**FORCE FROM $q_A$ ON $q_B$:**
Since $q_A > 0$ and $q_B < 0$, $q_A$ attracts $q_B$ to the left ($-x$ direction):
$$F_{AB} = \\frac{(8.99 \\times 10^9)(6.0 \\times 10^{-6})(3.0 \\times 10^{-6})}{(0.20)^2} = \\frac{0.16182}{0.040} = 4.0455\\text{ N} \\quad (-\\hat{i})$$

**FORCE FROM $q_C$ ON $q_B$:**
Since $q_C > 0$ and $q_B < 0$, $q_C$ attracts $q_B$ to the right ($+x$ direction):
$$F_{CB} = \\frac{(8.99 \\times 10^9)(8.0 \\times 10^{-6})(3.0 \\times 10^{-6})}{(0.40)^2} = \\frac{0.21576}{0.160} = 1.3485\\text{ N} \\quad (+\\hat{i})$$

**NET FORCE ON $q_B$:**
$$F_{\\text{net}, x} = F_{CB} - F_{AB} = +1.3485\\text{ N} - 4.0455\\text{ N} = -2.697\\text{ N}$$

**ANSWER:**
$$|\\vec{F}_{\\text{net}}| = 2.70\\text{ N} \\text{ directed toward the left (toward } q_A \\text{ or in the } -x \\text{ direction)}$$`,
        finalAnswer: "2.70 N to the left (-x direction)"
      }
    ]
  },
  {
    id: "electric-field",
    number: "02",
    title: "Electric Field & Superposition",
    category: "Electrostatics",
    shortDesc: "Point charge field, field intensity, vector nature, radially outward/inward, superposition.",
    concept: `The electric field $\\vec{E}$ at any point in space is defined as the electrostatic force experienced per unit positive test charge placed at that point: $\\vec{E} = \\frac{\\vec{F}}{q_0}$.

For an isolated point charge $Q$ at distance $r$:
$$E = \\frac{k|Q|}{r^2}$$

**Direction of the Electric Field:**
* Positive point charge ($Q > 0$): Field lines radiate **radially outward**.
* Negative point charge ($Q < 0$): Field lines point **radially inward**.

**Principle of Superposition:**
The net electric field produced by multiple point charges is the vector sum of the individual fields:
$$\\vec{E}_{\\text{net}} = \\sum_{i} \\vec{E}_i = \\vec{E}_1 + \\vec{E}_2 + \\dots$$
Always draw the individual vectors and resolve them into components ($E_x, E_y$) before adding!`,
    engineeringContext: `**Electrostatic Precipitators in Power Plants:**
Industrial power generation plants pass coal fly-ash exhaust through corona discharge wires where intense electric fields ($E > 10^5\\text{ N/C}$) ionize gas molecules. The charged smoke particles are then driven by the electric field toward grounded collector plates, removing 99.8% of hazardous particulate emissions.`,
    formulaLatex: `E = \\frac{k|Q|}{r^2}, \\quad \\vec{E}_{\\text{net}} = \\sum \\vec{E}_i`,
    variables: [
      { symbol: "E", name: "Electric Field Intensity", unit: "N/C or V/m", desc: "Magnitude of the electric field at a distance r" },
      { symbol: "k", name: "Coulomb's Constant", unit: "N·m²/C²", desc: "8.99 × 10⁹ N·m²/C²" },
      { symbol: "Q", name: "Source Charge", unit: "C (Coulombs)", desc: "Charge generating the electric field" },
      { symbol: "r", name: "Distance to point", unit: "m (meters)", desc: "Distance from source charge to observation point" }
    ],
    whenToUse: `Use when finding the field generated by one or more point charges in space. Note that electric field is a vector and has SI units of Newtons per Coulomb (N/C), which is identically equal to Volts per meter (V/m).`,
    workedExample: {
      title: "Field Produced by an Industrial High-Voltage Terminal",
      scenario: "A spherical high-voltage electrode carries a charge of $Q = -7.00\\;\\mu\\text{C}$. Calculate the electric field intensity at an observation point $P$ located $0.50\\text{ m}$ away, and state its direction.",
      given: [
        "Q = -7.00\\;\\mu\\text{C} = -7.00 \\times 10^{-6}\\text{ C}",
        "r = 0.50\\text{ m}",
        "k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2"
      ],
      required: "Electric field magnitude $E$ and direction at point $P$",
      formula: "E = \\frac{k|Q|}{r^2}",
      substitution: "E = \\frac{(8.99 \\times 10^9)|-7.00 \\times 10^{-6}|}{(0.50)^2}",
      computation: "E = \\frac{62930}{0.25} = 251720\\text{ N/C} \\approx 2.52 \\times 10^5\\text{ N/C}",
      answer: "E = 2.52 \\times 10^5\\text{ N/C} \\text{ (Directed radially inward toward the negative charge)}",
      interpretation: "Because the source charge is negative, a positive test charge placed at P would be attracted toward Q, meaning the field vector points directly toward Q."
    },
    commonMistakes: [
      "Adding electric field vectors as simple scalar numbers without considering their spatial directions.",
      "Saying the field of a negative charge points outward (electric field ALWAYS points AWAY from positive and TOWARD negative).",
      "Confusing field $E$ ($kQ/r^2$) with potential $V$ ($kQ/r$). Field is a vector; potential is a scalar."
    ],
    quickCheck: {
      question: "At a point $P$ located due East of a negative point charge $-Q$, what is the direction of the electric field vector?",
      options: [
        "Due East (pointing away from -Q)",
        "Due West (pointing toward -Q)",
        "Due North",
        "Zero everywhere"
      ],
      correctIndex: 1,
      explanation: "Electric fields point TOWARD negative charges. Since $-Q$ is to the West of $P$, the field vector at $P$ points Due West toward the charge."
    },
    practiceProblems: [
      {
        id: "p2-1",
        level: "Level 1 — Foundation",
        prompt: "Determine the electric field magnitude at a distance of $0.40\\text{ m}$ from an isolated point charge $Q = +8.0\\;\\mu\\text{C}$.",
        hint: "Apply $E = k|Q|/r^2$ with $Q = 8.0 \\times 10^{-6}\\text{ C}$ and $r = 0.40\\text{ m}$.",
        firstStep: "Compute $r^2 = 0.16\\text{ m}^2$ and substitute into the point-charge field equation.",
        fullSolution: `**GIVEN:**
* $Q = +8.0\\;\\mu\\text{C} = 8.0 \\times 10^{-6}\\text{ C}$
* $r = 0.40\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**REQUIRED:**
* Electric field intensity $E$

**FORMULA:**
$$E = \\frac{k|Q|}{r^2}$$

**SUBSTITUTION & COMPUTATION:**
$$E = \\frac{(8.99 \\times 10^9)(8.0 \\times 10^{-6})}{(0.40)^2} = \\frac{71920}{0.16} = 4.495 \\times 10^5\\text{ N/C} \\approx 4.50 \\times 10^5\\text{ N/C}$$

**ANSWER:**
$$E = 4.50 \\times 10^5\\text{ N/C} \\text{ (Radially outward)}$$`,
        finalAnswer: "4.50 × 10⁵ N/C (radially outward)"
      },
      {
        id: "p2-2",
        level: "Level 2 — Application",
        prompt: "At what distance from a point charge of $+12.0\\text{ nC}$ is the electric field intensity equal to $3.00 \\times 10^4\\text{ N/C}$?",
        hint: "Rearrange for $r$: $r = \\sqrt{\\frac{k|Q|}{E}}$.",
        firstStep: "Convert $12.0\\text{ nC} = 12.0 \\times 10^{-9}\\text{ C}$.",
        fullSolution: `**GIVEN:**
* $Q = +12.0\\text{ nC} = 12.0 \\times 10^{-9}\\text{ C}$
* $E = 3.00 \\times 10^4\\text{ N/C}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**FORMULA:**
$$r = \\sqrt{\\frac{k|Q|}{E}}$$

**SUBSTITUTION & COMPUTATION:**
$$r = \\sqrt{\\frac{(8.99 \\times 10^9)(12.0 \\times 10^{-9})}{3.00 \\times 10^4}} = \\sqrt{\\frac{107.88}{3.00 \\times 10^4}} = \\sqrt{0.003596} \\approx 0.05997\\text{ m} = 6.00\\text{ cm}$$

**ANSWER:**
$$r = 0.060\\text{ m} \\text{ (or } 6.0\\text{ cm)}$$`,
        finalAnswer: "0.060 m (6.0 cm)"
      },
      {
        id: "p2-3",
        level: "Level 3 — Engineering Problem",
        prompt: "Two point charges $Q_1 = +4.0\\;\\mu\\text{C}$ and $Q_2 = -4.0\\;\\mu\\text{C}$ form an electric dipole separated by $0.20\\text{ m}$ along the x-axis ($Q_1$ at $x = -0.10\\text{ m}$, $Q_2$ at $x = +0.10\\text{ m}$). Find the net electric field vector at the origin $(0, 0)$.",
        hint: "Find field from $Q_1$ at origin (points right) and field from $Q_2$ at origin (also points right toward negative charge!). Add them.",
        firstStep: "Both fields point in the $+x$ direction at the midpoint, so their magnitudes add directly: $E_{\\text{net}} = E_1 + E_2$.",
        fullSolution: `**GIVEN:**
* $Q_1 = +4.0\\;\\mu\\text{C}$ at $x_1 = -0.10\\text{ m}$
* $Q_2 = -4.0\\;\\mu\\text{C}$ at $x_2 = +0.10\\text{ m}$
* Observation point at $x = 0$
* Distance from $Q_1$ to origin: $r_1 = 0.10\\text{ m}$
* Distance from $Q_2$ to origin: $r_2 = 0.10\\text{ m}$

**DIRECTION ANALYSIS:**
* Field $\\vec{E}_1$ from positive $Q_1$ points AWAY from $Q_1$ $\\to$ directed to the right ($+x$ direction).
* Field $\\vec{E}_2$ from negative $Q_2$ points TOWARD $Q_2$ $\\to$ also directed to the right ($+x$ direction).
* Because both point along $+\\hat{i}$, the net field is $E_{\\text{net}} = E_1 + E_2$.

**MAGNITUDES:**
$$E_1 = \\frac{k|Q_1|}{r_1^2} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})}{(0.10)^2} = \\frac{0.03596}{0.010} = 3.596 \\times 10^6\\text{ N/C}$$
$$E_2 = \\frac{k|Q_2|}{r_2^2} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})}{(0.10)^2} = 3.596 \\times 10^6\\text{ N/C}$$

**NET ELECTRIC FIELD:**
$$E_{\\text{net}} = 3.596 \\times 10^6 + 3.596 \\times 10^6 = 7.192 \\times 10^6\\text{ N/C}$$

**ANSWER:**
$$\\vec{E}_{\\text{net}} = 7.19 \\times 10^6\\text{ N/C} \\quad (+\\hat{i}, \\text{ toward the positive } x \\text{ axis})$$`,
        finalAnswer: "7.19 × 10⁶ N/C in the +x direction"
      },
      {
        id: "p2-4",
        level: "Challenge",
        prompt: "Two point charges $Q_1 = +4.0\\;\\mu\\text{C}$ and $Q_2 = +7.0\\;\\mu\\text{C}$ are placed on the x-axis at $x = -0.15\\text{ m}$ and $x = +0.15\\text{ m}$, respectively. Determine the magnitude and direction of the net electric field at point $P$ on the y-axis at $y = +0.20\\text{ m}$.",
        hint: "Calculate distance $r = \\sqrt{(0.15)^2 + (0.20)^2} = 0.25\\text{ m}$. Resolve both field vectors into $x$ and $y$ components and sum.",
        firstStep: "Geometry gives $r = 0.25\\text{ m}$, $\\cos\\theta = 0.15/0.25 = 0.60$, $\\sin\\theta = 0.20/0.25 = 0.80$.",
        fullSolution: `**GIVEN:**
* $Q_1 = +4.0\\;\\mu\\text{C}$ at $(-0.15, 0)\\text{ m}$
* $Q_2 = +7.0\\;\\mu\\text{C}$ at $(+0.15, 0)\\text{ m}$
* Observation point $P$ at $(0, 0.20)\\text{ m}$
* Distance to both charges: $r = \\sqrt{(0.15)^2 + (0.20)^2} = \\sqrt{0.0225 + 0.0400} = 0.25\\text{ m}$
* Direction angles: $\\cos\\theta = 0.15 / 0.25 = 0.60$, $\\sin\\theta = 0.20 / 0.25 = 0.80$

**FIELD MAGNITUDES:**
$$E_1 = \\frac{k Q_1}{r^2} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})}{(0.25)^2} = \\frac{35960}{0.0625} = 5.7536 \\times 10^5\\text{ N/C}$$
$$E_2 = \\frac{k Q_2}{r^2} = \\frac{(8.99 \\times 10^9)(7.0 \\times 10^{-6})}{(0.25)^2} = \\frac{62930}{0.0625} = 1.0069 \\times 10^6\\text{ N/C}$$

**VECTOR COMPONENTS:**
* For $Q_1$ (located on left, pointing up and to the right):
  $$E_{1x} = +E_1 \\cos\\theta = +(5.7536 \\times 10^5)(0.60) = +3.452 \\times 10^5\\text{ N/C}$$
  $$E_{1y} = +E_1 \\sin\\theta = +(5.7536 \\times 10^5)(0.80) = +4.603 \\times 10^5\\text{ N/C}$$
* For $Q_2$ (located on right, pointing up and to the left):
  $$E_{2x} = -E_2 \\cos\\theta = -(1.0069 \\times 10^6)(0.60) = -6.041 \\times 10^5\\text{ N/C}$$
  $$E_{2y} = +E_2 \\sin\\theta = +(1.0069 \\times 10^6)(0.80) = +8.055 \\times 10^5\\text{ N/C}$$

**SUMMING COMPONENTS:**
$$E_{\\text{net}, x} = +3.452 \\times 10^5 - 6.041 \\times 10^5 = -2.589 \\times 10^5\\text{ N/C}$$
$$E_{\\text{net}, y} = +4.603 \\times 10^5 + 8.055 \\times 10^5 = +1.2658 \\times 10^6\\text{ N/C}$$

**RESULTANT MAGNITUDE:**
$$E_{\\text{net}} = \\sqrt{(-2.589 \\times 10^5)^2 + (1.2658 \\times 10^6)^2} \\approx 1.292 \\times 10^6\\text{ N/C}$$

**ANSWER:**
$$E_{\\text{net}} \\approx 1.29 \\times 10^6\\text{ N/C}, \\quad \\vec{E}_{\\text{net}} = (-2.59\\hat{i} + 12.66\\hat{j}) \\times 10^5\\text{ N/C}$$`,
        finalAnswer: "E_net ≈ 1.29 × 10⁶ N/C (-2.59i + 12.66j × 10⁵ N/C)"
      }
    ]
  },
  {
    id: "force-and-acceleration",
    number: "03",
    title: "Force & Acceleration in an Electric Field",
    category: "Electrostatics",
    shortDesc: "F = qE, Newton's 2nd law a = qE/m, electron vs proton motion.",
    concept: `When a particle of charge $q$ is placed in an electric field $\\vec{E}$, it experiences an electrostatic force:
$$\\vec{F} = q\\vec{E}$$

**Force Direction:**
* For a **positive charge** ($q > 0$): $\\vec{F}$ is in the **same direction** as $\\vec{E}$.
* For a **negative charge** ($q < 0$, such as an electron): $\\vec{F}$ is in the **opposite direction** to $\\vec{E}$.

By Newton's second law (neglecting gravity when electric forces dominate):
$$\\vec{a} = \\frac{\\vec{F}}{m} = \\frac{q\\vec{E}}{m}$$

Because electrons have very small mass ($m_e = 9.11 \\times 10^{-31}\\text{ kg}$), even moderate electric fields produce enormous accelerations ($a > 10^{14}\\text{ m/s}^2$).`,
    engineeringContext: `**Cathode Ray Tubes (CRT) & Electron Beam Welding:**
In electron beam welding and legacy oscilloscopes, an electrostatic electron gun accelerates electrons between charged plates. A potential difference produces an electric field $E$, propelling electrons to speeds of $10^7\\text{ m/s}$ to melt precision titanium and aerospace alloys with zero mechanical contact.`,
    formulaLatex: `\\vec{F} = q\\vec{E}, \\quad a = \\frac{|q|E}{m}`,
    variables: [
      { symbol: "F", name: "Electric Force", unit: "N (Newtons)", desc: "Electrostatic force exerted on the charge" },
      { symbol: "q", name: "Charge", unit: "C (Coulombs)", desc: "Charge of the particle (e = 1.602 × 10⁻¹⁹ C)" },
      { symbol: "E", name: "Electric Field", unit: "N/C", desc: "Uniform electric field strength" },
      { symbol: "m", name: "Mass", unit: "kg", desc: "Mass of the particle (m_e = 9.11 × 10⁻³¹ kg, m_p = 1.67 × 10⁻²⁷ kg)" },
      { symbol: "a", name: "Acceleration", unit: "m/s²", desc: "Acceleration produced on the particle" }
    ],
    whenToUse: `Use when a charged particle moves through an external electric field. Check if the charge is negative (e.g. an electron) to ensure the acceleration direction is drawn opposite to the field vector.`,
    workedExample: {
      title: "Acceleration of a Micro-Ion in an Electrostatic Deflector",
      scenario: "A micro-ion with charge $q = -3.0\\text{ nC}$ and mass $m = 2.0 \\times 10^{-6}\\text{ kg}$ enters a uniform electric field directed vertically upward with magnitude $E = 2.0 \\times 10^4\\text{ N/C}$. Determine the magnitude and direction of the force and resulting acceleration.",
      given: [
        "q = -3.0\\text{ nC} = -3.0 \\times 10^{-9}\\text{ C}",
        "m = 2.0 \\times 10^{-6}\\text{ kg}",
        "E = 2.0 \\times 10^4\\text{ N/C} \\text{ (directed upward)}"
      ],
      required: "Force magnitude $F$, force direction, and acceleration magnitude $a$",
      formula: "F = |q|E, \\quad a = \\frac{F}{m}",
      substitution: "F = (3.0 \\times 10^{-9})(2.0 \\times 10^4), \\quad a = \\frac{6.0 \\times 10^{-5}}{2.0 \\times 10^{-6}}",
      computation: "F = 6.0 \\times 10^{-5}\\text{ N}, \\quad a = 30\\text{ m/s}^2",
      answer: "F = 6.0 \\times 10^{-5}\\text{ N} \\text{ (directed downward)}, \\quad a = 30\\text{ m/s}^2 \\text{ (directed downward)}",
      interpretation: "Because the charge is negative, the electrostatic force and acceleration point downward, directly opposite to the upward electric field."
    },
    commonMistakes: [
      "Assuming all charges accelerate in the direction of the field. Negative charges (like electrons) accelerate opposite to the field!",
      "Forgetting to convert grams or micrograms to kilograms ($1\\text{ g} = 10^{-3}\\text{ kg}$, $1\\;\\mu\\text{g} = 10^{-9}\\text{ kg}$).",
      "Confusing elementary charge $e = 1.602 \\times 10^{-19}\\text{ C}$ with electron mass $m_e = 9.11 \\times 10^{-31}\\text{ kg}$."
    ],
    quickCheck: {
      question: "An electron is released from rest in a uniform electric field pointing horizontally to the East. In which direction does the electron accelerate?",
      options: [
        "To the East (with the field)",
        "To the West (opposite the field)",
        "Vertically upward",
        "It experiences zero force"
      ],
      correctIndex: 1,
      explanation: "An electron carries negative charge ($-e$). Since $\\vec{F} = q\\vec{E}$ and $q < 0$, $\\vec{F}$ points opposite to $\\vec{E}$, which is to the West."
    },
    practiceProblems: [
      {
        id: "p3-1",
        level: "Level 1 — Foundation",
        prompt: "A charge $q = -3.0\\text{ nC}$ is placed in a uniform electric field of magnitude $4.0 \\times 10^4\\text{ N/C}$. Find the magnitude of the force exerted on the charge.",
        hint: "Use $F = |q|E$ with $q = 3.0 \\times 10^{-9}\\text{ C}$.",
        firstStep: "Substitute into $F = |q|E$.",
        fullSolution: `**GIVEN:**
* $q = -3.0\\text{ nC} = -3.0 \\times 10^{-9}\\text{ C}$
* $E = 4.0 \\times 10^4\\text{ N/C}$

**REQUIRED:**
* Force magnitude $F$

**FORMULA:**
$$F = |q|E$$

**COMPUTATION:**
$$F = (3.0 \\times 10^{-9}\\text{ C})(4.0 \\times 10^4\\text{ N/C}) = 1.20 \\times 10^{-4}\\text{ N}$$

**ANSWER:**
$$F = 1.20 \\times 10^{-4}\\text{ N}$$`,
        finalAnswer: "1.20 × 10⁻⁴ N"
      },
      {
        id: "p3-2",
        level: "Level 2 — Application",
        prompt: "A charged particle with charge $q = 2.0 \\times 10^{-9}\\text{ C}$ and mass $m = 5.0 \\times 10^{-8}\\text{ kg}$ is exposed to a uniform electric field of $3.0 \\times 10^4\\text{ N/C}$. Find the magnitude of its acceleration.",
        hint: "First find $F = qE$, then find $a = F/m$.",
        firstStep: "Calculate force $F = (2.0 \\times 10^{-9})(3.0 \\times 10^4) = 6.0 \\times 10^{-5}\\text{ N}$.",
        fullSolution: `**GIVEN:**
* $q = 2.0 \\times 10^{-9}\\text{ C}$
* $m = 5.0 \\times 10^{-8}\\text{ kg}$
* $E = 3.0 \\times 10^4\\text{ N/C}$

**FORMULA:**
$$a = \\frac{qE}{m}$$

**SUBSTITUTION & COMPUTATION:**
$$a = \\frac{(2.0 \\times 10^{-9}\\text{ C})(3.0 \\times 10^4\\text{ N/C})}{5.0 \\times 10^{-8}\\text{ kg}} = \\frac{6.0 \\times 10^{-5}\\text{ N}}{5.0 \\times 10^{-8}\\text{ kg}} = 1.20 \\times 10^3\\text{ m/s}^2$$

**ANSWER:**
$$a = 1.20 \\times 10^3\\text{ m/s}^2$$`,
        finalAnswer: "1.20 × 10³ m/s²"
      },
      {
        id: "p3-3",
        level: "Level 3 — Engineering Problem",
        prompt: "An electron ($q = -1.602 \\times 10^{-19}\\text{ C}$, $m = 9.11 \\times 10^{-31}\\text{ kg}$) is accelerated from rest across a $10.0\\text{ mm}$ gap by a uniform electric field $E = 5.00 \\times 10^4\\text{ N/C}$. Calculate its final speed when it reaches the positive plate.",
        hint: "Use kinematics $v^2 = v_0^2 + 2ad$ with $a = eE/m$ and $v_0 = 0$.",
        firstStep: "Calculate acceleration $a = \\frac{(1.602 \\times 10^{-19})(5.00 \\times 10^4)}{9.11 \\times 10^{-31}} = 8.7925 \\times 10^{15}\\text{ m/s}^2$.",
        fullSolution: `**GIVEN:**
* $q = 1.602 \\times 10^{-19}\\text{ C}$
* $m_e = 9.11 \\times 10^{-31}\\text{ kg}$
* $E = 5.00 \\times 10^4\\text{ N/C}$
* $d = 10.0\\text{ mm} = 0.0100\\text{ m}$
* $v_0 = 0\\text{ m/s}$

**ACCELERATION:**
$$a = \\frac{qE}{m} = \\frac{(1.602 \\times 10^{-19})(5.00 \\times 10^4)}{9.11 \\times 10^{-31}} = 8.793 \\times 10^{15}\\text{ m/s}^2$$

**KINEMATICS:**
$$v^2 = v_0^2 + 2ad = 0 + 2(8.793 \\times 10^{15})(0.0100) = 1.7585 \\times 10^{14}\\text{ m}^2/\\text{s}^2$$
$$v = \\sqrt{1.7585 \\times 10^{14}} \\approx 1.326 \\times 10^7\\text{ m/s}$$

**ANSWER:**
$$v = 1.33 \\times 10^7\\text{ m/s} \\text{ (approximately } 4.4\\% \\text{ the speed of light)}$$`,
        finalAnswer: "1.33 × 10⁷ m/s"
      }
    ]
  },
  {
    id: "electric-potential",
    number: "04",
    title: "Electric Potential (Scalar Voltage)",
    category: "Electric Potential & Energy",
    shortDesc: "Scalar voltage, V = kQ/r, algebraic superposition, electric potential difference.",
    concept: `Electric potential $V$ at a point is the potential energy per unit positive charge: $V = U / q_0$. It represents electric potential difference relative to infinity ($V_\\infty = 0$).

For a point charge $Q$:
$$V = \\frac{kQ}{r}$$

**CRITICAL DISTINCTION — SCALAR vs. VECTOR:**
* Electric Field $\\vec{E}$ is a **VECTOR** (requires magnitude, direction, components $\\hat{i}, \\hat{j}$).
* Electric Potential $V$ is a **SCALAR** (measured in Volts, $\\text{V} = \\text{J/C}$).

Because potential is a scalar, contributions from multiple charges are summed **algebraically** with their signs:
$$V_{\\text{total}} = \\sum_{i} \\frac{k Q_i}{r_i} = k \\left( \\frac{Q_1}{r_1} + \\frac{Q_2}{r_2} + \\dots \\right)$$
**Never resolve potential into components!**`,
    engineeringContext: `**High-Voltage Power Substations & Corona Prevention:**
In electrical power distribution grids, substations operate at hundreds of kilovolts ($500\\text{ kV}$). Engineers compute electric potentials around conductors to design insulating bushings and corona rings, preventing dielectric breakdown of ambient air ($E_{\\text{breakdown}} \\approx 3 \\times 10^6\\text{ V/m}$).`,
    formulaLatex: `V = \\frac{kQ}{r}, \\quad V_{\\text{total}} = \\sum \\frac{kQ_i}{r_i}`,
    variables: [
      { symbol: "V", name: "Electric Potential", unit: "V (Volts = J/C)", desc: "Scalar electric potential" },
      { symbol: "k", name: "Coulomb's Constant", unit: "N·m²/C²", desc: "8.99 × 10⁹ N·m²/C²" },
      { symbol: "Q", name: "Source Charge", unit: "C (Coulombs)", desc: "Include positive or negative algebraic sign!" },
      { symbol: "r", name: "Distance", unit: "m (meters)", desc: "Distance from charge to observation point" }
    ],
    whenToUse: `Use whenever calculating voltage or scalar electric potential from one or more charges. Always preserve the sign of $Q$ ($+Q$ produces positive potential, $-Q$ produces negative potential).`,
    workedExample: {
      title: "Potential at a Sensor Node from Two Charges",
      scenario: "A charge $Q_1 = +9.0\\text{ nC}$ is located at $x = -0.45\\text{ m}$, and a second charge $Q_2 = -6.0\\text{ nC}$ is at $x = +0.30\\text{ m}$. Find the total electric potential at the origin $(0, 0)$.",
      given: [
        "Q_1 = +9.0\\text{ nC} = +9.0 \\times 10^{-9}\\text{ C}, \\quad r_1 = 0.45\\text{ m}",
        "Q_2 = -6.0\\text{ nC} = -6.0 \\times 10^{-9}\\text{ C}, \\quad r_2 = 0.30\\text{ m}",
        "k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2"
      ],
      required: "Total electric potential $V_{\\text{total}}$ at the origin",
      formula: "V_{\\text{total}} = V_1 + V_2 = \\frac{kQ_1}{r_1} + \\frac{kQ_2}{r_2}",
      substitution: "V_1 = \\frac{(8.99 \\times 10^9)(9.0 \\times 10^{-9})}{0.45}, \\quad V_2 = \\frac{(8.99 \\times 10^9)(-6.0 \\times 10^{-9})}{0.30}",
      computation: "V_1 = \\frac{80.91}{0.45} = +179.8\\text{ V}, \\quad V_2 = \\frac{-53.94}{0.30} = -179.8\\text{ V}, \\quad V_{\\text{total}} = +179.8 + (-179.8) = 0\\text{ V}",
      answer: "V_{\\text{total}} = 0\\text{ V}",
      interpretation: "The positive potential from Q1 exactly cancels the negative potential from Q2 at the origin. Notice that while V = 0, the electric field vector E at the origin is NOT zero because both fields point in the +x direction!"
    },
    commonMistakes: [
      "Treating electric potential as a vector and trying to resolve it with sine and cosine.",
      "Taking the absolute value of the charge in $V = kQ/r$. Potential can be negative! Negative charges produce negative potential.",
      "Assuming that wherever $V = 0$, the electric field $\\vec{E}$ must also be zero (at the center of an electric dipole, $V = 0$ but $\\vec{E} \\neq 0$)."
    ],
    quickCheck: {
      question: "Which of the following statements is true regarding electric potential?",
      options: [
        "Electric potential is a vector measured in N/C.",
        "Electric potential is a scalar measured in Volts (J/C).",
        "Electric potential is always positive.",
        "Electric potential depends on the square of the distance (1/r²)."
      ],
      correctIndex: 1,
      explanation: "Electric potential is a scalar quantity measured in Volts ($1\\text{ V} = 1\\text{ J/C}$), and it varies inversely with distance as $1/r$."
    },
    practiceProblems: [
      {
        id: "p4-1",
        level: "Level 1 — Foundation",
        prompt: "A point charge $Q = +9.0\\text{ nC}$ is located $0.45\\text{ m}$ away from point $P$. Determine the electric potential at $P$.",
        hint: "Use $V = kQ/r$ with $Q = 9.0 \\times 10^{-9}\\text{ C}$ and $r = 0.45\\text{ m}$.",
        firstStep: "Substitute into $V = kQ/r$.",
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
        id: "p4-2",
        level: "Level 2 — Application",
        prompt: "Two point charges $Q_1 = +5.0\\text{ nC}$ and $Q_2 = -3.0\\text{ nC}$ are separated by $0.80\\text{ m}$. Find the electric potential at the point exactly halfway between them.",
        hint: "Each charge is $r = 0.40\\text{ m}$ from the midpoint. Add the scalar potentials algebraically.",
        firstStep: "Calculate $V_1 = kQ_1/r$ and $V_2 = kQ_2/r$, then $V = V_1 + V_2$.",
        fullSolution: `**GIVEN:**
* $Q_1 = +5.0 \\times 10^{-9}\\text{ C}$
* $Q_2 = -3.0 \\times 10^{-9}\\text{ C}$
* Midpoint distance: $r_1 = r_2 = 0.40\\text{ m}$

**FORMULA:**
$$V = \\frac{k}{r}(Q_1 + Q_2)$$

**COMPUTATION:**
$$V = \\frac{8.99 \\times 10^9}{0.40} (5.0 \\times 10^{-9} - 3.0 \\times 10^{-9}) = (2.2475 \\times 10^{10})(2.0 \\times 10^{-9}) = 44.95\\text{ V} \\approx 45.0\\text{ V}$$

**ANSWER:**
$$V = +45.0\\text{ V}$$`,
        finalAnswer: "+45.0 V"
      }
    ]
  },
  {
    id: "work-and-potential-energy",
    number: "05",
    title: "Work & Multi-Charge Potential Energy",
    category: "Electric Potential & Energy",
    shortDesc: "W_field = q(Va - Vb), U = kq1q2/r, multi-charge pairwise summation.",
    concept: `When a charge $q$ moves from point $a$ to point $b$ in an electric field, the **work done by the electric field** is:
$$W_{\\text{field}} = q(V_a - V_b) = -q\\Delta V$$
where $\\Delta V = V_b - V_a$ is the potential difference.

**CRITICAL SIGN RULE:**
* Work done **BY the electric field**: $W_{\\text{field}} = q(V_a - V_b)$
* Work done by an **external agent** to move the charge without acceleration: $W_{\\text{ext}} = q(V_b - V_a) = +q\\Delta V$
* The change in electric potential energy is $\\Delta U = -W_{\\text{field}} = q(V_b - V_a)$.

**Potential Energy of Two Point Charges:**
$$U = \\frac{k q_1 q_2}{r}$$
* If charges have the same sign ($++$ or $--$), $U > 0$ (energy stored in repulsion).
* If charges have opposite signs ($+-$), $U < 0$ (bound system, energy must be added to separate them).

**Multi-Charge Systems:**
To assemble a system of 3 or more charges, sum the pairwise interaction energies for all unique pairs:
$$U_{\\text{total}} = U_{12} + U_{13} + U_{23} = \\frac{k q_1 q_2}{r_{12}} + \\frac{k q_1 q_3}{r_{13}} + \\frac{k q_2 q_3}{r_{23}}$$`,
    engineeringContext: `**Particle Accelerator Beam Ingot & Deflection Energy:**
In semiconductor ion implantation, silicon wafers are bombarded with boron or arsenic ions. The ion accelerator applies an electric potential difference $\\Delta V = 80\\text{ kV}$. The work done by the field $W = q(V_a - V_b)$ converts directly into ion kinetic energy $\\frac{1}{2}mv^2$, embedding dopant atoms at precise sub-micron depths.`,
    formulaLatex: `W_{\\text{field}} = q(V_a - V_b), \\quad U = \\frac{k q_1 q_2}{r}, \\quad U_{\\text{total}} = \\sum_{i < j} \\frac{k q_i q_j}{r_{ij}}`,
    variables: [
      { symbol: "W_field", name: "Work by Electric Field", unit: "J (Joules)", desc: "Work performed by the field on charge q" },
      { symbol: "q", name: "Moving Charge", unit: "C (Coulombs)", desc: "Charge being transported" },
      { symbol: "V_a, V_b", name: "Potentials at a and b", unit: "V (Volts)", desc: "Initial and final electric potentials" },
      { symbol: "U", name: "Potential Energy", unit: "J (Joules)", desc: "Electrostatic potential energy of charge pairs" },
      { symbol: "r_ij", name: "Pairwise Distance", unit: "m (meters)", desc: "Distance between charge i and charge j" }
    ],
    whenToUse: `Use $W = q(V_a - V_b)$ for field work, and pairwise summation for total electrostatic energy of a cluster of point charges. Always include positive and negative signs of the charges.`,
    workedExample: {
      title: "Total Electrostatic Energy of a 3-Charge Linear Assembly",
      scenario: "Three point charges are positioned on a line: $q_1 = +2.0\\text{ nC}$ at $x = 0$, $q_2 = -4.0\\text{ nC}$ at $x = 0.12\\text{ m}$, and $q_3 = +3.0\\text{ nC}$ at $x = 0.30\\text{ m}$. Calculate the total electrostatic potential energy of this system.",
      given: [
        "q_1 = +2.0 \\times 10^{-9}\\text{ C}, \\quad q_2 = -4.0 \\times 10^{-9}\\text{ C}, \\quad q_3 = +3.0 \\times 10^{-9}\\text{ C}",
        "r_{12} = 0.12\\text{ m}",
        "r_{23} = 0.30 - 0.12 = 0.18\\text{ m}",
        "r_{13} = 0.30\\text{ m}",
        "k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2"
      ],
      required: "Total potential energy $U_{\\text{total}} = U_{12} + U_{23} + U_{13}$",
      formula: "U_{\\text{total}} = k \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_2 q_3}{r_{23}} + \\frac{q_1 q_3}{r_{13}} \\right)",
      substitution: "U_{12} = \\frac{(8.99 \\times 10^9)(2 \\times 10^{-9})(-4 \\times 10^{-9})}{0.12}, \\; U_{23} = \\frac{(8.99 \\times 10^9)(-4 \\times 10^{-9})(3 \\times 10^{-9})}{0.18}, \\; U_{13} = \\frac{(8.99 \\times 10^9)(2 \\times 10^{-9})(3 \\times 10^{-9})}{0.30}",
      computation: "U_{12} = \\frac{-7.192 \\times 10^{-8}}{0.12} = -5.993 \\times 10^{-7}\\text{ J}\\nU_{23} = \\frac{-1.0788 \\times 10^{-7}}{0.18} = -5.993 \\times 10^{-7}\\text{ J}\\nU_{13} = \\frac{5.394 \\times 10^{-8}}{0.30} = +1.798 \\times 10^{-7}\\text{ J}\\nU_{\\text{total}} = (-5.993 - 5.993 + 1.798) \\times 10^{-7} = -1.0188 \\times 10^{-6}\\text{ J}",
      answer: "U_{\\text{total}} \\approx -1.02 \\times 10^{-6}\\text{ J}",
      interpretation: "Because the total potential energy is negative, the system is bound: it would require +1.02 μJ of external work to separate these three charges to infinite distance."
    },
    commonMistakes: [
      "Using $W = q(V_b - V_a)$ for work done BY the electric field. The field does positive work when a positive charge moves from HIGH to LOW potential ($V_a - V_b$).",
      "Missing the third interaction pair ($U_{13}$) in a 3-charge system. For 3 charges, there are always $\\frac{3 \\times 2}{2} = 3$ pairs.",
      "Dropping negative signs: $(-4\\text{ nC}) \\times (+2\\text{ nC})$ is negative energy."
    ],
    quickCheck: {
      question: "A positive charge $q = +5.0\\text{ nC}$ moves from an equipotential surface at $V_a = 100\\text{ V}$ to $V_b = 40\\text{ V}$. What is the work done BY the electric field?",
      options: [
        "-3.0 × 10⁻⁷ J",
        "+3.0 × 10⁻⁷ J",
        "+7.0 × 10⁻⁷ J",
        "-7.0 × 10⁻⁷ J"
      ],
      correctIndex: 1,
      explanation: "Work done by the electric field is $W = q(V_a - V_b) = (5.0 \\times 10^{-9}\\text{ C})(100\\text{ V} - 40\\text{ V}) = +3.0 \\times 10^{-7}\\text{ J}$."
    },
    practiceProblems: [
      {
        id: "p5-1",
        level: "Level 1 — Foundation",
        prompt: "A $5.0\\text{ nC}$ charge moves from point $a$ with potential $V_a = 100\\text{ V}$ to point $b$ with $V_b = 40\\text{ V}$. Calculate the work done by the electric field.",
        hint: "Use $W_{\\text{field}} = q(V_a - V_b)$.",
        firstStep: "Calculate potential difference: $V_a - V_b = 100 - 40 = 60\\text{ V}$.",
        fullSolution: `**GIVEN:**
* $q = 5.0\\text{ nC} = 5.0 \\times 10^{-9}\\text{ C}$
* $V_a = 100\\text{ V}$
* $V_b = 40\\text{ V}$

**FORMULA:**
$$W_{\\text{field}} = q(V_a - V_b)$$

**COMPUTATION:**
$$W_{\\text{field}} = (5.0 \\times 10^{-9}\\text{ C})(100\\text{ V} - 40\\text{ V}) = (5.0 \\times 10^{-9})(60) = 3.00 \\times 10^{-7}\\text{ J}$$

**ANSWER:**
$$W_{\\text{field}} = 3.00 \\times 10^{-7}\\text{ J}$$`,
        finalAnswer: "3.00 × 10⁻⁷ J"
      },
      {
        id: "p5-2",
        level: "Level 2 — Application",
        prompt: "Two point charges $q_1 = +4.0\\;\\mu\\text{C}$ and $q_2 = -5.0\\;\\mu\\text{C}$ are separated by $0.80\\text{ m}$. Find their electric potential energy.",
        hint: "Use $U = k q_1 q_2 / r$ with signs included.",
        firstStep: "Notice that $q_1 > 0$ and $q_2 < 0$, so $U$ must be negative.",
        fullSolution: `**GIVEN:**
* $q_1 = +4.0\\;\\mu\\text{C} = 4.0 \\times 10^{-6}\\text{ C}$
* $q_2 = -5.0\\;\\mu\\text{C} = -5.0 \\times 10^{-6}\\text{ C}$
* $r = 0.80\\text{ m}$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**FORMULA:**
$$U = \\frac{k q_1 q_2}{r}$$

**COMPUTATION:**
$$U = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-6})(-5.0 \\times 10^{-6})}{0.80} = \\frac{-0.1798}{0.80} = -0.22475\\text{ J} \\approx -0.225\\text{ J}$$

**ANSWER:**
$$U = -0.225\\text{ J}$$`,
        finalAnswer: "-0.225 J"
      }
    ]
  },
  {
    id: "wave-basics",
    number: "06",
    title: "Wave Fundamentals & Sound Propagation",
    category: "Waves & Acoustics",
    shortDesc: "Wave equation v = fλ, transverse vs longitudinal waves, sound in air.",
    concept: `A wave is a disturbance that transfers energy through space or a medium without transferring physical matter.

**The Fundamental Wave Relationship:**
$$v = f\\lambda$$
where:
* $v$ = wave propagation speed (m/s)
* $f$ = frequency (Hz = 1/s, number of cycles per second)
* $\\lambda$ = wavelength (m, distance between successive crests or compressions)

**Types of Waves:**
1. **Transverse Waves:** Particle displacement is **perpendicular** to the direction of wave propagation (e.g., waves on a guitar string, electromagnetic waves).
2. **Longitudinal Waves:** Particle displacement is **parallel** to the direction of wave propagation.
3. **Sound in Air:** Sound propagating through air is a **longitudinal mechanical wave** consisting of alternating regions of high pressure (**compressions**) and low pressure (**rarefactions**).`,
    engineeringContext: `**Ultrasonic Non-Destructive Testing (NDT) in Pipelines:**
In pipeline and aerospace structural inspection, ultrasonic piezoelectric transducers send high-frequency sound pulses ($f = 5.0\\text{ MHz}$) into steel walls ($v = 5900\\text{ m/s}$). By measuring wave speed and reflections, engineers detect internal microscopic cracks as small as $\\lambda = v/f \\approx 1.18\\text{ mm}$ without damaging the structure.`,
    formulaLatex: `v = f\\lambda, \\quad f = \\frac{v}{\\lambda}, \\quad \\lambda = \\frac{v}{f}`,
    variables: [
      { symbol: "v", name: "Wave Speed", unit: "m/s", desc: "Propagation speed of the wave through the medium" },
      { symbol: "f", name: "Frequency", unit: "Hz (Hertz = 1/s)", desc: "Oscillations or cycles per unit time" },
      { symbol: "λ", name: "Wavelength", unit: "m (meters)", desc: "Spatial period between two crests or compressions" }
    ],
    whenToUse: `Use for any periodic wave (sound, string, surface wave). Note that wave speed $v$ is determined by the properties of the medium (density, elasticity, temperature), not by the frequency of the source.`,
    workedExample: {
      title: "Acoustic Transducer Wavelength in Steel",
      scenario: "An ultrasonic inspection transducer generates a continuous sound wave at frequency $f = 25\\text{ Hz}$ in a test medium where the propagation speed is $v = 15\\text{ m/s}$. Determine the wavelength of this wave.",
      given: [
        "f = 25\\text{ Hz}",
        "v = 15\\text{ m/s}"
      ],
      required: "Wavelength $\\lambda$",
      formula: "\\lambda = \\frac{v}{f}",
      substitution: "\\lambda = \\frac{15\\text{ m/s}}{25\\text{ Hz}}",
      computation: "\\lambda = 0.60\\text{ m}",
      answer: "\\lambda = 0.60\\text{ m}",
      interpretation: "Successive wave crests or compressions in this medium are separated by exactly 60 centimeters."
    },
    commonMistakes: [
      "Inverting the formula to $\\lambda = f/v$ or $v = \\lambda / f$. Remember $v = f\\lambda$.",
      "Classifying sound in air as a transverse wave. Sound in fluids and air is strictly longitudinal!",
      "Confusing wave speed $v$ with particle oscillation speed $u_p$."
    ],
    quickCheck: {
      question: "Which of the following correctly classifies sound propagating through ambient air?",
      options: [
        "A transverse electromagnetic wave",
        "A transverse mechanical wave",
        "A longitudinal mechanical wave",
        "An electrostatic potential wave"
      ],
      correctIndex: 2,
      explanation: "Sound in air is a longitudinal mechanical wave; air molecules oscillate back and forth parallel to the direction of energy propagation."
    },
    practiceProblems: [
      {
        id: "p6-1",
        level: "Level 1 — Foundation",
        prompt: "A sound wave has a frequency of $25\\text{ Hz}$ and travels at a speed of $15\\text{ m/s}$. Find its wavelength.",
        hint: "Rearrange $v = f\\lambda$ to solve for $\\lambda = v/f$.",
        firstStep: "Divide speed by frequency: $\\lambda = 15 / 25$.",
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
      }
    ]
  },
  {
    id: "speed-of-sound-temp",
    number: "07",
    title: "Speed of Sound vs. Temperature",
    category: "Waves & Acoustics",
    shortDesc: "Temperature dependence v ≈ 331 + 0.6T (°C), air acoustics.",
    concept: `The speed of sound in a gas depends primarily on its temperature, because higher temperatures increase the average kinetic energy and molecular velocity of the gas particles, enabling pressure pulses to propagate faster.

For air near room temperature, the authoritative linear approximation appearing in the examination is:
$$v \\approx 331 + 0.6T$$
where:
* $T$ is temperature in **degrees Celsius** ($^\\circ\\text{C}$)
* $v$ is the resulting speed of sound in **meters per second** (m/s)
* $331\\text{ m/s}$ is the speed of sound in dry air at $0^\\circ\\text{C}$.`,
    engineeringContext: `**HVAC Ductwork & Acoustic Flow Meters:**
In industrial climate control and HVAC engineering, ultrasonic transit-time flow meters measure airflow velocity in duct systems. Because sound speed varies with seasonal ambient temperatures ($v \\approx 331 + 0.6T$), microprocessors must continually read temperature sensors to prevent calibration drift.`,
    formulaLatex: `v \\approx 331 + 0.6T`,
    variables: [
      { symbol: "v", name: "Speed of Sound", unit: "m/s", desc: "Acoustic propagation speed in air" },
      { symbol: "T", name: "Air Temperature", unit: "°C (Celsius)", desc: "Temperature in Celsius (NOT Kelvin in this approximation!)" },
      { symbol: "331", name: "Speed at 0°C", unit: "m/s", desc: "Reference speed of sound in dry air at 0°C" },
      { symbol: "0.6", name: "Temperature Coefficient", unit: "m/(s·°C)", desc: "Increase in speed per degree Celsius" }
    ],
    whenToUse: `Use when finding the speed of sound in air at a given temperature in Celsius. Do not convert $T$ to Kelvin for this empirical linear equation!`,
    workedExample: {
      title: "Speed of Sound on a Tropical Jobsite",
      scenario: "On an outdoor construction site, ambient temperature is measured at $T = 30.0^\\circ\\text{C}$. Calculate the speed of sound in air at this temperature using the exam linear formula.",
      given: [
        "T = 30.0^\\circ\\text{C}"
      ],
      required: "Speed of sound $v$",
      formula: "v \\approx 331 + 0.6T",
      substitution: "v = 331 + 0.6(30.0)",
      computation: "v = 331 + 18.0 = 349.0\\text{ m/s}",
      answer: "v = 349.0\\text{ m/s}",
      interpretation: "At 30°C, sound travels 18 m/s faster than at freezing point (0°C). This difference must be factored into acoustic echo-ranging systems."
    },
    commonMistakes: [
      "Converting Celsius to Kelvin ($T + 273.15$). The formula $331 + 0.6T$ expects $T$ explicitly in $^\\circ\\text{C}$!",
      "Confusing speed of sound in air (~340 m/s) with the speed of light ($3 \\times 10^8\\text{ m/s}$)."
    ],
    quickCheck: {
      question: "Using $v \\approx 331 + 0.6T$, what is the speed of sound in air at $T = 18^\\circ\\text{C}$?",
      options: [
        "338.8 m/s",
        "341.8 m/s",
        "349.0 m/s",
        "356.8 m/s"
      ],
      correctIndex: 1,
      explanation: "$v = 331 + 0.6(18) = 331 + 10.8 = 341.8\\text{ m/s}$."
    },
    practiceProblems: [
      {
        id: "p7-1",
        level: "Level 1 — Foundation",
        prompt: "Estimate the speed of sound in air at an ambient temperature of $T = 18^\\circ\\text{C}$ using $v \\approx 331 + 0.6T$.",
        hint: "Multiply 18 by 0.6 and add to 331.",
        firstStep: "$0.6 \\times 18 = 10.8\\text{ m/s}$.",
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
        id: "p7-2",
        level: "Level 2 — Application",
        prompt: "An engineer determines the speed of sound in a test chamber is $346.0\\text{ m/s}$. What is the air temperature in degrees Celsius?",
        hint: "Rearrange $v = 331 + 0.6T$ to solve for $T = (v - 331)/0.6$.",
        firstStep: "$346.0 - 331 = 15.0\\text{ m/s}$. Then divide by 0.6.",
        fullSolution: `**GIVEN:**
* $v = 346.0\\text{ m/s}$

**FORMULA:**
$$T = \\frac{v - 331}{0.6}$$

**COMPUTATION:**
$$T = \\frac{346.0 - 331}{0.6} = \\frac{15.0}{0.6} = 25.0^\\circ\\text{C}$$

**ANSWER:**
$$T = 25.0^\\circ\\text{C}$$`,
        finalAnswer: "25.0°C"
      }
    ]
  },
  {
    id: "sound-intensity-decibels",
    number: "08",
    title: "Sound Intensity & Decibels",
    category: "Waves & Acoustics",
    shortDesc: "I = P/(4πr²), inverse-square law, sound level β = 10 log10(I/I0), I0 = 10⁻¹² W/m².",
    concept: `Sound intensity $I$ is the average rate at which sound energy flows through a unit area perpendicular to the direction of propagation:
$$I = \\frac{P}{A}$$
For an **isotropic source** emitting sound uniformly in all directions, energy spreads over the surface of an expanding sphere of radius $r$ ($A = 4\\pi r^2$):
$$I = \\frac{P}{4\\pi r^2}$$

**Inverse-Square Comparison:**
For the same isotropic source at two different distances $r_1$ and $r_2$:
$$\\frac{I_2}{I_1} = \\left( \\frac{r_1}{r_2} \\right)^2$$
Doubling the distance ($r_2 = 2r_1$) reduces the intensity to one-fourth ($1/4$).

**Sound Intensity Level (Decibels):**
Because human hearing responds logarithmically over twelve orders of magnitude, sound level $\\beta$ is measured in decibels (dB):
$$\\beta = 10 \\log_{10}\\left( \\frac{I}{I_0} \\right)$$
where $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$ is the **threshold of human hearing** at 1000 Hz.`,
    engineeringContext: `**OSHA Industrial Noise Compliance:**
Industrial safety standards (OSHA) mandate that factory workers cannot be exposed to continuous sound levels exceeding $85\\text{ dB}$ for an 8-hour shift without ear protection. Mechanical engineers use sound intensity meters to map acoustic radiation contours around heavy stamping presses.`,
    formulaLatex: `I = \\frac{P}{4\\pi r^2}, \\quad \\frac{I_2}{I_1} = \\left(\\frac{r_1}{r_2}\\right)^2, \\quad \\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)`,
    variables: [
      { symbol: "I", name: "Sound Intensity", unit: "W/m²", desc: "Acoustic power per unit area" },
      { symbol: "P", name: "Sound Power", unit: "W (Watts)", desc: "Acoustic power emitted by the source" },
      { symbol: "r", name: "Distance from Source", unit: "m (meters)", desc: "Distance from point source" },
      { symbol: "β", name: "Sound Intensity Level", unit: "dB (decibels)", desc: "Logarithmic sound level" },
      { symbol: "I_0", name: "Reference Hearing Threshold", unit: "W/m²", desc: "Standard reference: 1.0 × 10⁻¹² W/m²" }
    ],
    whenToUse: `Use $I = P/(4\\pi r^2)$ for isotropic sources, the ratio $(r_1/r_2)^2$ for distance changes, and $\\beta = 10\\log_{10}(I/I_0)$ to convert between intensity in $\\text{W/m}^2$ and decibels.`,
    workedExample: {
      title: "Noise Assessment of an Industrial Generator",
      scenario: "An isotropic backup generator produces a sound intensity of $I_1 = 0.25\\text{ W/m}^2$ at a distance of $r_1 = 3.0\\text{ m}$. (a) Calculate the intensity at $r_2 = 6.0\\text{ m}$. (b) Determine the sound intensity level in decibels at $r_2$.",
      given: [
        "I_1 = 0.25\\text{ W/m}^2",
        "r_1 = 3.0\\text{ m}",
        "r_2 = 6.0\\text{ m}",
        "I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2"
      ],
      required: "(a) Intensity $I_2$, (b) Sound intensity level $\\beta_2$",
      formula: "I_2 = I_1 \\left( \\frac{r_1}{r_2} \\right)^2, \\quad \\beta = 10 \\log_{10}\\left( \\frac{I_2}{I_0} \\right)",
      substitution: "I_2 = 0.25 \\left( \\frac{3.0}{6.0} \\right)^2 = 0.25 \\left( \\frac{1}{2} \\right)^2 = \\frac{0.25}{4}, \\quad \\beta = 10 \\log_{10}\\left( \\frac{0.0625}{1.0 \\times 10^{-12}} \\right)",
      computation: "I_2 = 0.0625\\text{ W/m}^2\\n\\beta = 10 \\log_{10}(6.25 \\times 10^{10}) = 10 [10 + \\log_{10}(6.25)] = 10(10 + 0.7959) = 107.96\\text{ dB}",
      answer: "(a) I_2 = 0.0625\\text{ W/m}^2, \\quad (b) \\beta_2 = 108.0\\text{ dB}",
      interpretation: "Doubling the distance from 3 m to 6 m reduced the sound intensity by a factor of 4, which corresponds to a 6 dB drop in sound level (10 log10(4) ≈ 6.02 dB)."
    },
    commonMistakes: [
      "Using natural log (ln) instead of common log (log10) in decibel calculation.",
      "Forgetting the reference threshold $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$.",
      "Assuming decibels scale linearly with distance ($100\\text{ dB}$ does not become $50\\text{ dB}$ at double the distance!)."
    ],
    quickCheck: {
      question: "A sound intensity is $I = 1.0 \\times 10^{-7}\\text{ W/m}^2$. What is the sound intensity level in decibels?",
      options: [
        "40 dB",
        "50 dB",
        "60 dB",
        "70 dB"
      ],
      correctIndex: 1,
      explanation: "$\\beta = 10\\log_{10}(1.0 \\times 10^{-7} / 1.0 \\times 10^{-12}) = 10\\log_{10}(10^5) = 10 \\times 5 = 50\\text{ dB}$."
    },
    practiceProblems: [
      {
        id: "p8-1",
        level: "Level 1 — Foundation",
        prompt: "A sound intensity is measured as $1.0 \\times 10^{-7}\\text{ W/m}^2$. Determine the sound intensity level in dB.",
        hint: "Use $\\beta = 10\\log_{10}(I/I_0)$ with $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$.",
        firstStep: "$I / I_0 = 10^{-7} / 10^{-12} = 10^5$.",
        fullSolution: `**GIVEN:**
* $I = 1.0 \\times 10^{-7}\\text{ W/m}^2$
* $I_0 = 1.0 \\times 10^{-12}\\text{ W/m}^2$

**FORMULA:**
$$\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$$

**COMPUTATION:**
$$\\beta = 10 \\log_{10}(10^5) = 10 \\times 5 = 50\\text{ dB}$$

**ANSWER:**
$$\\beta = 50\\text{ dB}$$`,
        finalAnswer: "50 dB"
      },
      {
        id: "p8-2",
        level: "Level 2 — Application",
        prompt: "An isotropic acoustic beacon produces an intensity of $0.36\\text{ W/m}^2$ at a distance of $2.0\\text{ m}$. What is its intensity at a distance of $8.0\\text{ m}$?",
        hint: "Apply the inverse-square law: $I_2 = I_1 (r_1 / r_2)^2$.",
        firstStep: "Ratio of distances: $r_1/r_2 = 2.0 / 8.0 = 1/4$.",
        fullSolution: `**GIVEN:**
* $I_1 = 0.36\\text{ W/m}^2$
* $r_1 = 2.0\\text{ m}$
* $r_2 = 8.0\\text{ m}$

**FORMULA:**
$$I_2 = I_1 \\left(\\frac{r_1}{r_2}\\right)^2$$

**COMPUTATION:**
$$I_2 = 0.36 \\left(\\frac{2.0}{8.0}\\right)^2 = 0.36 \\left(\\frac{1}{4}\\right)^2 = \\frac{0.36}{16} = 0.0225\\text{ W/m}^2$$

**ANSWER:**
$$I_2 = 0.0225\\text{ W/m}^2$$`,
        finalAnswer: "0.0225 W/m²"
      }
    ]
  },
  {
    id: "multiple-sound-sources",
    number: "09",
    title: "Multiple Identical Sound Sources",
    category: "Waves & Acoustics",
    shortDesc: "Independent acoustic sources, Itotal = NI, Δβ = 10 log10(N), non-linear decibel addition.",
    concept: `A very common engineering trap is assuming that sound levels in decibels can be added linearly (e.g. thinking ten 65 dB motors produce 650 dB!). **Decibels DO NOT add linearly.**

For $N$ identical, independent (incoherent) acoustic sources:
1. **Intensities ADD linearly:**
   $$I_{\\text{total}} = N \\cdot I_1$$
2. **Sound levels ADD logarithmically:**
   $$\\beta_{\\text{total}} = 10 \\log_{10}\\left( \\frac{N \\cdot I_1}{I_0} \\right) = 10 \\log_{10}\\left( \\frac{I_1}{I_0} \\right) + 10 \\log_{10}(N)$$
   $$\\beta_{\\text{total}} = \\beta_1 + 10 \\log_{10}(N)$$
   where $\\Delta \\beta = 10 \\log_{10}(N)$ is the decibel increase caused by grouping $N$ identical sources.

**Key Multipliers:**
* 2 identical sources: $+10\\log_{10}(2) \\approx +3.01\\text{ dB}$
* 10 identical sources: $+10\\log_{10}(10) = +10.0\\text{ dB}$
* 100 identical sources: $+10\\log_{10}(100) = +20.0\\text{ dB}$`,
    engineeringContext: `**Factory Floor Machine Clustering:**
When designing a manufacturing bay, mechanical engineers must predict the sound level of an assembly line. If one stamping machine produces $75\\text{ dB}$, turning on four identical machines increases the acoustic level by only $10\\log_{10}(4) \\approx 6\\text{ dB}$ to $81\\text{ dB}$, rather than quadrupling the perceived decibel rating.`,
    formulaLatex: `I_{\\text{total}} = N \\cdot I_1, \\quad \\beta_{\\text{total}} = \\beta_1 + 10\\log_{10}N`,
    variables: [
      { symbol: "N", name: "Number of identical sources", unit: "unitless integer", desc: "Count of independent sources operating together" },
      { symbol: "I_1", name: "Intensity of single source", unit: "W/m²", desc: "Sound intensity of one source" },
      { symbol: "β_1", name: "Level of single source", unit: "dB", desc: "Decibel rating of one operating source" },
      { symbol: "β_total", name: "Total Sound Level", unit: "dB", desc: "Combined decibel rating of all N sources" },
      { symbol: "Δβ", name: "Decibel Increase", unit: "dB", desc: "Increase in sound level: Δβ = 10 log10(N)" }
    ],
    whenToUse: `Use when combining multiple identical independent noise sources (motors, fans, pumps, sirens). Never multiply decibels by N!`,
    workedExample: {
      title: "Acoustic Footprint of a Server Farm Fan Array",
      scenario: "A single ventilation motor produces a sound intensity level of $\\beta_1 = 65.0\\text{ dB}$. If an array of $N = 10$ identical independent motors operates simultaneously in the same room, what is the combined sound level?",
      given: [
        "\\beta_1 = 65.0\\text{ dB}",
        "N = 10"
      ],
      required: "Combined sound intensity level $\\beta_{\\text{total}}$",
      formula: "\\beta_{\\text{total}} = \\beta_1 + 10 \\log_{10}(N)",
      substitution: "\\beta_{\\text{total}} = 65.0 + 10 \\log_{10}(10)",
      computation: "\\log_{10}(10) = 1, \\quad \\Delta \\beta = 10(1) = 10.0\\text{ dB}, \\quad \\beta_{\\text{total}} = 65.0 + 10.0 = 75.0\\text{ dB}",
      answer: "\\beta_{\\text{total}} = 75.0\\text{ dB}",
      interpretation: "Ten identical 65 dB motors do NOT produce 650 dB (which would destroy the universe!). They produce exactly 75 dB, an increase of 10 dB."
    },
    commonMistakes: [
      "Multiplying the decibel value directly by $N$ (e.g. $10 \\times 65\\text{ dB} = 650\\text{ dB}$). Decibels are logarithmic!",
      "Adding decibels directly without converting to intensity first or using the $\\Delta \\beta = 10\\log_{10}N$ shortcut."
    ],
    quickCheck: {
      question: "A single machine generates a sound level of 68 dB. If six identical independent machines run at the same time, what is the approximate combined sound level?",
      options: [
        "70.8 dB",
        "75.8 dB",
        "78.8 dB",
        "408 dB"
      ],
      correctIndex: 1,
      explanation: "$\\beta_{\\text{total}} = 68 + 10\\log_{10}(6) \\approx 68 + 10(0.7782) = 68 + 7.78 = 75.8\\text{ dB}$."
    },
    practiceProblems: [
      {
        id: "p9-1",
        level: "Level 1 — Foundation",
        prompt: "A single cooling fan generates $54\\text{ dB}$. If two identical fans operate together, what is the combined sound intensity level?",
        hint: "Two sources add $10\\log_{10}(2) \\approx 3.01\\text{ dB}$.",
        firstStep: "Calculate $\\Delta \\beta = 10\\log_{10}(2) = 3.01\\text{ dB}$.",
        fullSolution: `**GIVEN:**
* $\\beta_1 = 54.0\\text{ dB}$
* $N = 2$

**FORMULA:**
$$\\beta_{\\text{total}} = \\beta_1 + 10 \\log_{10}(N)$$

**COMPUTATION:**
$$\\beta_{\\text{total}} = 54.0 + 10(0.3010) = 54.0 + 3.01 = 57.01\\text{ dB} \\approx 57.0\\text{ dB}$$

**ANSWER:**
$$\\beta_{\\text{total}} = 57.0\\text{ dB}$$`,
        finalAnswer: "57.0 dB"
      },
      {
        id: "p9-2",
        level: "Level 2 — Application",
        prompt: "A machine produces $68\\text{ dB}$. Six identical independent machines operate simultaneously. Find the total sound level.",
        hint: "Use $\\beta_{\\text{total}} = 68 + 10\\log_{10}(6)$.",
        firstStep: "$10\\log_{10}(6) = 10(0.77815) = 7.78\\text{ dB}$.",
        fullSolution: `**GIVEN:**
* $\\beta_1 = 68.0\\text{ dB}$
* $N = 6$

**FORMULA:**
$$\\beta_{\\text{total}} = \\beta_1 + 10 \\log_{10}(6)$$

**COMPUTATION:**
$$\\beta_{\\text{total}} = 68.0 + 7.78 = 75.78\\text{ dB} \\approx 75.8\\text{ dB}$$

**ANSWER:**
$$\\beta_{\\text{total}} = 75.8\\text{ dB}$$`,
        finalAnswer: "75.8 dB"
      }
    ]
  },
  {
    id: "doppler-effect",
    number: "10",
    title: "The Doppler Effect",
    category: "Waves & Acoustics",
    shortDesc: "f' = f(v ± vo)/(v ∓ vs), moving source/observer, sign conventions, same-direction motion.",
    concept: `The Doppler effect is the shift in observed frequency when there is relative motion between a sound source and an observer.

**The Universal Doppler Equation:**
$$f' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)$$
where:
* $f$ = emitted source frequency
* $f'$ = observed frequency
* $v$ = speed of sound in the stationary medium
* $v_o$ = speed of observer relative to medium
* $v_s$ = speed of source relative to medium

**THE UNFAILING SIGN CONVENTION RULE:**
Always reason physically about whether the motion tends to **increase** or **decrease** the detected frequency:
1. **Observer Motion (Numerator):**
   * Moving **TOWARD** source: observer intercepts wavefronts more rapidly $\\to f'$ must **increase** $\\to$ use **PLUS (+)** sign ($v + v_o$).
   * Moving **AWAY** from source: observer runs away from wavefronts $\\to f'$ must **decrease** $\\to$ use **MINUS (-)** sign ($v - v_o$).
2. **Source Motion (Denominator):**
   * Moving **TOWARD** observer: wavefronts are compressed into shorter wavelength $\\to f'$ must **increase** $\\to$ denominator must be smaller $\\to$ use **MINUS (-)** sign ($v - v_s$).
   * Moving **AWAY** from observer: wavefronts stretch out $\\to f'$ must **decrease** $\\to$ denominator must be larger $\\to$ use **PLUS (+)** sign ($v + v_s$).

**Source and Observer Moving in the SAME Direction:**
If a source travels East at speed $v_s$ pursuing an observer traveling East ahead of it at speed $v_o$:
* Source moves TOWARD observer $\\to$ denominator is $(v - v_s)$.
* Observer moves AWAY from source $\\to$ numerator is $(v - v_o)$.
$$f' = f \\left( \\frac{v - v_o}{v - v_s} \\right)$$`,
    engineeringContext: `**Police Doppler Radar & Emergency Siren Recognition:**
Emergency response vehicles (ambulances, police cruisers) utilize siren frequencies ($f \\approx 700\\text{ Hz}$) that shift audibly to approaching drivers. Intelligent vehicle ADAS (Advanced Driver Assistance Systems) use acoustic sensor arrays to detect the rising Doppler pitch and alert autonomous cars to yield to approaching emergency vehicles.`,
    formulaLatex: `f' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right), \\quad f'_{\\text{same direction}} = f \\left(\\frac{v - v_o}{v - v_s}\\right)`,
    variables: [
      { symbol: "f'", name: "Observed Frequency", unit: "Hz (Hertz)", desc: "Frequency heard by the observer" },
      { symbol: "f", name: "Emitted Frequency", unit: "Hz (Hertz)", desc: "Frequency emitted by the acoustic source" },
      { symbol: "v", name: "Speed of Sound", unit: "m/s", desc: "Acoustic velocity in ambient air (typically 340 - 343 m/s)" },
      { symbol: "v_o", name: "Observer Speed", unit: "m/s", desc: "Speed of the observer relative to medium" },
      { symbol: "v_s", name: "Source Speed", unit: "m/s", desc: "Speed of the source relative to medium" }
    ],
    whenToUse: `Use whenever there is relative motion between sound source, observer, or both. Always write down the signs based on physical approach (higher pitch) or separation (lower pitch).`,
    workedExample: {
      title: "Highway Pursuit Doppler Analysis",
      scenario: "A highway patrol vehicle siren emits a tone of $f = 600\\text{ Hz}$ while travelling East at $v_s = 18.0\\text{ m/s}$. A commuter car moves East directly ahead of the patrol car at $v_o = 12.0\\text{ m/s}$. The speed of sound in air is $v = 340\\text{ m/s}$. Calculate the siren frequency heard by the commuter.",
      given: [
        "f = 600\\text{ Hz}",
        "v = 340\\text{ m/s}",
        "v_s = 18.0\\text{ m/s} \\text{ (East, pursuing)}",
        "v_o = 12.0\\text{ m/s} \\text{ (East, fleeing ahead)}"
      ],
      required: "Observed frequency $f'$",
      formula: "f' = f \\left( \\frac{v - v_o}{v - v_s} \\right)",
      substitution: "f' = 600 \\left( \\frac{340 - 12.0}{340 - 18.0} \\right)",
      computation: "f' = 600 \\left( \\frac{328.0}{322.0} \\right) = 600 \\times 1.01863 \\approx 611.18\\text{ Hz}",
      answer: "f' \\approx 611\\text{ Hz}",
      interpretation: "Because the patrol car is moving faster than the commuter car ($18 > 12\\text{ m/s}$), the net distance between them is decreasing, which physically means the observed frequency must be higher than the emitted 600 Hz."
    },
    commonMistakes: [
      "Flipping signs: using $(v + v_s)$ in the denominator when the source approaches. Approaching source compresses waves, making denominator $(v - v_s)$ so that $f'$ increases!",
      "Confusing source speed $v_s$ with observer speed $v_o$ (observer is in the numerator, source is in the denominator).",
      "Using vehicle speeds in km/h without converting to m/s ($1\\text{ m/s} = 3.6\\text{ km/h}$)."
    ],
    quickCheck: {
      question: "A sound source emits 500 Hz while moving toward a stationary observer at 24 m/s. If the speed of sound is 340 m/s, what frequency is observed?",
      options: [
        "462 Hz",
        "500 Hz",
        "538 Hz",
        "575 Hz"
      ],
      correctIndex: 2,
      explanation: "Source moves toward stationary observer ($v_o = 0$): $f' = f \\frac{v}{v - v_s} = 500 \\frac{340}{340 - 24} = 500 \\frac{340}{316} \\approx 538\\text{ Hz}$."
    },
    practiceProblems: [
      {
        id: "p10-1",
        level: "Level 1 — Foundation",
        prompt: "A source emits $500\\text{ Hz}$ while moving toward a stationary observer at $24\\text{ m/s}$. Speed of sound is $340\\text{ m/s}$. Find the observed frequency.",
        hint: "Observer is stationary ($v_o = 0$), source moves toward ($v - v_s$ in denominator).",
        firstStep: "$f' = f [v / (v - v_s)]$.",
        fullSolution: `**GIVEN:**
* $f = 500\\text{ Hz}$
* $v = 340\\text{ m/s}$
* $v_s = 24\\text{ m/s}$
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
        id: "p10-2",
        level: "Level 2 — Application",
        prompt: "A train whistle emits $700\\text{ Hz}$ while traveling East at $20\\text{ m/s}$. A car travels East in front of the train at $10\\text{ m/s}$. The speed of sound is $340\\text{ m/s}$. Find the frequency heard by the driver.",
        hint: "Both move East in the same direction: $f' = f [(v - v_o)/(v - v_s)]$.",
        firstStep: "Numerator: $340 - 10 = 330\\text{ m/s}$. Denominator: $340 - 20 = 320\\text{ m/s}$.",
        fullSolution: `**GIVEN:**
* $f = 700\\text{ Hz}$
* $v = 340\\text{ m/s}$
* $v_s = 20\\text{ m/s}$ (toward car)
* $v_o = 10\\text{ m/s}$ (away from train)

**FORMULA:**
$$f' = f \\left(\\frac{v - v_o}{v - v_s}\\right)$$

**COMPUTATION:**
$$f' = 700 \\left(\\frac{340 - 10}{340 - 20}\\right) = 700 \\left(\\frac{330}{320}\\right) = 700 \\times 1.03125 = 721.88\\text{ Hz} \\approx 721\\text{ Hz}$$

**ANSWER:**
$$f' = 721\\text{ Hz}$$`,
        finalAnswer: "721 Hz"
      }
    ]
  },
  {
    id: "closed-pipe-resonance",
    number: "11",
    title: "Resonance in Closed Air Columns",
    category: "Waves & Acoustics",
    shortDesc: "Organ pipes closed at one end, fundamental frequency f1 = v/(4L), odd harmonics.",
    concept: `Standing sound waves can be established in columns of air. For an **organ pipe or tube closed at one end and open at the other**:

1. **Boundary Conditions:**
   * At the **closed end**: Air molecules cannot move longitudinally, creating a **displacement node** (zero motion, pressure antinode).
   * At the **open end**: Air is free to oscillate with maximum amplitude, creating a **displacement antinode** (maximum motion, zero gauge pressure).

2. **Fundamental Mode (First Harmonic, $n = 1$):**
   The simplest standing wave that satisfies these boundary conditions spans from a node to an adjacent antinode. The distance from a node to an antinode is **one-quarter of a wavelength**:
   $$L = \\frac{1}{4}\\lambda_1 \\implies \\lambda_1 = 4L$$
   Substituting into the wave equation $v = f\\lambda$:
   $$f_1 = \\frac{v}{4L}$$

3. **Odd Harmonics Only:**
   Only **odd integer harmonics** can exist in a pipe closed at one end:
   $$f_n = n \\frac{v}{4L} = n f_1, \\quad \\text{for } n = 1, 3, 5, 7, \\dots$$
   Even harmonics ($n = 2, 4, 6$) are physically forbidden because they would require antinodes at both ends or nodes at both ends.`,
    engineeringContext: `**Automotive Intake Resonators & Helmholtz Silencers:**
Internal combustion engines produce severe acoustic drone frequencies in their air intake tracts. Automotive engineers attach quarter-wave closed resonator tubes ($f_1 = v/4L$) tuned to the dominant firing frequency to reflect sound waves 180° out of phase, destructively cancelling cabin noise.`,
    formulaLatex: `f_1 = \\frac{v}{4L}, \\quad \\lambda_1 = 4L, \\quad f_n = n\\frac{v}{4L} \\; (n = 1, 3, 5, \\dots)`,
    variables: [
      { symbol: "f_1", name: "Fundamental Frequency", unit: "Hz", desc: "Lowest resonant frequency of the closed pipe" },
      { symbol: "v", name: "Speed of Sound in Air", unit: "m/s", desc: "Speed of sound at column temperature" },
      { symbol: "L", name: "Pipe Length", unit: "m (meters)", desc: "Physical length of the resonant column" },
      { symbol: "λ_1", name: "Fundamental Wavelength", unit: "m", desc: "Wavelength: λ = 4L" },
      { symbol: "n", name: "Harmonic Number", unit: "odd integers (1, 3, 5...)", desc: "Harmonic index" }
    ],
    whenToUse: `Use when a problem specifies a tube, cylinder, or organ pipe "closed at one end". Do NOT use $v/(2L)$! $v/(2L)$ applies only to open-at-both-ends pipes or strings fixed at both ends.`,
    workedExample: {
      title: "Fundamental Resonance of an Acoustic Exhaust Stub",
      scenario: "An acoustic resonance tube closed at one end has a physical length of $L = 0.75\\text{ m}$. If the speed of sound inside the tube is $v = 345\\text{ m/s}$, calculate: (a) the fundamental wavelength $\\lambda_1$, (b) the fundamental frequency $f_1$, and (c) the frequency of the third harmonic $f_3$.",
      given: [
        "L = 0.75\\text{ m}",
        "v = 345\\text{ m/s}",
        "Pipe closed at one end"
      ],
      required: "(a) $\\lambda_1$, (b) $f_1$, (c) $f_3$",
      formula: "\\lambda_1 = 4L, \\quad f_1 = \\frac{v}{4L}, \\quad f_3 = 3f_1",
      substitution: "\\lambda_1 = 4(0.75), \\quad f_1 = \\frac{345}{4(0.75)} = \\frac{345}{3.00}",
      computation: "\\lambda_1 = 3.00\\text{ m}\\nf_1 = 115.0\\text{ Hz}\\nf_3 = 3 \\times 115.0 = 345.0\\text{ Hz}",
      answer: "(a) \\lambda_1 = 3.00\\text{ m}, \\quad (b) f_1 = 115.0\\text{ Hz}, \\quad (c) f_3 = 345.0\\text{ Hz}",
      interpretation: "The fundamental wavelength is 4 times the pipe length. Notice that there is NO second harmonic (230 Hz does not resonate in this closed pipe)."
    },
    commonMistakes: [
      "Using $f = v/(2L)$ instead of $v/(4L)$. Pipes closed at one end resonate at $v/(4L)$.",
      "Assuming even harmonics exist. In a closed pipe, the harmonic after $f_1$ is $3f_1$, NOT $2f_1$!",
      "Forgetting to convert centimeters to meters."
    ],
    quickCheck: {
      question: "A closed pipe has length 0.60 m and the speed of sound is 336 m/s. What is its fundamental frequency?",
      options: [
        "100 Hz",
        "140 Hz",
        "160 Hz",
        "280 Hz"
      ],
      correctIndex: 1,
      explanation: "$f_1 = \\frac{v}{4L} = \\frac{336}{4(0.60)} = \\frac{336}{2.40} = 140\\text{ Hz}$."
    },
    practiceProblems: [
      {
        id: "p11-1",
        level: "Level 1 — Foundation",
        prompt: "A pipe closed at one end has a length of $0.60\\text{ m}$ in air where the speed of sound is $336\\text{ m/s}$. Find its fundamental frequency.",
        hint: "Apply $f_1 = v/(4L)$.",
        firstStep: "Calculate denominator: $4L = 4 \\times 0.60 = 2.40\\text{ m}$.",
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
      }
    ]
  },
  {
    id: "neutral-point",
    number: "12",
    title: "Electrostatic Neutral Point",
    category: "Advanced Equilibrium & Systems",
    shortDesc: "Electric field cancellation, E1 = E2, collinear charges, location closer to smaller charge.",
    concept: `A **neutral point** is a location in space where the net electric field vector is identically zero: $\\vec{E}_{\\text{net}} = 0$.

For two positive charges $Q_A$ and $Q_B$ separated by distance $d$:
* The field from $Q_A$ points to the right ($+\\hat{i}$).
* The field from $Q_B$ points to the left ($-\\hat{i}$).
* For the fields to cancel, their magnitudes must be equal:
  $$E_A = E_B \\implies \\frac{k Q_A}{x^2} = \\frac{k Q_B}{(d - x)^2}$$
  where $x$ is the distance from $Q_A$.

Cancelling Coulomb's constant $k$:
$$\\frac{Q_A}{x^2} = \\frac{Q_B}{(d - x)^2}$$
Taking the positive square root of both sides:
$$\\frac{\\sqrt{Q_A}}{x} = \\frac{\\sqrt{Q_B}}{d - x} \\implies (d - x)\\sqrt{Q_A} = x\\sqrt{Q_B}$$
$$x = \\frac{d\\sqrt{Q_A}}{\\sqrt{Q_A} + \\sqrt{Q_B}}$$

**PHYSICAL INSIGHT:**
The neutral point **ALWAYS lies closer to the charge with the smaller magnitude**. Because $E \\propto Q/r^2$, to produce the same field strength as a large charge, you must be much closer to the smaller charge!`,
    engineeringContext: `**Ion Beam Neutralization & Quadrupole Traps:**
In mass spectrometry and ion beam lithography, quadrupole electrostatic lenses create controlled neutral lines and null points where $E = 0$ along the optical axis, allowing ions to pass undeflected while stripping stray charged contaminants.`,
    formulaLatex: `\\frac{Q_A}{x^2} = \\frac{Q_B}{(d - x)^2} \\implies x = \\frac{d\\sqrt{Q_A}}{\\sqrt{Q_A} + \\sqrt{Q_B}}`,
    variables: [
      { symbol: "Q_A, Q_B", name: "Point Charges", unit: "C (or μC)", desc: "Magnitudes of like charges (both positive or both negative)" },
      { symbol: "d", name: "Total Separation Distance", unit: "m", desc: "Distance between QA and QB" },
      { symbol: "x", name: "Distance from QA", unit: "m", desc: "Position of the neutral point measured from charge QA" },
      { symbol: "d - x", name: "Distance from QB", unit: "m", desc: "Position of the neutral point measured from charge QB" }
    ],
    whenToUse: `Use when finding where $\\vec{E} = 0$ between two like charges. If the charges are unlike (one positive, one negative), the neutral point lies outside the charges on the side of the smaller charge.`,
    workedExample: {
      title: "Neutral Point Location Between Unequal Like Charges",
      scenario: "Two positive point charges $Q_A = +4.0\\;\\mu\\text{C}$ and $Q_B = +9.0\\;\\mu\\text{C}$ are fixed at a distance of $d = 0.26\\text{ m}$ apart. Find the distance $x$ from $Q_A$ where the electric field is zero.",
      given: [
        "Q_A = 4.0\\;\\mu\\text{C}",
        "Q_B = 9.0\\;\\mu\\text{C}",
        "d = 0.26\\text{ m}"
      ],
      required: "Distance $x$ from $Q_A$ to the neutral point",
      formula: "\\frac{\\sqrt{Q_A}}{x} = \\frac{\\sqrt{Q_B}}{d - x}",
      substitution: "\\frac{\\sqrt{4.0}}{x} = \\frac{\\sqrt{9.0}}{0.26 - x} \\implies \\frac{2.0}{x} = \\frac{3.0}{0.26 - x}",
      computation: "2.0(0.26 - x) = 3.0x \\implies 0.52 - 2.0x = 3.0x \\implies 5.0x = 0.52 \\implies x = \\frac{0.52}{5.0} = 0.104\\text{ m}",
      answer: "x = 0.104\\text{ m} \\text{ from } Q_A \\text{ (or } 0.156\\text{ m from } Q_B\\text{)}",
      interpretation: "The neutral point is 0.104 m from QA and 0.156 m from QB. Because QA (4 μC) is smaller than QB (9 μC), the null field occurs closer to QA, confirming the physical principle."
    },
    commonMistakes: [
      "Placing the neutral point at the exact midpoint ($d/2$) when the charges are unequal. Midpoint is only neutral if $Q_A = Q_B$.",
      "Forgetting to take the square root of both charges when solving $\\sqrt{Q_A}/x = \\sqrt{Q_B}/(d-x)$.",
      "Measuring $x$ from $Q_B$ when the problem asks for the distance from $Q_A$."
    ],
    quickCheck: {
      question: "Two positive charges $Q_A = 4.0\\;\\mu\\text{C}$ and $Q_B = 16.0\\;\\mu\\text{C}$ are $0.30\\text{ m}$ apart. How far from $Q_A$ is the neutral point between them?",
      options: [
        "0.050 m",
        "0.100 m",
        "0.150 m",
        "0.200 m"
      ],
      correctIndex: 1,
      explanation: "$\\sqrt{Q_A} = 2$, $\\sqrt{Q_B} = 4$. $x = \\frac{0.30 \\times 2}{2 + 4} = \\frac{0.60}{6} = 0.100\\text{ m}$."
    },
    practiceProblems: [
      {
        id: "p12-1",
        level: "Level 1 — Foundation",
        prompt: "Two positive charges $Q_A = 4.0\\;\\mu\\text{C}$ and $Q_B = 16\\;\\mu\\text{C}$ are separated by $0.30\\text{ m}$. How far from $Q_A$ is the neutral point located?",
        hint: "Take the square roots of the charges: $\\sqrt{4} = 2$ and $\\sqrt{16} = 4$.",
        firstStep: "$\\frac{2}{x} = \\frac{4}{0.30 - x}$.",
        fullSolution: `**GIVEN:**
* $Q_A = 4.0\\;\\mu\\text{C}$
* $Q_B = 16\\;\\mu\\text{C}$
* $d = 0.30\\text{ m}$

**FORMULA:**
$$\\frac{\\sqrt{Q_A}}{x} = \\frac{\\sqrt{Q_B}}{d - x}$$

**COMPUTATION:**
$$\\frac{2}{x} = \\frac{4}{0.30 - x} \\implies 2(0.30 - x) = 4x \\implies 0.60 - 2x = 4x \\implies 6x = 0.60 \\implies x = 0.100\\text{ m}$$

**ANSWER:**
$$x = 0.100\\text{ m}$$`,
        finalAnswer: "0.100 m from QA"
      }
    ]
  },
  {
    id: "charged-spheres-equilibrium",
    number: "13",
    title: "Equilibrium of Suspended Charged Spheres",
    category: "Advanced Equilibrium & Systems",
    shortDesc: "Static equilibrium FBD, string tension, Fe = kQ²/d², tan θ = Fe/mg, sin θ = (d/2)/L.",
    concept: `Consider two identical small conducting spheres, each of mass $m$ and carrying identical charge $Q$. They are suspended by insulating strings of length $L$ from a common support point.

Due to mutual electrostatic repulsion, the spheres swing apart to a static equilibrium separation distance $d$.

**Free-Body Diagram Analysis (on each sphere):**
1. **Vertical equilibrium:**
   $$T \\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$$
2. **Horizontal equilibrium:**
   $$T \\sin\\theta = F_e = \\frac{k Q^2}{d^2}$$
3. **Dividing the equations:**
   $$\\frac{T \\sin\\theta}{T \\cos\\theta} = \\tan\\theta = \\frac{F_e}{mg} \\implies F_e = mg\\tan\\theta$$

**String Geometry:**
From the right triangle formed by the string of length $L$ and half-separation $d/2$:
$$\\sin\\theta = \\frac{d/2}{L} = \\frac{d}{2L}$$
$$\\cos\\theta = \\sqrt{1 - \\sin^2\\theta}, \\quad \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$$

**Solving for Charge $Q$:**
$$F_e = mg\\tan\\theta = \\frac{k Q^2}{d^2} \\implies Q = d\\sqrt{\\frac{mg\\tan\\theta}{k}}$$`,
    engineeringContext: `**Gold-Leaf Electrometers & High-Voltage Charge Sensors:**
The classic Kelvin and gold-leaf electrometer measures high static electric voltages by balancing electrostatic repulsion against gravitational torque. This mechanical equilibrium provides a passive, spark-proof method for verifying de-energization on high-voltage transmission lines.`,
    formulaLatex: `\\tan\\theta = \\frac{F_e}{mg}, \\quad \\sin\\theta = \\frac{d}{2L}, \\quad F_e = \\frac{kQ^2}{d^2}, \\quad Q = d\\sqrt{\\frac{mg\\tan\\theta}{k}}`,
    variables: [
      { symbol: "m", name: "Mass of each sphere", unit: "kg", desc: "Mass of one suspended sphere" },
      { symbol: "L", name: "String Length", unit: "m", desc: "Length of the suspension string" },
      { symbol: "d", name: "Separation Distance", unit: "m", desc: "Center-to-center distance between spheres in equilibrium" },
      { symbol: "θ", name: "Deflection Angle", unit: "degrees or radians", desc: "Angle between string and vertical" },
      { symbol: "F_e", name: "Repulsive Electrostatic Force", unit: "N", desc: "Coulomb repulsion force: Fe = kQ²/d²" },
      { symbol: "g", name: "Gravitational Acceleration", unit: "m/s²", desc: "9.80 m/s² (or 9.81 m/s²)" }
    ],
    whenToUse: `Use when two identical charged spheres are hung from strings and come to static equilibrium. Always draw the free-body diagram showing tension T, weight mg, and repulsive force Fe.`,
    workedExample: {
      title: "Charge on Symmetrically Suspended Spheres",
      scenario: "Two identical spheres, each of mass $m = 8.0 \\times 10^{-5}\\text{ kg}$, hang from light strings of length $L = 0.20\\text{ m}$. When charged with equal charge $Q$, they repel to a separation of $d = 0.12\\text{ m}$. Calculate the charge $Q$ on each sphere. Take $g = 9.80\\text{ m/s}^2$.",
      given: [
        "m = 8.0 \\times 10^{-5}\\text{ kg}",
        "L = 0.20\\text{ m}",
        "d = 0.12\\text{ m}",
        "g = 9.80\\text{ m/s}^2",
        "k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2"
      ],
      required: "Equilibrium charge $Q$ on each sphere",
      formula: "\\sin\\theta = \\frac{d}{2L}, \\quad F_e = mg\\tan\\theta, \\quad Q = d\\sqrt{\\frac{F_e}{k}}",
      substitution: "\\sin\\theta = \\frac{0.12}{2(0.20)} = 0.300\\n\\theta = \\arcsin(0.300) = 17.458^\\circ\\n\\tan\\theta = \\tan(17.458^\\circ) = 0.3145",
      computation: "F_e = mg\\tan\\theta = (8.0 \\times 10^{-5})(9.80)(0.3145) = 2.4656 \\times 10^{-4}\\text{ N}\\nQ = 0.12 \\times \\sqrt{\\frac{2.4656 \\times 10^{-4}}{8.99 \\times 10^9}} = 0.12 \\times \\sqrt{2.7426 \\times 10^{-14}} = 0.12 \\times 1.656 \\times 10^{-7} = 1.987 \\times 10^{-8}\\text{ C}",
      answer: "Q \\approx 2.0 \\times 10^{-8}\\text{ C} = 20\\text{ nC}",
      interpretation: "The tiny mass of 80 milligrams allows even a nanacoulomb charge to swing the spheres apart by 12 cm against gravity."
    },
    commonMistakes: [
      "Using the full distance $d$ in the string sine calculation instead of $d/2$ (half-separation).",
      "Confusing $\\sin\\theta$ and $\\tan\\theta$. For small angles they are close, but when $\\theta > 10^\\circ$ the difference affects the second significant digit.",
      "Forgetting to multiply mass by gravity ($mg$) to obtain the gravitational force in Newtons."
    ],
    quickCheck: {
      question: "Two identical charged spheres are in equilibrium suspended by strings. If the mass of each sphere is doubled while keeping the separation and string length constant, what must happen to the charge Q?",
      options: [
        "Q must increase by a factor of √2",
        "Q must double",
        "Q must decrease by half",
        "Q remains unchanged"
      ],
      correctIndex: 0,
      explanation: "From $Q \\propto \\sqrt{m}$, doubling the mass requires $Q$ to increase by $\\sqrt{2} \\approx 1.414$ to produce the larger electric force needed to balance the heavier weight."
    },
    practiceProblems: [
      {
        id: "p13-1",
        level: "Level 1 — Foundation",
        prompt: "Two identical charged spheres are separated symmetrically by $0.08\\text{ m}$. Each has mass $6.0 \\times 10^{-5}\\text{ kg}$ and string length $0.15\\text{ m}$. Estimate the charge on each sphere at equilibrium. (Use $g = 9.80\\text{ m/s}^2$).",
        hint: "$\\sin\\theta = 0.04 / 0.15 = 0.2667$. Find $\\theta$, $\\tan\\theta$, $F_e = mg\\tan\\theta$, and $Q = d\\sqrt{F_e/k}$.",
        firstStep: "$\\sin\\theta = \\frac{0.08 / 2}{0.15} = \\frac{0.04}{0.15} = 0.2667$. $\\theta \\approx 15.47^\\circ$, $\\tan\\theta \\approx 0.2767$.",
        fullSolution: `**GIVEN:**
* $d = 0.08\\text{ m}$
* $L = 0.15\\text{ m}$
* $m = 6.0 \\times 10^{-5}\\text{ kg}$
* $g = 9.80\\text{ m/s}^2$
* $k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$

**GEOMETRY:**
$$\\sin\\theta = \\frac{d/2}{L} = \\frac{0.04}{0.15} = 0.2667 \\implies \\theta = 15.466^\\circ$$
$$\\tan\\theta = \\tan(15.466^\\circ) = 0.2767$$

**FORCE & CHARGE:**
$$F_e = mg\\tan\\theta = (6.0 \\times 10^{-5})(9.80)(0.2767) = 1.627 \\times 10^{-4}\\text{ N}$$
$$Q = d\\sqrt{\\frac{F_e}{k}} = 0.08\\sqrt{\\frac{1.627 \\times 10^{-4}}{8.99 \\times 10^9}} = 0.08\\sqrt{1.810 \\times 10^{-14}} = 0.08(1.345 \\times 10^{-7}) = 1.076 \\times 10^{-8}\\text{ C}$$

**ANSWER:**
$$Q \\approx 1.1 \\times 10^{-8}\\text{ C}$$`,
        finalAnswer: "1.1 × 10⁻⁸ C"
      }
    ]
  },
  {
    id: "cgs-electrostatics",
    number: "14",
    title: "CGS Electrostatic System",
    category: "Advanced Equilibrium & Systems",
    shortDesc: "statC, dyne, cm, k = 1 in CGS-esu, unit isolation warning.",
    concept: `In the **CGS electrostatic (esu / Gaussian) system**:
* Unit of charge: **statCoulomb (statC)** or **esu**
* Unit of force: **dyne** ($1\\text{ N} = 10^5\\text{ dynes}$)
* Unit of distance: **centimeter (cm)** ($1\\text{ m} = 100\\text{ cm}$)

**Coulomb's Law in CGS:**
The electrostatic constant $k$ is defined to be dimensionless and equal to **exactly 1**:
$$k_{\\text{CGS}} = 1\\;\\frac{\\text{dyne}\\cdot\\text{cm}^2}{\\text{statC}^2}$$
Therefore, Coulomb's law in the CGS electrostatic system takes the remarkably simple form:
$$F = \\frac{|q_1 q_2|}{r^2}$$
where $q_1, q_2$ are in **statC**, $r$ is in **cm**, and $F$ is in **dynes**.

**CRITICAL WARNING — NEVER MIX UNITS:**
Never insert Coulombs into the CGS formula, and never insert statC into the SI formula!
* If a problem is given in statC and cm, use $F = |q_1 q_2|/r^2$ directly in dynes.
* Conversion: $1\\text{ C} \\approx 2.998 \\times 10^9\\text{ statC}$.
* $1\\text{ N} = 10^5\\text{ dynes}$.`,
    engineeringContext: `**Atmospheric Electricity & Historical Literature:**
In legacy astrophysical literature, plasma physics, and older geological surveys of terrestrial electrostatic gradients, equations are written in Gaussian / CGS units. Modern electrical engineers must translate these legacy specs to SI units when retrofitting industrial hardware.`,
    formulaLatex: `F = \\frac{|q_1 q_2|}{r^2} \\quad [F \\text{ in dynes, } q \\text{ in statC, } r \\text{ in cm}]`,
    variables: [
      { symbol: "F", name: "Force", unit: "dynes (1 N = 10⁵ dynes)", desc: "Electrostatic force" },
      { symbol: "q_1, q_2", name: "Charges", unit: "statC (statCoulombs)", desc: "Charges in electrostatic units" },
      { symbol: "r", name: "Separation", unit: "cm (centimeters)", desc: "Distance in centimeters" }
    ],
    whenToUse: `Use strictly when a question specifies charges in statC, distance in cm, or force in dynes. Remember that $k = 1$ in this system, so no $8.99 \\times 10^9$ constant is needed!`,
    workedExample: {
      title: "Force Between Point Charges in the CGS System",
      scenario: "In a CGS electrostatic experiment, two point charges $q_1 = 60\\text{ statC}$ and $q_2 = -90\\text{ statC}$ are separated by a distance of $r = 6.0\\text{ cm}$. Find the magnitude of the electrostatic attraction in dynes.",
      given: [
        "q_1 = 60\\text{ statC}",
        "q_2 = -90\\text{ statC}",
        "r = 6.0\\text{ cm}",
        "k_{\\text{CGS}} = 1"
      ],
      required: "Force $F$ in dynes",
      formula: "F = \\frac{|q_1 q_2|}{r^2}",
      substitution: "F = \\frac{|60 \\times (-90)|}{(6.0)^2}",
      computation: "F = \\frac{5400}{36} = 150\\text{ dynes}",
      answer: "F = 150\\text{ dynes} \\text{ (Attractive)}",
      interpretation: "Because the charges have opposite signs, the force is attractive. In SI units, 150 dynes = 0.00150 N."
    },
    commonMistakes: [
      "Multiplying by $k = 8.99 \\times 10^9$ when using statC and cm. In CGS-esu, $k = 1$!",
      "Converting cm to meters while keeping statC. Mixing SI meters with CGS statC produces invalid hybrid units."
    ],
    quickCheck: {
      question: "In the CGS electrostatic system, charges of 80 statC and -40 statC are separated by 8.0 cm. What is the electrostatic force magnitude?",
      options: [
        "25 dynes",
        "50 dynes",
        "100 dynes",
        "200 dynes"
      ],
      correctIndex: 1,
      explanation: "$F = \\frac{|(80)(-40)|}{8.0^2} = \\frac{3200}{64} = 50\\text{ dynes}$."
    },
    practiceProblems: [
      {
        id: "p14-1",
        level: "Level 1 — Foundation",
        prompt: "In the CGS electrostatic system, charges of $80\\text{ statC}$ and $-40\\text{ statC}$ are separated by $8.0\\text{ cm}$. What is the magnitude of the attractive force in dynes?",
        hint: "In CGS, $F = |q_1 q_2|/r^2$.",
        firstStep: "$|q_1 q_2| = 80 \\times 40 = 3200$. $r^2 = 8.0^2 = 64$.",
        fullSolution: `**GIVEN:**
* $q_1 = 80\\text{ statC}$
* $q_2 = -40\\text{ statC}$
* $r = 8.0\\text{ cm}$

**FORMULA:**
$$F = \\frac{|q_1 q_2|}{r^2}$$

**COMPUTATION:**
$$F = \\frac{3200}{64} = 50\\text{ dynes}$$

**ANSWER:**
$$F = 50\\text{ dynes}$$`,
        finalAnswer: "50 dynes"
      }
    ]
  },
  {
    id: "vector-components-efield",
    number: "15",
    title: "Vector Components of Electric Field",
    category: "Advanced Equilibrium & Systems",
    shortDesc: "Ex = E cos θ, Ey = E sin θ, right-triangle geometry, horizontal/vertical positioning.",
    concept: `Because the electric field is a vector quantity, calculating the net field from charges distributed in a 2D plane requires resolving each field vector into orthogonal Cartesian components:
$$\\vec{E} = E_x \\hat{i} + E_y \\hat{j}$$

**Component Resolution:**
If a field vector of magnitude $E = \\frac{k|Q|}{r^2}$ makes an angle $\\theta$ with the positive x-axis:
$$E_x = E \\cos\\theta$$
$$E_y = E \\sin\\theta$$

**Charges on Coordinate Axes:**
* A charge located on the **x-axis to the right** of observation point $P$:
  * If positive ($+Q$): field points **left** (away from $+Q$) $\\to E_x < 0, E_y = 0$.
  * If negative ($-Q$): field points **right** (toward $-Q$) $\\to E_x > 0, E_y = 0$.
* A charge located on the **y-axis directly above** observation point $P$:
  * Contributes purely to $E_y$ ($E_x = 0$). It has **zero horizontal component**!

**Resultant Vector:**
$$E_{\\text{net}} = \\sqrt{E_{\\text{net}, x}^2 + E_{\\text{net}, y}^2}, \\quad \\theta = \\arctan\\left( \\frac{E_{\\text{net}, y}}{E_{\\text{net}, x}} \\right)$$`,
    engineeringContext: `**MEMS Electrostatic Comb Drives & Actuators:**
In micro-electro-mechanical systems (MEMS) accelerometers found in automotive airbag sensors and smartphones, silicon comb fingers create 2D electric fields. Micro-engineers resolve horizontal $E_x$ driving forces and eliminate vertical $E_y$ parasitic levitation forces by symmetric finger spacing.`,
    formulaLatex: `E_x = E\\cos\\theta, \\quad E_y = E\\sin\\theta, \\quad E_{\\text{net}} = \\sqrt{E_x^2 + E_y^2}`,
    variables: [
      { symbol: "E_x", name: "Horizontal Component", unit: "N/C", desc: "Projection of electric field onto x-axis" },
      { symbol: "E_y", name: "Vertical Component", unit: "N/C", desc: "Projection of electric field onto y-axis" },
      { symbol: "E", name: "Field Magnitude", unit: "N/C", desc: "Total magnitude of electric field vector: k|Q|/r²" },
      { symbol: "θ", name: "Direction Angle", unit: "degrees or rad", desc: "Angle of electric field vector" }
    ],
    whenToUse: `Use whenever charges are placed at different coordinates and you must determine the net electric field vector or a specific component ($E_x$ or $E_y$). Always identify vector direction before assigning signs!`,
    workedExample: {
      title: "Horizontal Component of a Field on the x-axis",
      scenario: "A positive point charge $Q = +10.0\\;\\mu\\text{C}$ is placed at $x = +5.0\\text{ cm} = +0.050\\text{ m}$ on the x-axis. Find the horizontal component $E_x$ of the electric field at the origin $P(0, 0)$.",
      given: [
        "Q = +10.0\\;\\mu\\text{C} = 10.0 \\times 10^{-6}\\text{ C}",
        "Position of Q: x = +0.050\\text{ m}",
        "Observation point P: x = 0",
        "r = 0.050\\text{ m}",
        "k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2"
      ],
      required: "Horizontal component $E_x$ at origin $P$",
      formula: "E = \\frac{k|Q|}{r^2}, \\quad E_x = -E \\text{ (since field points away from positive charge toward the left)}",
      substitution: "E = \\frac{(8.99 \\times 10^9)(10.0 \\times 10^{-6})}{(0.050)^2}",
      computation: "E = \\frac{89900}{0.0025} = 3.596 \\times 10^7\\text{ N/C} \\approx 3.60 \\times 10^7\\text{ N/C}",
      answer: "E_x = -3.60 \\times 10^7\\text{ N/C} \\text{ (pointing in the } -x \\text{ direction)}",
      interpretation: "Because the charge is located to the right of P and is positive, its electric field pushes away from the charge, pointing to the left (negative x-direction)."
    },
    commonMistakes: [
      "Assigning $+E_x$ just because the charge is positive. The sign of $E_x$ depends on which way the vector points in space!",
      "Assuming a charge located on the y-axis contributes to $E_x$. A charge directly above or below the point produces $E_x = 0$."
    ],
    quickCheck: {
      question: "A positive charge $Q = +5.0\\;\\mu\\text{C}$ is located $0.10\\text{ m}$ to the right of point $P$. What is the x-component of its electric field at $P$?",
      options: [
        "-4.50 × 10⁶ N/C",
        "-2.25 × 10⁶ N/C",
        "+4.50 × 10⁶ N/C",
        "+2.25 × 10⁶ N/C"
      ],
      correctIndex: 0,
      explanation: "$E = \\frac{8.99 \\times 10^9 \\times 5.0 \\times 10^{-6}}{0.10^2} = \\frac{44950}{0.01} = 4.495 \\times 10^6\\text{ N/C}$. Because the charge is to the right and positive, the field at $P$ points to the left: $E_x = -4.50 \\times 10^6\\text{ N/C}$."
    },
    practiceProblems: [
      {
        id: "p15-1",
        level: "Level 1 — Foundation",
        prompt: "A positive charge $Q = +5.0\\;\\mu\\text{C}$ is located $0.10\\text{ m}$ to the right of point $P$. What is the x-component of its field at $P$?",
        hint: "Calculate $E = k|Q|/r^2$. Since $Q$ is positive and to the right, the field at $P$ points left ($-x$).",
        firstStep: "$E = (8.99 \\times 10^9)(5.0 \\times 10^{-6}) / (0.10)^2 = 4.495 \\times 10^6\\text{ N/C}$.",
        fullSolution: `**GIVEN:**
* $Q = +5.0\\;\\mu\\text{C} = 5.0 \\times 10^{-6}\\text{ C}$
* Distance to right of $P$: $r = 0.10\\text{ m}$

**FORMULA:**
$$E = \\frac{k|Q|}{r^2}$$

**COMPUTATION:**
$$E = \\frac{(8.99 \\times 10^9)(5.0 \\times 10^{-6})}{(0.10)^2} = \\frac{44950}{0.01} = 4.495 \\times 10^6\\text{ N/C}$$

**DIRECTION ANALYSIS:**
Positive charges radiate field lines away from themselves. Since the charge is to the right of $P$, the field vector at $P$ points to the left (negative x-axis).

**ANSWER:**
$$E_x = -4.50 \\times 10^6\\text{ N/C}$$`,
        finalAnswer: "-4.50 × 10⁶ N/C"
      }
    ]
  }
];
