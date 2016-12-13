$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // For Firefox and Safari 
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";
var menuHtml = "snippets/menu-snippet.html";
var aboutHtml = "snippets/about-snippet.html";
var locationHtml = "snippets/location-snippet.html";
var singleHtml = "snippets/single-snippet.html"

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

document.addEventListener("DOMContentLoaded", function (event) {

showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


// Load the menu categories view
dc.loadMenuCategories = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    menuHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the about view
dc.loadAboutView = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    aboutHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};


// Load the location view
dc.loadLocationView = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    locationHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the single view
dc.loadSingleView = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    singleHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};



global.$dc = dc;

})(window);


