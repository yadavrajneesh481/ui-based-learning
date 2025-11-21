(function () {
    // Function to create and append styles
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #new-nav-container {
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 10000;
                display: flex;
                gap: 10px;
                padding: 8px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 50px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
                transition: all 0.3s ease;
            }

            #new-nav-container:hover {
                background: rgba(255, 255, 255, 0.2);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
            }

            .new-nav-btn {
                padding: 8px 16px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                outline: none;
            }

            .new-nav-btn:hover {
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.5);
                background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
            }

            .new-nav-btn:active {
                transform: translateY(-1px);
            }

            .new-nav-btn svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }

            /* Hide existing back buttons */
            .home-link, 
            .back-btn, 
            .btn-back, 
            .back-button,
            [class*="back-to"],
            a[href="index.html"]:not(.nav-link):not(.logo),
            a[href="../index.html"]:not(.nav-link),
            a[href="./index.html"]:not(.nav-link) {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Function to hide specific existing back buttons based on text content
    function hideExistingNav() {
        const elements = document.querySelectorAll('a, button');
        elements.forEach(el => {
            // Skip our own buttons
            if (el.id && el.id.startsWith('new-nav')) return;

            const text = el.textContent.toLowerCase().trim();
            const href = el.getAttribute('href');

            // Text based heuristics
            if (text.includes('back to') || text === 'back' || text.includes('return to') || text.includes('go back')) {
                el.style.display = 'none';
            }

            // Specific check for home links that act as back buttons
            if (text.includes('home') && (href === 'index.html' || href === '../index.html' || href === './index.html')) {
                // Only hide if it looks like a standalone back/home button, not main nav
                if (!el.closest('nav') && !el.closest('.navbar') && !el.closest('header')) {
                    el.style.display = 'none';
                }
            }
        });
    }

    function createNav() {
        const container = document.createElement('div');
        container.id = 'new-nav-container';

        // Back Button
        const backBtn = document.createElement('button');
        backBtn.className = 'new-nav-btn';
        backBtn.id = 'new-nav-back';
        backBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back
        `;
        backBtn.onclick = function () { window.history.back(); };

        // Forward Button
        const fwdBtn = document.createElement('button');
        fwdBtn.className = 'new-nav-btn';
        fwdBtn.id = 'new-nav-forward';
        fwdBtn.innerHTML = `
            Forward
            <svg viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
        `;
        fwdBtn.onclick = function () { window.history.forward(); };

        container.appendChild(backBtn);
        container.appendChild(fwdBtn);
        document.body.appendChild(container);
    }

    if (!document.getElementById('new-nav-container')) {
        addStyles();
        // Run hide logic immediately and also after a small delay to catch dynamic content
        hideExistingNav();
        setTimeout(hideExistingNav, 500);
        setTimeout(hideExistingNav, 1500);
        createNav();
    }
})();
