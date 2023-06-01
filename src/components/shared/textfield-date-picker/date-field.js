import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers-pro";
// import dayjs from "dayjs";
import "./style.css";

export function DateField() {
  return (
    <div className="date-field">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={"Start date"}
                    slotProps={{
                        actionBar: {
                            actions: ["clear", "today"],
                        },
                    }}
                />
        <DemoContainer components={["DateRangePicker"]}>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}