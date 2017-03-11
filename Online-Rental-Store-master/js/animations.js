function calculatePrice(myform) {

    //Get selected data  
    var elt = document.getElementById("number_days");
    var days = elt.options[elt.selectedIndex].value;

    var elt = document.getElementById("number_albums");
    var albums = elt.options[elt.selectedIndex].value;

    var elt = document.getElementById("chosen_album");
    var chosen_album = elt.options[elt.selectedIndex].value;

    //convert data to integers
    days = parseInt(days);
    albums = parseInt(albums);
    chosen_album = parseInt(chosen_album)
    tax = 0.07

    //calculate total value  
    var total = days + albums + chosen_album + tax;

    //print value to  PicExtPrice 
    document.getElementById("PicExtPrice").value = total;

}
