
$("#form-container").submit(function(event)
{
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "https://api3-saturn.uat.crowdstaffing.com/users/sign_in.json",
        data:({
            email : $('#uname').val(),
            password: $('#password').val()
        }),
        success: function(result)
        {
            if(result=='ok')
            {
                window.location = 'http://www.google.com/'; //just to show that it went through
            }
            else
            {
                $('#result').empty().addClass('error')
                    .append('Something is wrong.');
            }
        }
    });
    return false;
}