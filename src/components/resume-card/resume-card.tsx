import './resume-card.scss';
import Image from 'next/image';
import cvImg from '@/assets/images/experience/cv.png';
import ButtonUI from '@/ui/button/button';
import { Locals } from '@/utils/locals';
import { useLang } from '@/context/language-context';

export function ResumeCard() {
    const { lang } = useLang();
    return (
        <div className="resume-card">
            <Image src={cvImg} alt="Koum image" />
            <div className="info-card">
                <h3>{Locals.fullResumeTitle[lang]}</h3>
                <p>{Locals.fullResumeDescription[lang]}</p>
                <ButtonUI>{Locals.download[lang]}</ButtonUI>
            </div>
        </div>
    );
}
