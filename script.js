let numeric, snum = 0, fnum = 0, opp = "0";
numeric = document.getElementsByClassName("numeric");
operator = document.getElementsByClassName("operator");
AC = document.getElementsByClassName("AC");

let inputt = document.getElementById("input");
if (input.innerHTML === "") {
    operator[0].disabled = true;
    operator[1].disabled = true;
    operator[2].disabled = true;
    operator[3].disabled = true;
    operator[4].disabled = true;
}
else {
    operator[0].disabled = false;
    operator[1].disabled = false;
    operator[2].disabled = false;
    operator[3].disabled = false;
    operator[4].disabled = false;
}
function allclear() {
    input.innerHTML = "";
    for (i = 0; i < operator.length; i++)
        operator[i].style.color = "grey";
    snum = 0;
    fnum = 0;
    opp = "0";
    operator[0].disabled = true;
    operator[1].disabled = true;
    operator[2].disabled = true;
    operator[3].disabled = true;
    operator[4].disabled = true;

    return;
}



console.log(operator[0].value);
for (let i = 0; i < numeric.length; i++) {
    numeric[i].onclick = function putvalue() {

        if (numeric[i].value == operator[0].value) {
            operator[0].disabled = true;
            operator[1].disabled = true;
            operator[2].disabled = true;
            operator[3].disabled = true;
            operator[4].disabled = true;
            console.log(numeric[0]);
            opp = operator[0].value;
            operator[0].style.color = "red";
            fnum = parseFloat(input.innerHTML);
            console.log(fnum);
            input.innerHTML = "";


            return;
        }
        if (numeric[i].value == operator[1].value) {
            operator[0].disabled = true;
            operator[1].disabled = true;
            operator[2].disabled = true;
            operator[3].disabled = true;
            operator[4].disabled = true;
            console.log(numeric[0]);
            opp = operator[1].value;
            operator[1].style.color = "red";
            fnum = parseFloat(input.innerHTML);
            console.log(fnum);
            input.innerHTML = "";


            return;
        }
        if (numeric[i].value == operator[2].value) {
            operator[0].disabled = true;
            operator[1].disabled = true;
            operator[2].disabled = true;
            operator[3].disabled = true;
            operator[4].disabled = true;
            console.log(numeric[0]);
            opp = operator[2].value;
            operator[2].style.color = "red";
            fnum = parseFloat(input.innerHTML);
            console.log(fnum);
            input.innerHTML = "";


            return;
        }
        if (numeric[i].value == operator[3].value) {
            operator[0].disabled = true;
            operator[1].disabled = true;
            operator[2].disabled = true;
            operator[3].disabled = true;
            operator[4].disabled = true;
            console.log(numeric[0]);
            opp = operator[3].value;
            operator[3].style.color = "red";
            fnum = parseFloat(input.innerHTML);
            console.log(fnum);
            input.innerHTML = "";


            return;
        }
        operator[4].disabled = false;
        if (numeric[i].value == operator[4].value) {
            switch (opp) {
                case "-":
                    snum = parseFloat(input.innerHTML);
                    console.log(snum);
                    input.innerHTML = "";
                    console.log(fnum - snum);
                    input.innerHTML = (fnum - snum);

                    break;
                case "+":
                    snum = parseFloat(input.innerHTML);
                    console.log(snum);
                    input.innerHTML = "";
                    console.log(fnum - snum);
                    input.innerHTML = (fnum + snum);

                    break;
                case "*":
                    snum = parseFloat(input.innerHTML);
                    console.log(snum);
                    input.innerHTML = "";
                    console.log(fnum - snum);
                    input.innerHTML = (fnum * snum);

                    break;
                case "/":
                    snum = parseFloat(input.innerHTML);
                    console.log(snum);
                    input.innerHTML = "";
                    console.log(fnum - snum);
                    input.innerHTML = (fnum / snum);

                    break;
                default:
                    console.log("HII")
                    break;
            }



            return;

        }

        input.innerHTML += numeric[i].value;
        if (opp === "0") {
            operator[0].disabled = false;
            operator[1].disabled = false;
            operator[2].disabled = false;
            operator[3].disabled = false;

        }

    }


}





//important
