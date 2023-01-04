function sprawdz(){
    let Login1 = document.getElementById(Login);
    let Haslo1 = document.getElementById(Haslo);
    let ReHaslo1 = document.getElementById(ReHaslo);

    if(Login1==null){
        wynik1.innerHTML="Nie podano loginu";
    }
    if(Haslo1==null){
        wynik2.innerHTML="Nie podano hasła";
    }
    if(ReHaslo1==null){
        wynik3.innerHTML="Nie potwierdzono hasła";
    }
}
