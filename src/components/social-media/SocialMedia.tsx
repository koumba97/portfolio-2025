import BehanceSVG from "@/svg/Behance";
import "./social-media.scss";
import DribbbleSVG from "@/svg/Dribbble";
import GithubSVG from "@/svg/Github";
import InstagramSVG from "@/svg/Instagram";
import LinkedinSVG from "@/svg/Linkedin";

export default function SocialMedia() {
    return (
        <div className="social-media">
            <LinkedinSVG width={20} height={20} viewBox="0 2 30 30" filled />
            <GithubSVG width={22} height={22} viewBox="-5 -4 65 65" filled />
            <InstagramSVG width={20} height={20} viewBox="-2 -2 65 65" filled />
            <DribbbleSVG width={22} height={22} viewBox="-5 -5 65 65" filled />
            <BehanceSVG width={20} height={20} viewBox="0 0 65 65" filled />
        </div>
    );
}
