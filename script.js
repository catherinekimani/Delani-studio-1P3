// Jquery functions
// design section
$(document).ready(function(){
    $(".design-image").click(function(){
      $(".design-image").toggle(1000);
      $(".design").show(1000);
    });
    $(".design").click(function(){
      $(".design").slideUp(1000);
      $(".design-image").slideDown(1000);
    });
  });

// development section
$(document).ready(function(){
    $(".dev-image").click(function(){
        $(".dev-image").toggle(1000);
        $(".development").show(1000);

        $(".development").click(function(){
            $(".development").slideUp(1000);
            $(".dev-image").slideDown(1000);
        })
    });
});


// product management
$(document).ready(function(){
    $(".product-image").click(function(){
        $(".product-image").toggle(1000);
        $(".productM").show(1000);

        $(".productM").click(function(){
            $(".productM").slideUp(1000);
            $(".product-image").slideDown(1000);
        })
    })
});

// container 1
$(document).ready(function(){
    $("#image4").hover(function(){
        $("#image4").css("filter","brightness(50%)");
        $("#div4").toggle();
    });
    $("#image3").hover(function(){
        $("#image3").css("filter","brightness(50%)");
        $("#div3").toggle();
    });
    $("#image2").hover(function(){
        $("#image2").css("filter","brightness(50%)");
        $("#div2").toggle();
    });
    $("#image1").hover(function(){
        $("#image1").css("filter","brightness(50%)");
        $("#div1").toggle();
    });
});

// container 2
$(document).ready(function(){
    $("#image5").hover(function(){
        $("#image5").css("filter","brightness(50%)");
        $("#div5").toggle();
    });
    $("#image6").hover(function(){
        $("#image6").css("filter","brightness(50%)");
        $("#div6").toggle();
    });
    $("#image7").hover(function(){
        $("#image7").css("filter","brightness(50%)");
        $("#div7").toggle();
    });
    $("#image8").hover(function(){
        $("#image8").css("filter","brightness(50%)");
        $("#div8").toggle();
    });
});