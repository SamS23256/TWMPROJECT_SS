$(document).ready(function () {
    
    $("#register").validate({
        rules: {
            fullName: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            contactnumber: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            
        }        
    });
    
    $("#addTCrt").click(function() {
        alert("Product was added to cart");
    });
    
});