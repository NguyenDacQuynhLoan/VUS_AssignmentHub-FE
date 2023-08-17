import PropTypes from 'prop-types';

export function ChangePasswordModelFunc(object) {
    if(object != null){
        return {
            confirmPassword: object.confirmPassword,
            oldPassword:     object.oldPassword,
            newPassword:     object.newPassword,
            userCode:        object.userCode
        }
    }
}

ChangePasswordModelFunc.PropTypes = {
    confirmPassword: PropTypes.string.isRequired,
    newPassword:     PropTypes.string.isRequired,
    oldPassword:     PropTypes.string.isRequired,
    userCode:        PropTypes.string.isRequired,
}