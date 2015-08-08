$(document).ready(function() {
  $("#frame").hide();
  $("#preload").show();
});

$(document).keypress(function(e) {
  if(e.which === 13) {

    $("#preload").hide();

    $("#frame").show();

    console.log("Hello Mofo!! I'll open source this site when it ressembles something :P Don't forget to say hi on twitter -> @_juanmnl");

    $("#frame #screen .text").typed({
      strings: [
        '<small><span class="warning">**This site is under development**</span></small>',
        'Hello there! ;)^1000',
        'How are you?^1000',
        '^500 My name is Juan Manuel Cornejo and i\'m a frontend designer/engineer.^2000<br>I currently work from Quito,^200 Ecuador. ^500 <small>(0.2333° S, 78.5167° W – UTC/GMT -5)^1500</small><br><br> ^500 I love building things for the web.^500 My areas of interest are:^500<br><br>- RESEARCH and DEVELOPMENT^1000<br>- UI ENGINEERING <i><small>(User interface)</small></i>^1000<br>- UX DESIGN <i><small>(User experience)</small></i>^1000<br>- PRODUCT DESIGN^1000 <br>- PROTOTYPE DEVELOPMENT^1000<br>- WEB/MOBILE CONSULTING^1500<br><br> ^1000 <small>(This is an actual WIP (work-in-progress) of an UI research i\'m working on.)</small> ^1500<br><br> If you want to get in touch,^500 please use one of the buttons below,^300<br>or throw me an email juanmnl@me.com^3000<br><br>Thank you for stopping by!^500<br><br>:)<br><br>  – Juanmnl'
      ],
      contentType: 'html',
      loop: false
    });
  }
});
