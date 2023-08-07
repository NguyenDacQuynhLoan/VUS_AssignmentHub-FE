import PropTypes from 'prop-types';
import { ConvertDate } from './func';


export function UserModelFunc(object) {
    if (object != null) {
        return  {
            id: 0,
            userCode: object.userCode,
            userName: object.userName,
            gender: object.gender,
            dateOfBirth: ConvertDate(object.dateOfBirth),
            phone: (object.phone != null) ? object.phone : "",
            major: object.major,
            email: object.email,
            password: object.password,
            assignments: Array.isArray(object.assignments) ? object.assignments : [],
            subjects: Array.isArray(object.assignments) ? object.subjects : []
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
    major: PropTypes.any.isRequired,
    phone: PropTypes.string,
    assignments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        code: PropTypes.string,
        title: PropTypes.string,
        status: PropTypes.string,
        grade: PropTypes.string,
        file: PropTypes.string,
        createdDate: PropTypes.instanceOf(Date)
    })),
    subjects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        code: PropTypes.string,
        name:PropTypes.string
    })) 
}