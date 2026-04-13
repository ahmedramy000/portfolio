document.addEventListener('DOMContentLoaded', () => {
    // 1. Progress Bar Animation
    const skillSection = document.getElementById('skills');
    const fills = document.querySelectorAll('.fill');

    const animateSkills = () => {
        fills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            fill.style.width = width;
        });
    };

    // 2. Gallery Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });

    // 3. Trigger Skill animation on Scroll
    window.addEventListener('scroll', () => {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            animateSkills();
        }
    });
});