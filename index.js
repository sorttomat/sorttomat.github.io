$("#check-form").click((e)=> {
    e.preventDefault();
    var passord = "horntail";
    if ($("#passord").val() == passord) {
        window.location.href="nox.html";
    }
});

$("#decrypt-form").click((e)=> {
    e.preventDefault();
    var passord = "alohomora";
    if ($("#decrypt").val() == passord) {
        window.location.href="trelawney.html";
    }
});

$("#trelawney-form").submit((e)=> {
    e.preventDefault();
    var passord = "butterbeer";
    if ($("#trelawneyPassord").val() == passord) {
        window.location.href="merpeople.html";
    }
});

$("#selkie-form").submit((e)=> {
    e.preventDefault();
    var passord = "mariahcarey";
    if ($("#selkie").val() == passord) {
        window.location.href="cup.html";
    }
});