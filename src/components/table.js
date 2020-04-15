// import React from "react";
// import TableHead from "@material-ui/core/TableHead";
// import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import TableFooter from "@material-ui/core/TableFooter";
// import TablePagination from "@material-ui/core/TablePagination";
// import IconButton from "@material-ui/core/IconButton";
// import FirstPageIcon from "@material-ui/icons/FirstPage";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import LastPageIcon from "@material-ui/icons/LastPage";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     fontWeight: 900,
//     width: "33%",
//   },
//   body: {
//     fontSize: 14,
//     fontWeight: "bolder",
//   },
// }))(TableCell);

// const useStyles1 = makeStyles((theme) => ({
//   root: {
//     flexShrink: 0,
//     marginLeft: theme.spacing(2.5),
//   },
// }));

// function TablePaginationActions(props) {
//   const classes = useStyles1();
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onChangePage } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onChangePage(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onChangePage(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onChangePage(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <div className={classes.root}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </div>
//   );
// }

// const RepoTable = ({ data, language }) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   // const emptyRows =
//   //   rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer className="table_container" component={Paper}>
//       <h2 style={{ textAlign: "center" }}>{language} Projects</h2>
//       <Table stickyHeader aria-label="sticky table">
//         <TableHead className="tableHead">
//           <TableRow>
//             <StyledTableCell align="left">Repo Name</StyledTableCell>
//             <StyledTableCell align="center">Repo Description</StyledTableCell>
//             <StyledTableCell align="center">Repo Url</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : data
//           ).map((object) => {
//             return (
//               <TableRow key={object.name}>
//                 <TableCell align="left">{object.name}</TableCell>
//                 <TableCell align="center">{object.description}</TableCell>
//                 <TableCell align="center">
//                   <a href={object.html_url} target="_blank">
//                     Repo
//                   </a>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, { label: "All", value: -1 }]}
//               colSpan={3}
//               count={data.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: { "aria-label": "rows per page" },
//                 native: true,
//               }}
//               onChangePage={handleChangePage}
//               onChangeRowsPerPage={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// };

// export default RepoTable;

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";

const styles = (theme) => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0px !important" : undefined,
    },
  },
  tableRow: {
    cursor: "pointer",
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: "initial",
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 80,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight, fontWeight: 900 }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const {
      classes,
      columns,
      rowHeight,
      headerHeight,
      ...tableProps
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

export default function ReactVirtualizedTable({ data }) {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <VirtualizedTable
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        columns={[
          {
            width: 300,
            label: "Project Name",
            dataKey: "name",
          },
          {
            width: 600,
            label: "Description",
            dataKey: "description",
          },
          {
            width: 500,
            label: "URL",
            dataKey: "url",
          },
        ]}
      />
    </Paper>
  );
}
