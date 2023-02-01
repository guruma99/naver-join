// const all_check = document.getElementById ('all');
// const all_label = document.getElementById('all_label');
// const all_img = document.querySelector('#all_label > img');
// const main_img = document.querySelectorAll('.main_label img');
// console.log(all_check, all_label, all_img, main_img);

// all_check.addEventListener('click', function() {
//   if (all_check.checked == true) {
//     all_img.src = "./images/pc_check_on_l_24.png";
//     main_img.src = "./images/pc_check_on_l_24.png";
//   } else {
//     all_img.src = "./images/pc_check_off_24.png";
//     main_img.src = "./images/pc_check_off_24.png";
//   }
// })


$('#all').on('click', function(){
  let all_check = $('#all');
  let all_label = $('#all_label');
  let all_img = $('#all_label img');
  let normal = $('.normal-check');
  let normal_img = $('.normal img');

  console.log(all_check, all_label, all_img, normal_img, normal);

  if (all_check.is(":checked")) {
    $(".normal-check").attr("checked", true);
    $('#all_label img').attr('src', './images/pc_check_on_l_24.png')
    $('.normal img').attr('src', './images/pc_check_on_l_24.png')
  }
  else {
    $(".normal-check").attr("checked", false);
    $('#all_label img').attr('src', './images/pc_check_off_24.png')
    $('.normal img').attr('src','./images/pc_check_off_24.png')
  }
  });
  // 전체박스 클릭,해제시 이미지 변화


//   $('.normal1 img').on('click', function(){
//      { $(".normal-check1").toggle().attr("checked", true)
//       $('.normal1 img').attr('src', './images/pc_check_on_l_24.png')
//     }
//   });


// $('.normal1 img').on('click', function(){
//      { $(".normal-check1").attr("checked", flase)
//       $('.normal1 img').attr('src', './images/pc_check_off_24.png')
//     }
//   });






  $('.normal-check1').on('click', function(){
    if ($(".normal-check1").is(":checked")) {
      $('.normal1 img').attr('src', './images/pc_check_on_l_24.png')
    }
    else {
      $('.normal1 img').attr('src', './images/pc_check_off_24.png')
    }
  });

  $('.normal-check2').on('click', function(){
    if ($(".normal-check2").is(":checked")) {
      $('.normal2 img').attr('src', './images/pc_check_on_l_24.png')
    }
    else {
      $('.normal2 img').attr('src', './images/pc_check_off_24.png')
    }
  });

  $('.normal-check3').on('click', function(){
    if ($(".normal-check3").is(":checked")) {
      $('.normal3 img').attr('src', './images/pc_check_on_l_24.png')
    }
    else {
      $('.normal3 img').attr('src', './images/pc_check_off_24.png')
    }
  });


  $('.normal-check4').on('click', function(){
    if ($(".normal-check4").is(":checked")) {
      $('.normal4 img').attr('src', './images/pc_check_on_l_24.png')
    }
    else {
      $('.normal4 img').attr('src', './images/pc_check_off_24.png')
    }
  });
  //얘네가 체크가 되어있을 때 이미지가 변화해라

  $('#cancel').on('click', function(){
    location.href = "http://naver.com";
  });

//#submit 버튼을 클릭 했을 때 필수동의 사항에 모두 체크했는지 확인
// 모두 체크되어 있으면 통과
// 체크 안된 게 있다면 #red-alert을 보여주고 전송을 중지

$('#submit').on('click', function(e) {
  // let req = $('.req').length;
  let chkreq1 = $(".normal-check1").is(":checked");
  let chkreq2 = $(".normal-check2").is(":checked");
  // let unchk = req - (chkreq1 + chkreq2);
  // if(unchk == 0) {
  if(chkreq1 && chkreq2) {
    location.replace("./joinpage2.html");
  } else {
    // 제출되지 못하게 막기
    // #red-alert가 보이게
    $('#red-alert').css('visibility', 'visible');
  }
});