// - [ ] Data computing
//   - [x] Total word count
//   - [ ] Unique word count
//   - [ ] Average word length
// - [ ] Grabbing data from <textarea>

//GET TEXT FROM TEXTAREA
// var input = "michaela eleanor blackham and ryan chase ledereman moved to denver colorado from weymouth and natick massachusetts"

//GET WORD COUNT OF INPUT and RETURN INPUT LENGTH
function wordCount(input) {
  var words = input.split(" ").length;
  $('.js-word-count').text(words);
}

//GET UNIQUE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
function uniqueCount(input) {
  var wordList = [];
  var wordCount = input.split(" ").length;
  for ( var i = 0; i <= wordCount; i++) {
    input.str("");
    wordList.push(input);
  }
  console.log(wordList);
}

//GET AVERAGE WORD LENGTH OF INPUT and RETURN INPUT LENGTH
function averageLength (input){
  var characters = input.split("");
  $('.js-average-word-length').text(characters.length + ' characters')
}

//ADD VALUES TO DATA LIST
function enterpriseGradeReport (input) {
  return input;
  return {
    // total_count: totalWords,
    // unique_count: {
    //   'Help': 2,
    //   'I': 1,
    //   'need': 1,
    //   "somebody's": 1
    // }
    // average: /2
  };
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
// var report = enterpriseGradeReport(input)
// console.log('report:', report);
