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
})