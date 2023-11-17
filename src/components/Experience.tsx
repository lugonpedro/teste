import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience({ experience }: any) {
  console.log(experience);

  return (
    // <motion.div
    //   className="min-h-screen flex flex-col justify-center mx-auto px-10 xl:max-w-[800px]"
    //   initial={{ opacity: 0 }}
    //   transition={{ duration: 3 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    // >
    //   <h3 className="pageTitle">{t("experience.title")}</h3>

    //   <ol className="relative border-l border-green">
    //     {experiences.reverse().map((experience) => (
    //       <li className="mb-10 ml-4" key={experience.key}>
    //         <div className="absolute w-3 h-3 bg-green rounded-full mt-1.5 -left-1.5 border border-pearl"></div>
    //         <time className="mb-1 text-sm font-normal leading-none text-pearl">
    //           {experience.date}
    //         </time>
    //         <h3 className="text-lg font-semibold text-pearl">
    //           {experience.header} - {experience.place}
    //         </h3>
    //         <p className="text-base font-normal text-pearl">
    //           {experience.desc}
    //         </p>
    //         <ul className="flex flex-col items-start mt-2 md:flex-row md:items-center">
    //           {experience.techs.map((tech, index) => (
    //             <li
    //               className="text-pearl text-sm md:text-md md:first:before:content-[''] md:first:before:mx-0 md:before:content-['-'] md:before:mx-1"
    //               key={index}
    //             >
    //               {tech}
    //             </li>
    //           ))}
    //         </ul>
    //       </li>
    //     ))}
    //   </ol>
    // </motion.div>
    <VerticalTimelineElement className="bg-transparent" date="Data">
      <div>
        <h3 className="text-white text-[24px] font-bold">TITULO</h3>
        <p className="text-secondary text-[16px] font-semibold">EMPRESA</p>
      </div>

      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point: any, index: any) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul> */}
    </VerticalTimelineElement>
  );
}
