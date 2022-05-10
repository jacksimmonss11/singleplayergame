// main variables
var player;
var playerImage;
var bg
var home;
var homeImage;
var info;
var infoImage;
var dead;
var deadImage;
var win;
var winImage;


// gravity boundaries for all levels
var startbar;
var endbar;

// image for all levels
var levelImage;

// jumping
var jump = false;

// score
var scoreadd;
var score = 0;

// coin count
var coins = 0;

// the speed for the player
var playerSpeed = 0;

// actual dimensions of canvas
var SCENE_W = 3800
var SCENE_H = 1100

// menu screen
var gameisOver = false;

// platforms for level 1
var bar1;
var bar2;
var bar4;
var bar5;
var bar6;
var bar7;
var bar8;
var bar9;
var bar10;

// new levels
var level2;
var level3;
var level4;
var levelend;

// song
var song;
var splay = false;
var loopStart = 0.01;
var loopDuration = 0.01;
var poss
var dsound
var coincollect

// countries
var eng
var engImage
var ger 
var gerImage
var rus
var rusImage
var usa
var usaImage

// lives
var heart;
var heart2;
var heart3;
var heart4;
var heart5;
var heartImage;
var heart2Image;
var heart3Image;
var heart4Image;
var heart5Image;
var lives = 5;


// textsprites

var level1t;
var level1tImage;
var level2t;
var level2tImage;
var level3t;
var level3tImage;
var level4t;
var level4tImage;

// sets the mode of game

mode = 0;

// loads anything into the game before the actual game starts running
function preload() {
	playerImage = loadImage("/Assets/space_invader.png")
	levelImage = loadImage("/Assets/bgf.png")
	song = loadSound("/Sounds/backtrack.mp3")
	level1tImage = loadImage("/Assets/level1.png")
	level2tImage = loadImage("/Assets/level2.png")
	level3tImage = loadImage("/Assets/level3.png")
	level4tImage = loadImage("/Assets/level4.png")
	heartImage = loadImage("/Assets/heart.png")
	heart2Image = loadImage("/Assets/heart.png")
	heart3Image = loadImage("/Assets/heart.png")
	heart4Image = loadImage("/Assets/heart.png")
	heart5Image = loadImage("/Assets/heart.png")
	homeImage = loadImage("/Assets/home page.png")
	infoImage = loadImage("/Assets/info.png")
	deadImage = loadImage("/Assets/dead.png")
	winImage = loadImage("/Assets/win.png")
	engImage = loadImage("/Assets/england.png")
	gerImage = loadImage("/Assets/germany.png")
	rusImage = loadImage("/Assets/russia.png")
	usaImage = loadImage("/Assets/america.png")
	poss = loadSound("/Sounds/positive.ogg")
	dsound = loadSound("/Sounds/death_sound.wav")
	coinImage = loadImage("/Assets/coin.png")
	coin2Image = loadImage("/Assets/coin.png")
	coin3Image = loadImage("/Assets/coin.png")
	coin4Image = loadImage("/Assets/coin.png")
	coin5Image = loadImage("/Assets/coin.png")
	coin6Image = loadImage("/Assets/coin.png")
	coin7Image = loadImage("/Assets/coin.png")
	coin8Image = loadImage("/Assets/coin.png")
	coin9Image = loadImage("/Assets/coin.png")
	coin10Image = loadImage("/Assets/coin.png")
	coin11Image = loadImage("/Assets/coin.png")
	coin12Image = loadImage("/Assets/coin.png")
	coin13Image = loadImage("/Assets/coin.png")
	coin14Image = loadImage("/Assets/coin.png")
	coin15Image = loadImage("/Assets/coin.png")
	coin16Image = loadImage("/Assets/coin.png")
	coin17Image = loadImage("/Assets/coin.png")
	coin18Image = loadImage("/Assets/coin.png")
	coin19Image = loadImage("/Assets/coin.png")
	coin20Image = loadImage("/Assets/coin.png")
	coin21Image = loadImage("/Assets/coin.png")
	coin22Image = loadImage("/Assets/coin.png")
	coin23Image = loadImage("/Assets/coin.png")
	coin24Image = loadImage("/Assets/coin.png")
	coin25Image = loadImage("/Assets/coin.png")
	coins1Image = loadImage("/Assets/coins1.png")
	coins2Image = loadImage("/Assets/coins2.png")
	coins3Image = loadImage("/Assets/coins3.png")
	coins4Image = loadImage("/Assets/coins4.png")
	coins5Image = loadImage("/Assets/coins5.png")
	coins6Image = loadImage("/Assets/coins6.png")
	coins7Image = loadImage("/Assets/coins7.png")
	coins8Image = loadImage("/Assets/coins8.png")
	coins9Image = loadImage("/Assets/coins9.png")
	coins10Image = loadImage("/Assets/coins10.png")
	coins11Image = loadImage("/Assets/coins11.png")
	coins12Image = loadImage("/Assets/coins12.png")
	coins13Image = loadImage("/Assets/coins13.png")
	coins14Image = loadImage("/Assets/coins14.png")
	coins15Image = loadImage("/Assets/coins15.png")
	coins16Image = loadImage("/Assets/coins16.png")
	coins17Image = loadImage("/Assets/coins17.png")
	coins18Image = loadImage("/Assets/coins18.png")
	coins19Image = loadImage("/Assets/coins19.png")
	coins20Image = loadImage("/Assets/coins20.png")
	coins21Image = loadImage("/Assets/coins21.png")
	coins22Image = loadImage("/Assets/coins22.png")
	coins23Image = loadImage("/Assets/coins23.png")
	coins24Image = loadImage("/Assets/coins24.png")
	coins25Image = loadImage("/Assets/coins25.png")
	coincollect = loadSound("/Sounds/coincollect.wav")

	console.log("Assets loaded")

}


