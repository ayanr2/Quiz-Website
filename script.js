$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('#answer1').val();
    const answer2 = $('#answer2').val();


    
    if (answer1 === 'yes' && answer2 >= 8) {
      showResult("Walter White/Heisenberg","https://static.wikia.nocookie.net/villains/images/6/65/Walter_White2.jpg/revision/latest?cb=20230109113855");
    } else if (answer1 === 'no' && answer2 >= 5) {
      showResult("Flash","https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20657919_i_v13_ab.jpg");
    } else if (answer1 === 'yes' && answer2 < 8) {
      showResult("Spider-Man","https://img.redbull.com/images/c_crop,x_1109,y_0,h_2160,w_1728/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/09/07/92333f48-fb01-4c93-a419-f2ccdd31dc79/spider-man-screenshot");
    } else {
      showResult("Eleven","https://cdn.vox-cdn.com/thumbor/FIo4NvQ7cMICxfSuyHZAvXCtnxs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23577698/strangerthings1.jpg");
    }
      
    quizCount++;
    updateQuizCount();
  });

  function showResult(character,imagePath) {
    const resultText = `Your character result is: ${character}.`;
    const imageElement = `<img src="${imagePath}" alt="${character}" class="result-image">`;
    $('#result').empty().append(resultText).append(imageElement);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});
$('#restartBtn').click(function() {
    $(location).attr('href',);
    $('#answer1').val('');
    $('#answer2').val('');
    $('#result').empty();
});