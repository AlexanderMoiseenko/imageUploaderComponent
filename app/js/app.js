;(function() {
    var output = document.getElementsByClassName("output-img")[0];
    
    var input1 = document.getElementsByClassName('upload-input')[0];
    input1.onchange = onchange;

    var input2 = document.getElementsByClassName('change-img-input')[0];
    input2.onchange = onchange;

    var delButton = document.getElementsByClassName("delete-img-btn")[0];
    delButton.onclick = onclick;

    function onchange (event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function() {
            var dataURL = reader.result;
            output.src = dataURL;
            output.classList.remove("hidden");
            if (output.width >= output.height) {
                output.classList.add('horizontal');
                output.classList.remove('vertical');
            }
            else if (output.width < output.height) {
                output.classList.remove('horizontal');
                output.classList.add('vertical');
            }
        };
        reader.readAsDataURL(input.files[0]);
        document.getElementsByClassName('pict-div')[0].classList.add('has-img');
    };

    function onclick() {
        output.src = "";
        document.getElementsByClassName('pict-div')[0].classList.remove("has-img");
        output.classList.add("hidden"); 
    };
})();
