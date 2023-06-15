const Header = ({month, day, year}) => {
    return (
        <header style={style}>
             {day} {month} {year}
        </header>
    )
}

const style = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginTop: '2rem'
}

export default Header;