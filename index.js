function shout(string) {
    return string.toUpperCase();
  }
  console.log(shout('hello')); // Output: "HELLO"
  
  function whisper(string) {
    return string.toLowerCase();
  }
  console.log(whisper('HELLO')); // Output: "hello"
  
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  logShout('hello'); // Logs: "HELLO"  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  logWhisper('HELLO'); // Logs: "hello"
  
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  console.log(sayHiToHeadphonedRoommate('hello')); // Returns: "I can't hear you!"
  console.log(sayHiToHeadphonedRoommate('HELLO')); // Returns: "YES INDEED!"
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // Returns: "I would love to!"
  