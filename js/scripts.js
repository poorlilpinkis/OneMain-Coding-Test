$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
		$(targetBox).css('display', 'flex');
		$('#OneTime_Loan .input').val('');
    });
	
	$("#OneTime_Loan").validate({
	rules: {
		loan_number : {
		required: true,
		number: true
		},
		routing_number : {
		required: true,
		number: true,
		maxlength: 9
		},
		bank_number : {
		required: true,
		number: true
		},
		confirm_bank_number : {
		required: true,
		number: true
		},			
		card_number : {
		required: true,
		number: true
		},
		name_on_card : {
		required: true
		},
		expire_date : {
		required: true
		},
		cvv_number : {
		required: true,
		number: true,
		minlength: 3
		}
			
	},
	messages : {
		loan_number: {	
		required: "Loan Account Number is required"
		},
		routing_number: {	
		required: "Routing Number is required"
		},
		bank_number: {	
		required: "Bank Account Number is required"
		},
		confirm_bank_number: {	
		required: "Confirm Bank Account Number is required"
		},
		card_number: {	
		required: "Card Number is required"
		},
		name_on_card: {	
		required: "Name On Card is required"
		},
		expire_date: {	
		required: "Expiration Date is required"
		},
		cvv_number: {	
		required: "CVV Number is required",
		minlength: "Please enter 3 numbers"
		}
		
	},
	highlight: function(element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("field-error");
    }
	});
		
});

