import './button.css'

export function Button ({title, active, onClick}) {
  return (
    <div className={`button ${active ? 'active' : ''}`} onClick={onClick}>
      {title}
    </div>
  )
}