// creates the characters, backgrounds and any other assets
function setup() {

	// create canvas
	createCanvas(775, 500);

	// create groups
	Ground = new Group();
	Platforms = new Group();

	// creating the background
	bg = createSprite(2000, 0)
	bg.addImage(levelImage)

	// creating level text
	level1t = createSprite(140, 240)
	level1t.addImage(level1tImage)
	level2t = createSprite(140, 240)
	level2t.addImage(level2tImage)
	level3t = createSprite(140, 240)
	level3t.addImage(level3tImage)
	level4t = createSprite(140, 240)
	level4t.addImage(level4tImage)

	level2t.visible = false
	level3t.visible = false
	level4t.visible = false

	// creating hearts

	heartImage.resize(35, 35)
	heart = createSprite(0, 0)
	heart.addImage(heartImage)
	heart2Image.resize(35, 35)
	heart2 = createSprite(0, 40)
	heart2.addImage(heart2Image)
	heart3Image.resize(35, 35)
	heart3 = createSprite(0, 80)
	heart3.addImage(heart3Image)
	heart4Image.resize(35, 35)
	heart4 = createSprite(0, 120)
	heart4.addImage(heart4Image)
	heart5Image.resize(35, 35)
	heart5 = createSprite(0, 160)
	heart5.addImage(heart5Image)



	// creating the ground
	startbar = createSprite(213, 844, 600, 1000)
	endbar = createSprite(3541, 844, 650, 1000)

	// creating the platforms
	bar1 = createSprite(680, 300, 200, 10)
	bar2 = createSprite(920, 250, 140, 10)
	bar3 = createSprite(1200, 210, 250, 10)
	bar4 = createSprite(1500, 270, 200, 10)
	bar5 = createSprite(1780, 300, 150, 10)
	bar6 = createSprite(1940, 240, 160, 10)
	bar7 = createSprite(2200, 200, 180, 10)
	bar8 = createSprite(2450, 160, 200, 10)
	bar9 = createSprite(2690, 250, 140, 10)
	bar10 = createSprite(3000, 290, 200, 10)

	// creating new level switches
	level2 = createSprite(3800, 250, 50, 200)
	level3 = createSprite(3800, 700, 50, 200)
	level4 = createSprite(3800, 700, 50, 200)
	levelend = createSprite(3800, 700, 50, 200)

	// making the ground invisible
	startbar.visible = false
	endbar.visible = false

	// making level switches invisible
	level2.visible = false
	level3.visible = false
	level4.visible = false
	levelend.visible = false

	// adding the ground to the group
	Ground.add(startbar)
	Ground.add(endbar)

	// adding the platforms to the group
	Platforms.add(bar1)
	Platforms.add(bar2)
	Platforms.add(bar3)
	Platforms.add(bar4)
	Platforms.add(bar5)
	Platforms.add(bar6)
	Platforms.add(bar7)
	Platforms.add(bar8)
	Platforms.add(bar9)
	Platforms.add(bar10)

	// creating player and resizing
	player = createSprite(0, 300, 10, -10)
	player.addImage(playerImage)
	player.scale = 0.1

	//timer
	timer = 2000;

	// countrie facts
	eng = createSprite(3500,240, 10, 10)
	eng.addImage(engImage)
	ger = createSprite(3500,240, 10, 10)
	ger.addImage(gerImage)
	ger.visible = false
	rus = createSprite(3500,240,10,19)
	rus.addImage(rusImage)
	rus.visible = false
	usa = createSprite(3500,240,10,19)
	usa.addImage(usaImage)
	usa.visible = false


	//setting sound volume
  poss.setVolume(0.5);
	dsound.setVolume(0.2)
	coincollect.setVolume(1);

	
	// creating the coins
	coin = createSprite(350, 230, 10, 10)
	coin.addImage(coinImage)
	coin2 = createSprite(900, 110, 10, 10)
	coin2.addImage(coin2Image)
	coin3 = createSprite(1500, 130, 10, 10)
	coin3.addImage(coin3Image)
	coin4 = createSprite(2200, 30, 10, 10)
	coin4.addImage(coin4Image)
	coin5 = createSprite(3000, 150, 10, 10)
	coin5.addImage(coin5Image)
	coin6 = createSprite(3670, 230, 10, 10)
	coin6.addImage(coin6Image)
	coin7 = createSprite(10, 800, 10, 10)
	coin7.addImage(coin7Image)
	coin8 = createSprite(10, 800, 10, 10)
	coin8.addImage(coin8Image)
	coin9 = createSprite(10, 800, 10, 10)
	coin9.addImage(coin9Image)
	coin10 = createSprite(10, 800, 10, 10)
	coin10.addImage(coin10Image)
	coin11 = createSprite(10, 800, 10, 10)
	coin11.addImage(coin11Image)
	coin12 = createSprite(10, 800, 10, 10)
	coin12.addImage(coin12Image)
	coin13 = createSprite(10, 800, 10, 10)
	coin13.addImage(coin13Image)
	coin14 = createSprite(10, 800, 10, 10)
	coin14.addImage(coin14Image)
	coin15 = createSprite(10, 800, 10, 10)
	coin15.addImage(coin15Image)
	coin16 = createSprite(10, 800, 10, 10)
	coin16.addImage(coin16Image)
	coin17 = createSprite(10, 800, 10, 10)
	coin17.addImage(coin17Image)
	coin18 = createSprite(10, 800, 10, 10)
	coin18.addImage(coin18Image)
	coin19 = createSprite(10, 800, 10, 10)
	coin19.addImage(coin19Image)
	coin20 = createSprite(10, 800, 10, 10)
	coin20.addImage(coin20Image)
	coin21 = createSprite(10, 800, 10, 10)
	coin21.addImage(coin21Image)
	coin22 = createSprite(10, 800, 10, 10)
	coin22.addImage(coin22Image)
	coin23 = createSprite(10, 800, 10, 10)
	coin23.addImage(coin23Image)
	coin24 = createSprite(10, 800, 10, 10)
	coin24.addImage(coin24Image)
	coin25 = createSprite(10, 800, 10, 10)
	coin25.addImage(coin25Image)

	//coin count images
	coins1 = createSprite(10,500,10,10)
	coins1.addImage(coins1Image)
	coins2 = createSprite(10,500,10,10)
	coins2.addImage(coins2Image)
	coins3 = createSprite(10,500,10,10)
	coins3.addImage(coins3Image)
	coins4 = createSprite(10,500,10,10)
	coins4.addImage(coins4Image)
	coins5 = createSprite(10,500,10,10)
	coins5.addImage(coins5Image)
	coins6 = createSprite(10,500,10,10)
	coins6.addImage(coins6Image)
	coins7 = createSprite(10,500,10,10)
	coins7.addImage(coins7Image)
	coins8 = createSprite(10,500,10,10)
	coins8.addImage(coins8Image)
	coins9 = createSprite(10,500,10,10)
	coins9.addImage(coins9Image)
	coins10 = createSprite(10,500,10,10)
	coins10.addImage(coins10Image)
	coins11 = createSprite(10,500,10,10)
	coins11.addImage(coins11Image)
	coins12 = createSprite(10,500,10,10)
	coins12.addImage(coins12Image)
	coins13 = createSprite(10,500,10,10)
	coins13.addImage(coins13Image)
	coins14 = createSprite(10,500,10,10)
	coins14.addImage(coins14Image)
	coins15 = createSprite(10,500,10,10)
	coins15.addImage(coins15Image)
	coins16 = createSprite(10,500,10,10)
	coins16.addImage(coins16Image)
	coins17 = createSprite(10,500,10,10)
	coins17.addImage(coins17Image)
	coins18 = createSprite(10,500,10,10)
	coins18.addImage(coins18Image)
	coins19 = createSprite(10,500,10,10)
	coins19.addImage(coins19Image)
	coins20 = createSprite(10,500,10,10)
	coins20.addImage(coins20Image)
	coins21 = createSprite(10,500,10,10)
	coins21.addImage(coins21Image)
	coins22 = createSprite(10,500,10,10)
	coins22.addImage(coins22Image)
	coins23 = createSprite(10,500,10,10)
	coins23.addImage(coins23Image)
	coins24 = createSprite(10,500,10,10)
	coins24.addImage(coins24Image)
	coins25 = createSprite(10,500,10,10)
	coins25.addImage(coins25Image)

	console.log('Game loaded')
}


