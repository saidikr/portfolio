import React from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
    const params=useParams()
    const data=[
        {id:'1', name:"W-Kaufer",desc:"Site Web de vente de vetements hommes/femmes, outils électroniques et bijoux. Simple et facile pour la navigation "}
    ]
  return (
    <div>
        <p>{params.id}</p>
    </div>
  )
}

export default DetailPage