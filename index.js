"Hello!".toUpperCase(); // 'HELLO!'

function shout(string) {
    return string.toUpperCase();
}

"Hello!".toLowerCase(); // 'hello!'

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "Hmm, I'm not sure what you're trying to say.";
    }
  } 