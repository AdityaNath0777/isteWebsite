//background gradient change on scroll
const container = document.querySelector('.events');
const containerTop = container.offsetTop;

window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight } = document.documentElement;
    if (scrollTop > containerTop - clientHeight + 200) {
        const value = (scrollTop - (containerTop - clientHeight + 200)) / 250 * 20;
        container.style.background = `radial-gradient(
            circle at ${90 - value / 3}% 80%,
            rgba(255,200,58, ${value / 150}) 0%,
            transparent ${value}%
          ),
          radial-gradient(circle at ${70 - value / 3}% 60%, rgba(204, 80, 54, ${value / 150}) 0%, transparent ${value + 10}%),
          radial-gradient(circle at ${90 - value / 3}% 50%, rgba(184, 233, 134, ${value / 150}) 0%, transparent ${value + 10}%)`;
    } else {
        container.style.background = `radial-gradient(
            circle at 90% 80%,
            rgba(255,200,58, 0.2) 0%,
            transparent 20%
          ),
          radial-gradient(circle at 70% 60%, rgba(204, 80, 54, 0.2) 0%, transparent 30%),
          radial-gradient(circle at 90% 50%, rgba(184, 233, 134, 0.2) 0%, transparent 30%)`;

    }

});