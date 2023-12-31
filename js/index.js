// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        //console.log(id+" "+top +" "+offset+" "+height+"<br>")

        if(top >= offset && top < offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            /*active sections for animation on scroll*/
            sec.classList.add('show-animate')
        }else{
            sec.classList.remove('show-animate')

        }
    })
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}
jQuery('#contactform').on('submit',function(e){
    e.preventDefault();
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbx_nlZHL-JyUaMqw0EOJZLt0r7UwJaB70OrZkgzj9Wlpm1SK5ZquinX0N21j1HatNL5/exec',
        type:'post',
        data:jQuery('#contactform').serialize(),
        success:function(result){
            alert("Thank You !!");
            jQuery('#full_name').val('');
            jQuery('#email').val('');
            jQuery('#mobile_no').val('');
            jQuery('#subject').val('');
            jQuery('#message').val('');

        }
    });
});