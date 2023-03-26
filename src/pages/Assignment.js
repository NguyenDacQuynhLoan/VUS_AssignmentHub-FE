import { DataTable } from "../components/shared/table/table";
import { DateField } from "../components/shared/textfield-date-picker/date-field";

export default function Assignment() {
    
    return ( 
        <>
            <div>
                <DateField title="Start date"/>
                <DateField title="End date"/>
            </div>
            <DataTable/>
        </>
    );
}