// the main code
function draw() {

	if (mode == 0) {
		camera.off()
		image(homeImage, 0, 0)

	}

	if (mode == 1) {
		background(136, 194, 246)
		frameRate(60);

		// fall boundary
		if (player.position.y > 1000) {

			player.position.y = 310
			player.position.x = 0
			lives = lives - 1
			dsound.play()



		}

		// character boundaries
		if (player.position.x < 0)
			player.position.x = 0;
		if (player.position.y < 0)
			player.position.y = 0;

		// camera settings

		// camera follows player at certain distances (the 110 to the right of the player)
		camera.position.x = player.position.x + 110;
		camera.position.y = player.position.y - 50;

		// how much the camera is zoomed in from default zoom
		camera.zoom = 1.2

		// if player goes past the map width sets the players position to max width preventing them going past it
		if (player.position.x > SCENE_W)
			player.position.x = SCENE_W;

		// same as above but for map height
		if (player.position.y > SCENE_H)
			player.position.y = SCENE_H;

		// same as player but wont let the camera show past map width
		if (camera.position.x > SCENE_W)
			camera.position.x = SCENE_W;

		// sane as above but for map height
		if (camera.position.y < 0)
			camera.position.y = 0;

		// gravity
		player.position.y += playerSpeed;


		// stops character falling on ground and platforms
		if (player.collide(Ground) || player.collide(Platforms)) {
			jump = false;
		}
		else playerSpeed++;

		if (player.collide(coin)) {
			coins = coins + 1
			coin.position.y = 2300;
			coincollect.play()
			console.log("coin  1 collected")
		}

		if (player.collide(coin2)) {
			coins = coins + 1
			coin2.position.y = 2300;
			coincollect.play()
			console.log("coin 2 collected")
		}

		if (player.collide(coin3)) {
			coins = coins + 1
			coin3.position.y = 2300;
			coincollect.play()
			console.log("coin 3 collected")
		}

		if (player.collide(coin4)) {
			coins = coins + 1
			coin4.position.y = 2300;
			coincollect.play()
			console.log("coin 4 collected")
		}

		if (player.collide(coin5)) {
			coins = coins + 1
			coin5.position.y = 2300;
			coincollect.play()
			console.log("coin 5 collected")
		}

		if (player.collide(coin6)) {
			coins = coins + 1
			coin6.position.y = 2300;
			coincollect.play()
			console.log("coin 6 collected")
		}

		if (player.collide(coin7)) {
			coins = coins + 1
			coin7.position.y = 2300;
			coincollect.play()
			console.log("coin 7 collected")
		}

		if (player.collide(coin8)) {
			coins = coins + 1
			coin8.position.y = 2300;
			coincollect.play()
			console.log("coin 8 collected")
		}

		if (player.collide(coin9)) {
			coins = coins + 1
			coin9.position.y = 2300;
			coincollect.play()
			console.log("coin  9 collected")
		}

		if (player.collide(coin10)) {
			coins = coins + 1
			coin10.position.y = 2300;
			coincollect.play()
			console.log("coin 10 collected")
		}

		if (player.collide(coin11)) {
			coins = coins + 1
			coin11.position.y = 2300;
			coincollect.play()
			console.log("coin 11 collected")
		}

		if (player.collide(coin12)) {
			coins = coins + 1
			coin12.position.y = 2300;
			coincollect.play()
			console.log("coin 12 collected")
		}

		if (player.collide(coin13)) {
			coins = coins + 1
			coin13.position.y = 2300;
			coincollect.play()
			console.log("coin 13 collected")
		}

		if (player.collide(coin14)) {
			coins = coins + 1
			coin14.position.y = 2300;
			coincollect.play()
			console.log("coin 14 collected")
		}

		if (player.collide(coin15)) {
			coins = coins + 1
			coin15.position.y = 2300;
			coincollect.play()
			console.log("coin 15 collected")
		}

		if (player.collide(coin16)) {
			coins = coins + 1
			coin16.position.y = 2300;
			coincollect.play()
			console.log("coin 16 collected")
		}

		if (player.collide(coin17)) {
			coins = coins + 1
			coin17.position.y = 2300;
			coincollect.play()
			console.log("coin 17 collected")
		}

		if (player.collide(coin18)) {
			coins = coins + 1
			coin18.position.y = 2300;
			coincollect.play()
			console.log("coin 18 collected")
		}

		if (player.collide(coin19)) {
			coins = coins + 1
			coin19.position.y = 2300;
			coincollect.play()
			console.log("coin 19 collected")
		}

		if (player.collide(coin20)) {
			coins = coins + 1
			coin20.position.y = 2300;
			coincollect.play()
			console.log("coin 20 collected")
		}

		if (player.collide(coin21)) {
			coins = coins + 1
			coin21.position.y = 2300;
			coincollect.play()
			console.log("coin 21 collected")
		}

		if (player.collide(coin22)) {
			coins = coins + 1
			coin22.position.y = 2300;
			coincollect.play()
			console.log("coin 22 collected")
		}

		if (player.collide(coin23)) {
			coins = coins + 1
			coin23.position.y = 2300;
			coincollect.play()
			console.log("coin 23 collected")
		}

		if (player.collide(coin24)) {
			coins = coins + 1
			coin24.position.y = 2300;
			coincollect.play()
			console.log("coin 24 collected")
		}

		if (player.collide(coin25)) {
			coins = coins + 1
			coin25.position.y = 2300;
			coincollect.play()
			console.log("coin 25 collected")
		}


		if (coins === 1){
			coins1.position.x = player.position.x + 300
			coins1.position.y = player.position.y - 220
		}
		if (coins === 2){
			coins1.visible = false
			coins2.position.x = player.position.x + 300
			coins2.position.y = player.position.y - 220
		}
		if (coins === 3){
			coins2.visible = false
			coins3.position.x = player.position.x + 300
			coins3.position.y = player.position.y - 220
		}
		if (coins === 4){
			coins3.visible = false
			coins4.position.x = player.position.x + 300
			coins4.position.y = player.position.y - 220
		}
		if (coins === 5){
			coins4.visible = false
			coins5.position.x = player.position.x + 300
			coins5.position.y = player.position.y - 220
		}
		if (coins === 6){
			coins5.visible = false
			coins6.position.x = player.position.x + 300
			coins6.position.y = player.position.y - 220
		}
		if (coins === 7){
			coins6.visible = false
			coins7.position.x = player.position.x + 300
			coins7.position.y = player.position.y - 220
		}
		if (coins === 8){
			coins7.visible = false
			coins8.position.x = player.position.x + 300
			coins8.position.y = player.position.y - 220
		}
		if (coins === 9){
			coins8.visible = false
			coins9.position.x = player.position.x + 300
			coins9.position.y = player.position.y - 220
		}
		if (coins === 10){
			coins9.visible = false
			coins10.position.x = player.position.x + 300
			coins10.position.y = player.position.y - 220
		}
		if (coins === 11){
			coins10.visible = false
			coins11.position.x = player.position.x + 300
			coins11.position.y = player.position.y - 220
		}
		if (coins === 12){
			coins11.visible = false
			coins12.position.x = player.position.x + 300
			coins12.position.y = player.position.y - 220
		}
		if (coins === 13){
			coins12.visible = false
			coins13.position.x = player.position.x + 300
			coins13.position.y = player.position.y - 220
		}
		if (coins === 14){
			coins13.visible = false
			coins14.position.x = player.position.x + 300
			coins14.position.y = player.position.y - 220
		}
		if (coins === 15){
			coins14.visible = false
			coins15.position.x = player.position.x + 300
			coins15.position.y = player.position.y - 220
		}
		if (coins === 16){
			coins15.visible = false
			coins16.position.x = player.position.x + 300
			coins16.position.y = player.position.y - 220
		}
		if (coins === 17){
			coins16.visible = false
			coins17.position.x = player.position.x + 300
			coins17.position.y = player.position.y - 220
		}
		if (coins === 18){
			coins17.visible = false
			coins18.position.x = player.position.x + 300
			coins18.position.y = player.position.y - 220
		}
		if (coins === 19){
			coins18.visible = false
			coins19.position.x = player.position.x + 300
			coins19.position.y = player.position.y - 220
		}
		if (coins === 20){
			coins19.visible = false
			coins20.position.x = player.position.x + 300
			coins20.position.y = player.position.y - 220
		}
		if (coins === 21){
			coins20.visible = false
			coins21.position.x = player.position.x + 300
			coins21.position.y = player.position.y - 220
		}
		if (coins === 22){
			coins21.visible = false
			coins22.position.x = player.position.x + 300
			coins22.position.y = player.position.y - 220
		}
		if (coins === 23){
			coins22.visible = false
			coins23.position.x = player.position.x + 300
			coins23.position.y = player.position.y - 220
		}
		if (coins === 24){
			coins23.visible = false
			coins24.position.x = player.position.x + 300
			coins24.position.y = player.position.y - 220
		}
		if (coins === 25){
			coins24.visible = false
			coins25.position.x = player.position.x + 300
			coins25.position.y = player.position.y - 220
		}

	
		// if you hit level 2 boundary level 2s begins
		if (player.collide(level2)) {
			poss.play()
			level1t.visible = false
			level2t.visible = true
			level2.position.y = 750
			level3.position.y = 250
			player.position.x = 0
			bar1.position.y = 350
			bar2.position.x = 850
			bar3.position.x = 1150
			bar3.position.y = 170
			bar4.position.x = 1500
			bar4.position.y = 120
			bar5.position.x = 1830
			bar5.position.y = 220
			bar6.position.x = 2130
			bar7.position.x = 2410
			bar7.position.y = 220
			bar8.position.x = 2720
			bar9.position.x = 3000
			bar10.position.x = -100
			bar10.position.y = 500
			bar10.visible.false
			eng.visible = false
			ger.visible = true
			coin.position.y = 2300
			coin2.position.y = 2300
			coin3.position.y = 2300
			coin4.position.y = 2300
			coin5.position.y = 2300
			coin6.position.y = 2300
			coin7.position.x = 400
			coin7.position.y = 300
			coin8.position.x = 920
			coin8.position.y = 100
			coin9.position.x = 1650
			coin9.position.y = 40
			coin10.position.x = 2240
			coin10.position.y = 60
			coin11.position.x = 3100
			coin11.position.y = 210
			coin12.position.x = 3650
			coin12.position.y = 220
		}

		// if you hit level 3 boundary level 3 begins
		if (player.collide(level3)) {
			poss.play()
			level2t.visible = false
			level3t.visible = true
			level3.position.y = 750
			level4.position.y = 250
			player.position.x = 0
			bar1.position.y = 300
			bar1.position.x = 720
			bar2.position.x = 1030
			bar2.position.y = 250
			bar3.position.x = 1340
			bar3.position.y = 320
			bar4.position.x = 1650
			bar4.position.y = 220
			bar5.position.x = 1920
			bar5.position.y = 120
			bar6.position.x = 2200
			bar6.position.y = 230
			bar7.position.x = 2510
			bar7.position.y = 300
			bar8.position.x = 2810
			bar8.position.y = 220
			bar9.position.x = 3120
			bar9.position.y = 290
			bar10.position.x = -100
			bar10.position.y = 500
			bar10.visible.false
			ger.visible = false
			rus.visible = true
			coin.position.y = 2300
			coin2.position.y = 2300
			coin3.position.y = 2300
			coin4.position.y = 2300
			coin5.position.y = 2300
			coin6.position.y = 2300
			coin7.position.y = 2300
			coin8.position.y = 2300
			coin9.position.y = 2300
			coin10.position.y = 2300
			coin11.position.y = 2300
			coin12.position.y = 2300
			coin13.position.x = 310
			coin13.position.y = 230
			coin14.position.x = 950
			coin14.position.y = 90
			coin15.position.x = 1700
			coin15.position.y = 30
			coin16.position.x = 2300
			coin16.position.y = 50
			coin17.position.x = 3150
			coin17.position.y = 130
			coin18.position.x = 3650
			coin18.position.y = 270
		}

		// if you hit level 4 boundary level 4 begins
		if (player.collide(level4)) {
			poss.play()
			level3t.visible = false
			level4t.visible = true
			level4.position.y = 750
			levelend.position.y = 250
			player.position.x = 0
			bar1.position.y = 250
			bar1.position.x = 720
			bar2.position.x = 1020
			bar2.position.y = 300
			bar3.position.x = 1380
			bar3.position.y = 270
			bar4.position.x = 1720
			bar4.position.y = 200
			bar5.position.x = 2000
			bar5.position.y = 120
			bar6.position.x = 2350
			bar6.position.y = 200
			bar7.position.x = 2700
			bar7.position.y = 300
			bar8.position.x = 3060
			bar8.position.y = 300
			bar9.position.x = -100
			bar9.position.y = 500
			bar10.position.x = -100
			bar10.position.y = 500
			bar10.visible.false
			rus.visible = false
			usa.visible = true
			coin.position.y = 2300
			coin2.position.y = 2300
			coin3.position.y = 2300
			coin4.position.y = 2300
			coin5.position.y = 2300
			coin6.position.y = 2300
			coin7.position.y = 2300
			coin8.position.y = 2300
			coin9.position.y = 2300
			coin10.position.y = 2300
			coin11.position.y = 2300
			coin12.position.y = 2300
			coin13.position.y = 2300
			coin14.position.y = 2300
			coin15.position.y = 2300
			coin16.position.y = 2300
			coin17.position.y = 2300
			coin18.position.y = 2300
			coin19.position.x = 320
			coin19.position.y = 170
			coin20.position.x = 900
			coin20.position.y = 70
			coin21.position.x = 1550
			coin21.position.y = 20
			coin22.position.x = 2250
			coin22.position.y = 40
			coin23.position.x = 2600
			coin23.position.y = 180
			coin24.position.x = 2875
			coin24.position.y = 210
			coin25.position.x = 3310
			coin25.position.y = 125

		}

		if (player.collide(levelend)) {
			poss.play()
			mode = 4
		}

		if (splay === false) {
		  song.play();
		  song.loop();
      song.setVolume(0.05);
		  splay = true
		}

		heart.position.x = player.position.x - 190
		heart.position.y = player.position.y - 220
		heart2.position.x = player.position.x - 160
		heart2.position.y = player.position.y - 220
		heart3.position.x = player.position.x - 130
		heart3.position.y = player.position.y - 220
		heart4.position.x = player.position.x - 100
		heart4.position.y = player.position.y - 220
		heart5.position.x = player.position.x - 70
		heart5.position.y = player.position.y - 220


		//lives system
		if (lives === 4) {
			heart5.visible = false
		}

		if (lives === 3) {
			heart4.visible = false
		}

		if (lives === 2) {
			heart3.visible = false
		}

		if (lives === 1) {
			heart2.visible = false
		}

		if (lives === 0 && gameisOver === false) {
			heart.visible = false
			mode = 3
		}


		// the tells everything to be drawn and be executed
		drawSprites()
	}

	if (mode == 2) {
		camera.off()
		image(infoImage, 0, 0)
	}

	if (mode == 3) {
		song.setVolume(0)
		camera.off()
		image(deadImage, 0, 0)
	}

	if (mode == 4) {
		song.setVolume(0)
		camera.off()
		image(winImage, 0, 0)

	}

	keyboardCode()
}

