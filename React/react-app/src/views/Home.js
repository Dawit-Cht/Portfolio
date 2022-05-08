import React, { Component } from 'react'
import Greeting from '../components/Greeting'
import Project from '../components/Project'
import Popup from '../components/Popup'

export default function Home(){
    return (
      <div>
        <Greeting />
        <Project />
        <Popup />
      </div>  
    )
}
