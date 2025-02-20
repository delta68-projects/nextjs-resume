import { ProfessionalExperience } from '@content';
import { faCalendar, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const ProfessionalItem: React.FC<ProfessionalExperience> = ({
  body,
  endDate,
  startDate,
  organization,
  image,
  title,
  location,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      {/* <img src={image} className='bottom-10 ' width={"20%"} alt={"company"} /> */}
      <Heading className="text-balance" level={3}>
        {/* company image */}
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
        {startDate}–{!endDate ? 'Current' : endDate}
      </div>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faGlobe} />
        {location}
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default ProfessionalItem;
