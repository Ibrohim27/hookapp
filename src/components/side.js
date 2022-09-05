import React from 'react'
import {Link} from 'react-router-dom'

const Side = () => {
    return(
        <div className='side'>
            <Link to="/" className='side__logo'>
                <img src={require('../assets/img/logo.png')} alt="uyga"/>
            </Link>
            <div className='side__title'>MEDICINE</div>
            <ul className='side__menu'>
                <li>
                    <Link to="/">
                        <img src={require('../assets/img/home.png')} alt="Umumiy sahifaga"/>
                        Bosh Sahifa
                    </Link>
                </li>
                <li>
                    <Link to="/rooms">
                        <img src={require('../assets/img/palata.png')} alt="Palatalar Ro'yxati"/>
                        Palatalar
                    </Link>
                </li>
                <li>
                    <Link to="/doctors">
                        <img src={require('../assets/img/doctor.png')} alt="Doktorlar"/>
                        Shifokorlar
                    </Link>
                </li>
                <li>
                    <Link to="/departs">
                        <img src={require('../assets/img/depart.png')} alt="Bo'limlar"/>
                        Bo’limlar
                    </Link>
                </li>
                <li>
                    <Link to="/patients">
                        <img src={require('../assets/img/patient.png')} alt="Bo'limlar"/>
                        Bemorlar
                    </Link>
                </li>
                <li>
                    <Link to="/help">
                        <img src={require('../assets/img/help.png')} alt="Yordam"/>
                        Yordam
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Side