import PropTypes from "prop-types";

const Spinner = ({ absoluteCenter = false, small = false }) => {
    return (
        <div className={`${absoluteCenter && "h-screen flex justify-center items-center"}`}>
            <div className={`animate-spin rounded-full h-16 m-auto w-16 border-t-2 border-b-2 border-blue-800 ${small && 'w-8 h-8'}`}></div>
        </div>
    )
}

Spinner.propTypes = {
    absoluteCenter: PropTypes.bool,
    small: PropTypes.bool,
};

export default Spinner;
