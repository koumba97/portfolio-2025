import { Tool, ToolInterface } from "./tool-list"
import lettering from "@/assets/images/projects/lettering/lettering.png";
import digitalDrawings from "@/assets/images/projects/digital-drawings/digital-drawings-cut.png";
import abstractLine from "@/assets/images/abstract/line1.svg";
import musicLibrary from "@/assets/images/projects/music-library/music-library.png";
import abstractLine2 from "@/assets/images/abstract/line2.svg";
import cookishMaster from "@/assets/images/projects/cookish-master/cookish-master.png";
import puff from "@/assets/images/projects/puff/puff.png";
import eCommerce from "@/assets/images/projects/krush/e-commerce.png";
import modeling from "@/assets/images/projects/modeling/modeling.png";
import designSystem from "@/assets/images/projects/design-system/design-system.png";
import { StaticImageData } from "next/image";

//DIGITAL DRAWINGS
import goodDays from "@/assets/images/projects/digital-drawings/good-days.jpg";
import queenKing from "@/assets/images/projects/digital-drawings/queen-king.jpg";
import blackSwan from "@/assets/images/projects/digital-drawings/black-swan.jpg";
import sunday from "@/assets/images/projects/digital-drawings/sunday.jpg";
import headInTheClouds from "@/assets/images/projects/digital-drawings/head-in-the-clouds.jpg";

export enum ProjectID {
    lettering = 'lettering',
    digitalDrawings = 'digital-drawings',
    cookishMaster = 'cookish-master',
    musicLibrary = 'music-library',
    puff = 'puff',
    designSystem = 'design-system',
    modeling = '3d-modeling',
    krush = 'krush',
}
export interface ProjectInterface {
    name:string,
    id: ProjectID,
    coverImage: {
        front?: StaticImageData,
        back?: StaticImageData,
        frontHeight?: number
        top?: `${number}%`,
        left?: `${number}%`
    },
    description: string
    gallery: {original: any, thumbnail:any}[],
    link?: {
        github?: string,
        live?: string
    },
    process?: string,
    tool: ToolInterface[]
}
export const ProjectsList: ProjectInterface[] = [
    {
        name: 'Lettering',
        id: ProjectID.lettering,
        coverImage: {
            back: lettering
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        tool: []
    },
    {
        name: 'Digital drawings',
        id: ProjectID.digitalDrawings,
        coverImage: {
            back: digitalDrawings
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        link: {
            live: 'https://www.instagram.com/koum.97'
        },
        tool: [Tool.procreate, Tool.procreateDreams, Tool.photoshop]
    },
    {
        name: 'Cookish master',
        id: ProjectID.cookishMaster,
        coverImage: {
            front: cookishMaster,
            back: abstractLine2
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        link: {
            github: 'https://github.com/EpitechIT2020/W-WEB-320-PAR-4-3-app-koumba.keita'
        },
        tool: [Tool.reactNative, Tool.firebase, Tool.figma, Tool.illustrator]
    },
    {
        name: 'Music library',
        id: ProjectID.musicLibrary,
        coverImage: {
            front: musicLibrary,
            back: abstractLine,
            frontHeight: 230
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        link: {
            github: 'https://github.com/koumba97/music-library',
            live: 'https://music-library-koum.vercel.app/'
        },
        tool: [Tool.react, Tool.typescript, Tool.firebase, Tool.sass]
    },
    {
        name: 'Puff',
        id: ProjectID.puff,
        coverImage: {
            back: puff
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        link: {
            github: 'https://github.com/koumba97/puff',
        },
        tool: [Tool.reactNative, Tool.figma, Tool.procreate, Tool.firebase, Tool.illustrator]
    },
    {
        name: 'Design System',
        id: ProjectID.designSystem,
        coverImage: {
            back: designSystem
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],

        tool: [Tool.react, Tool.typescript, Tool.sass, Tool.storybook, Tool.figma]
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        tool: [Tool.nomadSculpt]
    }
    ,
    {
        name: 'Krush',
        id: ProjectID.krush,
        coverImage: {
            back: eCommerce
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque ut elit malesuada cursus. Nulla facilisi. Praesent purus ex, tempor vel quam condimentum, mollis ultrices nisl. Sed neque nunc, vestibulum sed massa a, rutrum imperdiet velit. Fusce dolor ex, auctor sed sodales vel, luctus eu urna. Vivamus porta egestas purus non aliquam. Nulla at viverra nulla, id vulputate nisi. Mauris sed fringilla nibh. Praesent lacinia tincidunt nisi et eleifend. Vestibulum cursus accumsan metus nec ornare. In eu ipsum rhoncus, eleifend velit in, dapibus justo. Suspendisse accumsan non ex imperdiet finibus. Donec iaculis placerat tellus in hendrerit. Curabitur dignissim pharetra dui. Etiam eleifend risus quis accumsan egestas. Aenean nibh justo, fermentum id ornare ut, tempor id risus. Sed iaculis diam eget ipsum convallis, nec scelerisque nibh dictum. Morbi eget felis quis arcu malesuada suscipit nec eget dui. Duis congue quam vitae magna tincidunt, sit amet vehicula lectus posuere. Sed volutpat ut sapien ac imperdiet. Ut sagittis erat tortor, sodales aliquam tellus aliquam sit amet. Integer fringilla, felis semper eleifend convallis, est nulla sagittis turpis, nec mollis velit turpis ac nisi. Fusce pulvinar imperdiet odio, eu lobortis tortor rutrum at.",
        gallery: [
            {
                original:goodDays.src,
                thumbnail: goodDays.src
            }, 
            {
                original:queenKing.src, 
                thumbnail: queenKing.src
            },
            {
                original:blackSwan.src, 
                thumbnail: blackSwan.src
            },
            {
                original:headInTheClouds.src, 
                thumbnail: headInTheClouds.src
            },
            {
                original:sunday.src,
                thumbnail: sunday.src
            }
        ],
        link: {
            github: 'https://github.com/koumba97/krush-ecommerce',
            live: 'https://krush-koum.vercel.app/'
        },
        tool: [Tool.react, Tool.sass, Tool.typescript]
    }

]