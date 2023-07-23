import { DateConvert } from "./shared";
import PropTypes from 'prop-types';

export function UserModelFunc(object) {
    if (object != null) {
        return  {
            id: object == null ? 0 : Number(object.id),
            userCode: object.userCode,
            userName: object.userName,
            gender: object.gender,
            dateOfBirth: object.dateOfBirth,
            phone: (object.phone != null) ? object.phone : "",
            major: (object.major != null && Number(object.major)) ? object.major : null,
            email: object.email,
            password: object.password,
            // assignments: Array.isArray(object.assignments) ? object.assignments : [],//
            subjects: Array.isArray(object.assignments) ? object.subjects : [] //
        }
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
    // assignments: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number,
    //     code: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     status: PropTypes.string.isRequired,
    //     grade: PropTypes.string.isRequired,
    //     file: PropTypes.string.isRequired,
    //     createdDate: PropTypes.instanceOf(Date).isRequired
    // })),
    // subjects: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number,
    //     code: PropTypes.string.isRequired,
    //     name:PropTypes.string.isRequired
    // })) 
}