document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Typed.js function
    ===================================== */
    const identityEl = document.querySelector(".identity");

    if (identityEl && typeof Typed !== "undefined") {
        new Typed(".identity", {
            strings: [
                "Clinical Optometrist",
                "Estate Realtor",
                "Programmer"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    }

    /* =====================================
       Helper: trigger navbar click
       (single source of truth)
    ===================================== */
    function triggerNav(index) {
        const navItem = document.querySelector(
            `.nav-list li:nth-child(${index + 1})`
        );
        navItem?.click();
    }

    /* =====================================
       Home → About button
    ===================================== */
    const goAboutBtn = document.getElementById("goAbout");

    function openAbout(e) {
        e.preventDefault();
        triggerNav(1); // About
    }

    goAboutBtn?.addEventListener("click", openAbout);
    goAboutBtn?.addEventListener("touchstart", openAbout, { passive: false });

    /* =====================================
       About → Contact button (mobile-safe)
    ===================================== */
    const goContactBtn = document.getElementById("goContact");

    function openContact(e) {
        e.preventDefault();
        triggerNav(4); // Contact
    }

    goContactBtn?.addEventListener("click", openContact);
    goContactBtn?.addEventListener("touchstart", openContact, { passive: false });

});
