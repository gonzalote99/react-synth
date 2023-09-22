let AudioContext = 
  window.AudioContext ||
  window.webkitAudioContext ||
  false;

  let playSound;

  if (AudioContext) {
    const context = new AudioContext();
    playSound = (frequency, type, duration) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;

      oscillator.type = type;
      oscillator.connect(gain);
      oscillator.frequency.value = frequency

      gain.connect(context.destination);

      gain.gain.setValueAtTime(1, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + duration);

      oscillator.start(now);
      oscillator.stop(now + duration)




    };
  } else {
    alert('not supported');
    playSound = () => {};
  }

  export default playSound;