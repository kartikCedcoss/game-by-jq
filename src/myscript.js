var count = 0;

$(document).ready(function () {
  $("#b1").css("background-color", "rgb(0, 0, 0)");
  $("#b3").css("background-color", "rgb(0, 0, 0)");
  $("#b5").css("background-color", "rgb(0, 0, 0)");
  $("#b7").css("background-color", "rgb(0, 0, 0)");
  $("#b9").css("background-color", "rgb(0, 0, 0)");

console.log(count);


$("#b1").on("click", function () {
    count ++;
    
  if ($("#b1").css("background-color") == "rgb(0, 0, 0)") {
    $("#b1").css("background-color", "rgb(255, 255, 255)");
    if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
      $("#b2").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b2").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
      $("#b4").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b4").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
      $("#b2").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b2").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
      $("#b4").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b4").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
$("#b1").css("background-color", "rgb(0, 0, 0)")&&
$("#b3").css("background-color", "rgb(0, 0, 0)")&&
$("#b5").css("background-color", "rgb(0, 0, 0)")&&
$("#b7").css("background-color", "rgb(0, 0, 0)")&&
$("#b9").css("background-color", "rgb(0, 0, 0)")&&
$("#b2").css("background-color", "rgb(0,0,0)")&&
$("#b4").css("background-color", "rgb(0,0,0)")&&
$("#b6").css("background-color", "rgb(0,0,0)")&&
$("#b8").css("background-color", "rgb(0,0,0)")
)
{
    alert('you Win');
}

  
});

$("#b2").on("click", function () {
    count++;
  if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
    $("#b2").css("background-color", "rgb(255, 255, 255)");
    if ($("#b1").css("background-color") == "rgb(0, 0, 0)") {
      $("#b1").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b1").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b3").css("background-color") == "rgb(0, 0, 0)") {
      $("#b3").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b3").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b2").css("background-color", "rgb(0, 0, 0)");
    if ($("#b1").css("background-color") == "rgb(0, 0, 0)") {
      $("#b1").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b1").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b3").css("background-color") == "rgb(0, 0, 0)") {
      $("#b3").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b3").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});

$("#b4").on("click", function () {
    count ++;
  if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
    $("#b4").css("background-color", "rgb(255, 255, 255)");
    if ($("#b1").css("background-color") == "rgb(0, 0, 0)") {
      $("#b1").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b1").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b7").css("background-color") == "rgb(0, 0, 0)") {
      $("#b7").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b7").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b4").css("background-color", "rgb(0, 0, 0)");
    if ($("#b1").css("background-color") == "rgb(0, 0, 0)") {
      $("#b1").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b1").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b7").css("background-color") == "rgb(0, 0, 0)") {
      $("#b7").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b7").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});

$("#b6").on("click", function () {
    count ++;
  if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
    $("#b6").css("background-color", "rgb(255, 255, 255)");
    if ($("#b9").css("background-color") == "rgb(0, 0, 0)") {
      $("#b9").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b9").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b3").css("background-color") == "rgb(0, 0, 0)") {
      $("#b3").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b3").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b6").css("background-color", "rgb(0, 0, 0)");
    if ($("#b9").css("background-color") == "rgb(0, 0, 0)") {
      $("#b9").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b9").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b3").css("background-color") == "rgb(0, 0, 0)") {
      $("#b3").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b3").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});

$("#b8").on("click", function () {
    count ++;
  if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
    $("#b8").css("background-color", "rgb(255, 255, 255)");
    if ($("#b7").css("background-color") == "rgb(0, 0, 0)") {
      $("#b7").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b7").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b9").css("background-color") == "rgb(0, 0, 0)") {
      $("#b9").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b9").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b8").css("background-color", "rgb(0, 0, 0)");
    if ($("#b7").css("background-color") == "rgb(0, 0, 0)") {
      $("#b7").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b7").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b9").css("background-color") == "rgb(0, 0, 0)") {
      $("#b9").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b9").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
      $("#b5").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b5").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});

$("#b5").on("click", function () {
    count ++;
  if ($("#b5").css("background-color") == "rgb(0, 0, 0)") {
    $("#b5").css("background-color", "rgb(255, 255, 255)");
    if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
      $("#b2").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b2").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
      $("#b4").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b4").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
      $("#b6").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b6").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
      $("#b8").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b8").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
      $("#b2").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b2").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
      $("#b4").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b4").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
      $("#b6").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b6").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
      $("#b8").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b8").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});

$("#b3").on("click", function () {
    count++;
  if ($("#b3").css("background-color") == "rgb(0, 0, 0)") {
    $("#b3").css("background-color", "rgb(255, 255, 255)");
    if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
      $("#b2").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#tdb22").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
      $("#b6").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b6").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    if ($("#b2").css("background-color") == "rgb(0, 0, 0)") {
      $("#b2").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b2").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
      $("#b6").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b6").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});
$("#b7").on("click", function () {
    count ++;
  if ($("#b7").css("background-color") == "rgb(0, 0, 0)") {
    $("#b7").css("background-color", "rgb(255, 255, 255)");
    if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
      $("#b8").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b8").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
      $("#b4").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b4").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
      $("#b8").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b8").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b4").css("background-color") == "rgb(0, 0, 0)") {
      $("#b4").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b4").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});
$("#b9").on("click", function () {
    count ++;
  if ($("#b9").css("background-color") == "rgb(0, 0, 0)") {
    $("#b9").css("background-color", "rgb(255, 255, 255)");
    if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
      $("#b6").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b6").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
      $("#b8").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b8").css("background-color", "rgb(0, 0, 0)");
    }
  } else {
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    if ($("#b6").css("background-color") == "rgb(0, 0, 0)") {
      $("#b6").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b6").css("background-color", "rgb(0, 0, 0)");
    }
    if ($("#b8").css("background-color") == "rgb(0, 0, 0)") {
      $("#b8").css("background-color", "rgb(255, 255, 255)");
    } else {
      $("#b8").css("background-color", "rgb(0, 0, 0)");
    }
  }
  if(count == 12){
    alert('you complete the moves');
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
}
if(
    $("#b1").css("background-color", "rgb(0, 0, 0)")&&
    $("#b3").css("background-color", "rgb(0, 0, 0)")&&
    $("#b5").css("background-color", "rgb(0, 0, 0)")&&
    $("#b7").css("background-color", "rgb(0, 0, 0)")&&
    $("#b9").css("background-color", "rgb(0, 0, 0)")&&
    $("#b2").css("background-color", "rgb(0,0,0)")&&
    $("#b4").css("background-color", "rgb(0,0,0)")&&
    $("#b6").css("background-color", "rgb(0,0,0)")&&
    $("#b8").css("background-color", "rgb(0,0,0)")
    )
    {
        alert('you Win');
    }
});

$('#btnreset').on('click',function(){
    $("#b1").css("background-color", "rgb(0, 0, 0)");
    $("#b3").css("background-color", "rgb(0, 0, 0)");
    $("#b5").css("background-color", "rgb(0, 0, 0)");
    $("#b7").css("background-color", "rgb(0, 0, 0)");
    $("#b9").css("background-color", "rgb(0, 0, 0)");
    $("#b2").css("background-color", "rgb(255,255,255)");
  $("#b4").css("background-color", "rgb(255,255,255)");
  $("#b6").css("background-color", "rgb(255,255,255)");
  $("#b8").css("background-color", "rgb(255,255,255)");
  
   
})


})
