const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');
const oldHtml = `    <!-- Vision & Mission Section -->
    <section class="vision-mission-section">
        <div class="container">
            <div class="vm-grid">
                <div class="vm-card glass-card reveal">
                    <div class="vm-icon"><i class="fas fa-eye"></i></div>
                    <h3>Our Vision</h3>
                    <p>To be a global technology ecosystem that transforms ideas into innovation by empowering people, businesses, and communities through learning and digital solutions.</p>
                </div>
                <div class="vm-card glass-card reveal delay-1">
                    <div class="vm-icon"><i class="fas fa-rocket"></i></div>
                    <h3>Our Mission</h3>
                    <p>To deliver world-class technology education, innovative software solutions, and impactful project experiences that enable individuals and organizations to learn, build, and achieve excellence in the digital era.</p>
                </div>
            </div>
        </div>
    </section>`;

const newHtml = `    <!-- Premium Vision & Mission Section -->
    <section class="premium-vm-section" id="purpose">
        <div class="vm-bg-effects">
            <div class="vm-grid-pattern"></div>
            <div class="vm-gradient-mesh"></div>
        </div>
        
        <div class="container vm-container">
            <div class="section-header reveal">
                <h2 class="section-title">OUR PURPOSE</h2>
                <p class="section-subtitle">Transforming Ideas Into Innovation</p>
            </div>
            
            <div class="vm-showcase">
                <!-- Connecting Line -->
                <div class="vm-connecting-line">
                    <div class="vm-line-light"></div>
                </div>

                <div class="vm-showcase-grid">
                    <!-- Vision Card -->
                    <div class="vm-card-container reveal-left">
                        <div class="premium-card vision-card glass-card">
                            <div class="card-glow vision-glow"></div>
                            <div class="vm-icon vision-icon">
                                <i class="fas fa-eye"></i>
                            </div>
                            <h3>The Future We Envision</h3>
                            <p>To be a global technology ecosystem that transforms ideas into innovation by empowering people, businesses, and communities through learning and digital solutions.</p>
                        </div>
                    </div>
                    
                    <!-- Center Logo -->
                    <div class="vm-center-logo reveal delay-1">
                        <div class="tb-logo-container">
                            <div class="tb-ring tb-ring-1"></div>
                            <div class="tb-ring tb-ring-2"></div>
                            <div class="tb-ring tb-ring-3"></div>
                            <div class="tb-logo-circle glass-card">
                                <span>TB</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Mission Card -->
                    <div class="vm-card-container reveal-right delay-2">
                        <div class="premium-card mission-card glass-card">
                            <div class="card-glow mission-glow"></div>
                            <div class="vm-icon mission-icon">
                                <i class="fas fa-rocket"></i>
                            </div>
                            <h3>How We Make It Happen</h3>
                            <p>To deliver world-class technology education, innovative software solutions, and impactful project experiences that enable individuals and organizations to learn, build, and achieve excellence in the digital era.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

if (html.includes(oldHtml)) {
    html = html.replace(oldHtml, newHtml);
    fs.writeFileSync('index.html', html);
    console.log('HTML updated successfully');
} else {
    console.log('Error: Could not find old HTML section.');
}

// 2. UPDATE JS
let js = fs.readFileSync('script.js', 'utf8');
js = js.replace("const revealElements = document.querySelectorAll('.reveal');", "const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');");
fs.writeFileSync('script.js', js);
console.log('JS updated successfully');

// 3. UPDATE CSS
let css = fs.readFileSync('style.css', 'utf8');
const oldCss = `/* Vision & Mission Section */
.vision-mission-section {
    padding: 5rem 0;
    background: var(--bg-darker);
}

.vm-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.vm-card {
    padding: 3rem;
    position: relative;
    overflow: hidden;
}

.vm-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
}

.vm-card:hover::before {
    transform: scaleX(1);
}

.vm-icon {
    font-size: 2.5rem;
    color: var(--primary-light);
    margin-bottom: 1.5rem;
}

.vm-card h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--text-white);
}

.vm-card p {
    color: var(--text-muted);
    font-size: 1.1rem;
}`;

const newCss = `/* Premium Vision & Mission Section */
.premium-vm-section {
    padding: 10rem 0;
    position: relative;
    background: var(--bg-dark);
    overflow: hidden;
}

.vm-bg-effects {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0; pointer-events: none;
}

.vm-grid-pattern {
    position: absolute;
    width: 100%; height: 100%;
    background-image: linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
    animation: gridMove 20s linear infinite;
    opacity: 0.5;
}

