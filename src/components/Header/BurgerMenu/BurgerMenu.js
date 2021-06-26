import { bool, func } from 'prop-types'

export const BurgerMenu = ({ visible, handleClick }) => {
  return (
    <div className="burger-menu" role="button" onClick={handleClick}>
      <i className={ visible ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
  );
};

BurgerMenu.propTypes = {
  visible: bool.isRequired,
  handleClick: func.isRequired
}
