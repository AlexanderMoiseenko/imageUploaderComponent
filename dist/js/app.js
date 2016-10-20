;(function() {
    var output = document.getElementsByClassName("outputImg")[0];
    
    var input1 = document.getElementsByClassName('uploadInput')[0];
    input1.onchange = onchange;

    var input2 = document.getElementsByClassName('changeImgInput')[0];
    input2.onchange = onchange;

    var delButton = document.getElementsByClassName("deleteImgButton")[0];
    delButton.onclick = onclick;

    function onchange (event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function() {
            var dataURL = reader.result;
            output.src = dataURL;
            output.classList.remove("hidden");
        };
        reader.readAsDataURL(input.files[0]);
        document.getElementsByClassName('pictDiv')[0].classList.add('hasImg');
    };

    function onclick() {
        output.src = "";
        document.getElementsByClassName('pictDiv')[0].classList.remove("hasImg");
        output.classList.add("hidden"); 
    };
})();
