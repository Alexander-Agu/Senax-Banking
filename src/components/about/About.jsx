import React from 'react'
import "./about.css"
import Card from '../card/Card'
import { aboutModels } from '../../models/aboutModels'

function About() {
  return (
    <article className='aboutSection'>
        {
            aboutModels.map(x => {
                const {title, intro, more, id} = x;
                return <Card title={title} intro={intro} more={more} id={id} />
            })
        }
    </article>
  )
}

export default About