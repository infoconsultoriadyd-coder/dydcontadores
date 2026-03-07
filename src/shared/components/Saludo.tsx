type SaludoProps = {
  nombre: string
}

function Saludo({ nombre }: SaludoProps) {
  return <h2>Bienvenido a este espacio {nombre} 👋</h2>
}

export default Saludo