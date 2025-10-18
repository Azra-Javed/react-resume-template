import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        {/* Background Image - Set z-0 */}
        <Image
          alt={`${name}-image`}
          className="absolute h-full object-cover w-full z-0"
          placeholder="blur"
          priority
          src={imageSrc}
        />

        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* Social Icons - Left Side */}
        <div className="hidden md:block fixed left-4 top-[70%] z-50 flex -translate-y-1/2 flex-col items-center gap-y-6 text-white/80 lg:left-8">
          <Socials />
          <div className="h-24 w-px bg-white/40" />
        </div>

        {/* Email - Right Side */}
        <div className="hidden md:block fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-y-6 lg:right-8">
          <div className="h-24 w-px bg-white/40" />
          <a
            className="text-sm tracking-widest text-white/80 transition-colors duration-300 hover:text-orange-400"
            href="mailto:iamazrajaved@gmail.com"
            style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
            iamazrajaved@gmail.com
          </a>
        </div>

        {/* Main Content */}
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 p-8 text-center lg:p-10">
            {/* Name */}
            <h1 className="text-5xl font-light tracking-wide text-white sm:text-6xl lg:text-8xl">{name}</h1>

            {/* Description */}
            <div className="max-w-2xl text-white/90">{description}</div>

            {/* Social Links - Mobile Only */}
            <div className="flex gap-x-6 text-white/70 lg:hidden">
              <Socials />
            </div>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="mt-6 flex w-full flex-wrap justify-center gap-4">
              {actions.map(({href, Icon, primary, text}) => (
                <a
                  className={classNames(
                    'group relative overflow-hidden px-8 py-3 text-sm font-light tracking-wider text-white transition-all duration-300 sm:text-base',
                    primary ? 'border border-white' : 'border border-white/40',
                  )}
                  href={href}
                  key={text}>
                  <span
                    className={classNames(
                      'absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0',
                      primary ? 'bg-white' : 'bg-white/20',
                    )}
                  />
                  <span
                    className={classNames(
                      'relative z-10 flex items-center gap-x-2 transition-colors duration-300',
                      primary ? 'group-hover:text-black' : '',
                    )}>
                    {text}
                    {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 inset-x-0 flex justify-center z-50 animate-bounce">
          <a
            className="text-orange-400 transition-all duration-300 hover:text-orange-300"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
