// Static starfield — drawn once, no animation
(function () {
    const canvas = document.getElementById('star-bg');
    const ctx    = canvas.getContext('2d');

    function draw() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const count = Math.floor((canvas.width * canvas.height) / 1800);
        for (let i = 0; i < count; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const r = Math.random() * 1.2 + 0.2;
            const a = Math.random() * 0.7 + 0.2;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${a})`;
            ctx.fill();
        }
        // Golden accent stars
        for (let i = 0; i < 18; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const r = Math.random() * 1.8 + 0.8;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,215,0,${Math.random() * 0.5 + 0.2})`;
            ctx.fill();
            const g = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
            g.addColorStop(0, 'rgba(255,215,0,0.08)');
            g.addColorStop(1, 'rgba(255,215,0,0)');
            ctx.beginPath();
            ctx.arc(x, y, r * 5, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
        }
    }

    draw();
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(draw, 200); });
})();
