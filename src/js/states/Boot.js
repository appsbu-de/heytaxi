/* globals pixelcontext, pixelwidth, pixelheight */
BasicGame = {};

BasicGame.Boot = function (game) {
    this.game = game;
};

BasicGame.Boot.prototype = {
    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        // this.load.image('preloaderBackground', 'assets/img/water_texture.jpg');
        // this.load.image('preloaderBar', 'assets/img/plane-sheet.png');

    },

    create: function () {

        var pixelCanvas = document.getElementById("pixel");
        pixelcontext = pixelCanvas.getContext("2d");
        pixelwidth = pixelCanvas.width;
        pixelheight = pixelCanvas.height;
        Phaser.Canvas.setSmoothingEnabled(pixelcontext, false);

        this.game.input.maxPointers = 1;
        this.game.stage.disableVisibilityChange = true;


        this.game.state.start('Preloader');
    },

    render: function() {
        pixelcontext.drawImage(this.game.canvas, 0, 0, 32, 32, 0, 0, pixelwidth, pixelheight);
    }
};
