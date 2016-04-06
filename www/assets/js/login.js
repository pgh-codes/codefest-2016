$(document).ready(function() {
	//populate user select list
	$.get(
		"http://2016.pgh.codes/api/users.php",
		{},
		function(response) {
			$.each(response.users, function(index, user) {
				$('#user_id').append(
					$('<option>', { value: user.userid, label: user.username, text: user.username, class: 'user-type-' + user.type })
				);
			});
		},
		"json"
	);
	
	//When selecting a user, check if shift-end is necessary
	$('#user_id').change(function() {
		var selected_index = $(this).prop('selectedIndex');
		var selected_option = $(this)[0][selected_index];
		if($(selected_option).hasClass('user-type-4')) {
			$('#shift-end').addClass('required-field');
			$('.shift-end-stuff').fadeIn('fast');
		} else {
			$('#shift-end').removeClass('required-field');
			$('.shift-end-stuff').fadeOut('fast');
		}
	});

	var check_for_login = function() {
		var reveal_button = true;
		$('.required-field').each(function(index, field) {
			if(!$(field).val()) {
				reveal_button = false;
			}
		});
		if(reveal_button) {
			$('#login-btn').slideDown(300);
		} else {
			$('#login-btn').slideUp(300);
		}
	}

	//When user enters data in a field, check all fields for data
	//When all have data, show login button
	$('.required-field').change(check_for_login);
	$('.required-field').keypress(check_for_login);

	//make an API call to validate the login
	$('#login-btn').click(function(event) {
		event.preventDefault();
	
//		var body = { userid: $('#user_id').val(), password: $('#password').val() };
//		console.log(body);
//		$.post(
//			"http://2016.pgh.codes/api/auth/login.php",
//			{ userid: $('#user_id').val(), password: $('#password').val() },
//			function(response) {
//				console.log(response);
//				if(response.success) {
					var selected_index = $('#user_id').prop('selectedIndex');
					var selected_option = $('#user_id')[0][selected_index];
					if($(selected_option).hasClass('user-type-3')) {
						location.href = "pdp-staff.html";
					} else if($(selected_option).hasClass('user-type-4')) {
						location.href = "dpw-staff.html";
					} else {
						location.href = "admin.html";
					}
//				} else {
//					alert('Bad Password');
//				}
//			},
//			"json"
//		).fail(function(jqXHR, textStatus, errorThrown) { console.log(jqXHR); console.log(textStatus); console.log(errorThrown); });
	});
});