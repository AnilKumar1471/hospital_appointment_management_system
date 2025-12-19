import React from 'react'

const Footer = () => {
    return (
        <div>
            <div  className='footer'>
                <div className='footer-1'>
                <p>General <br /> <b>Hospital</b></p>
                <p>Logic while,Road no 1,KPHB colony</p>
                <p> 040-123456</p>
            </div>
            <div className='footer-2'>
                <p><b>Patient Information</b></p>
                <a href="/doctor">Find a Doctor</a>
                <a href="/library">Health Library</a>
                <a href="/trails">Clinical Trials</a>
                <a href="/newsroom">Newsroom</a>
            </div>
            <div className='footer-3'>
                <p><b>RESEARCH & EDUCATION</b></p>
                <a href="/medicine">School of Medicine</a>
                <a href="/education">Medical Education</a>
                <a href="/research">Research</a>
                <a href="/nursing">School of Nursing</a>
            </div>
            <div className='footer-4'>
                <p><b>For Health Professionals</b></p>
                <a href="/transfer">Transfer a patient</a>
                <a href="/connect">Mount Sinai Connect</a>
                <a href="/refer">Refer a Patient</a>
                <a href="/nursing">Nursing</a>
            </div>
            </div>
            <hr />
            <div className='final-footer'>
                <p>© 2025 General Hospital</p>
                <a href="/privacy">Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer