import React from 'react'
import '../QrPage/pageqr.css'

export const Pageqr = () => {
    return (
        <div className='container-principal'>
            <div className='container-box'>
                <div className='box-qr'>
                    <img src="src\images\image-qr-code.png" alt="codigo-qr" />
                    <p className='tittle'>Improve your front-end skills by building projects</p>
                    <p className='body-text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}