function gameOver() {

}

// all the movement keys
function keyboardCode() {

	if (keyCode === ENTER & mode == 0) {
		mode = 1
		console.log("mode: 1")

	}

	else if (keyCode === ESCAPE && keyIsPressed === true && mode == 2) {
		if (millis() > timer) {
			timer = timer + 750;
			mode = 0
			console.log("mode: 0")
		}

	}

	else if (keyCode === ESCAPE && keyIsPressed === true && mode == 0) {
		if (millis() > timer) {
			timer = timer + 750;
			mode = 2
			console.log("mode: 2")
		}
	}



	if (mode == 1) {
		// moves character to the left
		if (keyIsDown(LEFT_ARROW) || keyIsDown('A'.charCodeAt(0)) && keyIsPressed === true) {
			player.position.x -= 6;
		}

		// moves character to the right
		if (keyIsDown(RIGHT_ARROW) || keyIsDown('D'.charCodeAt(0)) && keyIsPressed === true) {
			player.position.x += 6;
		}

		// character jump
		if ((keyIsDown(UP_ARROW) || keyIsDown('W'.charCodeAt(0))) && keyIsPressed === true && jump === false) {
			jump = true;
			player.position.y -= 1
			playerSpeed = -15;
		}
	}

	if (keyIsDown(ENTER) && mode == 3 && keyIsPressed === true) {
		location.reload()
	}

	if (keyIsDown(ENTER) && mode == 4 && keyIsPressed === true) {
		location.reload()
	}


}