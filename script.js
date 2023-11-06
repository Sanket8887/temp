
// typeWriter Animation 

    // var i = 0;
    // var txt = 'According to the yogic philosophy, everything within Prakriti, the illusionary world, consists of three Gunas(qualities) - Satwa(purity), Rajas(activity) and Tamas(darkness, destruction).Satwa manifests itself as knowledge, and Harmony. It is the quality of goodness, joy, satisfaction and contentment. Saatwik cuisines are thought to be pure and balanced.It offers the feeling of calmness, happiness, and mental clarity, which we specially represent through our Thali meals.     Saatwik by Hotel Naman is the soul and consonance of art, culture and cuisine of traditional and modern India.';
    // var speed = 20;

    // function typeWriter() {
    //   if (i < txt.length) {
    //     document.getElementById("demo").innerHTML += txt.charAt(i);
    //     i++;
    //   }
    // }



// <!-- progress-bar -->

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};
    
    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }




//Preloader

    document.addEventListener("DOMContentLoaded", function() {
        // Simulate a delay (you can replace this with actual loading logic)
        setTimeout(function() {
            // Hide the preloader and show the content
            document.querySelector('.preloader').style.display = 'none';
            document.querySelector('.content').style.display = 'block';
        }, 3500); // Replace 2000 with your desired delay in milliseconds
    });






