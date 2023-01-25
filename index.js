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


  // $('.normal1 img').on('click', function(){
  //    { $(".normal-check1").toggle().attr("checked", true)
  //     $('.normal1 img').attr('src', './images/pc_check_on_l_24.png')
  //   }
  // });


// $('.normal1 img').on('click', function(){
//      { $(".normal-check1").attr("checked", flase)
//       $('.normal1 img').attr('src', './images/pc_check_off_24.png')
//     }
//   });






  // $('.normal-check1').on('click', function(){
  //   if ($(".normal-check1").is(":checked")) {
  //     $('.normal1 img').attr('src', './images/pc_check_on_l_24.png')
  //   }
  //   else {
  //     $('.normal1 img').attr('src', './images/pc_check_off_24.png')
  //   }
  // });

  // $('.normal-check2').on('click', function(){
  //   if ($(".normal-check2").is(":checked")) {
  //     $('.normal2 img').attr('src', './images/pc_check_on_l_24.png')
  //   }
  //   else {
  //     $('.normal2 img').attr('src', './images/pc_check_off_24.png')
  //   }
  // });

  // $('.normal-check3').on('click', function(){
  //   if ($(".normal-check3").is(":checked")) {
  //     $('.normal3 img').attr('src', './images/pc_check_on_l_24.png')
  //   }
  //   else {
  //     $('.normal3 img').attr('src', './images/pc_check_off_24.png')
  //   }
  // });


  // $('.normal-check4').on('click', function(){
  //   if ($(".normal-check4").is(":checked")) {
  //     $('.normal4 img').attr('src', './images/pc_check_on_l_24.png')
  //   }
  //   else {
  //     $('.normal4 img').attr('src', './images/pc_check_off_24.png')
  //   }
  // });
  //얘네가 체크가 되어있을 때 이미지가 변화해라




  // $('.normal-check').each(function(index, element) {
  //   if (element.is(":checked")) {
  //     $('.normal img')[index].attr('src', './images/pc_check_on_l_24.png');
  //   }
  // });