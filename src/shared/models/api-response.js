import PropTypes from 'prop-types';

export function ApiResponseModelFunc(object) {
    if(object != null){
        return {
            success:  object.success,
            message:  object.message,
            result:   object.result,
        }
    }
}
ApiResponseModelFunc.PropTypes={
    success: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    result:  PropTypes.any.isRequired,
}