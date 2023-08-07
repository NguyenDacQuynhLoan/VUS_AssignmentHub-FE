import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';

export default function EnhancedTableToolbar(props) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            List
          </Typography>
        )}
        {numSelected == 0 ? (
          <Tooltip title="Filter list">
            <IconButton>
            <FilterListIcon />
            </IconButton>
          </Tooltip>
        ):null}
        {numSelected == 1 ? (
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        ):null}
        {numSelected >= 1 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ):null}
      </Toolbar>
    );
  }
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };