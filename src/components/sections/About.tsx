import { CiCalendar } from 'react-icons/ci';
import { IoSchoolOutline } from 'react-icons/io5';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutMeHeader, codeContent, education } from '@/data/profile';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export function About() {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <section id="sobre-mi" className="light border-l bg-surface">
      <div className="flex flex-col md:flex-row gap-8 mx-auto max-w-6xl px-6 py-24 items-center md:items-start">
        <img
          src="/network-bg.png"
          alt="profile"
          className="w-full max-w-sm md:max-w-none md:w-auto md:max-h-60 bg-black rounded-2xl object-cover"
        />

        <div className="flex flex-col w-full">
          <span className="font-semibold text-md text-blue">SOBRE MÍ</span>
          <SectionHeading
            title={aboutMeHeader.title}
            subtitle={aboutMeHeader.subtitle}
            widthComponent="4xl"
          />
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 md:justify-between mt-4">
            <div className="flex gap-3 items-center">
              <HiOutlineLocationMarker className="text-text/50 shrink-0" size={25} />
              <span className="text-text/50 text-sm sm:text-base">{codeContent.ubicacion}</span>
            </div>
            <div className="flex gap-3 items-center">
              <IoSchoolOutline className="text-text/50 shrink-0" size={25} />
              <span className="text-text/50 text-sm sm:text-base">{education[0].title}</span>
            </div>
            <div className="flex gap-3 items-center">
              <CiCalendar className="text-text/50 shrink-0" size={25} />
              <span className="text-text/50 text-sm sm:text-base">
                {yearsOfExperience}+ años de experiencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
