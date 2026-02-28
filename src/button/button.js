import './button.css'

export function Button ({title, active, onClick}) {
  return (
    <div className={`button ${active ? 'active' : 'inactive'}`} onClick={onClick}>
      {title}
    </div>
  )
}