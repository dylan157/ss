$( document ).ready(function() {

	// ADD MAX DATE TODAY TO ALL DOB FIELDS
	$( "input[name*='dob']" ).attr({ 
		"max" : new Date().toISOString().split("T")[0]
	}); 
	
	// GENERATE CODE FOR PERSON 1 - NOT LIVE NOT REQUIRED
	//$( "input[name='code1']" ).val(create_ID);
	
	// AUTO UPDATE REVIEW ************ 15/04/2021
	/*$("#form-TTR :input").each(function(){
	 var input = $(this); 
	 input.change(function() {
		var element = "#review-" + input.attr('name');
		$(element).text(input.val())
		});
	});*/
	
	// INITIALISE DATETIMEPICKERS
	if (isDateTimeSupported()) {
		$('.datetime-fallback').remove();
	}
	if (!isDateTimeSupported()) {
		$('.datetime-format').datetimepicker({ format: 'YYYY-MM-DD HH:mm' })
		$('.datetime-primary').remove();
	}

	if (isDateSupported()) {
		$('.date-fallback').remove();
	}
	if (!isDateSupported()) {
		$('.date-format').datetimepicker({ format: 'YYYY-MM-DD' })
		$('.date-primary').remove();
	}
	
});



function isDateSupported () {
	var input = document.createElement('input');
	var value = 'a';
	input.setAttribute('type', 'date');
	input.setAttribute('value', value);
	return (input.value !== value);
};

function isDateTimeSupported () {
	var input = document.createElement('input');
	var value = 'a';
	input.setAttribute('type', 'datetime-local');
	input.setAttribute('value', value);
	return (input.value !== value);
};




// PHONE CHECK AND INITIALISATION
function tel_auto() {
	var input = document.querySelector("#phone"),
	  output = document.querySelector("#phone-hidden");
	
	var iti = window.intlTelInput(input, {
			formatOnDisplay: false,
			geoIpLookup: function(callback) {
			$.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
				});
			},
			allowDropdown: true,
			autoHideDialCode: false,
			nationalMode: true,
			preferredCountries: ['gb'],
			separateDialCode: true,
			utilsScript: "/ASSETS/NL/PLUGINS/intl-tel-input-master/build/js/utils.js",
			//hiddenInput: "full",
			initialCountry: "gb",
	});
}


/* ERROR CHECK */
function errorCheck(form) {
	event.preventDefault();
	var inputs = document.getElementById(form).querySelectorAll("[required]");
	var ERRORS = [];
	$.each(inputs, function(){
		
		if ($('#location').length) {
			if(errorCheckLocation()) $('#location').removeClass('error')
			else {
				$('#location').addClass('error');
				ERRORS.push(false);
			}
		}
		
		if ($(this).is(':checkbox')) {
			if ($(this).is(":checked")) $(this).removeClass('error');
			else { $(this).addClass('error')
			ERRORS.push(false);
			}
		}
		
		if ($(this).is(':radio')) {
			
			var name = $(this).attr("name");
            if($("input:radio[name="+name+"]:checked").length == 0){
                $(this).addClass('error')
				ERRORS.push(false);
            }
			else {
				$(this).removeClass('error');
			}
		}
		
		else {
			if (!$.trim(this.value)) {
				$(this).addClass('error');
				ERRORS.push(false);
			}
			else { 
				$(this).removeClass('error'); 
			}
		}
		
	 })
	if(ERRORS.length === 0)  {
		
		// ADD LOADING
		$("#loading_container").removeClass( "hidden" );	
		$("html, body").animate( { scrollTop: 0 }, 0, "swing", function(){ 
			setTimeout(	  function() 	  {	$("#form-TTR").addClass( "errorCheck_complete" ); }, 1000);
			$("#form-TTR").submit();
			setTimeout(	  function() 	  {	$("#loading_container").addClass( "hidden" ); }, 3000);
		});
	}
	else {
		$("#error-message").style.display = "block";
		return false;	
	}
}

// CREATE ID FOR PRE-SUBMISSION
function create_ID() {
	return "NLLAB" + Math.floor((Math.random() * 10000000) + 1);
}

/* SUBMIT FUNCTION */
function register(form) {
	if(errorCheck('form-TTR')) {
		document.getElementById('form-TTR').submit(); 
		return true;
	}
	else {
		event.preventDefault();
		document.getElementById('error-message').style.display = "block";
		return false;
	}
}

// CHECKBOX REVEAL CHILDREN
function checkboxReveal(checkbox, elementID) {
	var reg = document.getElementById(elementID);
	//var rev = document.getElementById('review-' + checkbox.id);
	if (checkbox.checked == true) {
		reg.style.display = "block";  
		$(".rqd", reg).attr('required', '');
	}
	else {
		reg.style.display = "none";
		$(".rqd", reg).removeAttr('required');
	}
}

// CHECK ALTERNATIVE EMAIL
function noClient(checkbox) {
	if (checkbox.checked == true) {
		$( "input[name*='alt_email']" ).attr('required', '');
	}
	else {
		$( "input[name*='alt_email']" ).removeAttr('required');
	}
}

// SELECT REVEAL CHILDREN
function selectReveal (selectBox) {
	var val = selectBox.value;
	for (i = 2; i <= 4; i++) {
		reg = document.getElementById('registration-person' + i);
		//rev = document.getElementById('review-person' + i);
		code_box = $( "input[name='code" + i + "']" );
		if (i <= val) {
			reg.style.display = "block"
			//if (!code_box.val()) code_box.val(create_ID);   //17042021 NOT REQUIRED
			$(".rqd", reg).attr('required', '');
		}
		else {
			reg.style.display = "none"
			//code_box.val("")   //17042021 NOT REQUIRED
			$(".rqd", reg).removeAttr('required');
		}
	}
}

/* ERROR CHECK - SITE CODE */
function errorCheckLocation() {
	var location = document.getElementById('location').value;
	var locations = [
	'CL001',
	'CL002',
	'CL003',
	'MD001',
	'MD002',
	'MD003',
	'MD004',
	'MD005',
	'MD006',
	'MD007',
	'MD008',
	'LB001', 
	'LB002', 
	'DA001', 
	'AF001', 
	'ST001', 
	'BHS001', 
	'CH001',
	'DOC001', 
	'EXC001', 
	'WAP001', 
	'OHT001', 
	'CCC001', 
	'NL001', 
	'NL002', 
	'NLP001', 
	'MPC001', 
	'GAT001', 
	'EXT001', 
	'EXT002', 
	'MDO001', 
	'HSN001', 
	'FSC001', 
	'GEM001',  
	'DRS001',  
	'PHD001',  

	];
	
	if(locations.includes(location)) return true
	else return false;

}





