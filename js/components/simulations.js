/**
 * GEN 0110 / 0110L Physics 2 for Engineers - Interactive Physics Simulations & Diagrams
 * Canvas & SVG visualizations for:
 * 1. Coulomb Force & Neutral Point
 * 2. Vector Components of Electric Field
 * 3. Longitudinal Sound Wave (Compressions & Rarefactions)
 * 4. Doppler Effect Wavefront Propagation
 * 5. Closed-Pipe Resonance Standing Wave
 * 6. Charged Spheres Static Equilibrium Free-Body Diagram
 */

export const SIMULATIONS = {
  activeAnimations: {},

  // Stop any running requestAnimationFrame loops
  cleanup() {
    Object.values(this.activeAnimations).forEach(id => cancelAnimationFrame(id));
    this.activeAnimations = {};
  },

  /**
   * 1. Coulomb Force & Neutral Point Visualizer
   */
  initCoulombSim(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    // State
    const state = {
      q1: 4.0,   // microCoulombs
      q2: -2.0,  // microCoulombs
      d: 240,    // canvas pixels
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerY = canvas.height / 2;
      const x1 = (canvas.width - state.d) / 2;
      const x2 = x1 + state.d;

      // Draw axis
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(30, centerY);
      ctx.lineTo(canvas.width - 30, centerY);
      ctx.stroke();

      // Dimension line
      ctx.strokeStyle = "#94a3b8";
      ctx.beginPath();
      ctx.moveTo(x1, centerY + 45);
      ctx.lineTo(x2, centerY + 45);
      ctx.moveTo(x1, centerY + 40);
      ctx.lineTo(x1, centerY + 50);
      ctx.moveTo(x2, centerY + 40);
      ctx.lineTo(x2, centerY + 50);
      ctx.stroke();

      ctx.fillStyle = "#94a3b8";
      ctx.font = "12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`d = ${(state.d / 800).toFixed(2)} m`, (x1 + x2) / 2, centerY + 62);

      // Force calculations
      const r_m = state.d / 800; // scaling: 800 px = 1 m
      const k = 8.99e9;
      const F = (k * Math.abs(state.q1 * 1e-6 * state.q2 * 1e-6)) / (r_m * r_m);
      const isRepulsive = (state.q1 * state.q2 > 0);

      // Force vectors
      const fLength = Math.min(70, Math.max(25, F * 8));
      
      // Vector on Charge 1
      const f1_dir = isRepulsive ? -1 : 1;
      drawVector(ctx, x1, centerY, x1 + f1_dir * fLength, centerY, "#38bdf8", `F₁₂ = ${F.toFixed(2)} N`);

      // Vector on Charge 2
      const f2_dir = isRepulsive ? 1 : -1;
      drawVector(ctx, x2, centerY, x2 + f2_dir * fLength, centerY, "#38bdf8", `F₂₁ = ${F.toFixed(2)} N`);

      // Draw Charge 1
      drawCharge(ctx, x1, centerY, state.q1, "q₁");
      // Draw Charge 2
      drawCharge(ctx, x2, centerY, state.q2, "q₂");

      // Neutral point indicator if like charges
      if (state.q1 > 0 && state.q2 > 0) {
        const sqrt1 = Math.sqrt(state.q1);
        const sqrt2 = Math.sqrt(state.q2);
        const x_neutral = x1 + state.d * (sqrt1 / (sqrt1 + sqrt2));
        
        ctx.strokeStyle = "#10b981";
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(x_neutral, centerY - 30);
        ctx.lineTo(x_neutral, centerY + 30);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#10b981";
        ctx.beginPath();
        ctx.arc(x_neutral, centerY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "bold 11px Inter, sans-serif";
        ctx.fillText("Neutral Point (E = 0)", x_neutral, centerY - 38);
      }
    };

    // Wire controls if provided
    const ctrl = document.getElementById(controlsId);
    if (ctrl) {
      ctrl.innerHTML = `
        <div class="sim-control-group">
          <label>Charge q₁: <span id="val-q1">${state.q1 > 0 ? "+" : ""}${state.q1}</span> μC</label>
          <input type="range" id="range-q1" min="-8" max="8" step="1" value="${state.q1}">
        </div>
        <div class="sim-control-group">
          <label>Charge q₂: <span id="val-q2">${state.q2 > 0 ? "+" : ""}${state.q2}</span> μC</label>
          <input type="range" id="range-q2" min="-8" max="8" step="1" value="${state.q2}">
        </div>
        <div class="sim-control-group">
          <label>Distance r: <span id="val-d">${(state.d / 800).toFixed(2)}</span> m</label>
          <input type="range" id="range-d" min="120" max="360" step="10" value="${state.d}">
        </div>
      `;

      ctrl.querySelector("#range-q1").oninput = (e) => {
        let v = parseFloat(e.target.value);
        if (v === 0) v = 1;
        state.q1 = v;
        ctrl.querySelector("#val-q1").textContent = (v > 0 ? "+" : "") + v;
        render();
      };
      ctrl.querySelector("#range-q2").oninput = (e) => {
        let v = parseFloat(e.target.value);
        if (v === 0) v = -1;
        state.q2 = v;
        ctrl.querySelector("#val-q2").textContent = (v > 0 ? "+" : "") + v;
        render();
      };
      ctrl.querySelector("#range-d").oninput = (e) => {
        state.d = parseFloat(e.target.value);
        ctrl.querySelector("#val-d").textContent = (state.d / 800).toFixed(2);
        render();
      };
    }

    render();
  },

  /**
   * 2. Vector Components of Electric Field
   */
  initVectorComponentsSim(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const state = {
      chargeSign: 1, // +1 or -1
      Q: 5.0,        // microC
      x_cm: 20,      // cm
      y_cm: 15       // cm
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const originX = 80;
      const originY = canvas.height - 80;
      const scale = 8; // 8 px per cm

      // Coordinate axes
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      // X axis
      ctx.moveTo(originX - 20, originY);
      ctx.lineTo(canvas.width - 20, originY);
      // Y axis
      ctx.moveTo(originX, originY + 20);
      ctx.lineTo(originX, 20);
      ctx.stroke();

      ctx.fillStyle = "#94a3b8";
      ctx.font = "12px Inter, sans-serif";
      ctx.fillText("+x (m)", canvas.width - 40, originY + 20);
      ctx.fillText("+y (m)", originX - 35, 30);

      // Observation point P at origin
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(originX, originY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText("Point P (0, 0)", originX - 10, originY + 25);

      // Source charge position
      const qX = originX + state.x_cm * scale;
      const qY = originY - state.y_cm * scale;

      // Line connecting P and Q
      ctx.strokeStyle = "#334155";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(qX, qY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw right-triangle legs
      ctx.strokeStyle = "#1e293b";
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(qX, originY);
      ctx.lineTo(qX, qY);
      ctx.stroke();

      // Draw source charge Q
      drawCharge(ctx, qX, qY, state.chargeSign * state.Q, "Q");

      // Calculate Physics
      const r_m = Math.sqrt((state.x_cm / 100) ** 2 + (state.y_cm / 100) ** 2);
      const E_mag = (8.99e9 * Math.abs(state.Q * 1e-6)) / (r_m * r_m);
      const theta = Math.atan2(state.y_cm, state.x_cm); // angle from origin to charge

      // Field at P:
      // If Q > 0, field points AWAY from Q (so from (qX,qY) toward origin and beyond)
      // Vector pointing away from Q: angle = theta + PI
      // If Q < 0, field points TOWARD Q: angle = theta
      const fieldAngle = state.chargeSign > 0 ? (theta + Math.PI) : theta;
      const vLen = 80;
      const endX = originX + Math.cos(fieldAngle) * vLen;
      const endY = originY - Math.sin(fieldAngle) * vLen; // Canvas Y inverted

      // Component lengths
      const compX = originX + Math.cos(fieldAngle) * vLen;
      const compY = originY - Math.sin(fieldAngle) * vLen;

      // Draw Ex component
      ctx.setLineDash([3, 3]);
      drawVector(ctx, originX, originY, compX, originY, "#38bdf8", `Ex = ${(E_mag * Math.cos(fieldAngle) / 1e5).toFixed(2)} × 10⁵`);
      // Draw Ey component
      drawVector(ctx, compX, originY, compX, compY, "#ec4899", `Ey = ${(E_mag * Math.sin(fieldAngle) / 1e5).toFixed(2)} × 10⁵`);
      ctx.setLineDash([]);

      // Draw resultant E vector
      drawVector(ctx, originX, originY, endX, endY, "#10b981", `E_net = ${(E_mag / 1e5).toFixed(2)} × 10⁵ N/C`);
    };

    const ctrl = document.getElementById(controlsId);
    if (ctrl) {
      ctrl.innerHTML = `
        <div class="sim-control-group">
          <label>Source Charge Sign:</label>
          <select id="sel-sign" class="sim-select">
            <option value="1">Positive (+Q, repels test charge)</option>
            <option value="-1">Negative (-Q, attracts test charge)</option>
          </select>
        </div>
        <div class="sim-control-group">
          <label>Position X: <span id="val-x">${state.x_cm}</span> cm</label>
          <input type="range" id="range-x" min="8" max="32" step="2" value="${state.x_cm}">
        </div>
        <div class="sim-control-group">
          <label>Position Y: <span id="val-y">${state.y_cm}</span> cm</label>
          <input type="range" id="range-y" min="6" max="24" step="2" value="${state.y_cm}">
        </div>
      `;

      ctrl.querySelector("#sel-sign").onchange = (e) => {
        state.chargeSign = parseInt(e.target.value);
        render();
      };
      ctrl.querySelector("#range-x").oninput = (e) => {
        state.x_cm = parseFloat(e.target.value);
        ctrl.querySelector("#val-x").textContent = state.x_cm;
        render();
      };
      ctrl.querySelector("#range-y").oninput = (e) => {
        state.y_cm = parseFloat(e.target.value);
        ctrl.querySelector("#val-y").textContent = state.y_cm;
        render();
      };
    }

    render();
  },

  /**
   * 3. Longitudinal Sound Wave Simulation
   */
  initSoundWaveSim(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let time = 0;
    const state = {
      f: 1.5,        // frequency factor
      lambda: 120,   // wavelength in px
      amplitude: 16  // oscillation amplitude
    };

    const numRows = 7;
    const numCols = 60;
    const colSpacing = (canvas.width - 40) / numCols;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.035 * state.f;

      // Draw tube boundaries
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(20, 30, canvas.width - 40, canvas.height - 60);
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 30, canvas.width - 40, canvas.height - 60);

      // Draw longitudinal particles
      for (let r = 0; r < numRows; r++) {
        const y = 50 + r * ((canvas.height - 100) / (numRows - 1));
        for (let c = 0; c < numCols; c++) {
          const equilibriumX = 30 + c * colSpacing;
          const k = (2 * Math.PI) / state.lambda;
          const dx = state.amplitude * Math.sin(k * equilibriumX - time);
          const x = equilibriumX + dx;

          // Color based on density/compression
          // gradient: compressions are bright cyan, rarefactions are dim blue
          const pressurePhase = Math.cos(k * equilibriumX - time);
          const brightness = Math.floor(150 + pressurePhase * 105);
          ctx.fillStyle = `rgb(56, ${brightness}, 248)`;

          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw annotation labels
      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("← Compressions (High Density) & Rarefactions (Low Density) →", canvas.width / 2, canvas.height - 12);

      SIMULATIONS.activeAnimations[canvasId] = requestAnimationFrame(animate);
    };

    const ctrl = document.getElementById(controlsId);
    if (ctrl) {
      ctrl.innerHTML = `
        <div class="sim-control-group">
          <label>Frequency f: <span id="val-f">${state.f.toFixed(1)}</span> Hz</label>
          <input type="range" id="range-f" min="0.5" max="3.0" step="0.2" value="${state.f}">
        </div>
        <div class="sim-control-group">
          <label>Wavelength λ: <span id="val-lambda">${state.lambda}</span> px</label>
          <input type="range" id="range-lambda" min="80" max="200" step="10" value="${state.lambda}">
        </div>
      `;

      ctrl.querySelector("#range-f").oninput = (e) => {
        state.f = parseFloat(e.target.value);
        ctrl.querySelector("#val-f").textContent = state.f.toFixed(1);
      };
      ctrl.querySelector("#range-lambda").oninput = (e) => {
        state.lambda = parseFloat(e.target.value);
        ctrl.querySelector("#val-lambda").textContent = state.lambda;
      };
    }

    animate();
  },

  /**
   * 4. Doppler Effect Wavefront Propagation
   */
  initDopplerSim(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let waves = [];
    let sourceX = 100;
    let frame = 0;
    const state = {
      vs: 1.5,       // source velocity
      vSound: 3.2,   // speed of sound
      emitInterval: 28
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerY = canvas.height / 2;

      // Update source position
      sourceX += state.vs;
      if (sourceX > canvas.width - 80) {
        sourceX = 80;
        waves = [];
      }

      // Emit new wavefront
      frame++;
      if (frame % state.emitInterval === 0) {
        waves.push({ x: sourceX, y: centerY, r: 0 });
      }

      // Draw and expand waves
      ctx.strokeStyle = "rgba(56, 189, 248, 0.65)";
      ctx.lineWidth = 1.5;
      for (let i = 0; i < waves.length; i++) {
        const w = waves[i];
        w.r += state.vSound;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Keep only visible waves
      waves = waves.filter(w => w.r < canvas.width * 1.2);

      // Draw observers
      // Observer 1 (Ahead - Higher Pitch)
      const obsRightX = canvas.width - 50;
      drawObserver(ctx, obsRightX, centerY, "Observer Ahead\n(f' > f, Compressed λ)");

      // Observer 2 (Behind - Lower Pitch)
      const obsLeftX = 40;
      drawObserver(ctx, obsLeftX, centerY, "Observer Behind\n(f' < f, Stretched λ)");

      // Draw Moving Source
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(sourceX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Velocity arrow on source
      if (state.vs > 0) {
        drawVector(ctx, sourceX, centerY - 15, sourceX + state.vs * 18, centerY - 15, "#ef4444", `vs = ${state.vs * 10} m/s`);
      }

      SIMULATIONS.activeAnimations[canvasId] = requestAnimationFrame(animate);
    };

    const ctrl = document.getElementById(controlsId);
    if (ctrl) {
      ctrl.innerHTML = `
        <div class="sim-control-group">
          <label>Source Velocity vs: <span id="val-vs">${(state.vs * 10).toFixed(0)}</span> m/s</label>
          <input type="range" id="range-vs" min="0" max="2.5" step="0.25" value="${state.vs}">
        </div>
      `;

      ctrl.querySelector("#range-vs").oninput = (e) => {
        state.vs = parseFloat(e.target.value);
        ctrl.querySelector("#val-vs").textContent = (state.vs * 10).toFixed(0);
      };
    }

    animate();
  },

  /**
   * 5. Closed-Pipe Resonance Standing Wave
   */
  initPipeResonanceSim(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let time = 0;
    const state = {
      harmonic: 1 // 1, 3, 5
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.05;

      const pipeLeft = 80;
      const pipeRight = canvas.width - 80;
      const pipeLength = pipeRight - pipeLeft;
      const pipeTop = 60;
      const pipeBottom = canvas.height - 60;
      const pipeHeight = pipeBottom - pipeTop;
      const centerY = (pipeTop + pipeBottom) / 2;

      // Draw Tube (Left is Closed, Right is Open)
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(pipeLeft, pipeTop, pipeLength, pipeHeight);

      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 4;
      ctx.beginPath();
      // Closed left wall
      ctx.moveTo(pipeLeft, pipeTop);
      ctx.lineTo(pipeLeft, pipeBottom);
      // Top wall
      ctx.moveTo(pipeLeft, pipeTop);
      ctx.lineTo(pipeRight, pipeTop);
      // Bottom wall
      ctx.moveTo(pipeLeft, pipeBottom);
      ctx.lineTo(pipeRight, pipeBottom);
      ctx.stroke();

      // Closed wall hatch marks
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 2;
      for (let y = pipeTop; y <= pipeBottom; y += 10) {
        ctx.beginPath();
        ctx.moveTo(pipeLeft - 10, y + 8);
        ctx.lineTo(pipeLeft, y);
        ctx.stroke();
      }

      // Draw standing wave envelope: y(x,t) = A * sin( (n*pi/(2L)) * x ) * cos(omega*t)
      const n = state.harmonic;
      const amplitude = (pipeHeight / 2 - 15) * Math.cos(time);

      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x <= pipeLength; x += 2) {
        const theta = (n * Math.PI * x) / (2 * pipeLength);
        const y = centerY + amplitude * Math.sin(theta);
        if (x === 0) ctx.moveTo(pipeLeft + x, y);
        else ctx.lineTo(pipeLeft + x, y);
      }
      ctx.stroke();

      // Mirror wave
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      ctx.beginPath();
      for (let x = 0; x <= pipeLength; x += 2) {
        const theta = (n * Math.PI * x) / (2 * pipeLength);
        const y = centerY - amplitude * Math.sin(theta);
        if (x === 0) ctx.moveTo(pipeLeft + x, y);
        else ctx.lineTo(pipeLeft + x, y);
      }
      ctx.stroke();

      // Markers: Node at closed end, Antinode at open end
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(pipeLeft, centerY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("Node (Displacement = 0)", pipeLeft + 8, centerY - 10);

      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(pipeRight, centerY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.textAlign = "right";
      ctx.fillText("Antinode (Max Amp)", pipeRight - 8, centerY - 10);

      // Subtitle
      ctx.fillStyle = "#94a3b8";
      ctx.textAlign = "center";
      ctx.fillText(
        `Harmonic n = ${n} (f_${n} = ${n} × v / 4L)  |  L = ${n}/4 λ`,
        canvas.width / 2,
        canvas.height - 18
      );

      SIMULATIONS.activeAnimations[canvasId] = requestAnimationFrame(animate);
    };

    const ctrl = document.getElementById(controlsId);
    if (ctrl) {
      ctrl.innerHTML = `
        <div class="sim-control-group">
          <label>Harmonic Mode:</label>
          <div class="btn-group">
            <button class="btn btn-sm ${state.harmonic === 1 ? 'active' : ''}" data-h="1">Fundamental (n = 1)</button>
            <button class="btn btn-sm ${state.harmonic === 3 ? 'active' : ''}" data-h="3">3rd Harmonic (n = 3)</button>
            <button class="btn btn-sm ${state.harmonic === 5 ? 'active' : ''}" data-h="5">5th Harmonic (n = 5)</button>
          </div>
        </div>
      `;

      ctrl.querySelectorAll("button").forEach(btn => {
        btn.onclick = () => {
          ctrl.querySelectorAll("button").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          state.harmonic = parseInt(btn.dataset.h);
        };
      });
    }

    animate();
  },

  /**
   * 6. Charged Spheres Static Equilibrium Free-Body Diagram
   */
  initChargedSpheresSim(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const state = {
      thetaDeg: 18.0, // degrees
      L_px: 160
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const topX = canvas.width / 2;
      const topY = 40;

      // Draw Support Ceiling
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(topX - 80, topY);
      ctx.lineTo(topX + 80, topY);
      ctx.stroke();

      // Ceiling hatch marks
      ctx.lineWidth = 1.5;
      for (let x = topX - 70; x <= topX + 70; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x + 8, topY - 10);
        ctx.stroke();
      }

      // Vertical centerline
      ctx.strokeStyle = "#334155";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(topX, topY + state.L_px + 40);
      ctx.stroke();
      ctx.setLineDash([]);

      const thetaRad = (state.thetaDeg * Math.PI) / 180;
      const d_half = state.L_px * Math.sin(thetaRad);
      const dy = state.L_px * Math.cos(thetaRad);

      const leftSphereX = topX - d_half;
      const leftSphereY = topY + dy;
      const rightSphereX = topX + d_half;
      const rightSphereY = topY + dy;

      // Strings
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(leftSphereX, leftSphereY);
      ctx.moveTo(topX, topY);
      ctx.lineTo(rightSphereX, rightSphereY);
      ctx.stroke();

      // Angle arc
      ctx.strokeStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(topX, topY, 40, Math.PI / 2 - thetaRad, Math.PI / 2);
      ctx.stroke();
      ctx.arc(topX, topY, 40, Math.PI / 2, Math.PI / 2 + thetaRad);
      ctx.stroke();
      ctx.fillStyle = "#f59e0b";
      ctx.font = "11px Inter, sans-serif";
      ctx.fillText(`θ = ${state.thetaDeg}°`, topX + 12, topY + 52);

      // Separation dimension line
      ctx.strokeStyle = "#64748b";
      ctx.beginPath();
      ctx.moveTo(leftSphereX, leftSphereY + 30);
      ctx.lineTo(rightSphereX, rightSphereY + 30);
      ctx.moveTo(leftSphereX, leftSphereY + 25);
      ctx.lineTo(leftSphereX, leftSphereY + 35);
      ctx.moveTo(rightSphereX, rightSphereY + 25);
      ctx.lineTo(rightSphereX, rightSphereY + 35);
      ctx.stroke();
      ctx.fillStyle = "#94a3b8";
      ctx.textAlign = "center";
      ctx.fillText(`d = ${(2 * Math.sin(thetaRad) * 0.20).toFixed(3)} m`, topX, leftSphereY + 45);

      // Free-Body Diagram on Right Sphere
      // 1. Tension vector (along string)
      const tLen = 65;
      drawVector(ctx, rightSphereX, rightSphereY, rightSphereX - tLen * Math.sin(thetaRad), rightSphereY - tLen * Math.cos(thetaRad), "#a855f7", "T (Tension)");

      // 2. Weight vector (downward)
      const mgLen = tLen * Math.cos(thetaRad);
      drawVector(ctx, rightSphereX, rightSphereY, rightSphereX, rightSphereY + mgLen, "#ef4444", "mg (Gravity)");

      // 3. Electrostatic Repulsion vector (rightward)
      const feLen = tLen * Math.sin(thetaRad);
      drawVector(ctx, rightSphereX, rightSphereY, rightSphereX + feLen + 15, rightSphereY, "#38bdf8", "Fe = kQ²/d²");

      // Draw Spheres
      drawCharge(ctx, leftSphereX, leftSphereY, 2.0, "m, +Q");
      drawCharge(ctx, rightSphereX, rightSphereY, 2.0, "m, +Q");
    };

    const ctrl = document.getElementById(controlsId);
    if (ctrl) {
      ctrl.innerHTML = `
        <div class="sim-control-group">
          <label>Deflection Angle θ: <span id="val-theta">${state.thetaDeg}</span>°</label>
          <input type="range" id="range-theta" min="5" max="35" step="1" value="${state.thetaDeg}">
        </div>
      `;

      ctrl.querySelector("#range-theta").oninput = (e) => {
        state.thetaDeg = parseFloat(e.target.value);
        ctrl.querySelector("#val-theta").textContent = state.thetaDeg;
        render();
      };
    }

    render();
  }
};

// Helper: draw arrow vector with label
function drawVector(ctx, fromX, fromY, toX, toY, color, label) {
  const headLength = 9;
  const dx = toX - fromX;
  const dy = toY - fromY;
  const angle = Math.atan2(dy, dx);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();

  // Label
  if (label) {
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, toX + 10 * Math.cos(angle - Math.PI / 2), toY + 10 * Math.sin(angle - Math.PI / 2));
  }
}

// Helper: draw charged sphere with sign
function drawCharge(ctx, x, y, charge, label) {
  const radius = 16;
  const isPos = charge > 0;
  
  ctx.fillStyle = isPos ? "#ef4444" : "#3b82f6";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Sign inside circle
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 16px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(isPos ? "+" : "−", x, y);

  // Label above or below
  ctx.textBaseline = "alphabetic";
  ctx.font = "12px Inter, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  ctx.fillText(label, x, y - radius - 5);
}

// Helper: draw observer ear/head
function drawObserver(ctx, x, y, label) {
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(x, y, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#94a3b8";
  ctx.font = "10px Inter, sans-serif";
  ctx.textAlign = "center";
  const lines = label.split("\n");
  lines.forEach((l, idx) => {
    ctx.fillText(l, x, y + 20 + idx * 12);
  });
}
