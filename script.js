document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const letterScreen = document.getElementById('letter-screen');
  const letterSheet = document.querySelector('.letter-sheet');

  const musicBtn = document.getElementById('music-btn');
  const audioPlayer = document.getElementById('audio-player');
  const musicIcon = document.getElementById('music-icon');

  // Control Play/Pause para Lunita
  musicBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play()
        .then(() => {
          musicIcon.textContent = '❚❚';
          musicBtn.classList.add('playing');
        })
        .catch(err => {
          console.warn('Reproducción bloqueada o archivo no encontrado:', err);
        });
    } else {
      audioPlayer.pause();
      musicIcon.textContent = '▶';
      musicBtn.classList.remove('playing');
    }
  });

  // Transición al abrir la carta
  openBtn.addEventListener('click', () => {
    // Inicia la música automáticamente al dar clic en Abrir
    audioPlayer.play()
      .then(() => {
        musicIcon.textContent = '❚❚';
        musicBtn.classList.add('playing');
      })
      .catch(() => {});

    welcomeScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transform = 'scale(0.95)';

    setTimeout(() => {
      welcomeScreen.classList.add('hidden');
      letterScreen.classList.remove('hidden');

      // Animación de despliegue
      letterSheet.classList.add('animate-open');
    }, 400);
  });
});