/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Interactive Calculators
 * High-precision calculators with unit selection and step-by-step substitution.
 */

import {
  calculateCoulomb,
  calculateElectricField,
  calculateElectricPotential,
  calculatePotentialEnergy,
  calculateWave,
  calculateSpeedOfSound,
  calculateSoundLevel,
  calculateIntensityFromDecibels,
  calculateMultipleSoundSources,
  calculateDoppler,
  calculateClosedPipe,
  calculateNeutralPoint,
  calculateChargedSpheres,
  calculateCGSCoulomb,
  convertUnit
} from "../engine/physicsMath.js";

function renderCalcMath(el) {
  if (!el) return;
  if (window.app && window.app.renderMath) {
    window.app.renderMath(el);
  } else if (window.renderMathInElement) {
    window.renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

export const CALCULATORS = {
  render(container) {
    container.innerHTML = `
      <div class="calc-grid">
        <!-- 1. Coulomb's Law -->
        <div class="calc-card" id="calc-coulomb">
          <div class="calc-header">
            <h3>⚡ Coulomb's Law Calculator</h3>
            <span class="calc-badge">Electrostatics</span>
          </div>
          <p class="calc-formula">$$F = \\frac{k|q_1 q_2|}{r^2}$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Charge q₁:</label>
              <div class="input-with-unit">
                <input type="number" id="coulomb-q1" value="3.5" step="any">
                <select id="coulomb-q1-unit">
                  <option value="uC" selected>μC</option>
                  <option value="nC">nC</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
            <div class="input-group">
              <label>Charge q₂:</label>
              <div class="input-with-unit">
                <input type="number" id="coulomb-q2" value="-2.4" step="any">
                <select id="coulomb-q2-unit">
                  <option value="uC" selected>μC</option>
                  <option value="nC">nC</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <label>Distance r:</label>
              <div class="input-with-unit">
                <input type="number" id="coulomb-r" value="12" step="any" min="0.0001">
                <select id="coulomb-r-unit">
                  <option value="cm" selected>cm</option>
                  <option value="m">m</option>
                  <option value="mm">mm</option>
                </select>
              </div>
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-coulomb">Compute Force</button>
          <div class="calc-output" id="output-coulomb"></div>
        </div>

        <!-- 2. Electric Field -->
        <div class="calc-card" id="calc-efield">
          <div class="calc-header">
            <h3>🌐 Electric Field Calculator</h3>
            <span class="calc-badge">Electrostatics</span>
          </div>
          <p class="calc-formula">$$E = \\frac{k|Q|}{r^2}$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Source Charge Q:</label>
              <div class="input-with-unit">
                <input type="number" id="efield-q" value="-7.0" step="any">
                <select id="efield-q-unit">
                  <option value="uC" selected>μC</option>
                  <option value="nC">nC</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
            <div class="input-group">
              <label>Distance r:</label>
              <div class="input-with-unit">
                <input type="number" id="efield-r" value="50" step="any" min="0.0001">
                <select id="efield-r-unit">
                  <option value="cm" selected>cm</option>
                  <option value="m">m</option>
                  <option value="mm">mm</option>
                </select>
              </div>
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-efield">Compute Electric Field</button>
          <div class="calc-output" id="output-efield"></div>
        </div>

        <!-- 3. Electric Potential -->
        <div class="calc-card" id="calc-potential">
          <div class="calc-header">
            <h3>🔋 Electric Potential Calculator</h3>
            <span class="calc-badge">Potential</span>
          </div>
          <p class="calc-formula">$$V = \\frac{kQ}{r}$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Source Charge Q:</label>
              <div class="input-with-unit">
                <input type="number" id="pot-q" value="9.0" step="any">
                <select id="pot-q-unit">
                  <option value="nC" selected>nC</option>
                  <option value="uC">μC</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
            <div class="input-group">
              <label>Distance r:</label>
              <div class="input-with-unit">
                <input type="number" id="pot-r" value="45" step="any" min="0.0001">
                <select id="pot-r-unit">
                  <option value="cm" selected>cm</option>
                  <option value="m">m</option>
                </select>
              </div>
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-pot">Compute Voltage (V)</button>
          <div class="calc-output" id="output-pot"></div>
        </div>

        <!-- 4. Potential Energy -->
        <div class="calc-card" id="calc-pe">
          <div class="calc-header">
            <h3>⚙️ Potential Energy Calculator</h3>
            <span class="calc-badge">Energy</span>
          </div>
          <p class="calc-formula">$$U = \\frac{kq_1 q_2}{r}$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Charge q₁:</label>
              <div class="input-with-unit">
                <input type="number" id="pe-q1" value="4.0" step="any">
                <select id="pe-q1-unit">
                  <option value="uC" selected>μC</option>
                  <option value="nC">nC</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
            <div class="input-group">
              <label>Charge q₂:</label>
              <div class="input-with-unit">
                <input type="number" id="pe-q2" value="-5.0" step="any">
                <select id="pe-q2-unit">
                  <option value="uC" selected>μC</option>
                  <option value="nC">nC</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <label>Separation r:</label>
              <div class="input-with-unit">
                <input type="number" id="pe-r" value="0.80" step="any" min="0.0001">
                <select id="pe-r-unit">
                  <option value="m" selected>m</option>
                  <option value="cm">cm</option>
                </select>
              </div>
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-pe">Compute Potential Energy</button>
          <div class="calc-output" id="output-pe"></div>
        </div>

        <!-- 5. Wave Relationship (v = fλ) -->
        <div class="calc-card" id="calc-wave">
          <div class="calc-header">
            <h3>🌊 Wave Equation Solver</h3>
            <span class="calc-badge">Waves</span>
          </div>
          <p class="calc-formula">$$v = f\\lambda$$</p>
          <p class="calc-hint">Leave ANY ONE field blank to auto-solve for it!</p>
          <div class="form-row">
            <div class="input-group">
              <label>Wave Speed v (m/s):</label>
              <input type="number" id="wave-v" placeholder="e.g. 15.0" step="any">
            </div>
            <div class="input-group">
              <label>Frequency f (Hz):</label>
              <input type="number" id="wave-f" value="25" placeholder="e.g. 25" step="any">
            </div>
            <div class="input-group">
              <label>Wavelength λ (m):</label>
              <input type="number" id="wave-lambda" value="0.60" placeholder="e.g. 0.60" step="any">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-wave">Solve Missing Variable</button>
          <div class="calc-output" id="output-wave"></div>
        </div>

        <!-- 6. Speed of Sound vs Temp -->
        <div class="calc-card" id="calc-soundtemp">
          <div class="calc-header">
            <h3>🌡️ Speed of Sound in Air</h3>
            <span class="calc-badge">Acoustics</span>
          </div>
          <p class="calc-formula">$$v \\approx 331 + 0.6T \\quad (T \\text{ in } ^\\circ\\text{C})$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Temperature T (°C):</label>
              <input type="number" id="soundtemp-t" value="20" step="0.5">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-soundtemp">Compute Speed of Sound</button>
          <div class="calc-output" id="output-soundtemp"></div>
        </div>

        <!-- 7. Sound Intensity & Decibels -->
        <div class="calc-card" id="calc-soundint">
          <div class="calc-header">
            <h3>📢 Sound Level & Decibels</h3>
            <span class="calc-badge">Acoustics</span>
          </div>
          <p class="calc-formula">$$\\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right), \\quad I_0 = 10^{-12}\\text{ W/m}^2$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Sound Intensity I (W/m²):</label>
              <input type="text" id="soundint-i" value="1.0e-7">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-soundint">Compute Decibels (dB)</button>
          <div class="calc-output" id="output-soundint"></div>
        </div>

        <!-- 8. Multiple Sound Sources -->
        <div class="calc-card" id="calc-multisource">
          <div class="calc-header">
            <h3>🏭 Multiple Sound Sources</h3>
            <span class="calc-badge">Acoustics</span>
          </div>
          <p class="calc-formula">$$\\beta_{\\text{total}} = \\beta_1 + 10\\log_{10}(N)$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Single Source Level β₁ (dB):</label>
              <input type="number" id="multi-beta" value="68.0" step="0.5">
            </div>
            <div class="input-group">
              <label>Number of Sources N:</label>
              <input type="number" id="multi-n" value="6" step="1" min="1">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-multisource">Compute Combined dB</button>
          <div class="calc-output" id="output-multisource"></div>
        </div>

        <!-- 9. Doppler Effect -->
        <div class="calc-card" id="calc-doppler">
          <div class="calc-header">
            <h3>🚨 Doppler Effect Calculator</h3>
            <span class="calc-badge">Acoustics</span>
          </div>
          <p class="calc-formula">$$f' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Source Frequency f (Hz):</label>
              <input type="number" id="dop-f" value="700" step="any">
            </div>
            <div class="input-group">
              <label>Speed of Sound v (m/s):</label>
              <input type="number" id="dop-v" value="340" step="any">
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <label>Source Speed vs (m/s):</label>
              <input type="number" id="dop-vs" value="20" step="any">
              <select id="dop-vs-dir">
                <option value="toward" selected>Moving Toward Observer (-)</option>
                <option value="away">Moving Away from Observer (+)</option>
                <option value="stationary">Stationary (0)</option>
              </select>
            </div>
            <div class="input-group">
              <label>Observer Speed vo (m/s):</label>
              <input type="number" id="dop-vo" value="10" step="any">
              <select id="dop-vo-dir">
                <option value="away" selected>Moving Away from Source (-)</option>
                <option value="toward">Moving Toward Source (+)</option>
                <option value="stationary">Stationary (0)</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-dop">Compute Observed Frequency</button>
          <div class="calc-output" id="output-dop"></div>
        </div>

        <!-- 10. Closed Pipe Resonance -->
        <div class="calc-card" id="calc-pipe">
          <div class="calc-header">
            <h3>🎺 Closed-End Pipe Resonance</h3>
            <span class="calc-badge">Resonance</span>
          </div>
          <p class="calc-formula">$$f_1 = \\frac{v}{4L}, \\quad f_n = n\\frac{v}{4L} \\; (n=1,3,5...)$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Pipe Length L (m):</label>
              <input type="number" id="pipe-l" value="0.60" step="any" min="0.01">
            </div>
            <div class="input-group">
              <label>Speed of Sound v (m/s):</label>
              <input type="number" id="pipe-v" value="336" step="any">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-pipe">Compute Resonances</button>
          <div class="calc-output" id="output-pipe"></div>
        </div>

        <!-- 11. Neutral Point -->
        <div class="calc-card" id="calc-neutral">
          <div class="calc-header">
            <h3>⚖️ Electrostatic Neutral Point</h3>
            <span class="calc-badge">Equilibrium</span>
          </div>
          <p class="calc-formula">$$x = \\frac{d\\sqrt{Q_A}}{\\sqrt{Q_A} + \\sqrt{Q_B}}$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Charge QA (μC):</label>
              <input type="number" id="neut-qa" value="4.0" step="any" min="0.01">
            </div>
            <div class="input-group">
              <label>Charge QB (μC):</label>
              <input type="number" id="neut-qb" value="16.0" step="any" min="0.01">
            </div>
            <div class="input-group">
              <label>Separation d (m):</label>
              <input type="number" id="neut-d" value="0.30" step="any" min="0.001">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-neut">Find Neutral Point</button>
          <div class="calc-output" id="output-neut"></div>
        </div>

        <!-- 12. CGS Electrostatics -->
        <div class="calc-card" id="calc-cgs">
          <div class="calc-header">
            <h3>🔬 CGS Electrostatic System</h3>
            <span class="calc-badge">Units & CGS</span>
          </div>
          <p class="calc-formula">$$F = \\frac{|q_1 q_2|}{r^2} \\quad [\\text{dynes}]$$</p>
          <div class="form-row">
            <div class="input-group">
              <label>Charge q₁ (statC):</label>
              <input type="number" id="cgs-q1" value="80" step="any">
            </div>
            <div class="input-group">
              <label>Charge q₂ (statC):</label>
              <input type="number" id="cgs-q2" value="-40" step="any">
            </div>
            <div class="input-group">
              <label>Distance r (cm):</label>
              <input type="number" id="cgs-r" value="8.0" step="any" min="0.01">
            </div>
          </div>
          <button class="btn btn-primary calc-btn" id="btn-calc-cgs">Compute CGS Force</button>
          <div class="calc-output" id="output-cgs"></div>
        </div>
      </div>
    `;

    this.wireListeners();
  },

  wireListeners() {
    // 1. Coulomb
    document.getElementById("btn-calc-coulomb").onclick = () => {
      try {
        const q1_raw = parseFloat(document.getElementById("coulomb-q1").value);
        const q1_unit = document.getElementById("coulomb-q1-unit").value;
        const q2_raw = parseFloat(document.getElementById("coulomb-q2").value);
        const q2_unit = document.getElementById("coulomb-q2-unit").value;
        const r_raw = parseFloat(document.getElementById("coulomb-r").value);
        const r_unit = document.getElementById("coulomb-r-unit").value;

        const q1_C = convertUnit(q1_raw, q1_unit, "C");
        const q2_C = convertUnit(q2_raw, q2_unit, "C");
        const r_m = convertUnit(r_raw, r_unit, "m");

        const res = calculateCoulomb(q1_C, q2_C, r_m);
        document.getElementById("output-coulomb").innerHTML = `
          <div class="output-success">
            <h4>Result: <strong>${res.magnitude.toFixed(4)} N</strong> (${res.nature})</h4>
            <div class="output-steps">
              <p><strong>Step-by-Step Calculation:</strong></p>
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-coulomb"));
      } catch (err) {
        document.getElementById("output-coulomb").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 2. Electric Field
    document.getElementById("btn-calc-efield").onclick = () => {
      try {
        const q_raw = parseFloat(document.getElementById("efield-q").value);
        const q_unit = document.getElementById("efield-q-unit").value;
        const r_raw = parseFloat(document.getElementById("efield-r").value);
        const r_unit = document.getElementById("efield-r-unit").value;

        const Q_C = convertUnit(q_raw, q_unit, "C");
        const r_m = convertUnit(r_raw, r_unit, "m");

        const res = calculateElectricField(Q_C, r_m);
        document.getElementById("output-efield").innerHTML = `
          <div class="output-success">
            <h4>Result: <strong>${res.magnitude.toExponential(4)} N/C</strong> (${res.direction})</h4>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-efield"));
      } catch (err) {
        document.getElementById("output-efield").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 3. Potential
    document.getElementById("btn-calc-pot").onclick = () => {
      try {
        const q_raw = parseFloat(document.getElementById("pot-q").value);
        const q_unit = document.getElementById("pot-q-unit").value;
        const r_raw = parseFloat(document.getElementById("pot-r").value);
        const r_unit = document.getElementById("pot-r-unit").value;

        const Q_C = convertUnit(q_raw, q_unit, "C");
        const r_m = convertUnit(r_raw, r_unit, "m");

        const res = calculateElectricPotential(Q_C, r_m);
        document.getElementById("output-pot").innerHTML = `
          <div class="output-success">
            <h4>Result: <strong>${res.value.toFixed(2)} V</strong></h4>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-pot"));
      } catch (err) {
        document.getElementById("output-pot").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 4. Potential Energy
    document.getElementById("btn-calc-pe").onclick = () => {
      try {
        const q1_raw = parseFloat(document.getElementById("pe-q1").value);
        const q1_unit = document.getElementById("pe-q1-unit").value;
        const q2_raw = parseFloat(document.getElementById("pe-q2").value);
        const q2_unit = document.getElementById("pe-q2-unit").value;
        const r_raw = parseFloat(document.getElementById("pe-r").value);
        const r_unit = document.getElementById("pe-r-unit").value;

        const q1_C = convertUnit(q1_raw, q1_unit, "C");
        const q2_C = convertUnit(q2_raw, q2_unit, "C");
        const r_m = convertUnit(r_raw, r_unit, "m");

        const res = calculatePotentialEnergy(q1_C, q2_C, r_m);
        document.getElementById("output-pe").innerHTML = `
          <div class="output-success">
            <h4>Result: <strong>${res.value.toPrecision(4)} J</strong></h4>
            <p><em>${res.interpretation}</em></p>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-pe"));
      } catch (err) {
        document.getElementById("output-pe").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 5. Wave Solver
    document.getElementById("btn-calc-wave").onclick = () => {
      try {
        const vInput = document.getElementById("wave-v").value.trim();
        const fInput = document.getElementById("wave-f").value.trim();
        const lInput = document.getElementById("wave-lambda").value.trim();

        const v = vInput !== "" ? parseFloat(vInput) : null;
        const f = fInput !== "" ? parseFloat(fInput) : null;
        const lambda = lInput !== "" ? parseFloat(lInput) : null;

        const res = calculateWave(v, f, lambda);
        document.getElementById("output-wave").innerHTML = `
          <div class="output-success">
            <h4>Solved for <strong>${res.solved === "v" ? "Wave Speed v" : res.solved === "f" ? "Frequency f" : "Wavelength λ"}</strong>: <strong>${res.value.toFixed(4)} ${res.unit}</strong></h4>
            <p>Formula: $$${res.formula}$$</p>
            <p>Computation: $$${res.computation}$$</p>
          </div>
        `;
        renderCalcMath(document.getElementById("output-wave"));
      } catch (err) {
        document.getElementById("output-wave").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 6. Sound Speed
    document.getElementById("btn-calc-soundtemp").onclick = () => {
      try {
        const t = parseFloat(document.getElementById("soundtemp-t").value);
        const res = calculateSpeedOfSound(t);
        document.getElementById("output-soundtemp").innerHTML = `
          <div class="output-success">
            <h4>Speed of Sound: <strong>${res.speed.toFixed(2)} m/s</strong></h4>
            <p>$$${res.steps[0]}$$</p>
          </div>
        `;
        renderCalcMath(document.getElementById("output-soundtemp"));
      } catch (err) {
        document.getElementById("output-soundtemp").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 7. Sound Level
    document.getElementById("btn-calc-soundint").onclick = () => {
      try {
        const iVal = parseFloat(document.getElementById("soundint-i").value);
        const res = calculateSoundLevel(iVal);
        document.getElementById("output-soundint").innerHTML = `
          <div class="output-success">
            <h4>Sound Level: <strong>${res.beta.toFixed(2)} dB</strong></h4>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-soundint"));
      } catch (err) {
        document.getElementById("output-soundint").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 8. Multiple Sources
    document.getElementById("btn-calc-multisource").onclick = () => {
      try {
        const beta = parseFloat(document.getElementById("multi-beta").value);
        const n = parseInt(document.getElementById("multi-n").value);
        const res = calculateMultipleSoundSources(beta, n);
        document.getElementById("output-multisource").innerHTML = `
          <div class="output-success">
            <h4>Total Combined Level: <strong>${res.total_dB.toFixed(2)} dB</strong></h4>
            <p>Increase: <strong>+${res.deltaBeta.toFixed(2)} dB</strong></p>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-multisource"));
      } catch (err) {
        document.getElementById("output-multisource").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 9. Doppler
    document.getElementById("btn-calc-dop").onclick = () => {
      try {
        const f = parseFloat(document.getElementById("dop-f").value);
        const v = parseFloat(document.getElementById("dop-v").value);
        const vs = parseFloat(document.getElementById("dop-vs").value);
        const vs_dir = document.getElementById("dop-vs-dir").value;
        const vo = parseFloat(document.getElementById("dop-vo").value);
        const vo_dir = document.getElementById("dop-vo-dir").value;

        const res = calculateDoppler({
          f_Hz: f,
          v_sound: v,
          v_s: vs,
          v_o: vo,
          sourceDirection: vs_dir,
          obsDirection: vo_dir
        });

        document.getElementById("output-dop").innerHTML = `
          <div class="output-success">
            <h4>Observed Frequency: <strong>${res.f_obs.toFixed(2)} Hz</strong> (${res.isShiftUp ? "Shifted Up / Higher Pitch" : "Shifted Down / Lower Pitch"})</h4>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-dop"));
      } catch (err) {
        document.getElementById("output-dop").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 10. Closed Pipe
    document.getElementById("btn-calc-pipe").onclick = () => {
      try {
        const l = parseFloat(document.getElementById("pipe-l").value);
        const v = parseFloat(document.getElementById("pipe-v").value);
        const h1 = calculateClosedPipe(l, v, 1);
        const h3 = calculateClosedPipe(l, v, 3);
        const h5 = calculateClosedPipe(l, v, 5);

        document.getElementById("output-pipe").innerHTML = `
          <div class="output-success">
            <h4>Fundamental (1st Harmonic): <strong>${h1.f_1.toFixed(2)} Hz</strong> (λ₁ = ${h1.lambda_1.toFixed(2)} m)</h4>
            <p>3rd Harmonic: <strong>${h3.f_n.toFixed(2)} Hz</strong></p>
            <p>5th Harmonic: <strong>${h5.f_n.toFixed(2)} Hz</strong></p>
            <p><em>(Note: Even harmonics 2nd, 4th, 6th are absent in a closed pipe!)</em></p>
          </div>
        `;
      } catch (err) {
        document.getElementById("output-pipe").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 11. Neutral Point
    document.getElementById("btn-calc-neut").onclick = () => {
      try {
        const qa = parseFloat(document.getElementById("neut-qa").value);
        const qb = parseFloat(document.getElementById("neut-qb").value);
        const d = parseFloat(document.getElementById("neut-d").value);
        const res = calculateNeutralPoint(qa, qb, d);

        document.getElementById("output-neut").innerHTML = `
          <div class="output-success">
            <h4>Neutral Point Distance: <strong>${res.x_from_A.toFixed(4)} m from QA</strong> (or ${res.x_from_B.toFixed(4)} m from QB)</h4>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-neut"));
      } catch (err) {
        document.getElementById("output-neut").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };

    // 12. CGS
    document.getElementById("btn-calc-cgs").onclick = () => {
      try {
        const q1 = parseFloat(document.getElementById("cgs-q1").value);
        const q2 = parseFloat(document.getElementById("cgs-q2").value);
        const r = parseFloat(document.getElementById("cgs-r").value);
        const res = calculateCGSCoulomb(q1, q2, r);

        document.getElementById("output-cgs").innerHTML = `
          <div class="output-success">
            <h4>Force: <strong>${res.F_dynes.toFixed(2)} dynes</strong> (${res.nature})</h4>
            <p>SI Equivalent: <strong>${res.F_Newtons.toExponential(4)} N</strong></p>
            <div class="output-steps">
              <ul>${res.steps.map(s => `<li>$$${s}$$</li>`).join("")}</ul>
            </div>
          </div>
        `;
        renderCalcMath(document.getElementById("output-cgs"));
      } catch (err) {
        document.getElementById("output-cgs").innerHTML = `<div class="output-error">${err.message}</div>`;
      }
    };
  }
};
