const styles = {
  toolbar: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: "10vh",
    width: "80vw",
    margin: "0 auto",
  },
  flex: {
    display: 'flex'
  },
  drawer: {
    [`& .MuiDrawer-paper`]: { width: '5vw', alignItems: 'center', overflowX: 'hidden' }
  },
  avatarContainer: {
    minWidth: '10vw',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    gap: '1.5vw',

  },
  btnCreate: {
    width: "7vw",
    height: "6vh",
    flexShrink: 0,
    borderRadius: "1.6vh",
    border: "2px solid #499CE9",
    background: "#10497F",
  },
  dividerVertical: {
    width: "0.1rem",
    height: "2.4rem",
    background: '#499CE9',
    borderRadius: "1rem",
  },
  navSection: {
    minWidth: "0.3 rem",
    height: "2.4rem",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "0.6rem",
    border: "2px solid #312E2D",
    background: "#171312",
    padding: '0.5rem',
  },
  navData: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px /* 150% */",
    letterSpacing: "0.32px",
  },
  searchBar: {
    width: "20rem",
    height: "2.5rem",
    flexShrink: 0,
    borderRadius: "0.6rem",
    border: "2px solid #312E2D",
    background: "#171312",


    '& .MuiInputLabel-outlined': {
      display: 'none',
    },

    '& .MuiOutlinedInput-root': {
      width: "22rem",
      height: "2.4rem",
      '& fieldset': {
        display: 'none'
      },
      color: "var(--greys-blue-grey-600, #A1A5B6)",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    }
  },
}
export default styles;