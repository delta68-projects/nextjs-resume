import {
  faChampagneGlasses,
  faMortarBoard,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedAchievement_s } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import AchievementItem from './AchievementItem';
import AchievementItem_ from './AchievementItem_';
import AchievementItemA from './AchievementItem_';

const Achievements_: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faTrophy} level={2} text="Achievements" />
        </div>

        {sortedAchievement_s.map((achievement) => (
          <AchievementItemA key={achievement._id} {...achievement} />
        ))}
      </div>
    </article>
  );
};

export default Achievements_;
