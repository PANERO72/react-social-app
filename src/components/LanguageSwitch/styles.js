import { makeStyles } from "@material-ui/styles";
import flagCat from '../../assets/img/Catalunya.png';

export default makeStyles(() => ({
  languageSwitch: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
    height: 'auto',
    // height: 'calc(100vh - 30px)'
  }, languageSwitchLogo: {
    height: '40vmin',
    pointerEvents: 'none'
  }, languageSwitchHeader: {
    borderRadius: '5px',
    padding: '3px',
    backgroundColor: '#282c34',
     minHeight: '2vh',
    // minHeight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: 'calc(4px + 1vmin)',
    fontSize: 'calc(6px + 1vmin)',
    color: 'white',
    width: '100%',
    "&:hover": {
      backgroundColor: '#3f4652',
    }
  }, languageSwitchHeaderH4: {
    margin: '0',
    padding: '10px'
  }, languageContainer: {
    color: 'white'
  }, languageSwitchDropdown: {
      margin: '5px',
      "& div.divider.text": {
        marginRight: ' 8px !important'
      }
  },languageSwitchFlagIcon: {
    "& i": {
      // backgroundImage: `url('../../assets/images/Catalunya.png')`,
      backgroundImage: `url(${flagCat})`,
      backgroundPosition: '0px 0px',
      backgroundRepeat: 'no-repeat'
    }
  }, languageSwitchLink: {
    color: '#61dafb'
}

}));