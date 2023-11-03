import Mail from '../images/Mail.png';
import Linkedin from '../images/Linkedin.png';

export default function Buttons() {
    return (
        <div className='btn_flex'>
            <button className="light-btn">
                <a className='mail_link' href='mailto:mariam_oa@yahoo.com' subject='subject text'>
                <img className='mail-icon' src={Mail} alt="mail icon" />
                <p>Email</p>
                </a>
            </button>

            <button className="blue-btn">
                <a className='linkd_link' href="https://www.linkedin.com/in/mariam-alli-a7964b21a/" target="_blank">
                <img className='linkdin-icon' src={Linkedin} alt="linkedin icon" />
                <p>Linkedin</p>
                </a>
            </button>
        </div>
    )
}