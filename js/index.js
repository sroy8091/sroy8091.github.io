$(document).ready(function() {
  $("#button1").click(function() {
    window.open("https://in.linkedin.com/in/sumit-roy-15a287aa");
  });
  $("#button2").click(function() {
    window.open("https://github.com/sroy8091");
  });
  $("#button3").click(function() {
    window.open("https://twitter.com/sroy8091");
  });
  $("#button4").click(function() {
    window.open("https://www.facebook.com/sumit.roy.925059");
  });

  $("body").scrollspy({ target: ".navbar", offset: 50 });

  $("#myNavbar a").on("click", function(event) {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      500,
      function() {
        window.location.hash = hash;
      }
    );
  });
  $("#image1").click(function() {
    window.open("www.kgec.ac.in");
  });
  $("#image3").click(function() {
    window.open("www.preseed.in/team.html");
  });
  $("#image5").click(function() {
    window.open("https://codepen.io/sroy8091/full/JGzXJG");
  });
  
  //typed.js javascript
  $(function(){
	$(".typed").typed({
		strings: ["developer.", "designer.", "enthusaist."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 800,
		// loop
		loop: true,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
});