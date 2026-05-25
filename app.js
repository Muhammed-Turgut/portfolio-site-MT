// 🤖 Muhammed Turgut - Fütüristik Portfolyo Motoru (app.js)
// Stark Industries Güvenlik ve Arayüz Protokolü Entegre Edilmiştir.

// 📂 Projeler Veritabanı
const PROJECTS = [
    {
        id: 1,
        title: "QRitik QR Code Scanning App",
        category: "Mobile",
        description: "QRitik, metin, telefon numarası, Wi-Fi, URL, e-posta ve ürün kodlarını QR koda ve barkoda dönüştürür. Yerel depolama ile verileri güvende tutar.",
        longDescription: "QRitik, tamamen Kotlin kullanılarak geliştirilmiş, MVVM mimarisine sahip üst düzey bir barkod ve QR kod tarama/oluşturma uygulamasıdır. Kullanıcılar oluşturdukları barkodları telefonlarının yerel depolama alanına kaydedebilir, geçmiş taramalarını inceleyebilir ve güvenli veri depolamanın keyfini çıkarabilir. Room Database ve CameraX kütüphaneleriyle optimize edilmiş performans sunar.",
        iconUrl: "assets/image/qr_app_image.png",
        githubUrl: "https://github.com/Muhammed-Turgut/QRitik-App",
        technologies: ["Kotlin", "Android SDK", "Room Database", "CameraX", "MVVM", "Material Design"]
    },
    {
        id: 2,
        title: "AI Avatar Generator",
        category: "AI",
        description: "Yapay zeka motorlarını kullanarak kullanıcı fotoğraflarından benzersiz, sanatsal ve fütüristik avatarlar üreten mobil uygulama projesi.",
        longDescription: "AI Avatar Generator, kullanıcıların kendi fotoğraflarını yükleyerek bulut tabanlı yapay zeka modelleri aracılığıyla fütüristik, sanatsal veya cyberpunk tarzda avatarlar oluşturmasını sağlayan mobil uygulamadır. Gelişmiş API entegrasyonları, ödeme kanalları ve cihaz içi görüntü ön işleme algoritmaları barındırır. Flutter ve Kotlin dilleriyle hibrit/yerel performans dengesinde geliştirilmiştir.",
        iconUrl: "assets/image/avatar_app_image.png",
        githubUrl: "https://github.com/Muhammed-Turgut/AiAvatarGenrator-App",
        technologies: ["Kotlin", "Flutter", "AI API Integration", "Firebase", "State Management"]
    },
    {
        id: 3,
        title: "Care Mate Health Assistant",
        category: "AI",
        description: "AI tabanlı akıllı sohbet robotu, bilgisayarlı görü (computer vision) ile duruş analizi yapan ve sağlıklı yaşam takibi sunan sağlık asistanı.",
        longDescription: "Care Mate, yapay zekayı günlük yaşam kalitesini artırmak için kullanan kapsamlı bir sağlık uygulamasıdır. İçerisindeki Smart Chat Bot, kullanıcıların semptomlarını dinleyerek ön rehberlik sunar. AI Posture Analysis aracı, telefon kamerasını kullanarak omurga hizalamasını gerçek zamanlı analiz eder ve kullanıcıya duruş uyarısı verir. Diyet, kalori ve su takibiyle entegre çalışır.",
        iconUrl: "assets/image/care_mate_app.png",
        githubUrl: "https://github.com/Muhammed-Turgut/Care-Mate-Health-App",
        technologies: ["Kotlin", "MediaPipe AI", "TensorFlow Lite", "Python Backend", "Firebase Auth", "Coroutines"]
    },
    {
        id: 4,
        title: "Time Nest: Pomodoro & To-Do",
        category: "Mobile",
        description: "Zaman yönetimi, yapılacaklar listesi ve yapay zeka destekli günlük/haftalık verimlilik raporlama sistemi sunan üretkenlik uygulaması.",
        longDescription: "Time Nest, Pomodoro tekniğini klasik yapılacaklar listesiyle (To-Do) birleştiren bir odaklanma uygulamasıdır. İçerisindeki yerleşik yapay zeka motoru, kullanıcının çalışma alışkanlıklarını analiz ederek zamanı daha verimli kullanması için kişiselleştirilmiş optimizasyon önerileri ve haftalık/aylık detaylı verimlilik grafikleri sunar.",
        iconUrl: "assets/image/time_nest_app.png",
        githubUrl: "https://github.com/Muhammed-Turgut/Time-Nest-App-MT",
        technologies: ["Flutter", "Dart", "SQLite", "Local Notifications", "AI Analytics Engine", "Provider"]
    },
    {
        id: 5,
        title: "Anında: Courier Application",
        category: "Mobile",
        description: "Kuryeler ve kullanıcılar arasında hızlı teslimat, canlı harita takibi ve anlık sipariş yönetimi sağlayan kurye otomasyon sistemi.",
        longDescription: "Anında, modern lojistik ihtiyaçlarına çözüm sunan bir kurye yönetim uygulamasıdır. Kuryelerin konumlarını canlı harita üzerinde (Google Maps API) takip eder, teslimat rotalarını en verimli şekilde optimize eder ve kuryelerin görevlerini yönetebileceği sade bir arayüz sağlar. Firebase Realtime Database ile anlık veri senkronizasyonu sunar.",
        iconUrl: "assets/image/anında_app.png",
        githubUrl: "https://github.com/Muhammed-Turgut/Aninda-App-MT",
        technologies: ["Kotlin", "Google Maps SDK", "Location Services", "Firebase Realtime DB", "REST API"]
    }
];

