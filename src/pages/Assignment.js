import { Box, Button, ButtonGroup } from "@mui/material";

import { DataTable } from "../components/shared/table/table";
import { DateField } from "../components/shared/textfield-date-picker/date-field";

export default function Assignment() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <DateField />
        </div>
        <ButtonGroup size="small" aria-label="small button group">
          <Button key="one">One</Button>
          <Button key="two">Two</Button>
          <Button key="three">Three</Button>
        </ButtonGroup>
      </Box>–

      <DataTable />
      {/* <EnhancedTable/> */}
    </>
  );
}