.vm-gradient-mesh {
    position: absolute;
    width: 100%; height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 40%);
}

.vm-container {
    position: relative;
    z-index: 2;
}

.vm-showcase {
    position: relative;
    margin-top: 5rem;
}

.vm-connecting-line {
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), rgba(245, 158, 11, 0.3), transparent);
    transform: translateY(-50%);
    z-index: 1;
}

.vm-line-light {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100px;
    height: 4px;
    background: #fff;
    box-shadow: 0 0 15px 5px rgba(245, 158, 11, 0.6);
    border-radius: 50%;
    animation: lineTravel 4s infinite ease-in-out;
}

@keyframes lineTravel {
    0% { left: 0; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
}

.vm-showcase-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    gap: 2rem;
}

.vm-card-container {
    flex: 1;
    max-width: 400px;
}

.premium-card {
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 24px;
    padding: 3rem 2rem;
    position: relative;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
}

.premium-card:hover {
    transform: translateY(-10px) scale(1.02);
}

.card-glow {
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.premium-card:hover .card-glow {
    opacity: 1;
}

.vision-card {
    border-left: 2px solid rgba(124, 58, 237, 0.5);
}
.vision-card:hover {
    box-shadow: 0 10px 40px -10px rgba(124, 58, 237, 0.4);
    border-left: 2px solid rgba(124, 58, 237, 1);
}

.mission-card {
    border-right: 2px solid rgba(245, 158, 11, 0.5);
}
.mission-card:hover {
    box-shadow: 0 10px 40px -10px rgba(245, 158, 11, 0.4);
    border-right: 2px solid rgba(245, 158, 11, 1);
}

.vm-icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    display: inline-flex;
    padding: 1rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
}

.vision-icon {
    color: var(--primary-light);
    box-shadow: inset 0 0 20px rgba(124, 58, 237, 0.2);
}

.mission-icon {
    color: var(--accent);
    box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.2);
}

.premium-card h3 {
    font-size: 1.5rem;
    font-family: var(--font-heading);
    color: var(--text-white);
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
}

.premium-card p {
    color: var(--text-muted);
    line-height: 1.7;
    font-size: 1.05rem;
}

.vm-center-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
}

.tb-logo-container {
    position: relative;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tb-logo-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--bg-card), var(--bg-darker));
    border: 2px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.05);
    animation: pulseLogo 3s infinite alternate ease-in-out;
}

.tb-logo-circle span {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--primary-light), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -2px;
}

.tb-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid transparent;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}

.tb-ring-1 {
    width: 140px; height: 140px;
    border-top: 1px solid var(--primary-light);
    border-bottom: 1px solid var(--accent);
    animation: rotateRing 8s linear infinite;
}

.tb-ring-2 {
    width: 180px; height: 180px;
    border-left: 1px dashed var(--primary);
    border-right: 1px dashed rgba(255, 255, 255, 0.3);
    animation: rotateRing 12s linear infinite reverse;
}

.tb-ring-3 {
    width: 220px; height: 220px;
    border: 1px solid rgba(124, 58, 237, 0.2);
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.2) inset;
    animation: pulseRing 4s infinite alternate;
}

@keyframes pulseLogo {
    0% { transform: scale(1); box-shadow: 0 0 30px rgba(124, 58, 237, 0.3); }
    100% { transform: scale(1.05); box-shadow: 0 0 50px rgba(245, 158, 11, 0.5); }
}

@keyframes rotateRing {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes pulseRing {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

.reveal-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}
.reveal-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}
.reveal-left.active, .reveal-right.active {
    opacity: 1;
    transform: translateX(0);
}

@media (max-width: 992px) {
    .vm-showcase-grid {
        flex-direction: column;
        gap: 4rem;
    }
    .vm-connecting-line {
        top: 0; bottom: 0;
        left: 50%; right: auto;
        width: 2px; height: 100%;
        transform: translateX(-50%);
        background: linear-gradient(180deg, transparent, rgba(124, 58, 237, 0.3), rgba(245, 158, 11, 0.3), transparent);
    }
    .vm-line-light {
        top: 0; left: -1px; width: 4px; height: 100px;
        animation: lineTravelVert 4s infinite ease-in-out;
    }
    @keyframes lineTravelVert {
        0% { top: 0; opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
    }
}`;

if (css.includes(oldCss)) {
    css = css.replace(oldCss, newCss);
    fs.writeFileSync('style.css', css);
    console.log('CSS updated successfully');
} else {
    console.log('Error: Could not find old CSS section. Appending new CSS to the end of the file.');
    fs.appendFileSync('style.css', '\n' + newCss);
}
