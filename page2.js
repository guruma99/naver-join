let idBox = $('#id-input').val();
let pwBox = $('.pw-input').val();
let repwBox = $('.repw-input').val();
let nameBox = $('.name-input').val();
let yearBox = $('.year').val();
let monthBox = $('.month').val();
let dateBox = $('.date').val();

$('.id-input').on('focusout', function () {
  let idBox = $('#id-input').val();
  if (idBox.length == 0) {
    $('#id-red').css('visibility', 'visible')
  } else if (idBox.length <= 5 || idBox.length >= 21) {
    $('#id-red').css('visibility', 'visible')
    $('#id-red').html('5~20자의 영문소문자만 사용가능합니다.');
  } else {
    $('#id-red').css('visibility', 'visible')
    $('#id-red').css('color', 'green')
    $('#id-red').html('멋진 아이디네요!');
  }
});

$('.pw-input').on('focusout', function () {
  if (pwBox == '') {
    $('#pw-red').css('visibility', 'visible');
  }
});

$('.repw-input').on('focusout', function () {
  if (pwBox == '') {
    $('#repw-red').css('visibility', 'visible');
  }
});

$('.name-input').on('focusout', function () {
  if (nameBox == '') {
    $('#name-red').css('visibility', 'visible');
  }
});

$('.year').on('focusout', function () {
  if (yearBox == '') {
    $('#birth-red').css('visibility', 'visible');
    $('#birth-red').html('태어난 년도 4자리를 정확하게 입력하세요.');
  }
});

$('.month').on('focusout', function () {
  if (monthBox.length == 0) {
    $('#birth-red').css('visibility', 'visible');
    $('#birth-red').html('태어난 월을 선택하세요');
  }
});

$('.date').on('focusout', function () {
  if (dateBox.length == 0) {
    $('#birth-red').css('visibility', 'visible');
    $('#birth-red').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.');
  }
});

