/* eslint-disable no-unused-vars */

import { Tool, ToolInterface } from './tool-list';
import lettering from '@/assets/images/projects/lettering/lettering.png';
import digitalDrawings from '@/assets/images/projects/digital-drawings/digital-drawings-cut.png';
import abstractLine from '@/assets/images/abstract/line1.svg';
import musicLibrary from '@/assets/images/projects/music-library/music-library.png';
import abstractLine2 from '@/assets/images/abstract/line2.svg';
import cookishMaster from '@/assets/images/projects/cookish-master/cookish-master.png';
import eCommerce from '@/assets/images/projects/krush/e-commerce.png';
import modeling from '@/assets/images/projects/modeling/modeling.png';
import { StaticImageData } from 'next/image';

//DIGITAL DRAWINGS
import goodDays from '@/assets/images/projects/digital-drawings/good-days.jpg';
import queenKing from '@/assets/images/projects/digital-drawings/queen-king.jpg';
import blackSwan from '@/assets/images/projects/digital-drawings/black-swan.jpg';
import sunday from '@/assets/images/projects/digital-drawings/sunday.jpg';
import headInTheClouds from '@/assets/images/projects/digital-drawings/head-in-the-clouds.jpg';
import starterPack from '@/assets/images/projects/digital-drawings/starter-pack.jpg';

//LETTERING
import letteringBook from '@/assets/images/projects/lettering/lettering.png';
import hybridation from '@/assets/images/projects/lettering/hybridation.png';
import hybridation2 from '@/assets/images/projects/lettering/hybridation2.png';
import hybridation3 from '@/assets/images/projects/lettering/hybridation3.jpg';

//MUSIC LIBRARY
import musicLibrary2 from '@/assets/images/projects/music-library/music-library2.png';
import musicLibrary3 from '@/assets/images/projects/music-library/music-library3.png';
import musicLibrary4 from '@/assets/images/projects/music-library/music-library4.png';
import musicLibrary5 from '@/assets/images/projects/music-library/music-library5.png';

//COOKISH MASTER
import cookish from '@/assets/images/projects/cookish-master/cookish.png';
import cookish2 from '@/assets/images/projects/cookish-master/cookish2.png';
import cookish3 from '@/assets/images/projects/cookish-master/cookish3.png';
import cookish4 from '@/assets/images/projects/cookish-master/cookish4.png';

//PUFF
import puff2 from '@/assets/images/projects/puff/puff2.png';
import puff4 from '@/assets/images/projects/puff/puff4.png';
import puff5 from '@/assets/images/projects/puff/puff5.png';

// KOUM'S STUDIO
import koumsStudioCover from '@/assets/images/projects/koums-studio/koums-studio-cover.jpg';

//KOUM UI
import koumUI from '@/assets/images/projects/koum-ui/koum-ui.png';
import koumUI1 from '@/assets/images/projects/koum-ui/koum-ui1.png';
import koumUI2 from '@/assets/images/projects/koum-ui/koum-ui2.png';
import koumUI3 from '@/assets/images/projects/koum-ui/koum-ui3.png';
import koumUI4 from '@/assets/images/projects/koum-ui/koum-ui4.png';
import koumUI5 from '@/assets/images/projects/koum-ui/koum-ui5.png';

//KRUSH
import krush from '@/assets/images/projects/krush/krush.png';
import krush2 from '@/assets/images/projects/krush/krush2.png';
import krush3 from '@/assets/images/projects/krush/krush3.png';
import krush4 from '@/assets/images/projects/krush/krush4.png';
import krush5 from '@/assets/images/projects/krush/krush5.png';

//MODELING
import sketch from '@/assets/images/projects/modeling/sketch.jpg';
import koum from '@/assets/images/projects/modeling/koum.png';
import koum2 from '@/assets/images/projects/modeling/koum2.png';
import koum4 from '@/assets/images/projects/modeling/koum4.png';
import koum5 from '@/assets/images/projects/modeling/koum5.png';

