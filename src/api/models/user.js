import { DateConvert } from "./shared";
import PropTypes from 'prop-types';

export function UserModelFunc(object) {
    if (object != null) {
        return userModel = {
            id: object == null ? 0 : Number(object.id),
            userCode: object.userCode,
            userName: object.userName,
            gender: object.gender,
            dateOfBirth: DateConvert(object.dateOfBirth),
            phone: (object.phone != null) ? object.phone : "",
            major: (object.major != null && Number(object.major)) ? object.major : null,
            email: object.email,
            password: object.password,
            assignments: Array.isArray(object.assignments) ? object.assignments : [],//
            subjects: Array.isArray(object.assignments) ? object.subjects : [] //
        }
        // console.log(userModel);
    }
}

UserModelFunc.PropTypes = {
    id: PropTypes.number,
    userCode: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.instanceOf(Date).isRequired,
    phone: PropTypes.string,
    major: PropTypes.number,
    assignments: PropTypes.arrayOf(PropTypes.shape({
        // defined assignment
    })),
    subjects: PropTypes.arrayOf(PropTypes.shape({
        // defined subject
    })) 
}