"use strict";

$("document").ready(function () {
  function func() {
    $("p.animated").css("opacity", "1");
    $("p.animated").addClass("slideInRight");
  }

  setTimeout(func, 2000);
});