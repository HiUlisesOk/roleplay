// CustomModalStyles.js
const customModalStyles = {
	customModal: {
		display: 'none',
		position: 'fixed',
		zIndex: 1000,
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	open: {
		display: 'flex',
	},
	modalContent: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 20,
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
		maxWidth: '80%',
		overflow: 'hidden',
		position: 'relative',
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		fontSize: 20,
		cursor: 'pointer',
	},
	// Add more styling objects as needed
};

export default customModalStyles;
