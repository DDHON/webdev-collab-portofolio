const styles = {
  boxWidth: "xl:max-w-[1700px] w-full",
  heading1:
    "font-poppins font-bold max-sm:text-[30px] text-[65px]  text-center text-[#031120] max-sm:leading-[40px] leading-[80px] ",
  heading2:
    "font-poppins font-bold max-sm:text-[18px] text-[40px] text-[#031120] max-sm:leading-[22.68px] leading-[50.4px] w-full",
  heading3:
    "font-poppins font-medium max-sm:text-[13px] text-[23px] text-[#031120] max-sm:leading-[20px] leading-[40px] ",
  paragraph:
    "font-poppins font-normal text-[#031120] max-sm:text-[13px] text-[15px] max-sm:leading-[15px] leading-[25px]",
  paragraphCard:
    "font-poppins font-normal text-[#555555] max-sm:text-[11px] text-[20px] max-sm:leading-[17px] leading-[35px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
