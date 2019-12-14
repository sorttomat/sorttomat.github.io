$("#check-button").click(()=> {
    var passord = "horntail";
    if ($("#passord").val() == passord) {
        window.location.href="nox.html";
    }
});

$("#decrypt-button").click(()=> {
    var passord = "alohomora";
    if ($("#decrypt").val() == passord) {
        window.location.href="trelawney.html";
    }
});

$("#trelawneyButton").click(()=> {
    var passord = "butterbeer";
    if ($("#trelawneyPassord").val() == passord) {
        window.location.href="cup.html";
    }
});