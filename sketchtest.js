// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Number Guessing Chatbot
// Edited Video: https://www.youtube.com/watch?v=zGe1m_bLOFk

  let bot = new RiveScript();
  bot.loadFile('dumb.rive', brainReady, brainError);

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
 //   let num = floor(random(10)) + 1;
 //   console.log(num);
    let reply = bot.reply('local-user', 'set ' );
  }

  function brainError() {
    console.log('Chatbot error!');
  }

  let button = select('#submit');
  let user_input = select('#txt');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    let reply = bot.reply('local-user', input);
    output.html = reply;
  }

