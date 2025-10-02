$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 650, 30, 100, "purple");
createPlatform(400,550,30,30, "purple");
createPlatform(600,450, 100, 30, "purple");
createPlatform(900,450,30,30, "purple");
createPlatform(1100,450,30,30, "purple");
createPlatform(1300,450,30,30, "purple");
createPlatform(1380,300,30,30, "purple");
createPlatform(1000,190,30,30, "purple");
createPlatform(1000,190,30,30, "purple");
createPlatform(800,190,30,30, "purple");
createPlatform(600,190,30,30, "purple");
createPlatform(100,190,300,30, "purple");

    // TODO 3 - Create Collectables
createCollectable("steve", 630, 400);
createCollectable("max",1200,150)
createCollectable("database",250,150)


    
    // TODO 4 - Create Cannons
createCannon("top", 100, 500);
createCannon("right", 400, 1500);
createCannon("right", 150, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
