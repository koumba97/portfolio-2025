import BehanceSVG from '@/svg/Behance';
import './social-media.scss';
import GithubSVG from '@/svg/Github';
import InstagramSVG from '@/svg/Instagram';
import LinkedinSVG from '@/svg/Linkedin';

export default function SocialMedia() {
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/koumba-k" target="_blank">
                <LinkedinSVG
                    width={20}
                    height={20}
                    viewBox="0 2 30 30"
                    filled
                />
            </a>
            <a href="https://github.com/koumba97" target="_blank">
                <GithubSVG
                    width={22}
                    height={22}
                    viewBox="-5 -4 65 65"
                    filled
                />
            </a>
            <a href="https://www.instagram.com/koum.97/" target="_blank">
                <InstagramSVG
                    width={20}
                    height={20}
                    viewBox="-2 -2 65 65"
                    filled
                />
            </a>

            <a href="https://www.behance.net/koumbakeita" target="_blank">
                <BehanceSVG width={20} height={20} viewBox="0 0 65 65" filled />
            </a>
        </div>
    );
}
