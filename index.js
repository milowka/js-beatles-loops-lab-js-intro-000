// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay (musicians, instruments) {
  var phrases = [];
  for (var i=0;i<musicians.length;i++) {
    phrases.push(musicians[i]+' plays '+ instruments[i])
  }
  return phrases;
  }

  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"]
function johnLennonFacts (facts) {
var johnLennonFacts = [];
  var i=0
  while (i<facts.length) {
    johnLennonFacts.push (facts[i] + "!!!");
    i++;
  }
  return johnLennonFacts
}

var n = 0
function iLoveTheBeatles (n) {
  var array = [];
  do {array.push ("I love the Beatles!")
} while (n<15)
  {[array*n];
    n++;
}
return array
}
