import PropTypes from 'prop-types';
import { DateConvert } from './shared';

function AssignmentModelFunc(object) {
    if(object != null){
        return {
            id: object == null ? 0 : Number(object.id),
            code: object.code,
            title: object.title,
            status: object.status,
            grade: object.grade,
            file: object.file,
            createdDate: DateConvert(object.createdDate)
        }
    }
}
AssignmentModelFunc.PropTypes={
    id: PropTypes.number,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired
}