$("#careerDevelopment").on("input", function() {
  	 console.log("careerDevelopment selected");
     if( $(".description").is(":visible") ) {
       $(".description").addClass("hidden");
     }
     else {

       $(".description").removeClass("hidden");
     }
  })

if ( $("#yes").is(':checked') || $("#no").is(':checked') ) {
      $("#volDietError").addClass("hidden");
    } else {
      $("#volDietError").removeClass("hidden");
      formValid = false;
    }

document.getElementById('careerDevelopment').addEventListener("click", function() {
  console.log("careerDevelopment selected");
}​);​

$("#careerDevelopment").click(function () {
   $(".careerDevelopment").addClass("block");
});
