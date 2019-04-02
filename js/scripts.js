$(document).ready(function(){

  var stressScore = 0;
  var relaxedScore = 0;


  $("#formStress").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=stressful]:checked").each(function(){
      stressScore++;
    });
    $("input:checkbox[name=relaxing]:checked").each(function(){
      relaxedScore++;
    });
      $(".response").show();
    if (stressScore > relaxedScore){
      if(stressScore - relaxedScore <= 2)
      {
        $(".response").text("You seem only slightly stressed, take a nap or eat a snickers.")//say you're slightly stress.. try this......
      }
      else if(stressScore - relaxedScore < 2 && stressScore - relaxedScore != 5){
        $(".response").text("You are experiencing some moderate levels of stress, Join a yoga class.")
      }
      else if(stressScore - relaxedScore == 5){
        $(".response").text("Wow! You are incredibly stressed, take a vacation!")//Take a vacation
      }
    }
    else if(stressScore < relaxedScore)
    {

    }

  });
});
