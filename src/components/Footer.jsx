import Twitter from '../images/Twitter.png';
import Facebook from '../images/Facebook.png';
import Instagram from '../images/Instagram.png';
import GitHub from '../images/GitHub.png';

export default function Footer(){
    return (
        <div className="footer_icons">
            <div className='icon_flex'>
                <a className='icon_links' href="https://twitter.com/mariam_oalli" target='_blank'>
                    <img className='icon' src={Twitter} alt="twitter icon" />
                </a>

                <a className='icon_links' href="#" target='_blank'>
                    <img className='icon' src={Facebook} alt="facebook icon" />
                </a>

                <a className='icon_links' href="https://www.instagram.com/accounts/login/two_factor?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr&next=%2F" target='_blank'>
                    <img className='icon' src={Instagram} alt="instagram icon" />
                </a>

                <a className='icon_links' href="https://github.com/mariamALLI" target='_blank'>
                    <img className='icon' src={GitHub} alt="github icon" />
                </a>
            </div>
        </div>
    )
}