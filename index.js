

let form = document.getElementById('form')

let h1 = document.getElementById('man_heading')

let p = document.getElementById('man-p')

let main = document.getElementById('ma')


form.addEventListener("submit", (e) => {
    e.preventDefault();

   
    
    let email = document.getElementById("email");

   
    // handle submit

    console.log('submitted')
    console.log(email.value)
    main.innerHTML = `<h1 class="main_heading">Thanks for subscribing!</h1> <p class="main__p">A confirmation email has been sent to <span class="main_heading" style="font-size: 1.7rem;">${email.value}</span>. Please open it and click the button inside to confirm your subscription</p>
    `
    

    

    
  });