function startSurprise() {
  document.getElementById('startButton').style.display = 'none'; // Isso ocultará o botão

  var heartContainer = document.getElementById("heartContainer");
  heartContainer.innerHTML = ''; // Limpar corações anteriores se houver
  // Cria múltiplos corações em posições aleatórias
  for (var i = 0; i < 100; i++) {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heartContainer.appendChild(heart);
  }

  
  
    var slideshowDiv = document.getElementById("slideshow");
    slideshowDiv.style.display = "block";
  
    var media = [
      { type: 'image', src: 'images/giphy.gif' },
      { type: 'image', src: 'images/5.png' },
      { type: 'image', src: 'images/a.jpeg' },
      { type: 'image', src: 'images/aa.jpeg' },
      { type: 'image', src: 'images/aaa.jpeg' },
      { type: 'image', src: 'images/aaaa.jpeg' },
      { type: 'image', src: 'images/aaaaa.jpeg' },
      { type: 'image', src: 'images/aaaaaaaa.jpeg' },
      { type: 'image', src: 'images/2.jfif' },
      { type: 'image', src: 'images/3.jfif' },
      { type: 'image', src: 'images/4.jfif' },
      { type: 'video', src: 'videos/loveu.mp4', mute: true },
      { type: 'video', src: 'videos/7.mp4', mute: true },
      { type: 'video', src: 'videos/8.mp4', mute: true },
      { type: 'video', src: 'videos/9.mp4', mute: true },
      { type: 'video', src: 'videos/20.mp4', mute: true },
      { type: 'video', src: 'videos/loveuu.mp4'},
    ];
  
    var currentIndex = 0;
  
    function showMedia() {
      slideshowDiv.innerHTML = ''; // Limpa o conteúdo anterior
      var item = media[currentIndex];
    
      if (item.type === 'video') {
        var video = document.createElement('video');
        video.src = item.src;
        video.autoplay = true;
        video.loop = true;
        video.muted = item.mute; // Garante que o vídeo esteja mudo
        video.onloadedmetadata = function() {
          setTimeout(nextMedia, video.duration * 1000); // Espera o vídeo terminar
        };
        video.className = 'fade-in'; // Aplica a animação de fade
        slideshowDiv.appendChild(video);
      } else if (item.type === 'image') {
        var img = document.createElement('img');
        img.src = item.src;
        // Aplica a animação de quicar apenas na primeira imagem
        img.className = currentIndex === 0 ? 'bounce-in' : 'fade-in';
        slideshowDiv.appendChild(img);
        setTimeout(nextMedia, 3000); // Muda após 3 segundos para imagens
      }
    }
    
  
    function nextMedia() {
      currentIndex = (currentIndex + 1) % media.length;
      showMedia();
    }
  
    showMedia();
  
    var audio = new Audio('musica/musicamartin.mp3');
    audio.play();
  }
  