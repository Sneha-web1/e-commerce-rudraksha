document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".headerfixed");
  const threshold = 68; // Adjust this value based on when you want the fixed navigation to appear

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("fixed");
    } else {
      navBar.classList.remove("fixed");
    }
  });
});
function incrementValue() {
  var value = parseInt(document.getElementById("number").innerText);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").innerText = value;
  console.log(value);
}
function decrementValue() {
  var value = parseInt(document.getElementById("number").innerText);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
  }
  document.getElementById("number").innerText = value;
  console.log(value);
}

$(document).ready(function () {
  $(".slideshow-thumbnails").hover(function () {
    changeSlide($(this));
  });

  let debounceTimeout;
  $(document).mousemove(function (e) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(function () {
      var imgx1 = $(".slideshow-items.active").offset().left;
      var imgx2 = $(".slideshow-items.active").outerWidth() + imgx1;
      var imgy1 = $(".slideshow-items.active").offset().top;
      var imgy2 = $(".slideshow-items.active").outerHeight() + imgy1;

      if (
        e.clientX > imgx1 &&
        e.clientX < imgx2 &&
        e.clientY > imgy1 &&
        e.clientY < imgy2
      ) {
        $("#lens").show();
        $("#result").show();
        imageZoom($(".slideshow-items.active"), $("#result"), $("#lens"));
      } else {
        $("#lens").hide();
        $("#result").hide();
      }
    }, 50); // Adjust debounce delay as needed
  });
});

function imageZoom(img, result, lens) {
  result.width(img.innerWidth());
  result.height(img.innerHeight());
  lens.width(img.innerWidth() / 2);
  lens.height(img.innerHeight() / 2);

  result.offset({
    top: img.offset().top,
    left: img.offset().left + img.outerWidth() + 10,
  });

  var cx = img.innerWidth() / lens.innerWidth();
  var cy = img.innerHeight() / lens.innerHeight();

  result.css("backgroundImage", "url(" + img.attr("src") + ")");
  result.css(
    "backgroundSize",
    img.width() * cx + "px " + img.height() * cy + "px"
  );

  lens.on("mousemove touchmove", function (e) {
    moveLens(e, img, lens, result, cx, cy);
  });
  img.on("mousemove touchmove", function (e) {
    moveLens(e, img, lens, result, cx, cy);
  });
}

function moveLens(e, img, lens, result, cx, cy) {
  var x = e.clientX - lens.outerWidth() / 2;
  var y = e.clientY - lens.outerHeight() / 2;
  if (x > img.outerWidth() + img.offset().left - lens.outerWidth()) {
    x = img.outerWidth() + img.offset().left - lens.outerWidth();
  }
  if (x < img.offset().left) {
    x = img.offset().left;
  }
  if (y > img.outerHeight() + img.offset().top - lens.outerHeight()) {
    y = img.outerHeight() + img.offset().top - lens.outerHeight();
  }
  if (y < img.offset().top) {
    y = img.offset().top;
  }
  lens.offset({ top: y, left: x });
  result.css(
    "backgroundPosition",
    "-" +
      (x - img.offset().left) * cx +
      "px -" +
      (y - img.offset().top) * cy +
      "px"
  );
}

function changeSlide(elm) {
  $(".slideshow-items").removeClass("active");
  $(".slideshow-items").eq(elm.index()).addClass("active");
  $(".slideshow-thumbnails").removeClass("active");
  $(".slideshow-thumbnails").eq(elm.index()).addClass("active");
}

document.getElementById("codvalue").addEventListener("input", function (e) {
  // Replace any non-numeric character with an empty string
  this.value = this.value.replace(/[^0-9]/g, "");
});

function validatePinCode() {
  var pinCode = document.getElementById("codvalue").value;
  if (pinCode === "") {
    alert("Please enter a Pin Code.");
    return false;
  }
  if (!/^[0-9]{6}$/.test(pinCode)) {
    alert("Please enter a valid 6-digit numeric Pin Code.");
    return false;
  }
  // Proceed with further actions if the pin code is valid
  alert("Pin Code is valid!");
  return true;
}

function changeimg() {
  // Hide the image
  document.getElementById("abcd").style.display = "none";

  // Show the video
  document.getElementById("abcde").style.display = "block";

  // Hide the play icon
  document.getElementById("iconnone").style.display = "none";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
