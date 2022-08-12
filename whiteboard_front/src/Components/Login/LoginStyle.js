
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(5),
        boxShadow: '1px 1px 5px #ccc',
      },
    headline: {
        fontWeight: 700,
        textAlign: 'center',
        paddingTop: '30px',
      },
    textField: {
        width: '70%',

       
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
        border: '1px solid #00756A',
        fontWeight: 500,
        width:'350px',
        '&:hover': {
          border: '1px solid #00756A',
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: 500,
        }
    },      
    title: {
        paddingTop: theme.spacing(5),
    },
}));
