import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeaturesWithIcons({ colorMode }) {
  // Define background and text colors based on colorMode
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass} `} paddingbot={false}>
      <SectionHeader
        className={`text-center ${textClass}`}
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
      />
      <SectionWrapper>
        {/* mobile */}
        <div className="w-full flex flex-col items-center gap-2 desktop1:gap-16 desktop1:hidden">
          {/* Linha de cima: Azul e Verde */}
          <div className="flex flex-col tablet1:flex-row tablet1:justify-center gap-5 w-full">
            {/* Card Azul */}
            <div className="w-full tablet1:w-[45%] desktop1:w-[28%] flex flex-col justify-center items-center">
              <MotionDivDownToUp>
                <IconFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className={` ${textClass}`}
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            </div>

            {/* Card Verde */}
            <div className="w-full tablet1:w-[45%] desktop1:w-[28%] flex flex-col justify-center items-center  tablet1:mt-0">
              <MotionDivDownToUp>
                <IconFeatureCard
                  icon={content.texts.features.card2.icon}
                  title={content.texts.features.card2.title}
                  paragraph={content.texts.features.card2.subtitle}
                  className={textClass}
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            </div>
          </div>

          {/* Card Vermelho - abaixo centralizado */}
          <div className="w-full tablet1:w-[60%] desktop1:w-[35%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className={` ${textClass}`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden desktop1:mt-[40px] flex-col items-center w-full tablet1:flex-row tablet1:justify-between desktop1:gap-x-0 desktop1:px-0 desktop1:flex">
          <div className="col1 tablet1:w-[50%] desktop1:mb-[25%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className={` ${textClass}`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex flex-col gap-12 justify-center w-[35%]">
            <div
              className="hidden h-[640px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            ></div>

            <MotionDivDownToUp className="m-auto">
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className={textClass}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </MotionDivDownToUp>

          <div className="col3 tablet1:w-[50%] desktop1:w-[28%] desktop1:mb-[25%] flex flex-col justify-center items-center ">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
                className={textClass}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
