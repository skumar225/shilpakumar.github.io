//Nav fades out, loading page comes on, nav and content fade in
$(document).ready(function () {

  //Fade in and out transition of content
   $(".content").css("display", "none");
   $(".content").fadeIn(400);
   $('a').click(function(e){
       redirect = $(this).attr('href');
       e.preventDefault();
       $('.content').fadeOut(400, function(){
           document.location.href = redirect
       });
   });
   //Scrolling fading in
   $(window).scroll( function(){
       /* Check the location of each desired element */
       $('.sub-title, .project-photo, .project-text').each( function(i){
           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > bottom_of_object ){

               $(this).animate({'opacity':'1'},1500);

           }

       });

   });

});
