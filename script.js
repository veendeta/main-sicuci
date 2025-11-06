<!-- ===================== script.js ===================== -->
/* Save as script.js */
(function(){
  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav if open
        document.getElementById('mainNav').classList.remove('show');
      }
    });
  });

  // Reveal fade-in elements on scroll
  var fades = document.querySelectorAll('.fade-in');
  function reveal(){
    var top = window.innerHeight * 0.85;
    fades.forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.top < top) el.classList.add('show');
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);
  document.addEventListener('DOMContentLoaded', function(){
    reveal();
    document.getElementById('year').textContent = new Date().getFullYear();
  });

  // Mobile menu toggle
  var toggle = document.getElementById('mobileToggle');
  toggle.addEventListener('click', function(){
    document.getElementById('mainNav').classList.toggle('show');
  });

  // Contact form (demo) and QRIS modal
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Terima kasih! Permintaan Anda telah diterima. Kami akan menghubungi Anda.');
    form.reset();
  });

  var qrisBtn = document.getElementById('payQris');
  var modal = document.getElementById('qrisModal');
  var closeModal = document.getElementById('closeModal');
  qrisBtn.addEventListener('click', function(){
    modal.setAttribute('aria-hidden','false');
  });
  closeModal.addEventListener('click', function(){
    modal.setAttribute('aria-hidden','true');
  });
  modal.addEventListener('click', function(e){
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });

})();
