function shout(string) {
  return string.toUpperCase()
}

function logShout(string) {
  console.log('HELLO')
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGrandma(string) {
  var uppercase = 'HELLO';
  var lowercase = 'hello';
  if (string.toLowerCase === lowercase)
    return ('I can\'t hear you!');
  if (string.toUpperCase === uppercase)
    return ('YES INDEED!');
  if (string === 'I love you, Grandma')
    return ('I love you, too');
}
