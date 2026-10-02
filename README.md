# GEN 0110 / 0110L Physics 2 for Engineers — Midterm Review Platform

[![Mechanical Engineering Society](https://img.shields.io/badge/Mechanical_Engineering_Society-GEN_0110-f7b943.svg)](https://github.com/mcluginn)
[![Authoritative Scope](https://img.shields.io/badge/Syllabus-Midterm_Set_A-0a2344.svg)](index.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An educational review, practice, and tutoring web application tailored for **GEN 0110 / 0110L Physics 2 for Engineers** preparing for the **Midterm Examination Set A**.

Designed using the **Mechanical Engineering Society** design system (Deep Navy, Steel Blue, and Brass Gold palette with mechanical gear kinematics).

---

## 🚀 Live Demo & Deployment

This application is built as a zero-dependency static web application, perfectly suited for deployment on **GitHub Pages**:

* **Repository**: Deploy directly to GitHub Pages by enabling Pages from **Settings > Pages > Branch: `main` / `root`**.
* **Live Web App**: Loads completely in modern web browsers with full client-side KaTeX typesetting, interactive HTML5 Canvas/SVG simulations, and procedural practice generators.

---

## 📚 Examination Scope (15 Core Topics)

Covering exclusively the authorized Midterm Examination syllabus:

1. **Electric Charge & Coulomb's Law** — Elementary charge $e$, $F = \frac{k|q_1 q_2|}{r^2}$, attraction vs. repulsion.
2. **Electric Field & Superposition** — Point charge field $E = \frac{k|Q|}{r^2}$, field vectors, superposition.
3. **Force & Acceleration in Fields** — Dynamic motion $F = qE$, $a = \frac{qE}{m}$ for electrons and protons.
4. **Electric Potential (Scalar Voltage)** — Scalar nature $V = \frac{kQ}{r}$ in Volts (J/C), algebraic sum.
5. **Work & Multi-Charge Potential Energy** — Field work $W = q(V_a - V_b)$, pairwise summation $U = \sum \frac{kq_i q_j}{r_{ij}}$.
6. **Wave Fundamentals & Sound** — Universal relation $v = f\lambda$, longitudinal pressure propagation.
7. **Speed of Sound vs. Temperature** — Examination standard $v \approx 331 + 0.6T$ with $T$ in °C.
8. **Sound Intensity & Decibels** — Inverse-square $I = \frac{P}{4\pi r^2}$ and logarithmic decibel level $\beta = 10\log_{10}(I/I_0)$.
9. **Multiple Identical Sound Sources** — Multi-engine acoustic addition $I_{\text{tot}} = NI$, $\Delta\beta = 10\log_{10}N$.
10. **The Doppler Effect** — Moving sources and observers $f' = f\left(\frac{v \pm v_o}{v \mp v_s}\right)$ with physical sign rules.
11. **Resonance in Closed Air Columns** — Quarter-wavelength harmonics $f_1 = \frac{v}{4L}$, $f_n = n f_1$ ($n=1,3,5\dots$).
12. **Electrostatic Neutral Point** — Electric field cancellation between like charges $\frac{x}{d-x} = \sqrt{\frac{q_1}{q_2}}$.
13. **Charged Spheres Equilibrium** — Static equilibrium free-body diagram resolving string tension, weight, and repulsion.
14. **CGS Electrostatic System** — statCoulombs, dynes, cm, and Gaussian-esu Coulomb's law with $k = 1$.
15. **Vector Components of Electric Field** — Resolving $E_x = E\cos\theta$ and $E_y = E\sin\theta$ for 2D geometries.

---

## 🛠️ Features

* **Algorithmic Practice Generator**: Synthesizes fresh problem variations with realistic parameters and 4-step progressive reveals (Hint $\to$ First Step $\to$ Full Solution $\to$ Final Answer).
* **31-Question Practice Quiz**: Full question bank with instant explanations and score tracking.
* **12 Physics Calculators**: Interactive solvers with step-by-step formula substitutions and unit conversions.
* **6 Visual Physics Simulations**:
  - Coulomb Field & Neutral Point Null Search
  - 2D Electric Field Vector Components
  - Longitudinal Acoustic Wave Particle Motion
  - Doppler Wavefront Compression
  - Closed-Pipe Standing Wave Harmonics
  - Suspended Spheres Free-Body Diagram
* **Integrated Engineering Unit Converter**: Instant conversions between C, $\mu$C, nC, statC, dynes, N, cm, m, dB, and $\text{W/m}^2$.
* **Formulas & Constants Quick Reference**: Complete table of formulas, variables, and physical constants.

---

## 💻 Local Development

Run locally with any static HTTP server or Node.js:

```bash
# Using Node.js built-in zero-dependency server:
node server.js

# Or using Python:
python -m http.server 3000
```

Then navigate to `http://localhost:3000`.
