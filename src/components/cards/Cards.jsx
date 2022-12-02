import './cards.css'

const Cards = ({children, className, onClick}) => {
  return (
    <artcile className={`card ${className}`} onClick={onClick}>
        {children}
    </artcile>
  )
}

export default Cards