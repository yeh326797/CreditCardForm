//翻轉效果
var focusItem = $("#flip");

focusItem
  .on("focus", function () {
    $(".card-outer").addClass("active");
  }).on("blur", function () {
    $(".card-outer").removeClass("active");
  });
