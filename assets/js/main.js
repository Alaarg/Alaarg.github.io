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
    .removeClass('active');
    
    $(".about_text ")
    .find($(`.about_section_text#${filter}`))
    .addClass('active');
  
    
  
    });
});
