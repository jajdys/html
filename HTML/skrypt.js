function Sprawdz(){
    let Login1 = document.getElementById(Login);
    let Haslo1 = document.getElementById(Haslo);
    let ReHaslo1 = document.getElementById(ReHaslo);

    if(Login1=""){
        wynik1.innerHTML="Nie podano loginu";
    }
    if(Haslo1=""){
        wynik1.innerHTML="Nie podano hasła";
    }
    if(ReHaslo1=""){
        wynik1.innerHTML="Nie potwierdzono hasła";
    }
}