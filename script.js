var r = document.getElementById('rock'),
    p = document.getElementById('paper'),
    s = document.getElementById('scissors'),
    u = document.getElementById('u'),
    b = document.getElementById('bot');

var rps = ["rock", "paper", "scissors"]
var emoji = { rock: '✊️', paper: '🖐️', scissors: '✌️' }

r.addEventListener('click', function() {
  const random = rps[Math.floor(Math.random() * rps.length)]

  check('rock', random)
})

p.addEventListener('click', function() {
  const random = rps[Math.floor(Math.random() * rps.length)]

  check('paper', random)
})

s.addEventListener('click', function() {
  const random = rps[Math.floor(Math.random() * rps.length)]

  check('scissors', random)
})

function check(u, b) {
  if(u == "rock" && b == "rock") {
    index('Tie!', u, b, 'is-warning')
    score(false, false)
  } else if(u == "rock" && b == "paper") {
    index('You Lose!', u, b, 'is-danger')
    score(false, true)
  } else if(u == "rock" && b == "scissors") {
    index('You Win!', u, b, 'is-primary')
    score(true, false)
  } else if(u == "paper" && b == "paper") {
    index('Tie!', u, b, 'is-warning')
    score(false, false)
  } else if(u == "paper" && b == "scissors") {
    index('You Lose!', u, b, 'is-danger')
    score(false, true)
  } else if(u == "paper" && b == "rock") {
    index('You Win!', u, b, 'is-primary')
    score(true, false)
  } else if(u == "scissors" && b == "scissors") {
    index('Tie!', u, b, 'is-warning')
    score(false, false)
  } else if(u == "scissors" && b == "rock") {
    index('You Lose!', u, b, 'is-danger')
    score(false, true)
  } else if(u == "scissors" && b == "paper") {
    index('You Win!', u, b, 'is-primary')
    score(true, false)
  }
}

function index(n, u, b, s) {
  document.getElementById("notif").innerHTML = `<div class="notification ${s} is-light" id="notif">
    <button class="delete" id="deleteButton"></button>
    You choose: <span id="u">${u + " " + emoji[u]}</span>
    <br />
    Bot choose: <span id="bot">${b + " " + emoji[b]}</span>
    <br />
    <p class="has-text-centered">
      <span id="state" class="has-text-weight-bold">${n}</span>
    </p>
  </div>`

  document.getElementById('deleteButton').addEventListener('click', function() {
    document.getElementById('notif').innerHTML = ""
    //document.getElementById("b").removeChild(document.getElementById('notif'))
    //document.getElementById("b").appendChild(document.createElement('div')).id = "notif"
  })
}

function score(u, b) {
  var user = document.getElementById('user-score'),
      bot = document.getElementById('bot-score');

  if(u) {
    var s = Number(user.textContent) + 1;
    user.innerHTML = s
  } else if(b) {
    var s = Number(bot.textContent) + 1;
    bot.innerHTML = s
  }
}
