<script>
    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', function() {
            const zoomOverlay = document.querySelector('.zoom-overlay');
            const zoomedImage = document.getElementById('zoomedImage');
            
            // Set the clicked image as the zoomed image
            zoomedImage.src = this.src;
            
            // Show the zoom overlay
            zoomOverlay.style.display = 'flex';
        });
    });

    // Close the zoom overlay when clicked
    document.querySelector('.close-zoom').addEventListener('click', function() {
        document.querySelector('.zoom-overlay').style.display = 'none';
    });
</script>