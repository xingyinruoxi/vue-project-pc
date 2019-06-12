export default {
    error: {
        1001: 'Wrong user name or password',
        1002: 'Your balance is insufficient, please contact the staff to recharge first',
        2001: 'Wrong verification code',
        2002: 'This Email is already occupied',
        2003: 'This phone number is already occupied',
        2015: 'Token is invalid or non-existent,Please login again',
        4001: 'Unknown error,Task delivery failed!'
    },
    success: 'Operation success!',
    validation: {
        invalidContactName: 'This is not a valid username, please use uppercase and lowercase letters and spaces.',
        invalidEmail: 'This is not a valid Email',
        invalidEmailCaptcha: 'Please enter the valid email captcha',
        invalidEmailCaptchaNumberLength: 'Email captcha code should be 6 digits',
        invalidContactContent: 'This is not a valid feedback, the feedback content is limited to 0-250.',
        invalidUsername: 'Please enter the valid user name',
        invalidPassword: 'The password can not be less than 6 digits',
        invalidPasswordConfirm: 'Two input password must be consistent',
        invalidPhone: 'Please enter the valid phone',
        invalidPhoneNumberLength: 'The mobile phone number cannot be less than 11 digits',
        invalidPhoneCaptcha: 'Please enter the valid phone captcha',
        invalidPhoneCaptchaNumberLength: 'Phone captcha code should be 6 digits',
        invalidUrl: 'Please enter the correct url',
        invalidFacebookUrl: 'Please enter the correct Facebook Url',
        invalidTwitterUrl: 'Please enter the correct Twitter Url',
        invalidSystemUserId: 'Please enter the correct System User ID'
    }
}