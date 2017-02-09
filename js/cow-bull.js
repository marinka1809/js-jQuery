    var myNum = "";
    var input = document.getElementById("number-input");
    var tryNum = "";
    var cow = 0;
    var bull = 0;
    var result = "";

    var winnerDiv = document.createElement('div');
    winnerDiv.className = "div-winner";
    winnerDiv.id = "winnerDiv";
    winnerDiv.innerHTML = "<p><strong>Вы угадали число!!!</strong></p> <img src=\"img/koeienknuffel.gif\">"

    var divResult = document.createElement('div');
    divResult.className = "col-sm-5 col-sm-offset-1 div-result";
    divResult.id = "divResult";
    game.appendChild(divResult);

    getRandomMyNum(4);
    console.log("num !!!:", myNum);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomMyNum(lenght) {
        var k;
        for (var i = 0; i < lenght; i++) {
            do {
                k = getRandomInt(0, 9);
            } while (myNum.indexOf(k) >= 0);
            myNum += k;
        }
    }

    function getTryNum() {
        input = document.getElementById("number-input");
        divResult = document.getElementById("divResult");
        if ((!/[0-9]{4}/.test(input.value)) || (input.value.length > 4) || (reiteration(input.value))) {
            alert('Неверный формат ввода');
            input.value = '';
        }
        else {
            tryNum = input.value;
            cowBull(myNum, tryNum);
            result = "Число: " + tryNum + ". " + "Быки: " + bull + "  " + "Коровы: " + cow;
            var newP = document.createElement('p');
            newP.innerHTML = result;
            divResult.appendChild(newP);
            input.value = "";
            if (bull === 4) {
                firstGame.insertBefore(winnerDiv, newGame);
                cow = 0;
                bull = 0;
            }
        }
        return false;
    }

    function reiteration(string) {
        var k = false;
        for (var i = 0; i < string.length - 1; i++) {
            if (string.indexOf(string[i], i + 1) >= 0) {
                k = true;
            }
        }
        return k;
    }

    function cowBull(string1, string2) {
        cow = 0;
        bull = 0;
        for (var i = 0; i < string1.length; i++) {
            if (string1[i] === string2[i]) {
                bull++;
            }
            else if (string1.indexOf(string2[i]) >= 0) {
                cow++;
            }
        }
    }

    document.getElementById("newGame").onclick = function () {
        myNum = "";
        getRandomMyNum(4);
        console.log("num !!!:", myNum);
        divResult = document.getElementById("divResult");
        divResult.parentNode.removeChild(divResult);
        winnerDiv.parentNode.removeChild(winnerDiv);
        var divResult = document.createElement('div');
        divResult.className = "col-sm-5 col-sm-offset-1 div-result";
        divResult.id = "divResult";
        game.appendChild(divResult);
    };