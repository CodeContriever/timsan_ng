const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-lato font-semibold text-[24px] md:text-[48px]",
    heading2: "font-gill font-semibold text-[24px] md:text-[40px]",
    heading3: "font-gill font-semibold text-[18px] md:text-[24px]",
    paragraph: "font-montserrat font-normal text-[16px] md:text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexBetween: "flex justify-between items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "px-2 md:px-6",
    paddingY: "py-2 md:py-6",
  
    marginX: "mx-2 md:mx-6",
    marginY: "my-2 md:my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;

  // <h1 className={`font-lato font-semibold text-base md:text-2xl xl:text-5xl text-center `}>
  
  // <button 
  //           type='button' 
  //           className='px-14 py-2.5 rounded-xl text-secondary bg-primary hover:opacity-75 focus:ring-4 focus:ring-green-300'
  //           >
  //             About us
  //             </button>