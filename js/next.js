
// Function for setting the page title accross all the page

function setPageTitle(title){
    document.title = title;
}

// let swipperBotton = document.querySelector(".bttn_swiper")
//           swipperBotton.addEventListener("click",  function() {
//             alert("hey clickmore")
//           })
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, // Enable looping
    });
});
        
// validation for sigup form 
const Email = document.querySelector("#appl_id");
        const welcom = document.querySelector(".hey");
        const pass = document.querySelector("#appl_pass")
        const domain = ["@mail.com", "@hotmail.com", "@gmai.com", "@apple.com","@icloud.com"];


        Email.addEventListener("input", () => {
            const firstvalue = Email.value;
            const atIndex = firstvalue.indexOf("@");
            const midstring = atIndex !== -1 ? firstvalue.substring(atIndex) : "";
            
            if (firstvalue.trim() === "") {
                welcom.innerHTML = "Login to your apple account";
                welcom.style.color = "red"
                pass.style.display ="none"
                Email.style.borderColor = "red";
            } else if (!domain.includes(midstring)) {
                welcom.innerHTML = `Invalid Apple Account.`;
                Email.style.borderColor = "red";
                welcom.style.color = "red"
                pass.style.display ="none"
            } else {
                welcom.innerHTML = `Enter Password For ${firstvalue}`;
                Email.style.borderColor = "green";
                 welcom.style.color = "gray"
                pass.style.display ="block"
            }
            console.log(firstvalue);
        });
        // validation for sigup form 


        
 
        // 
// jquery 

// $.modal({
//     title: 'Important Notice',
//     class: 'mini',
//     closeIcon: true,
//     content: 'You will be logged out in 5 Minutes',
//     actions: [{
//       text: 'Alright, got it',
//       class: 'green'
//     }]
// }).modal('show');
