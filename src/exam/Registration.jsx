import React, { useState } from 'react'
import './registration.css'

export default function Registration() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [skills, setSkills] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = { fullname, email, gender, skills, password }

    
    localStorage.setItem("userData", JSON.stringify(userData))

    alert(`Form submitted successfully: ${fullname}`)

   
    setFullname("")
    setEmail("")
    setGender("")
    setSkills("")
    setPassword("")
    if(password.length < 6){
      alert("Password must be at least 6 characters long")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            required
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="gender">Select Gender</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            required
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="skills">Select Skill</label>
          <select
            id="skills"
            name="skills"
            value={skills}
            required
            onChange={(e) => setSkills(e.target.value)}
          >
            <option value="">Select your skill</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full Stack Development</option>
            <option value="devops">DevOps</option>
            <option value="data">Data Engineering</option>
          </select>
        </div>

        <div>
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}