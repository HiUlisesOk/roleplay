import theme from './ThemeStyles';

const styles = {
    box1: {
        py: 1,
        width: '88%',
        height: 'calc(100vh - 65px)',
        display: 'flex',
        margin: '0px auto',
        overflow: 'hidden',
        gap: 1,
    },
    box2: {
        overflow: 'hidden',
        gap: 1,
        display: 'flex',
        justifyContent: 'end',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
    },
    containerSection1: {
        p: 1,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 2,
        height: '250px',
        overflow: 'hidden'
    },
    containerSection2: {
        p: 1,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 2,
        height: '100%',
        overflow: 'hidden'
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 1,
        m: '0 auto',
        width: '99%',
        height: '100%',
        overflow: 'hidden',
    },
    contenedorTablon: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
    },
    botonesTablon: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '8px 8px 0px 0px'
    },
    tablonSection: {
        borderRadius: '0px 0px 8px 8px',
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
    }


};

export default styles;