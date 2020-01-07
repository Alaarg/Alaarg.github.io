$(window).ready(function() {
  $(".toggle_bar").click(function() {
    $(".the_navbar").toggleClass("active");
    $(".toggle_bar > i").toggleClass(" fa-bars , fa-times");
  });

  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(window).scrollTop() >= 150) {
      $(".nav").addClass("active");
    } else {
      $(".nav").removeClass("active");
    }
  });

  $(".courses_filter > .corses_btn").on("click", function(e) {
    e.preventDefault();
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    var filter = $(this).attr("data-filter");

    $(".education_courses")
      .find($(`.course_item_grid`))
      .hide();
    $(".education_courses")
      .find($(`.course_item_grid#${filter}`))
      .show();

    if (filter === "all") {
      $(".education_courses")
        .find($(`.course_item_grid`))
        .show();
    }
  });

  $(".about_tabs  .list-group-item").on("click", function() {
    var filter = $(this).attr("data-about");
    // console.log($(this).attr("data-about"));
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    $(".about_text ")
      .find($(`.about_section_text`))
      .removeClass("active");

    $(".about_text ")
      .find($(`.about_section_text#${filter}`))
      .addClass("active");
  });

  $(".cart_next").click(function() {
    // let section = $(".section_cart").attr("data-cart");

    $(".section_cart.active")
      .next()
      .addClass("active");
    $(".section_cart.active")
      .prev()
      .removeClass("active");

    // ......sde bat taps .....
    $(".price_side_bar ul li.active")
      .next()
      .addClass("active");

    $(".price_side_bar ul li.active")
      .prev()
      .removeClass("active");

    if ($(".last_step").hasClass("active")) {
      $(this).hide();
      // console.log('has');
    }
  });
  $(".cart_prev").click(function() {
    // let section = $(".section_cart").attr("data-cart");

    $(".section_cart.active")
      .prev()
      .addClass("active");
    $(".section_cart.active")
      .next()
      .removeClass("active");

    $(".price_side_bar ul li.active")
      .prev()
      .addClass("active");

    $(".price_side_bar ul li.active")
      .next()
      .removeClass("active");

    if (!$(".last_step").hasClass("active")) {
      $(".cart_next").show();
      // console.log('has');
    }
  });
  $('.section_cart_1 input:radio[name="herthiscourse"]').change(function() {
    if ($(this).is(":checked") || $(this).val() == "Yes") {
      // append goes here
      $(".cart_next").removeAttr("disabled");
      // $(".cart_next").click(function() {
      //     $(".cart_next").addClass("disabled");
      // });
    }
  });

  if ($(".last_step").hasClass("active")) {
    alert("you in 3 li");
  }

  // ------------profile--------------
  $(".list_taps li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    // console.log($(this).data('profiletab'));
    let prodata = $(this).data("profiletab");
    $(".profile_section_info")
      .find(`.pro_info_sec#${prodata}`)
      .show()
      .siblings()
      .hide();
  });

  $('input[type=file]').change(function () {
    console.log(this.files[0].mozFullPath);
});


  // $("button.showval").click(function() {
  //   let imgpath = $(".inputfile").val().replace('C:\\fakepath\\','');

  //   let path = 'assets/images/course_bg1.jpg';
  //   $(".user_img").attr('style',`background-image:url(${imgpath})`);

  //   // alert(imgpath);
  // });

  $("#file_input").change(function () {
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader)
        return;
    if (/^image/.test(files[0].type)) {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = function () {
            $(".user_upload_img").css("background-image", "url(" + this.result + ")");
        };
    }
});

});

$(document).ready(function() {
  // $(".datepicker").datepicker();
});