// 🧠 Yetenekler Veritabanı
const SKILLS = [
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", progress: 85 },
    { name: "Dart & Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 90 },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", progress: 70 },
    { name: "Figma UI/UX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", progress: 88 },
    { name: "Firebase / Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", progress: 80 },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", progress: 85 }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ BAŞLANGIÇ PROTOKOLLERİ
    initTypingEffect();
    renderSkills();
    renderProjects("All");
    renderBlogPosts();
    initScrollSpy();
    initModals();
    initContactForm();

    // 2️⃣ DİNAMİK YETENEKLERİ YAZDIRMA VE GÖZLEMLEME (Intersection Observer)
    function renderSkills() {
        const skillsGrid = document.querySelector(".skills-grid");
        if (!skillsGrid) return;
        skillsGrid.innerHTML = "";

        SKILLS.forEach(skill => {
            const skillItem = document.createElement("div");
            skillItem.className = "skill-item";
            skillItem.innerHTML = `
                <div class="skill-icon">
                    <img src="${skill.icon}" alt="${skill.name}">
                </div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar">
                    <div class="skill-progress" data-width="${skill.progress}%" style="width: 0%"></div>
                </div>
            `;
            skillsGrid.appendChild(skillItem);
        });

        // Sayfa kaydırıldığında yetenek barlarını doldur
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll(".skill-progress");
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute("data-width");
                    });
                }
            });
        }, { threshold: 0.15 });

        observer.observe(skillsGrid);
    }

    // 3️⃣ PROJELERİ LİSTELEME VE FİLTRELEME
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.getAttribute("data-category");
            renderProjects(category);
        });
    });

    function renderProjects(category) {
        const projectsGrid = document.querySelector(".projects-grid");
        if (!projectsGrid) return;
        
        // Animasyonlu geçiş için gridi önce hafifçe gizle
        projectsGrid.style.opacity = 0;
        projectsGrid.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            projectsGrid.innerHTML = "";
            const filtered = category === "All" ? PROJECTS : PROJECTS.filter(p => p.category === category);
            
            filtered.forEach(proj => {
                const card = document.createElement("div");
                card.className = "project-card";
                card.innerHTML = `
                    <div class="project-card-header">
                        <div class="project-icon">
                            <img src="${proj.iconUrl}" alt="${proj.title}">
                        </div>
                        <span class="project-category-badge">${proj.category}</span>
                    </div>
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-description">${proj.description}</p>
                    <div class="project-tech-tags">
                        ${proj.technologies.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <div class="project-card-actions">
                        <button class="project-btn-detail" onclick="openProjectDetail(${proj.id})">DETAYLAR</button>
                        <a href="${proj.githubUrl}" class="project-btn-github" target="_blank" rel="noopener noreferrer">
                            <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            KODU GÖR
                        </a>
                    </div>
                `;
                projectsGrid.appendChild(card);
            });
            
            projectsGrid.style.opacity = 1;
            projectsGrid.style.transform = "translateY(0)";
        }, 150);
    }

    // 4️⃣ DİNAMİK BLOG LİSTELEME
    function renderBlogPosts() {
        const blogGrid = document.querySelector(".blog-grid");
        if (!blogGrid) return;
        blogGrid.innerHTML = "";

        // blog-data.js dosyasından yüklenen BLOG_POSTS listesini kullanıyoruz
        if (typeof BLOG_POSTS !== "undefined") {
            BLOG_POSTS.forEach(post => {
                const card = document.createElement("div");
                card.className = "blog-card";
                card.innerHTML = `
                    <div class="blog-card-image" style="background-image: url('${post.image}')">
                        <span class="blog-badge">${post.category}</span>
                    </div>
                    <div class="blog-card-content">
                        <div class="blog-meta">${post.date} • ${post.readTime}</div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-summary">${post.summary}</p>
                        <button class="blog-read-btn" onclick="openBlogDetail(${post.id})">YAZIYI OKU ⚡</button>
                    </div>
                `;
                blogGrid.appendChild(card);
            });
        } else {
            blogGrid.innerHTML = "<p style='color: var(--stark-gold);'>Blog verisi yüklenemedi.</p>";
        }
    }

    // 5️⃣ KAHRAMAN ALANI YAZMA EFEKTİ (Typing Effect)
    function initTypingEffect() {
        const typingText = document.querySelector(".hero-subtitle");
        if (!typingText) return;
        
        const roles = [
            "Mobile App Developer",
            "UI/UX Designer",
            "Computer Engineering Student"
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typingSpeed = isDeleting ? 40 : 80;
            
            if (!isDeleting && charIndex === currentRole.length) {
                typingSpeed = 2000; // Kelime bittiğinde bekleme süresi
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Diğer kelimeye geçmeden önce bekleme
            }
            
            setTimeout(type, typingSpeed);
        }
        
        type();
    }

    // 6️⃣ SCROLL SPY - SOL DOCK AKTİF İKON PROTOKOLÜ
    function initScrollSpy() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".dock-link");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 250)) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    // 7️⃣ MODAL İŞLEMLERİ (Proje ve Blog detay modal pencereleri)
    let activeModal = null;

    function initModals() {
        // Modal kapatma butonları için dinleyiciler
        const closeBtns = document.querySelectorAll(".modal-close");
        closeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                closeAllModals();
            });
        });

        // Boşluğa tıklandığında kapatma
        window.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal-overlay")) {
                closeAllModals();
            }
        });
        
        // ESC tuşuyla kapatma
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeAllModals();
            }
        });
    }

    // Küresel modal açıcıları tanımlayalım (onclick ile çalışması için window objesine bağlıyoruz)
    window.openProjectDetail = function(projectId) {
        const proj = PROJECTS.find(p => p.id === projectId);
        if (!proj) return;

        const modal = document.getElementById("project-modal");
        const body = document.getElementById("project-modal-body");
        
        const appKeys = {
            1: "qritik",
            2: "avatar",
            3: "caremate",
            4: "timenest",
            5: "aninda"
        };
        const appKey = appKeys[proj.id];
        
        body.innerHTML = `
            <div class="modal-grid">
                <div class="modal-left">
                    <img src="${proj.iconUrl}" alt="${proj.title}" class="modal-icon">
                    <span class="modal-badge">${proj.category}</span>
                    <h2 class="modal-title">${proj.title}</h2>
                    <div class="modal-tech-list">
                        ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <a href="${proj.githubUrl}" class="modal-github-btn" target="_blank" rel="noopener noreferrer">
                        GitHub Kodunu İncele 🛠️
                    </a>
                    ${appKey ? `
                    <a href="privacy_policy.html?app=${appKey}" class="modal-privacy-btn" target="_blank" style="margin-top: 10px; display: inline-block; width: 100%; text-align: center;">
                        Gizlilik Politikası 🛡️
                    </a>
                    ` : ''}
                </div>
                <div class="modal-right">
                    <h3>PROJE DETAYI</h3>
                    <p class="modal-long-desc">${proj.longDescription}</p>
                </div>
            </div>
        `;

        modal.classList.add("open");
        document.body.style.overflow = "hidden"; // Sayfa kaymasını engelle
    };

    window.openBlogDetail = function(blogId) {
        if (typeof BLOG_POSTS === "undefined") return;
        const post = BLOG_POSTS.find(b => b.id === blogId);
        if (!post) return;

        const modal = document.getElementById("blog-modal");
        const body = document.getElementById("blog-modal-body");

        body.innerHTML = `
            <div class="blog-modal-header" style="background-image: linear-gradient(rgba(14,11,12,0.6), rgba(14,11,12,0.95)), url('${post.image}')">
                <span class="modal-badge">${post.category}</span>
                <h2 class="blog-modal-title">${post.title}</h2>
                <div class="blog-modal-meta">${post.date} • ${post.readTime}</div>
            </div>
            <div class="blog-modal-content">
                <div class="blog-rich-content">${post.content}</div>
                <div class="blog-tags">
                    ${post.tags.map(t => `<span class="blog-tag-badge">#${t}</span>`).join('')}
                </div>
            </div>
        `;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    };

    window.closeAllModals = function() {
        const modals = document.querySelectorAll(".modal-overlay");
        modals.forEach(m => m.classList.remove("open"));
        document.body.style.overflow = "auto";
    };

    // 8️⃣ YEREL İLETİŞİM FORMU YÖNETİMİ
    function initContactForm() {
        const form = document.querySelector(".contact-form");
        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameInput = form.querySelector("input[type='text']");
            const emailInput = form.querySelector("input[type='email']");
            const msgInput = form.querySelector("textarea");

            // Mesaj datası oluştur
            const newMessage = {
                id: Date.now(),
                name: nameInput.value,
                email: emailInput.value,
                message: msgInput.value,
                date: new Date().toLocaleString("tr-TR"),
                status: "Unread"
            };

            // LocalStorage'a kaydet (Muhammed'in tarayıcısında mesajlar birikebilsin diye yedek olarak)
            let existingMessages = [];
            try {
                const stored = localStorage.getItem("muhammed_portfolio_messages");
                if (stored) existingMessages = JSON.parse(stored);
            } catch (err) {
                console.error(err);
            }

            existingMessages.push(newMessage);
            localStorage.setItem("muhammed_portfolio_messages", JSON.stringify(existingMessages));

            // Formu temizle
            form.reset();

            // Harika bir fütüristik Toast uyarısı göster
            showToast("MESAJ BAŞARIYLA İLETİLDİ! 🚀", "Ark reaktörü sinyali alındı. En kısa sürede geri döneceğim.");
        });
    }

    // Fütüristik Toast Bildirim Kutusu
    function showToast(title, body) {
        const toast = document.createElement("div");
        toast.className = "stark-toast";
        toast.innerHTML = `
            <div class="toast-glow-border"></div>
            <div class="toast-content">
                <div class="toast-header">
                    <span class="toast-icon">⚡</span>
                    <strong>${title}</strong>
                </div>
                <p>${body}</p>
            </div>
        `;

        document.body.appendChild(toast);
        
        // Aktifleşme ve kaybolma animasyonları
        setTimeout(() => toast.classList.add("show"), 100);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 500);
        }, 4500);
    }
});
