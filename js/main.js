/**
 * Created by Актилек on 25.02.2017.
 */
$('#registration-form').validate({
    rules: {
        userPassword :{
            minlength: 6,
        }
    }
});
$('#phone').mask('+(999)999-99-99-99');