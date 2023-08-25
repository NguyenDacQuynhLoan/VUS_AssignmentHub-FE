import PropTypes from 'prop-types';

export function UserModelFunc(object) {
    try {
        if (object != null) {
            return  {
                userCode: object.userCode,
                userName: object.userName,
                gender: object.gender,
                role:object.role,
                dateOfBirth: object.dateOfBirth,
                phone: (object.phone != null) ? object.phone : "",
                major: object.major,
                location:object.location,
                email: object.email,
                assignments: Array.isArray(object.assignments) ? object.assignments : [],
                subjects: Array.isArray(object.assignments) ? object.subjects : []
            }
        }    
    } catch (error) {
        console.log(error);
    }
}

UserModelFunc.PropTypes = {
    userCode: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
    dateOfBirth: PropTypes.instanceOf(Date).isRequired,
    major: PropTypes.any.isRequired,
    role: PropTypes.any.isRequired,
    phone: PropTypes.string,
    location: PropTypes.string,
    // assignments: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number,
    //     code: PropTypes.string,
    //     title: PropTypes.string,
    //     status: PropTypes.string,
    //     grade: PropTypes.string,
    //     file: PropTypes.string,
    //     createdDate: PropTypes.instanceOf(Date)
    // })),
    // subjects: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number,
    //     code: PropTypes.string,
    //     name:PropTypes.string
    // })) 
}