document.addEventListener('DOMContentLoaded', function() {
    const sortButtons = document.querySelectorAll('.sort-buttons button');
    const publicationsContainer = document.querySelector('.publications');

    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sortBy = this.dataset.sort;
            const publications = Array.from(publicationsContainer.querySelectorAll('.publication-item'));

            publications.sort((a, b) => {
                let aValue = a.querySelector(`.publication-${sortBy}`).textContent.trim();
                let bValue = b.querySelector(`.publication-${sortBy}`).textContent.trim();

                if (sortBy === 'year') {
                    aValue = parseInt(aValue);
                    bValue = parseInt(bValue);
                }

                if (aValue < bValue) {
                    return -1;
                }
                if (aValue > bValue) {
                    return 1;
                }
                return 0;
            });

            publications.forEach(publication => {
                publicationsContainer.appendChild(publication);
            });
        });
    });
});
