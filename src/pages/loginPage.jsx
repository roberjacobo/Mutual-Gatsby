import React from "react"

import "../styles/login.css"

import Header from "../components/header"
import Login from "../components/login"

export default function LoginPage() {
  return (
    <>
      <Header isMutual />
      <Login />
    </>
  )
}
