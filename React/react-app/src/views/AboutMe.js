import React, { Component } from 'react'
import Greeting from '../components/Greeting'
import Archievement from '../components/Archievement'
import Resume from '../components/Resume'

export default function AboutMe(){
    return (
      <div>
        <Greeting />
        <Archievement />
        <Resume />
      </div>  
    )
}
