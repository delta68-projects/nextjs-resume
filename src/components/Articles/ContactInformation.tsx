import { PrivateField, personal } from '@content';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  privateInformation?: PrivateField[];
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  privateInformation,
}) => {
  return (
    <article>
      <SectionHeading icon={faIdCard} level={3} text="Contact Information" />

      <ul className="mt-2 flex-auto">
        <li>
          <strong>Location:</strong> {personal.location} <br />
          {/* add phone and mail */}
          <strong>Phone:</strong> {personal.phone} <br />
          <strong>Email:</strong> {personal.mail}
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
