$(document).ready(function(){
  console.log("Script included!");
  
  //TODO: 1.Users can mark an ingredient after they buy it.
  $(".ingredient").click(function(){
    if($(this).hasClass("strikethrough")){
      $(this).removeClass("strikethrough");
    } else{
      $(this).addClass("strikethrough");
    }
  });

  //2. Users can keep their place in the directions list as they cook.
  $(".instruction").click(function(){
    if($(this).hasClass("highlight")){
      $(this).removeClass("highlight");
    } else{
      $(this).addClass("highlight");
    }
  });

  //3.Users can hide all photos.
  $(".show_button").click(function(){
    $(".photo").toggle();
  });

});