// - [ ] Data computing
//   - [x] Total word count
//   - [ ] Unique word count
//   - [ ] Average word length
// - [ ] Grabbing data from <textarea>

//GET WORD COUNT OF INPUT and RETURN INPUT LENGTH
// split up the length of the string and get the length of the split (each word)
function wordCount(input) {
  var words = input.split(" ").length;
  $('.js-word-count').text(words);
}

//GET UNIQUE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
// need to use a loop to go through each word and add it to an array
// if word === another word already in the array, count up that word
function uniqueCount(input) {
  var wordList = [];
  var wordCount = input.split(" ").length;
  for ( var i = 0; i <= wordCount; i++) {
    console.log( i );
  }
  console.log(wordList)
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
function enterpriseGradeReport (input) {
  return input;
}

//GET ALL INFORMATION WHEN USER HITS "SUBMIT" and PASS TO OTHER FUNCTIONS
function formSubmit() {
  $('.js-submit').click(function(e) {
    e.preventDefault();
    $('.hidden').show();
    var input = $('textarea').val();
    wordCount(input);
    averageLength(input);
    uniqueCount(input);
  });
}

//RUN CODE$
$(function() {
  formSubmit();
});
