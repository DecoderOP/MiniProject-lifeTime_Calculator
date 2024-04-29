// document.querySelector(".container").style.visibility = "hidden";
function Lifetime() {
    document.querySelector(".container").style.visibility = "visible";
    setInterval(() => {
        let dob = document.getElementById("dobirth").value;
        let b = new Date(dob);
        let c = new Date();
        console.log(b,c);
        let month = b.getMonth();
        let Cmonth = c.getMonth();
        let date = b.getDate();
        let Cdate = c.getDate();
        let hours = c.getHours();
        let minutes = c.getMinutes();
        let seconds = c.getSeconds();
        let i;
        switch (parseInt(month)) {
            case 0 :
                i = 1;
                break;
            case 2:
                i = 1;
                break;
            case  4 :
                i = 1;
                break;
            case  6 :
                i = 1;
                break;
            case  7 :
                i = 1;
                break;
            case  9 :
                i = 1;
                break;
            case 11:
                i = 1;
                break;
            case 1:
                i=-1;
                break;
            case  3:
                i=0;
                break;
            case 5:
                i=0;
                break;
            case 8:
                i=0;
                break;
            case 10:
                i=0;
                break;
            default:
                break;
        }
        if (month > Cmonth) {
            document.querySelector(".timer1").innerHTML = `${(parseInt(c.getFullYear()) - parseInt(b.getFullYear()) - 1).toString().padStart(2, 0)}`;
            if (date > Cdate) {
                document.querySelector(".timer2").innerHTML = `${(parseInt(Cmonth) + (12 - parseInt(month)) - 1).toString().padStart(2, 0)}`;
                document.querySelector(".timer3").innerHTML = `${(Cdate - date + 30 + i).toString().padStart(2, 0)}`;
            }
            else {
                document.querySelector(".timer2").innerHTML = `${(parseInt(Cmonth) + (12 - parseInt(month))).toString().padStart(2, 0)}`;
                document.querySelector(".timer3").innerHTML = `${(Cdate - date).toString().padStart(2, 0)}`;
            }
        }
        else if (month < Cmonth) {
            if (date > Cdate) {
                document.querySelector(".timer1").innerHTML = `${(parseInt(c.getFullYear()) - parseInt(b.getFullYear())).toString().padStart(2, 0)}`;
                document.querySelector(".timer2").innerHTML = `${(parseInt(Cmonth) - parseInt(month) - 1).toString().padStart(2, 0)}`;
                document.querySelector(".timer3").innerHTML = `${(Cdate - date + 30 + i).toString().padStart(2, 0)}`;
            }
            else {
                document.querySelector(".timer1").innerHTML = `${(parseInt(c.getFullYear()) - parseInt(b.getFullYear())).toString().padStart(2, 0)}`;
                document.querySelector(".timer2").innerHTML = `${(parseInt(Cmonth) - parseInt(month)).toString().padStart(2, 0)}`;
                document.querySelector(".timer3").innerHTML = `${(Cdate - date).toString().padStart(2, 0)}`;
            }
        }
        else {
            if (date > Cdate) {
                document.querySelector(".timer1").innerHTML = `${(parseInt(c.getFullYear()) - parseInt(b.getFullYear()) - 1).toString().padStart(2, 0)}`;
                document.querySelector(".timer2").innerHTML = `${(parseInt(Cmonth) + 12 - parseInt(month) - 1).toString().padStart(2, 0)}`;
                document.querySelector(".timer3").innerHTML = `${(Cdate - date + 31).toString().padStart(2, 0)}`;
            }
            else {
                document.querySelector(".timer1").innerHTML = `${(parseInt(c.getFullYear()) - parseInt(b.getFullYear())).toString().padStart(2, 0)}`;
                document.querySelector(".timer2").innerHTML = `${(parseInt(Cmonth) - parseInt(month)).toString().padStart(2, 0)}`;
                document.querySelector(".timer3").innerHTML = `${(Cdate - date).toString().padStart(2, 0)}`;
            }

        }
        document.querySelector(".timer4").innerHTML = `${hours.toString().padStart(2, 0)}`;
        document.querySelector(".timer5").innerHTML = `${minutes.toString().padStart(2, 0)}`;
        document.querySelector(".timer6").innerHTML = `${seconds.toString().padStart(2, 0)}`;
    }, 1000);
    // clearInterval();
}

let buttonn = document.getElementById("button")
buttonn.addEventListener("click", Lifetime)
