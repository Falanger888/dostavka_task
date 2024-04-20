<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Slider</title>
    <style>
    .slider {
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .slide-wrapper {
        display: flex;
        transition: transform 0.3s ease;
    }

    .slide {
        flex: 0 0 100%;
        /* Makes each slide take full width */
    }
    </style>
</head>

<body>
    <!-- Slider Container -->
    <div class="slider">
        <div class="slide-wrapper">
            <div class="slide">Слайд 1</div>
            <div class="slide">Слайд 2</div>
            <div class="slide">Слайд 3</div>
            <!-- Add more slides as needed -->
        </div>
    </div>

    <script>
    // JavaScript for Slider functionality
    const slider = document.querySelector('.slider');
    const slideWrapper = document.querySelector('.slide-wrapper');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('touchend', touchEnd);

    let startX = 0;
    let endX = 0;

    function touchStart(e) {
        startX = e.touches[0].clientX;
    }

    function touchMove(e) {
        endX = e.touches[0].clientX;
    }

    function touchEnd() {
        const difference = startX - endX;
        if (difference > 50) {
            currentIndex = (currentIndex + 1) % slides.length;
        } else if (difference < -50) {
            currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        }
        slideWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    </script>
</body>

</html>