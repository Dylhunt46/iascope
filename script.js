document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-decouvrir');

  if (btn) {
    btn.addEventListener('click', () => {
      const sectionOutils = document.getElementById('outils');
      sectionOutils.scrollIntoView({ behavior: 'smooth' });
    });
  }

  console.log('IAscope est prêt !');
});
