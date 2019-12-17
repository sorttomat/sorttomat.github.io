$("#check-form").click((e) => {
    e.preventDefault();
    var passord = "horntail";
    if ($("#passord").val() == passord) {
        window.location.href = "nox.html";
    } else {
        window.alert("Feil passord!");
    }
});

$("#decrypt-form").click((e) => {
    e.preventDefault();
    var passord = "alohomora";
    if ($("#decrypt").val() == passord) {
        window.location.href = "trelawney.html";
    } else {
        window.alert("Feil passord!");
    }
});

$("#trelawney-form").submit((e) => {
    e.preventDefault();
    var passord = "butterbeer";
    if ($("#trelawneyPassord").val() == passord) {
        window.location.href = "merpeople.html";
    } else {
        window.alert("Feil passord!");
    }
});

$("#selkie-form").submit((e) => {
    e.preventDefault();
    var passord = "mariahcarey";
    if ($("#selkie").val() == passord) {
        window.location.href = "stenography.html";
    } else {
        window.alert("Feil passord!");
    }
});

$("#sten-form").submit((e) => {
    e.preventDefault();
    var passord = "bowtruckle";
    if ($("#stenographyPassord").val() == passord) {
        window.location.href = "cup.html";
    } else {
        window.alert("Feil passord!");
    }
});