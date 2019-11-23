//Play Pause Button
var video = document.getElementById("trailer");

var btn = document.getElementById("myBtn");

function videofunc() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//Pokemon Status
var pokemon = {
  'scorbunny': {
    Element: 'fire',
    Attack: 100,
    Defense: 50
  },
  'grookey': {
    Element: 'Grass',
    Attack: 50,
    Defense: 100
  },
  'sobble': {
    Element: 'Water',
    Attack: 75,
    Defense: 75
  }
}

//to load pokemon summary on chara selection
var pokentry = Object.entries(pokemon)
var poke = document.getElementsByClassName('pokemon')
var pokechilds = poke['0'].children
var childkey = Object.keys(pokechilds)

for (var i = 0; i < childkey.length; i++) {
  for (var [keys, prop] of pokentry) {
    if (pokechilds[i].getAttribute('id') == keys) {
      pokechilds[i].children[1].innerHTML = keys
      pokechilds[i].children[2].innerHTML = 'Element : ' + prop.Element + '<br>' + 'Attack : ' + prop.Attack + '<br>' + 'Defense : ' + prop.Defense + '<br>'
    }
  }
}

//Battle page

//opponent list
var opponent = {
  'charmander': {
    Element: 'fire',
    Attack: 100,
    Defense: 50,
  },
  'bulbasaur': {
    Element: 'Grass',
    Attack: 75,
    Defense: 75,
    no: 2
  },
  'squirtle': {
    Element: 'Water',
    Attack: 50,
    Defense: 100,
    no: 3
  },
  'torchic': {
    Element: 'fire',
    Attack: 100,
    Defense: 50,
    no: 4
  },
  'treecko': {
    Element: 'Grass',
    Attack: 75,
    Defense: 75,
    no: 5
  },
  'mudkip': {
    Element: 'Water',
    Attack: 50,
    Defense: 100,
    no: 6
  },
  'chimcar': {
    Element: 'fire',
    Attack: 100,
    Defense: 50,
    no: 7
  },
  'turtwig': {
    Element: 'Grass',
    Attack: 50,
    Defense: 100,
    no: 8
  },
  'piplup': {
    Element: 'Water',
    Attack: 75,
    Defense: 75,
    no: 9
  },
  'pikachu': {
    Element: 'electric',
    Attack: 100,
    Defense: 100,
    no: 10
  }
}

var pokid = 0

function first() {
  document.getElementById('plyrhp').value = 100
  document.getElementById('ophealth').value = 100
  var non = Math.floor(1 + Math.random() * 9);
  var opon = document.getElementById("opp");
  opon.src = 'characters img/o' + non + ".png";
  pokid = non
}




function attack() {
  start()
  var plyrdmg = 0;
  var opdmg = 0;
  var d = new Date();
  var t = d.getTime();

  function rolldice() {
    var ranNum = Math.floor(1 + Math.random() * 6);
    var dice = document.getElementById("die");
    dice.src = 'characters img/' + ranNum + ".png";
    var ranNum2 = Math.floor(1 + Math.random() * 6);
    var dice2 = document.getElementById("die2");
    dice2.src = 'characters img/' + ranNum2 + ".png";
    var dn = new Date()
    var n = dn.getTime();
    if (n >= t + 2000) {
      plyrdmg = ranNum
      opdmg = ranNum2
      stop()
    }
  }

  //opponent's move
  var opmove = Math.round(Math.random())

  //attack
  function start() {
    myVar = setInterval(rolldice, 20)
  }

  function stop() {
    clearInterval(myVar)
    atk()
  }

  var hit1 = 0
  var hit2 = 0
  var def = 0

  function atk() {
    if (document.getElementsByClassName('Battle')[0].children[1].getAttribute('id') == 1) {
      switch (pokid) {
        default:
          alert('ERROR!')
          break;
        case 1:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 2:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 3:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 4:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 5:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 6:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 7:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 8:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 9:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 10:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
      }
    } else if (document.getElementsByClassName('Battle')[0].children[1].getAttribute('id') == 2) {
      switch (pokid) {
        default:
          alert('ERROR!')
          break;
        case 1:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 2:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 3:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 4:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 5:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 6:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 7:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 8:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 9:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 10:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
      }
    } else if (document.getElementsByClassName('Battle')[0].children[1].getAttribute('id') == 3) {
      switch (pokid) {
        default:
          alert('ERROR!')
          break;
        case 1:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 2:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 3:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 4:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 5:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 6:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 7:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 8:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 9:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 10:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
      }
    }
  }

  function calc() {
    if (opmove == 1) {
      document.getElementById('ophealth').value -= hit1
      document.getElementById('plyrhp').value -= hit2
      result()
    } else {
      hit2 = 0
      document.getElementById('plyrhp').value -= hit2
      document.getElementById('ophealth').value -= Math.round(hit1 - def)
      result()
    }
  }

  function result() {
    if (document.getElementById('ophealth').value > 0) {
      if (opmove == 1) {
        alert('The Opponent Attacks: You dealt ' + hit1 + ' damage and taken ' + hit2 + ' damage')
      } else {
        alert('The Opponent Defends: You dealt ' + hit1 + ' damage and taken ' + hit2 + ' damage')
      }
    } else if (document.getElementById('plyrhp').value <= 0) {
      alert('You have lost')
    } else if (document.getElementById('ophealth').value <= 0) {
      alert('Congratulations you have won!')
    }
  }
}

