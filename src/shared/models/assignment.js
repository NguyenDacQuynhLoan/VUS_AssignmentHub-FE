import PropTypes from 'prop-types';

export function AssignmentModelFunc(object) {
    if(object != null){
        return {
            id: object == null ? 0 : Number(object.id),
            userCode : object.userCode,
            code: object.code,
            title: object.title,
            status: object.status,
            grade: object.grade,
            file: object.file,
            createdDate: object.createdDate,
            updateData:object.updatedDate
        }
    }
}
AssignmentModelFunc.PropTypes={
    id: PropTypes.number,
    code: PropTypes.string.isRequired,
    userCode: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    updateData: PropTypes.instanceOf(Date).isRequired,
}