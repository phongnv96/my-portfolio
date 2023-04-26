"use client";
import React, {
  useEffect,
  useState,
} from 'react';

import ContactPageContainer
  from '@/app/modules/admin/contact/container/ContactPage.container';
import { getAllMessage } from '@/app/modules/admin/contact/services';
import { ContactInfoType } from '@/app/modules/home/types/ContactFormType';

const ContactPage = () => {
  const [dataContact, setDataContact] = useState<ContactInfoType[]>([]);
  const getAllContactData = async () => {
    const data = await getAllMessage();
    setDataContact(data);
  };

  useEffect(() => {
    getAllContactData();
  }, []);

  return (
    <>
      <ContactPageContainer dataContact={dataContact} />
    </>
  );
};

export default ContactPage;
