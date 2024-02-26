import { PrivateField, personal } from '@content';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import Image from 'next/image';

interface ContactInformationProps {
  privateInformation?: PrivateField[];
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  privateInformation,
}) => {
  return (
    <article>
      <SectionHeading icon={faIdCard} level={3} text="Contact Information" />

      <div className="mt-2 flex-auto">
        <img
          src="https://utfs.io/f/a2558654-458b-4dd1-8210-4be45aa720d6-b39uky.jpg"
          alt=""
          width={300}
        />
      </div>

      <ul className="mt-2 flex-auto">
        <li>
          <strong>Location:</strong> {personal.location}
          <br />
          {/* Make phone clickable */}
          <strong>Phone:</strong>{' '}
          <a href={`tel:${personal.phone}`}>{personal.phone}</a>
          <br />
          {/* Make email clickable */}
          <strong>Email:</strong>{' '}
          <a href={`mailto:${personal.mail}`} target="_blank">
            {personal.mail}
          </a>
          <br />
          <br />
          {/* <strong>Calendly:</strong>{' '}
          <a href={`${personal.calendly}`} target="_blank">
            {personal.calendly}
          </a> */}
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
};
