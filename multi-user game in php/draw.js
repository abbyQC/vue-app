$(document).ready(function () {
  let CANVAS = $("#mycanvas");
  let CTX = CANVAS.get(0).getContext("2d");
  let DIMENSION = 25;
  let WIDTH = CANVAS.width();
  let HEIGHT = CANVAS.height();
  let PIXELSIZE = WIDTH / DIMENSION;
  let COLOR = "#22244";
  let ENABLED = true;

  CTX.strokeStyle = "rgba(0,0,0,0.1)";
  for (let i = 0; i < DIMENSION; i++) {
    x = Math.floor((i * WIDTH) / DIMENSION);
    CTX.beginPath();
    CTX.moveTo(x, 0);
    CTX.moveTo(x, 0);
    CTX.lineTo(x, HEIGHT);
    CTX.stroke();

    y = Math.floor((i * HEIGHT) / DIMENSION);
    CTX.beginPath();
    CTX.moveTo(0, y);
    CTX.lineTo(WIDTH, y);
    CTX.stroke();
  }
  CANVAS.click(function (e) {
    selectBox(e);
  });
  CANVAS.mousemove(function (e) {
    let pixel = [
      Math.floor(e.offsetX / (PIXELSIZE * DIMENSION)),
      Math.floor(e.offsetY / (PIXELSIZE * DIMENSION)),
    ];
    if (!SELECTBOX) {
      SELECTBOX = $("<div id=selectBox></div>");
      SELECTBOX.css({
        width: DIMENSION * PIXELSIZE - 2,
        height: DIMENSION * PIXELSIZE - 2,
      });
      $("mycanvasWrapper".prepend(SELECTBOX));
    }
    SELECTBOX.css({
      left: pixel[0] * PIXELSIZE * DIMENSION + 1,
      top: pixel[1] * DIMENSION,
    });
  });
  let SELECTED = 0;
  function selectBox(e) {
    if (SELECTED) return;
    SELECTED = 1;
    let pixel = [
      Math.floor(e.offsetX / (PIXELSIZE * DIMENSION)),
      Math.floor(e.offsetY / (PIXELSIZE * DIMENSION)),
    ];
    window.location = "draw.php?x=" + pixel[0] + "&y=" + pixel[1];
  }
  CANVAS.on("mousemove touchmove touchstart mousedown", mouseFill);
  function mouseFill(e) {
    if (!ENABLED) return;
    let offsetX = e.offsetX;
    let offsetY = e.offsetY;

    console.log(e.which); // show value in console to debug the CANVAS
    if (e.which != 1) return; // only draw on the CANVAS as pressed the mouse
    pixel = [Math.floor(offsetX / PIXELSIZE), Math.floor(offsetY / PIXELSIZE)];
    fillPixel(pixel);
    window.e = e;
  }

  function fillPixel(pixel) {
    CTX.fillStyle = "#00000";
    CTX.fillRect(pixel[0] * PIXELSIZE, pixel[1] * PIXELSIZE);
  }

  // Simple example, see optional options for more configuration.
  const PICKR = Pickr.create({
    el: "#picker",
    comparison: false,
    components: {
      // Main components
      opacity: false,
      preview: true,
      opacity: true,
      hue: true,
      palette: true,
      interaction: {
        input: true,
      },
    },
  });
  PICKR.on("init", function () {
    PICKR.setColor(COLOR);
  });
  PICKR.on("show", function () {
    ENABLED = false;
  });
  PICKR.on("hide", function () {
    setTimeout(function () {
      ENABLED = true;
    }, 300);
  });
  PICKR.on("change", function () {
    COLOR = PICKR.getColor().toHEXA.toString();
  });
});
