    // Function to handle link clicks
    function handleLinkClick(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Toggle the collapsible
        $(targetId).collapse('toggle');

        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Add event listeners to all links
    document.querySelectorAll('a[href^="#expand"]').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Check if there's a hash in the URL on page load
    window.addEventListener('load', function() {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                $(hash).collapse('show'); // Expand the collapsible
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to it
            }
        }
    });