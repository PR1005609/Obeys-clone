var t1 = gsap.timeline();

t1.from(".line h1", {
  y: 150,
  stagger: 0.25,
  delay: 0.6,
  duration: 0.5,
});

t1.from("#line-part1,.line h2", {
  opacity: 0,

  onStart: function () {
    var h4 = document.querySelector("#line-part1 h4");

    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        grow++;
        h4.innerHTML = grow;
      } else {
        h4.innerHTML = grow;
      }
    }, 30);
  },
});

t1.to("#loader", {
  opacity: 0,
  delay: 4,
  duration: 0.2,
});

t1.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})
t1.to("#loader",{
  display:"none"
})