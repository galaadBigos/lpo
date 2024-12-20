document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li > a[aria-haspopup="true"]');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            const expanded = menuItem.getAttribute('aria-expanded') === 'true';
            menuItem.setAttribute('aria-expanded', !expanded);

            const subMenu = menuItem.nextElementSibling;
            if (subMenu) {
                subMenu.style.display = expanded ? 'none' : 'block';
            }
        });

        menuItem.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                menuItem.click();
            }
        });
    });

    document.addEventListener('click', (event) => {
        menuItems.forEach(menuItem => {
            const subMenu = menuItem.nextElementSibling;
            if (subMenu && !menuItem.contains(event.target) && !subMenu.contains(event.target)) {
                menuItem.setAttribute('aria-expanded', 'false');
                subMenu.style.display = 'none';
            }
        });
    });
});