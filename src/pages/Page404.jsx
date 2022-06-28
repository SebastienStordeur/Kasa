import React from 'react'
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="section-404">
      <h1 className="title-404">404</h1>
      <p className="p-404">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="a-404">Retourner sur la page d'acceuil</Link>
    </section>
  )
}

export default Page404