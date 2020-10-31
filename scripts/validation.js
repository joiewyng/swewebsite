$(document).ready(function () {

  //Showcase ticket form validation
  $("#student").on("input", function(){
      $(".student").removeClass("hidden");
      $("#company").attr("required", true);

  })

  $("#company").on("input", function(){
      $(".student").addClass("hidden");
      $("#company").attr("required", false);
  })

});
