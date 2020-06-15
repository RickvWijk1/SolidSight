//this function filters categories (using the search bar)
function searchFunction() {
    //initializing variables
    var input, filter, allcontainer, gridItem, h4, i;
    //declaring variables
    input = document.getElementById('myInput');
    //set the input of the search bar to capital letters 
    filter = input.value.toUpperCase();
    allcontainer = document.getElementById('allcontainer');
    gridItem = allcontainer.getElementsByClassName('location-image');

    //keep running loop if 'i' is less than the grid item's length
    for (i = 1; i < gridItem.length; i++) {
        h4 = gridItem[i].getElementsByTagName('h4')[0];

        //the text in h4 is set to uppercase in order too match the input value of filter (a.k.a. the search bar) which is also set to uppercase
        //if the h4 text contains the value that is in the search bar... else...
        if (h4.innerHTML.toUpperCase().indexOf(filter) > -1) {
            //item is displayed
            gridItem[i].style.display = "";
        } else {
            //item is not displayed
            gridItem[i].style.display = 'none';
        }
    }
}