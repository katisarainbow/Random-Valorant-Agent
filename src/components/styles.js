import { makeStyles } from '@mui/styles';

export default makeStyles({
    img: {
        width: '55rem',
        height: '55rem'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        width: '115rem',
        height: 'auto'
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        background: "#19242c",
        borderRadius: '30px'

    },
    heading: {
        fontFamily: ['Bebas Neue', 'cursive'].join(','),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    role: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '4.5rem',
        marginBottom: '1rem'
    },
    roleAvatar: {
        marginRight: "1rem"
    },
    btn: {
        color: 'white',
        marginTop: '2rem',
    }
});