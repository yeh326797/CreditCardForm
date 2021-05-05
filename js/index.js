//翻轉效果
var focusItem = $("#flip");

focusItem
  .on("focus", function () {
    $(".card-outer").addClass("active");
  })
  .on("blur", function () {
    $(".card-outer").removeClass("active");
  });

//focus 效果

var focus = $(".focus");

$(function () {
  $(".card-number").on("click", getFocusPosition).on('click',function(){$('#cardNumberId').click()});
  $(".card-name").on("click", getFocusPosition).on('click',function(){$('#cardHolderId').click()});
  $(".expires").on("click", getFocusPosition);
  $(".month").on("click",function(){$('#month').focus()})
  $(".year").on("click",function(){$('#year').focus()})
});

$(function(){
  $('#cardNumber').on('focus',function(){$(".card-number").click()}).on('blur',FocusRemove)
  $('#cardHolder').on('focus',function(){$(".card-name").click()}).on('blur',FocusRemove)
  $('#month').on('focus',function(){$(".expires").click()}).on('blur',FocusRemove)
  $('#year').on('focus',function(){$(".expires").click()}).on('blur',FocusRemove)
})

function getFocusPosition() {
  var focusWidth = $(this).outerWidth();
  var focusHeight = $(this).outerHeight();
  var focusLeft = $(this).position().left;
  var focusTop = $(this).position().top;

  focus.css({
    opacity: 1,
    width: focusWidth,
    height: focusHeight,
    transform: "translateX(" + focusLeft + "px) translateY(" + focusTop + "px)",
  });
}

function FocusRemove(){
  $('.focus').css({
    opacity: 0,
    width: '100%',
    height: '100%',
    transform: "translateX(0px) translateY(0px)",
  })
}

//input顯示效果

$("#cardNumber").on('keyup',function(){
  var items = $(".numberItem")

  for (var i =0;i<16;i++){
    var number = document.getElementById("cardNumber").value[i];
    
    if(i<4){
      if(number === undefined) {
        items[i].innerHTML ="#"
        return
      }
      items[i].innerHTML = number;
    } else if (i<8){
      if(number === undefined) {
        items[i+1].innerHTML ="#"
        return
      }
      items[i+1].innerHTML = '＊';
    } else if (i<12) {
      if(number === undefined) {
        items[i+2].innerHTML ="#"
        return
      }
      items[i+2].innerHTML = '*';
    } else  {
      if(number === undefined) {
        items[i+3].innerHTML ="#"
        return
      }
      items[i+3].innerHTML = number;
    }
    
  }
});

$("#cardHolder").on('keyup',function() {
  var name = document.getElementById("cardHolder").value;
  $(".name").text(name);
  if(name == ""){
    $(".name").text('FULL NAME')
  }
})

$("#month").on('change',function(){
  var month = document.getElementById("month").value
  $(".month").text(month)
  if(month == ""){
    $(".month").text('MM')
  }
})

$("#year").on('change',function(){
  var year = document.getElementById("year").value
  $(".year").text(year.substr(2))
  if(year == ""){
    $(".year").text('YY')
  }
})

$("#flip").on('keyup',function(){
  var cvv = document.getElementById("flip").value
  var cvvInput = ''
  for (i=0;i<cvv.length;i++){
    cvvInput+= '*'
  }
  $(".cvv-band").text(cvvInput)
})

