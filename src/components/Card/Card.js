import { string } from 'prop-types'

export const Card = ({ imgSrc, altImg, title, description })=> {
  return(
    <div className="card_content"> 
      <img src={imgSrc} alt={altImg} />
    </div>
  );
}

Card.propTypes = {
  size: string,
  imgSrc: string.isRequired,
  altImg: string.isRequired,
  title: string.isRequired,
  description: string.isRequired
}