
    let absoluteBox = document.querySelector('.absolute')
    let h5 = document.querySelector('h5')
    let y = 0;
    let x = 0


    window.addEventListener('keydown', (event) => {


        if (event.key === 'ArrowDown') {

        arrowDown()

        }
        if (event.key === 'ArrowUp') {
        arrowUp()
          
        }
        if (event.key === 'ArrowLeft') {
        arrowLeft()
        

        }
        if (event.key === 'ArrowRight') {

        arrowRight()
        }
    })

    function arrowRight() {
                 x += 50;
            if (x > 200) {
                x = 200
                alert("you can't move outside the box")

            }
            absoluteBox.style.left = x + 'px';
            console.log(x);
            h5.textContent = `x = ${x}px`
            h5.style.color = 'red'

    }

    function arrowLeft() {
            x -= 50;
            if (x < 0) {
                x = 0
                alert("you can't move outside the box")

            }
            absoluteBox.style.left = x + 'px'
            console.log(x);
            h5.style.color = 'red'
            h5.textContent = `x = ${x}px`
    }

    function arrowUp() {
          y -= 50;
            if (y < 0) {
                y = 0
                alert("you can't move outside the box")
            }

            absoluteBox.style.top = y + 'px'
            console.log(y);
            h5.textContent = `y = ${y}px`
            h5.style.color = 'green'
    }

    function arrowDown() {
            y += 50;
            if (y > 200) {
                y = 200;
                alert("you can't move outside the box")
            }
            absoluteBox.style.top = y + 'px';
            h5.textContent = `y = ${y}px`
            h5.style.color = 'green'
            console.log(y);
    }


    let btns = document.querySelectorAll(".btn-control button")
    

    btns.forEach(btn =>{
        btn.addEventListener('click',()=>{
            let att = btn.getAttribute('class')
    

            if (att === "left") {
                arrowLeft()
            }
            if (att === "right") {
                arrowRight()
            }
            if (att === "up") {
                arrowUp()
            }
            if (att === "down") {
                arrowDown()
            }
            
        })
    })