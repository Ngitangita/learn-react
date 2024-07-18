

export default function Search({value, onChange, placeholder}) {
  return (
    <div>
      <input type="text" 
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}/>
    </div>
  )
}
