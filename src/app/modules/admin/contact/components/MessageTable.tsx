import React from 'react';

import { ContactInfoType } from '@/app/modules/home/types/ContactFormType';

interface MessageTableProps {
  data: ContactInfoType[];
}
const MessageTable = (props: MessageTableProps) => {
  const { data } = props;
  const formatDate = (date?: string) => {
    return date ? new Date(date).toLocaleString() : "-";
  };
  return (
    <section className="container mx-auto">
      <div className="overflow-x-auto rounded-lg border  border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Phone
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Message
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Create date
              </th>
            </tr>
          </thead>

          {data.length ? (
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={`data-table-message-${index}`}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium ">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 ">{item.email}</td>
                  <td className="whitespace-nowrap px-4 py-2 ">{item.phone}</td>
                  <td className="whitespace-nowrap px-4 py-2 ">
                    {item.message}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 ">
                    {formatDate(item?.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="h-40 p-10 text-center w-full">
              <tr>
                <td colSpan={5}>There is no data!</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </section>
  );
};

export default MessageTable;
