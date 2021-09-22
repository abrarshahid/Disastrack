import { Link } from "react-router-dom"
import { useState } from 'react';
import './Common.css'

import Logo from '../../resources/disastracklogo.png'


const Common = ({db}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        db.put({
            name: name,
            email: email,
            message:message
        })
    }
    return (
        <div>
        <div className="navbar"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="2000"
        >
        <img className="logo" src={Logo} />
        <Link to="/"><h1 className="navtext">Disastrack</h1></Link><div /><div /><div /><div /><div /><div /><div />
            <Link to="/tracker"><h3 className="navtext">📍 Tracker</h3></Link>
            <Link to="/steps"><h3 className="navtext">🚫Prevention</h3></Link>
            <Link to="/help"><h3 className="navtext " >✊Help</h3></Link>
            <h3 className="navtext interior" style={{marginRight:"10px"}}> <a href="#open-modal">🙏Request</a></h3>
        </div>
        <div id="open-modal" className="modal-window">
                <div className="help">
                    <a href="#" title="Close" className="modal-close">Close</a>
                    <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                required
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
            <label>Email:</label>
            <input
                type="email"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            <label>Message:</label>
            <textarea
                required
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
                </div>
            </div>
        <hr/>

        </div>
    )
}

export default Common