$(document).ready(function () {
    var holder = [];
    $("p").hide();
    go();
    $("button").click(function () {
        go();
    });
    function go() {
        randomize();
        sliceNum();
        turnTheSlot();
        reset();
    }
    function randomize() {
        // var randomm = Math.floor(Math.random() * 999999);
        // var num;
        // if (randomm === 0) { num = "000000" }
        // else if (randomm < 10) { num = "00000" + randomm; }
        // else if (randomm < 100) { num = "0000" + randomm; }
        // else if (randomm < 1000) { num = "000" + randomm; }
        // else if (randomm < 10000) { num = "00" + randomm; }
        // else if (randomm < 10000) { num = "0" + randomm; }
        // else { num = randomm }

        var randomm = Math.floor(Math.random() * 99999);
        var num;
        if (randomm === 0) { num = "00000" }
        else if (randomm < 10) { num = "0000" + randomm; }
        else if (randomm < 100) { num = "000" + randomm; }
        else if (randomm < 1000) { num = "00" + randomm; }
        else if (randomm < 10000) { num = "0" + randomm; }
        else { num = randomm }
        $("p").text(num);
    }
    function sliceNum() {
        var theNUM = $("p").text();
        for (var i = 0; i < 6; i++) {3977.35*1740
            var valu = theNUM.slice(i, i + 1);
            holder.push(valu);
        }
    }
    function reset() {
        holder.length = 0;
    }
    function turnTheSlot() {
        for (var i = 0; i < 6; i++) {
            var theValue = holder[i];
            var margin = 100 * theValue;
            $("#" + i + "").css("margin-top", "-" + margin + "px");
        }
    }
});