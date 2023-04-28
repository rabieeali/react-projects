import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ cntry, hasLink=false }) => {
    return (
        hasLink ? (
            <Link to={`/country/${cntry?.name?.common}`}>
                <article className='p-3 flex flex-col shadow-lg h-full rounded-lg hover:shadow-2xl duration-500 '>
                    <div>
                        <img className='w-full h-[150px] shadow rounded-lg' src={cntry?.flags?.png} alt={cntry?.name?.common} />
                    </div>
                    <div className='mt-auto'>
                        <h4>{cntry?.name?.common}</h4>
                        <h4>{cntry?.region}</h4>
                    </div>
                </article>
            </Link>
        ) : (
            <article className='p-3 shadow-lg rounded-lg hover:shadow-2xl duration-500 w-fit'>
                <div>
                    <img src={cntry?.flags?.png} alt={cntry?.name?.common} />
                </div>
                <div>
                    <h4>{cntry?.name?.common}</h4>
                    <h4>{cntry?.region}</h4>
                </div>
            </article>
        )
    );
};

Card.propTypes = {
    cntry: PropTypes.shape({
      name: PropTypes.shape({
        common: PropTypes.string.isRequired,
      }).isRequired,
      region: PropTypes.string.isRequired,
      flags: PropTypes.shape({
        png: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    hasLink: PropTypes.bool,
  };
  

export default Card;
