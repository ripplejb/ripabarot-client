import {makeStyles} from "@material-ui/core";

export const useLoginStyle = makeStyles({
  centered: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-150px",
    marginLeft: "-150px"
  },
  container: {
    width: 300,
    height: 300,
    display: 'flex',
    flexDirection: 'column'
  },
  child: {
    margin: 5
  },
  button: {
    left: "50%",
    width: 150,
    marginLeft: "-75px",
  }
})
