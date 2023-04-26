import React from 'react';

import { ContactInfoType } from '@/app/modules/home/types/ContactFormType';

import MessageTable from '../components/MessageTable';

interface ContactPageContainerProps {
  dataContact: ContactInfoType[];
}
function ContactPageContainer(props: ContactPageContainerProps) {
  const { dataContact } = props;
  return (
    <div className="min-h-screen">
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-36 pb-16 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary via-success to-secondary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl p-2">
              Message Contact Info
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              All message leave by page viewer!
            </p>
          </div>
        </div>
      </section>
      <MessageTable data={dataContact} />
    </div>
  );
}

export default ContactPageContainer;