function defend() {
  start()
  var plyrdmg = 0;
  var opdmg = 0;
  var d = new Date();
  var t = d.getTime();

  function rolldice() {
    var ranNum = Math.floor(1 + Math.random() * 6);
    var dice = document.getElementById("die");
    dice.src = 'characters img/' + ranNum + ".png";
    var ranNum2 = Math.floor(1 + Math.random() * 6);
    var dice2 = document.getElementById("die2");
    dice2.src = 'characters img/' + ranNum2 + ".png";
    var dn = new Date()
    var n = dn.getTime();
    if (n >= t + 2000) {
      plyrdmg = ranNum
      opdmg = ranNum2
      stop()
    }
  }

  //opponent's move
  var opmove = Math.round(Math.random())

  //attack
  function start() {
    myVar = setInterval(rolldice, 20)
  }

  function stop() {
    clearInterval(myVar)
    def()
  }

  var hit1 = 0
  var hit2 = 0
  var def = 0

  function def() {
    if (document.getElementsByClassName('Battle')[0].children[1].getAttribute('id') == 1) {
      switch (pokid) {
        default:
          alert('ERROR!')
          break;
        case 1:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 2:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 3:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 4:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 5:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 6:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 7:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 8:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 9:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
        case 10:
          hit1 = Math.floor(100 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(50 / 6 * opdmg)
          calc()
          break;
      }
    } else if (document.getElementsByClassName('Battle')[0].children[1].getAttribute('id') == 2) {
      switch (pokid) {
        default:
          alert('ERROR!')
          break;
        case 1:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 2:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 3:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 4:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 5:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 6:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 7:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 8:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 9:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
        case 10:
          hit1 = Math.floor(50 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(100 / 6 * opdmg)
          calc()
          break;
      }
    } else if (document.getElementsByClassName('Battle')[0].children[1].getAttribute('id') == 3) {
      switch (pokid) {
        default:
          alert('ERROR!')
          break;
        case 1:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 2:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 3:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 4:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 5:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 6:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 7:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 8:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(50 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 9:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(75 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
        case 10:
          hit1 = Math.floor(75 / 6 * plyrdmg)
          hit2 = Math.floor(100 / 6 * opdmg)
          def = Math.floor(75 / 6 * opdmg)
          calc()
          break;
      }
    }
  }

  function calc() {
    if (opmove == 1) {
      hit1 = 0
      document.getElementById('plyrhp').value -= Math.round(hit2 - def)
      result()
    } else {
      hit2 = 0
      hit1 = 0
      document.getElementById('plyrhp').value -= hit2
      document.getElementById('ophealth').value -= hit1
      result()
    }
  }

  function result() {
    if (document.getElementById('ophealth').value > 0) {
      if (opmove == 1) {
        if (opmove == 1) {
          alert('The Opponent Attacks: You dealt ' + hit1 + ' damage and taken ' + hit2 + ' damage')
        } else {
          alert('The Opponent Defends: You dealt ' + hit1 + ' damage and taken ' + hit2 + ' damage')
        }
      }else if (document.getElementById('plyrhp').value <= 0 && document.getElementById('ophealth').value <= 0 || document.getElementById('plyrhp').value <= 0 && document.getElementById('ophealth').value > 0) {
      alert('You have lost')
    } else if (document.getElementById('ophealth').value <= 0) {
      alert('Congratulations you have won!')
    }
  }
}
}
