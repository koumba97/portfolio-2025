export const getViewport = () => {
    if (typeof window !== 'undefined') {
      return {
        vw: window.innerWidth,
        vh: window.innerHeight
      };
    }
  
    return {
      vw: 0,
      vh: 0
    };
};

export const SM_BREAKPOINT = 480;
export const MD_BREAKPOINT = 768;
export const LG_BREAKPOINT = 900;
