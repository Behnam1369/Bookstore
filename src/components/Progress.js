import { PropTypes } from 'prop-types';
import { React } from 'react';

function Progress(props) {
  const { progress } = props;
  return (
    <div className="progress-container">
      <div className="progress" style={{ backgroundImage: `conic-gradient(#0290ff ${progress}%, whitesmoke ${progress}%)` }}>
        <div className="filler" />
      </div>
      <p>
        {`${progress} %`}
        <br />
        <span>Completed</span>
      </p>
    </div>
  );
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Progress;
