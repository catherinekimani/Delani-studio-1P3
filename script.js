// Jquery functions
// design section
$(document).ready(function(){
    $(".design").click(function(){
      $(".design-image").slideToggle(1000);
      $(".text1").slideToggle(1000);
    });
  });

// development section
$(document).ready(function(){
    $(".development").click(function(){
        $(".dev-image").slideToggle(1000);
        $(".text2").slideToggle(1000);
    });
});


// product management
$(document).ready(function(){
    $(".product").click(function(){
        $(".product-image").toggle(1000);
        $(".text3").show(1000);
    });
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

// javascript form
function send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name.length == ""){
        alert("please enter name");
    }else if(email == ""){
        alert("invalid email!!");
    }else if(message == ""){
        alert("Please enter message");
    }else if(name && email == true){
    }else{
        alert(name + " " + "We have received your message. Thank you for reaching out to us.");
    };
}