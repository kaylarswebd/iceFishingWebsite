// news para show and hide function
$(document).ready(function () {
  $("#news1").click(function () {
    $("div.news1").hide();
  });
  $("#news12").click(function () {
    $("div.news1").show();
  });
});

$(document).ready(function () {
  $("#news2").click(function () {
    $("div.news2").hide();
  });
  $("#news22").click(function () {
    $("div.news2").show();
  });
});

$(document).ready(function () {
  $("#news3").click(function () {
    $("p.news3").hide();
  });
  $("#news33").click(function () {
    $("p.news3").show();
  });
});

$(document).ready(function () {
  $("#news4").click(function () {
    $("p.news4").hide();
  });
  $("#news44").click(function () {
    $("p.news4").show();
  });
});

$(document).ready(function () {
  $("#news5").click(function () {
    $("p.news5").hide();
  });
  $("#news55").click(function () {
    $("p.news5").show();
  });
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}