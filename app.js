//////////////////////////////////////////////////////////////////
//GET WORD COUNT OF INPUT and RETURN INPUT LENGTH
//////////////////////////////////////////////////////////////////
// split up the length of the string and get the length of the split (each word)
// function wordCount(token) {
//   return token.split(" ").length;
  // var wordCount = input.split(" ").length;
  // $('.js-word-count').text(wordCount);
// }

//////////////////////////////////////////////////////////////////
//GET UNIQUE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
//////////////////////////////////////////////////////////////////
// need to use a loop to go through each word and add it to an array
// if word === another word already in the array, count up that word
function uniqueCount(token) {
  var wordList = [];
  var wordCount = token.split(" ").length;
  for ( var i = 0; i < wordCount; i++) {
    if (wordList.indexOf(token[i]) === -1) {
      wordList.push(token[i]);
    }
  }
  return wordList.length;
  // $('.js-unique-word-length').text(wordList.length);
}

//////////////////////////////////////////////////////////////////
//GET AVERAGE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
//////////////////////////////////////////////////////////////////
// get the entire length of the string and divide it by the amount of words
function averageLength (token){
  var wordCount = token.split(" ").length;
  var characters = token.split("").length;
  var averageWordLength = characters/wordCount;
  // $('.js-average-word-length').text(averageWordLength + ' characters')
}

//////////////////////////////////////////////////////////////////
//CREATE TOKEN STYLE FOR TEXT
//////////////////////////////////////////////////////////////////characters
//change all text to lowercase and get rid of ranom spaces and
function tokenizeText (text) {
  return text.toLowerCase().match(/\b[^\s]+\b/).sort();
}

function removeReturns (text) {
  return text.replace(/\r?\n|\r/g, "");
}

//////////////////////////////////////////////////////////////////
//ADD VALUES TO DATA LIST
//////////////////////////////////////////////////////////////////
//CLEAN UP CODE
//once you get everything working, move all the universal pieces into this area
//this includes pushing the text, and variables that can be used elsewhere.
function createReport (text) {
  var token = tokenizeText(text);
  var totalWordCount = token.length;
  var uniqueWordLength = uniqueCount(token);
  var averageWordLength = averageLength(token);
  var $report = $('.text-report');

  $report.find('.js-word-count').text(totalWordCount);
  $report.find('.js-unique-word-count').text(uniqueWordLength);
  $report.find('.js-average-word-length').text(averageWordLength + ' characters');
}

//////////////////////////////////////////////////////////////////
//GET ALL INFORMATION WHEN USER HITS "SUBMIT" and PASS TO OTHER FUNCTIONS
//////////////////////////////////////////////////////////////////
function formSubmit() {
  $('.js-submit').click(function(e) {
    e.preventDefault();
    $('.hidden').show();
    var text = $('textarea').val();
    createReport (removeReturns(text));
    // wordCount(input);
    // averageLength(input);
    // uniqueCount(input);
  });
}

//////////////////////////////////////////////////////////////////
//RUN CODE
//////////////////////////////////////////////////////////////////
$(function() {
  formSubmit();
});
