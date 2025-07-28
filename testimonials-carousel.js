// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
    { name: "Noelia Salas",        city: "Berazategui",      time: "6:15 pm",  text: "Entré por un video en Facebook y pensé que era un engaño, pero al final me triplicaron la carga: $2.000 a $6.000. Muy buena atención." },
    { name: "Florencia Torres",    city: "San Isidro",       time: "4:40 pm",  text: "Vi un anuncio en Instagram, dudé de la promo, pero recibí el 200% extra y pude retirar sin problemas. Respetuosos y rápidos." },
    { name: "Santiago Cáceres",    city: "La Matanza",       time: "8:00 am",  text: "Gracias a un video de FB me animé, y triplicaron mi depósito de $7.000 a $21.000. Ganas más chances de ganar, ¡real!" },
    { name: "Federico Martínez",   city: "Morón",            time: "7:55 pm",  text: "Lo vi en un anuncio de Instagram y fui escéptico, pero el bono 200% me sorprendió. Muy buena atención al cliente." },
    { name: "Gonzalo Romero",      city: "Escobar",          time: "5:35 pm",  text: "Entré pensando que era trucho, pero me triplicaron $6.000 y el soporte fue impecable. Súper recomendables." },
    { name: "Camila López",        city: "Tigre",            time: "6:10 pm",  text: "Un video en Facebook llamó mi atención, cargué $6.000 y recibí $18.000 con MMWB. Todo auténtico y sin letra chica." },
    { name: "Diego Fernández",     city: "Pilar",            time: "11:05 am", text: "Desconfiaba del 200%, lo vi en Instagram y terminé ganando. Retiro instantáneo y atención de primera." },
    { name: "Micaela Aguirre",     city: "Lomas de Zamora",  time: "6:45 pm",  text: "Vi un video en FB, pensé que era mentira, pero cargué $6.000 y jugué con $18.000. Muy buena experiencia." },
    { name: "Alejandro Pérez",     city: "La Plata",         time: "10:12 am", text: "Anuncio de Insta me convenció; el bono del 200% funciona de verdad. Cargué $5.000 y jugué con $15.000." },
    { name: "Ramiro Toledo",       city: "San Miguel",       time: "2:05 pm",  text: "Vídeo en redes me mostró cómo triplican tu carga. De $4.500 a $13.500 sin complicaciones y con trato excelente." },
    { name: "Lucía Álvarez",       city: "Malvinas Argentinas", time: "10:50 am", text: "Al principio dudé, pero el MMWB hizo que mis $4.000 sean $12.000. Atención amable y fiable." },
    { name: "Ignacio Varela",      city: "Lomas de Zamora",  time: "9:15 pm",  text: "Descubrí la promo en Facebook, cargué $8.000 y jugué con $24.000. Todo transparente y con respuestas rápidas." },
    { name: "Julieta Núñez",       city: "Florencio Varela", time: "1:20 pm",  text: "Un anuncio de Insta decía “3× tu carga”, lo probé y fue real: $5.000 a $15.000. Soporte muy atento." },
    { name: "Valentina Suárez",    city: "Bahía Blanca",     time: "8:20 am",  text: "Entré por un video en FB, untaron el 200%, doblé mi saldo y retiré al instante. Súper recomendados." },
    { name: "Tomás Gaitán",        city: "Campana",          time: "3:30 pm",  text: "Vi historias de Instagram y decidí probar. Triplicaron mi depósito y gané más de lo que esperaba." },
    { name: "Camilo Bravo",        city: "Lanús",            time: "11:55 am", text: "No creía hasta que me triplicaron los $3.000 a $9.000. Excelente trato y sin letra chica." },
    { name: "Lucas Rodríguez",     city: "Quilmes",          time: "2:30 pm",  text: "Video en Facebook mostró la promo y cargué $10.000. Jugué con $30.000 y retiré enseguida." },
    { name: "Carolina Juárez",     city: "San Fernando",     time: "7:59 am",  text: "Anuncio de Insta decía 200% y 3× tu carga. Lo probé y todo fue real: trato impecable y retiros rápidos." },
    { name: "Bianca Zambrano",     city: "Moreno",           time: "9:40 am",  text: "Desconfianza inicial, pero MMWB triplicó mis $2.500 a $7.500. Muy recomendable." },
    { name: "Martina Paredes",     city: "Avellaneda",       time: "3:50 pm",  text: "Lo vi en Facebook, cargué y recibí 200% extra. Más chances de ganar y atención de lujo." }
  ];


  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
   div.innerHTML = `
  <p class="header">
    <img
      src="images/usuario.png"
      alt="Usuario"
      class="icon icon-user"
    />
    ${item.name.trim()}
    <span class="time">${item.time}</span>
  </p>
  <p class="message">
    "${item.text}"
  </p>
  <p class="meta">
    <img
      src="images/pin.png"
      alt="Ubicación"
      class="icon icon-pin"
    />
    ${item.city.trim()}
  </p>
`;

    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 6500);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('load', () => {
    const skeleton = img.parentElement.querySelector('.skeleton');
    if (skeleton) skeleton.remove();
  });
});