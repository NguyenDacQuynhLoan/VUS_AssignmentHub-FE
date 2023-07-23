import PropTypes from 'prop-types';

export function SubjectModelFunc(object) {
    if(object != null){
        return {
            id: object == null ? 0 : Number(object.id),
            code: object.code,
            name: object.name
        }
    }
}
SubjectModelFunc.PropTypes = {
    id: PropTypes.number,
    code: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}