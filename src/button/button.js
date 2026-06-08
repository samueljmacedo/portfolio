import './button.css'

export function Button ({title, active, onClick, icon}) {
  return (
    <div className={`button ${active ? 'active' : 'inactive'}`} onClick={onClick}>
      <img className={'icon'} src={icon} alt={title}/>
      {title}
    </div>
  )
}