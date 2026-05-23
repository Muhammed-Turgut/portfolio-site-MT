// 🤖 Muhammed Turgut - Standalone İletişim Denetleyicisi (contact.js)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameInput = form.querySelector("input[type='text']");
        const emailInput = form.querySelector("input[type='email']");
        const msgInput = form.querySelector("textarea");

        // Yeni mesaj verisi
        const newMessage = {
            id: Date.now(),
            name: nameInput.value,
            email: emailInput.value,
            message: msgInput.value,
            date: new Date().toLocaleString("tr-TR"),
            status: "Unread"
        };

        // LocalStorage yedekleme
        let existingMessages = [];
        try {
            const stored = localStorage.getItem("muhammed_portfolio_messages");
            if (stored) existingMessages = JSON.parse(stored);
        } catch (err) {
            console.error(err);
        }

        existingMessages.push(newMessage);
        localStorage.setItem("muhammed_portfolio_messages", JSON.stringify(existingMessages));

        // Formu sıfırla
        form.reset();

        // Stark Toast Bildirimi Göster
        showToast("BAĞLANTI BAŞARILI! 🚀", "Ark reaktörü sinyali alındı. Mesajınız Stark veri tabanına güvenle kaydedildi.");
    });

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
        
        // Gösterme animasyonunu tetikle
        setTimeout(() => toast.classList.add("show"), 100);
        
        // 4.5 saniye sonra kaldır
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 500);
        }, 4500);
    }
});
