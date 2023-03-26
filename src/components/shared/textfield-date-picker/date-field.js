import PropTypes from 'prop-types';

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import style from './style.css';

DateField.propTypes = {
    title : PropTypes.string.isRequired
};

export function DateField({title}) {
    return ( 
        <div className='date-field'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label={title} />
            </LocalizationProvider>
        </div>
     );
}