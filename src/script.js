<script>
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    setTimeout(() => {
      cards.forEach(card => {
        card.classList.remove('animate__animated', 'animate__fadeInUp');
      });
    }, 1000); // remove animação após 1 segundo
  });
</script>
