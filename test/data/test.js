var fastTime = 50;
playButton.animate({
  "opacity": 1,
  options: {
    time: fastTime
  }
});
playButton.on(Events.Click, () => {
  playButton.animate({
    "opacity": 1,
    options: {
      time: fastTime
    }
  });
  playButton.on(Events.Click, () => {
    playButton.animate({
      "opacity": 1,
      options: {
        time: fastTime
      }
    });
  });
});
