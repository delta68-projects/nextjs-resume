import { Achievement_ } from '@content';
import { faCalendar, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const AchievementItemA: React.FC<Achievement_> = ({
  achievement,
  body,
  organization,
  completionYear,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        {achievement}
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faUniversity} />
        {organization}
      </div>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
        {completionYear}
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default AchievementItemA;
