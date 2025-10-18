import {ArrowTopRightOnSquareIcon, CodeBracketIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-2xl font-bold text-white tracking-wide">Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const PortfolioCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, description, image, url, githubUrl, techStack} = item;

  return (
    <div className="group relative rounded-xl bg-neutral-800 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-700 flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image alt={title} className="object-cover" fill placeholder="blur" src={image} />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors duration-200">
            {title}
          </h3>

          <p className="text-sm text-neutral-300 mb-3">{description}</p>

          {/* Tech Stack Badges */}
          {techStack && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  className="text-xs font-medium px-2 py-1 rounded-md bg-neutral-700 text-neutral-200 border border-neutral-600 hover:bg-neutral-600 transition"
                  key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center justify-between gap-4">
          {url && (
            <a
              className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              href={url}
              rel="noopener noreferrer"
              target="_blank">
              Live Demo
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              href={githubUrl}
              rel="noopener noreferrer"
              target="_blank">
              GitHub
              <CodeBracketIcon className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
