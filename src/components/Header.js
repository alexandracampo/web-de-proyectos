const Header = ({ iconRocket }) => {

  return (
    <header className='header'>
      <div className='header--div'>
        <img className='header--img' src={iconRocket} alt='icono' />
        <p className='header--text'> Wow Projects</p>
      </div>
    </header>
  )
}
export default Header
