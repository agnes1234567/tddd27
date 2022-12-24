import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { colors } from "@mui/material";

const useStyles = makeStyles((theme) =>
createStyles({
  button: {
    backgroundColor: "#8EAFCB",
    contrastText: "#9AC8DA",
    fontFamily: "Lucida Sans",
  },
  input: {
    color: '#00000'
  }
})
);

export default useStyles;
