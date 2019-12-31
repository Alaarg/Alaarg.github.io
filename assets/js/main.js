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
        $('.cart_next').show();
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

  $(".datepicker").datepicker();
});
