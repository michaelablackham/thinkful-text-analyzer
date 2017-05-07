//GET WORD COUNT OF INPUT and RETURN INPUT LENGTH
// split up the length of the string and get the length of the split (each word)
function wordCount(input) {
  var wordCount = input.split(" ").length;
  $('.js-word-count').text(wordCount);
}

//GET UNIQUE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
// need to use a loop to go through each word and add it to an array
// if word === another word already in the array, count up that word
function uniqueCount(input) {
  var wordList = [];
  var wordCount = input.split(" ").length;
  for ( var i = 0; i < wordCount; i++) {
    if (wordList.indexOf(input[i]) === -1) {
      wordList.push(input[i]);
    }
  }
  $('.js-unique-word-length').text(wordList.length);
}

//GET AVERAGE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
// get the entire length of the string and divide it by the amount of words
function averageLength (input){
  var wordCount = input.split(" ").length;
  var characters = input.split("").length;
  var averageWordLength = characters/wordCount;
  $('.js-average-word-length').text(averageWordLength + ' characters')
}

//ADD VALUES TO DATA LIST
//CLEAN UP CODE
//once you get everything working, move all the universal pieces into this area
//this includes pushing the text, and variables that can be used elsewhere.
function createReport (input) {
  // var totalWordCount = wordCount(input);
  // var averageWordLength = averageLength(input);
  // var uniqueWordLength = uniqueCount(input);
  // var report = $('.text-report');
  //
  // report.find('.js-word-count').text(averageWordLength);
  // report.find('.js-average-word-length').text(averageWordLength);
  // report.find('.js-average-word-length').text(averageWordLength);
}

//GET ALL INFORMATION WHEN USER HITS "SUBMIT" and PASS TO OTHER FUNCTIONS
function formSubmit() {
  $('.js-submit').click(function(e) {
    e.preventDefault();
    $('.hidden').show();
    var input = $('textarea').val();
    // createReport (input);
    wordCount(input);
    averageLength(input);
    uniqueCount(input);
  });
}

//RUN CODE$
$(function() {
  formSubmit();
});
