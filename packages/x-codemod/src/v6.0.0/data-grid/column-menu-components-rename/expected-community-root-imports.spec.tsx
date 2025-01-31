import * as React from 'react';
import {
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
  GridColumnMenuColumnsItem,
  GridColumnMenuSortItem,
} from '@mui/x-data-grid';

function App({ column, hideMenu }) {
  return (
    <React.Fragment>
      <GridColumnMenuFilterItem colDef={column} onClick={hideMenu} />
      <GridColumnMenuHideItem colDef={column} onClick={hideMenu} />
      <GridColumnMenuColumnsItem colDef={column} onClick={hideMenu} />
      <GridColumnMenuSortItem colDef={column} onClick={hideMenu} />
    </React.Fragment>
  );
}
