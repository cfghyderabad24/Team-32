import React from 'react'
import { Link } from 'react-router-dom'
function Pageforadmin() {
  return (
  <div className="container">
<div className="bg-success">
    <h2 className="text-success">
      Dashboard-1
      </h2>
      <Link href="https://public.tableau.com/app/profile/mareedu.venkata.sindhuja/viz/Dashboard1_17190942215760/Dashboard2" style={{ color: '#007bff', fontSize: '0.9em' }}>Click here</Link>
      <h2 className="text-success">
      Dashboard-2
      </h2>
     <Link href="https://public.tableau.com/app/profile/mareedu.venkata.sindhuja/viz/Dashboard1_17190942215760/Dashboard1?publish=yes" style={{ color: '#007bff', fontSize: '0.9em' }}>Click here</Link>

     </div>
    
    
    
    </div>
  )
}

export default Pageforadmin