export enum ProjectID {
    lettering = 'lettering',
    digitalDrawings = 'digital-drawings',
    cookishMaster = 'cookish-master',
    musicLibrary = 'music-library',
    puff = 'puff',
    koumUI = 'koum-ui',
    modeling = '3d-modeling',
    krush = 'krush',
}
export interface ProjectInterface {
    name: string;
    id: ProjectID;
    coverImage: {
        front?: StaticImageData;
        back?: StaticImageData;
        frontHeight?: number;
        top?: `${number}%`;
        left?: `${number}%`;
    };
    description: string;
    gallery: { original: string; thumbnail: string }[];
    link?: {
        github?: string;
        live?: string;
    };
    process?: string;
    tool: ToolInterface[];
}
export const ProjectsList: ProjectInterface[] = [
    {
        name: 'Lettering',
        id: ProjectID.lettering,
        coverImage: {
            back: lettering,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: letteringBook.src,
                thumbnail: letteringBook.src,
            },
            {
                original: hybridation.src,
                thumbnail: hybridation.src,
            },
            {
                original: hybridation2.src,
                thumbnail: hybridation2.src,
            },
            {
                original: hybridation3.src,
                thumbnail: hybridation3.src,
            },
        ],
        tool: [Tool.illustrator, Tool.indesign, Tool.photoshop],
    },
    {
        name: 'Digital drawings',
        id: ProjectID.digitalDrawings,
        coverImage: {
            back: digitalDrawings,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: goodDays.src,
                thumbnail: goodDays.src,
            },
            {
                original: queenKing.src,
                thumbnail: queenKing.src,
            },
            {
                original: blackSwan.src,
                thumbnail: blackSwan.src,
            },
            {
                original: headInTheClouds.src,
                thumbnail: headInTheClouds.src,
            },
            {
                original: sunday.src,
                thumbnail: sunday.src,
            },
            {
                original: starterPack.src,
                thumbnail: starterPack.src,
            },
        ],
        link: {
            live: 'https://www.instagram.com/koum.97',
        },
        tool: [Tool.procreate, Tool.procreateDreams, Tool.photoshop],
    },
    {
        name: 'Cookish master',
        id: ProjectID.cookishMaster,
        coverImage: {
            front: cookishMaster,
            back: abstractLine2,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: cookish.src,
                thumbnail: cookish.src,
            },
            {
                original: cookish2.src,
                thumbnail: cookish2.src,
            },
            {
                original: cookish3.src,
                thumbnail: cookish3.src,
            },
            {
                original: cookish4.src,
                thumbnail: cookish4.src,
            },
        ],
        link: {
            github: 'https://github.com/EpitechIT2020/W-WEB-320-PAR-4-3-app-koumba.keita',
            live: '/videos/cookish-master-demo.mp4',
        },
        tool: [Tool.reactNative, Tool.firebase, Tool.figma, Tool.illustrator],
    },
    {
        name: 'Music library',
        id: ProjectID.musicLibrary,
        coverImage: {
            front: musicLibrary,
            back: abstractLine,
            frontHeight: 230,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: musicLibrary2.src,
                thumbnail: musicLibrary2.src,
            },
            {
                original: musicLibrary3.src,
                thumbnail: musicLibrary3.src,
            },
            {
                original: musicLibrary4.src,
                thumbnail: musicLibrary4.src,
            },
            {
                original: musicLibrary5.src,
                thumbnail: musicLibrary5.src,
            },
        ],
        link: {
            github: 'https://github.com/koumba97/music-library',
            //live: 'https://music-library-koum.vercel.app/',
        },
        tool: [Tool.react, Tool.typescript, Tool.firebase, Tool.sass],
    },
    {
        name: 'Puff',
        id: ProjectID.puff,
        coverImage: {
            back: koumsStudioCover,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: koumsStudioCover.src,
                thumbnail: koumsStudioCover.src,
            },
            {
                original: puff2.src,
                thumbnail: puff2.src,
            },
            {
                original: puff4.src,
                thumbnail: puff4.src,
            },
            {
                original: puff5.src,
                thumbnail: puff5.src,
            },
        ],
        link: {
            github: 'https://github.com/koumba97/puff',
        },
        tool: [
            Tool.reactNative,
            Tool.figma,
            Tool.procreate,
            Tool.firebase,
            Tool.illustrator,
        ],
    },
    {
        name: 'Koum UI',
        id: ProjectID.koumUI,
        coverImage: {
            back: koumUI,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: koumUI1.src,
                thumbnail: koumUI1.src,
            },
            {
                original: koumUI5.src,
                thumbnail: koumUI5.src,
            },
            {
                original: koumUI2.src,
                thumbnail: koumUI2.src,
            },
            {
                original: koumUI3.src,
                thumbnail: koumUI3.src,
            },
            {
                original: koumUI4.src,
                thumbnail: koumUI4.src,
            },
        ],
        link: {
            live: 'https://koum-ui.vercel.app/',
            github: 'https://github.com/koumba97/koum-ui',
        },

        tool: [
            Tool.react,
            Tool.typescript,
            Tool.sass,
            Tool.storybook,
            Tool.figma,
        ],
    },
    {
        name: '3D Modeling',
        id: ProjectID.modeling,
        coverImage: {
            front: modeling,
            frontHeight: 200,
            left: '65%',
            top: '65%',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: koum5.src,
                thumbnail: koum5.src,
            },
            {
                original: koum.src,
                thumbnail: koum.src,
            },
            {
                original: koum2.src,
                thumbnail: koum2.src,
            },

            {
                original: koum4.src,
                thumbnail: koum4.src,
            },
            {
                original: sketch.src,
                thumbnail: sketch.src,
            },
        ],
        link: {
            live: '/videos/3d-modeling.mp4',
        },
        tool: [Tool.nomadSculpt, Tool.procreate],
    },
    {
        name: 'Krush',
        id: ProjectID.krush,
        coverImage: {
            back: eCommerce,
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.',
        gallery: [
            {
                original: krush.src,
                thumbnail: krush.src,
            },
            {
                original: krush2.src,
                thumbnail: krush2.src,
            },
            {
                original: krush3.src,
                thumbnail: krush3.src,
            },
            {
                original: krush4.src,
                thumbnail: krush4.src,
            },
            {
                original: krush5.src,
                thumbnail: krush5.src,
            },
        ],
        link: {
            github: 'https://github.com/koumba97/krush-ecommerce',
            //live: 'https://krush-koum.vercel.app/',
        },
        tool: [Tool.react, Tool.sass, Tool.typescript],
    },
];
