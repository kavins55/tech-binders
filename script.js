

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        
        // If it's a stats container, trigger the counter animation
        if (entry.target.classList.contains('stats-container')) {
            startCounters();
        }
        
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Number Counter Animation
let countersStarted = false;
function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // lower is slower
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        
        const updateCount = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Particle generation removed — no particles in new design

// Portfolio Data
const portfolioData = {
    kannan: {
        name: "KANNAN KS",
        role: "Software Developer",
        summary: "Passionate Full-Stack Developer with extensive experience in building scalable web applications and enterprise-level architecture.",
        skills: ["React", "Node.js", "Python", "System Architecture", "Cloud Computing"],
        projects: "Led the development of 5+ enterprise SaaS platforms and managed scalable cloud deployments.",
        certifications: "AWS Certified Solutions Architect, Google Cloud Professional Developer",
        github: "#",
        linkedin: "#",
        email: "mailto:contact@example.com"
    },
    kavin: {
        name: "KAVIN S",
        role: "Software Developer",
        summary: "Backend specialist with a deep focus on API design, performance optimization, and secure database management.",
        skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Docker"],
        projects: "Designed high-performance microservices serving millions of requests daily.",
        certifications: "Oracle Certified Professional, MongoDB Developer Certified",
        github: "#",
        linkedin: "#",
        email: "mailto:contact@example.com"
    },
    madhan: {
        name: "MADHAN R",
        role: "Software Developer",
        summary: "Innovative developer focusing on the intersection of Web Technologies and Internet of Things (IoT) solutions.",
        skills: ["C++", "JavaScript", "IoT Platforms", "Embedded Systems", "React"],
        projects: "Developed comprehensive smart-home automation dashboards connecting IoT hardware with web interfaces.",
        certifications: "Cisco IoT Fundamentals, Full-Stack Web Development",
        github: "#",
        linkedin: "#",
        email: "mailto:contact@example.com"
    },
    pavithra: {
        name: "PAVITHRA R",
        role: "Content Creator",
        summary: "Creative writer and educational content specialist dedicated to making complex technology concepts accessible.",
        skills: ["Technical Writing", "Curriculum Design", "Copywriting", "SEO", "Instructional Design"],
        projects: "Authored 100+ technical guides and managed curriculum development for coding bootcamps.",
        certifications: "Google Technical Writing, Content Marketing Specialist",
        linkedin: "#",
        email: "mailto:contact@example.com"
    },
    yogeswaran: {
        name: "YOGESWARAN R",
        role: "Content Creator",
        summary: "Strategic content creator focused on digital storytelling and brand narrative development.",
        skills: ["Content Strategy", "Digital Storytelling", "Brand Voice", "Blogging", "Multimedia"],
        projects: "Developed the core brand narrative for top-tier SaaS startups and scaled blog traffic by 300%.",
        certifications: "HubSpot Content Marketing, Advanced Storytelling",
        linkedin: "#",
        email: "mailto:contact@example.com"
    },
    muthukumar: {
        name: "MUTHUKUMAR S",
        role: "Digital Content Specialist",
        summary: "Expert in digital branding and visual content management, ensuring unified and powerful brand identities.",
        skills: ["Digital Branding", "Graphic Design", "Video Editing", "Figma", "Adobe Creative Suite"],
        projects: "Led the complete visual rebranding of 3 major tech platforms.",
        certifications: "Adobe Certified Expert, UI/UX Principles",
        linkedin: "#",
        email: "mailto:contact@example.com"
    },
    mervin: {
        name: "MERVIN R",
        role: "Digital Content Specialist",
        summary: "Data-driven digital marketer focused on audience engagement, growth hacking, and campaign optimization.",
        skills: ["Digital Marketing", "SEO/SEM", "Growth Hacking", "Social Media Strategy", "Analytics"],
        projects: "Executed high-ROI digital campaigns resulting in 500% audience growth across platforms.",
        certifications: "Google Ads Certification, Google Analytics Professional",
        linkedin: "#",
        email: "mailto:contact@example.com"
    }
};

// Modal Logic
const modal = document.getElementById('portfolio-modal');
const modalBody = document.getElementById('modal-body-content');

function openPortfolio(memberId) {
    const data = portfolioData[memberId];
    if (!data) return;

    let githubHtml = '';
    if (data.github) {
        githubHtml = `<a href="${data.github}" target="_blank"><i class="fab fa-github"></i></a>`;
    }

    const skillsHtml = data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

    const content = `
        <div class="modal-header">
            <div class="modal-avatar">
                <div class="modal-avatar-inner"><i class="fas fa-user"></i></div>
            </div>
            <div class="modal-title">
                <h3>${data.name}</h3>
                <p>${data.role}</p>
                <div class="modal-socials">
                    <a href="${data.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${data.email}"><i class="fas fa-envelope"></i></a>
                    ${githubHtml}
                </div>
            </div>
        </div>
        <div class="modal-section">
            <h4>Professional Summary</h4>
            <p>${data.summary}</p>
        </div>
        <div class="modal-section">
            <h4>Core Expertise</h4>
            <div class="skill-tags">
                ${skillsHtml}
            </div>
        </div>
        <div class="modal-section">
            <h4>Key Projects & Experience</h4>
            <p>${data.projects}</p>
        </div>
        <div class="modal-section">
            <h4>Certifications</h4>
            <p>${data.certifications}</p>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closePortfolio() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) closePortfolio();
        if (document.getElementById('projectModal')?.classList.contains('active')) closeProjectModal();
    }
});

// ==================== PROJECT MODAL LOGIC ====================
const projectImages = {
    "p9":  ["1.jpeg", "2.jpeg"],
    "p6":  ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"],
    "p10": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
    "p4":  ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
    "p1":  ["1.jpeg", "2.jpeg", "565.jpeg", "WhatsApp Image 2026-06-20 at 9.49.05 AM.jpeg", "WhatsApp Image 2026-06-20 at 9.49.06 AM.jpeg", "WhatsApp Image 2026-06-20 at 9.49.07 AM.jpeg"],
    "p2":  ["1.jpeg", "10.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"],
    "p7":  ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
    "p8":  ["1.jpeg", "2.jpeg", "3.jpeg"],
    "p11": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "another p11.jpeg"],
    "p5":  ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"],
    "p3":  ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]
};

function openProjectModal(projectId, projectTitle) {
    const pModal = document.getElementById('projectModal');
    const titleEl = document.getElementById('modalProjectTitle');
    const galleryEl = document.getElementById('modalImageGallery');
    
    if (!pModal) return;
    
    titleEl.textContent = projectTitle;
    galleryEl.innerHTML = '';
    
    const images = projectImages[projectId] || [];
    images.forEach(imgName => {
        const img = document.createElement('img');
        img.src = `assest/project/${projectId}/${imgName}`;
        img.alt = `${projectTitle} Image`;
        img.loading = 'lazy';
        galleryEl.appendChild(img);
    });
    
    pModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const pModal = document.getElementById('projectModal');
    if (pModal) {
        pModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== WHATSAPP CONTACT FORM LOGIC ====================
function sendWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('wa-name').value;
    const email = document.getElementById('wa-email').value;
    const phone = document.getElementById('wa-phone').value;
    const message = document.getElementById('wa-message').value;
    
    // Tech Binders WhatsApp Number
    const whatsappNumber = "919790876317";
    
    // Construct the WhatsApp message
    const whatsappMessage = `*New Contact Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
    
    // Encode the message and build the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
}

