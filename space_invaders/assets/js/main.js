// let screenWidth = window.screen.width;
// let screenHeight = window.screen.height;

var playground = document.getElementById('playground');

function Sprite(filename, name, left, top) {
    this._node = document.createElement("img");
    this._node.src = filename;
    this._node.classList = name;
    this._node.style.position = "absolute";
    this._node.style.left = left+"px";
    this._node.style.top = top+"px";
    playground.appendChild(this._node);



    Object.defineProperty(this, 'left', {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
            this._node.style.left = value + 'px';
        },
        configurable: true

    });

    Object.defineProperty(this, 'top', {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
            this._node.style.top = value + 'px';
        }
    });

    Object.defineProperty(this, "display", {
        get: function () {
            return this._node.style.display;
        },
        set: function (value) {
            this._node.style.display = value;
        }
    });

    this._left = left;
    this._top = top;

    Sprite.prototype.startAnimation = function(fct, interval) {
        if (this._clock) {
            window.clearInterval(this._clock);
            var _this = this;
            this._clock = window.setInterval(function(){
                fct(_this);
            }, interval);
        }
    }

    Sprite.prototype.stopAnimation = function() {
        window.clearInterval(this._clock);
    }

    Sprite.prototype.checkCollision = function(other) {
        return !( (this.top + this._node.height < other.top) ||
                    this.top > (other.top + other._node.height) || 
                  (this.left + this._node.width < other.left) ||
                    this.left > (other.left + other._node.width) );
    }

}







// function Sprite(classe, left, top) {
//     this._node = document.createElement("div");
//     this._node.classList = classe;
//     this._node.style.position = "aboslute";
//     playground.appendChild(this._node);

//     Object.defineProperty(this, "left", {
//         get: function() {
//             return this._left;
//         },
//         set: function(value) {
//             this._left = value;
//             this._node.style.left = this._left + "px";
//         }
//     });

//     Object.defineProperty(this, "top", {
//         get: function() {
//             return this._top;
//         },
//         set: function(value) {
//             this._top = value;
//             this._node.style.top = this._top + "px";
//         }
//     });

//     Object.defineProperty(this, "display", {
//         get: function() {
//             return this._node.style.display;
//         },
//         set: function(value) {
//             this._node.style.display = value;
//         }
//     });
// }





// Playground ========================================

// Cannon ============================================
// const hero = new Sprite('hero', 100, 50);



// // const hero = document.getElementById('hero');
// hero.style.position = "absolute";
// hero.style.left = "250px";
// hero.style.bottom = "40px";
// let heroOffset = hero.offsetLeft;

// const key_left = 37;
// const key_right = 39;
// const key_spacebar = 32;

// document.onkeydown = function (e) {

//     let key = e.keyCode;

//     if (key === 37) {
//         console.log("LEFT");
//         heroOffset -= 10;
//         moveHero();
//     } else if (key === 39) {
//         console.log("RIGHT");
//         heroOffset += 10;
//         moveHero();
//     } else if (key === 32) {
//         console.log("SHOOT");
//     }
// }

// function moveHero() {
//     hero.style.left = heroOffset + "px";
// }



// Invaders ==========================================

// const squid1 = new Sprite('squid', 100, 50);
// const squid2 = new Sprite('squid', 150, 50);
// const squid3 = new Sprite('squid', 200, 50);
// const squid4 = new Sprite('squid', 250, 50);
// const squid5 = new Sprite('squid', 300, 50);
// const squid6 = new Sprite('squid', 350, 50);

// const smallInvaders = document.getElementById('squid');
// const mediumInvaders = document.getElementById('crab');
// const largeInvaders = document.getElementById('octopus');
// const commanderInvaders = document.getElementById('invadersCommander');

// console.log(smallInvaders);

// let s1 = smallInvaders.cloneNode(true);
// console.log(s1);
// smallInvaders.after(s1);





// Row small invaders squid (Petit envahisseur)

// Row medium invaders crab (Moyen envahisseur)

// Row large invaders octopus (Grand envahisseur)

/* ##############################################################################################################"" */