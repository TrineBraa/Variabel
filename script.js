let choosenColor = "";  //Denne variabelen lar meg holde ev farge som gis ved onclick funkjsonen på de forskjellige farge valgene jeg har.


// denne funksjonen er knyttet til fargevalgene mine. De har en classlist toggle som gjør at de skal kunne toggles av eller på. 
function Selected(id, color) {
    RemoveSelect();
    // Selected != Selected
    document.getElementById(id).classList.toggle("selectedDiv");

    // if (Selected){color}
    // else {};

    choosenColor = color; // denne variabelen vil også gi oss fargen i knappen vi har valgt. Denne lagres i variabelen vår.
    console.log(choosenColor);


}

// denne funksjonen gir oss en farge i bakgrunnen når jeg klikker på divene med funksjonnavnet i deres onclick.
function giveAColor(id) {
    document.getElementById(id).style.backgroundColor = choosenColor;
}

//Denne funksjonen vil endre bagrunsfarge på body tagen. denne er knyttet til knappen som har bodyColor i onclick funskjonen.
function bodyColor() {
    document.getElementById('body').style.backgroundColor = choosenColor;
}

//Forsøk på å fjerne fargen etter å ha trykket på en annen div. jeg forsøkte å endre toggle i den første funksjonen til add og denne til remove uten at det gjorde noe da den ble lagt til i den funksjonen.
function RemoveSelect() {
    document.getElementById("colorChoice1").classList.remove("selectedDiv")
    document.getElementById("colorChoice2").classList.remove("selectedDiv")
    document.getElementById("colorChoice3").classList.remove("selectedDiv")
    document.getElementById("colorChoice4").classList.remove("selectedDiv")
    document.getElementById("colorChoice5").classList.remove("selectedDiv")
    document.getElementById("colorChoice6").classList.remove("selectedDiv")
    document.getElementById("colorChoice7").classList.remove("selectedDiv")
}