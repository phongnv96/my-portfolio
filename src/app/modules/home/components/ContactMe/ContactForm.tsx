import Button from "@/app/common/components/Button";
import React from "react";

const ContactForm = () => {
  return (
    <div className="right wow fadeInRight">
      <div className="rounded-lg lg:col-span-3">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg dark:bg-transparent border-gray-200 border border-solid p-4 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg dark:bg-transparent border-gray-200 border border-solid p-4 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg dark:bg-transparent border-gray-200 border border-solid p-4 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full rounded-lg dark:bg-transparent border-gray-200 border border-solid p-4 text-sm"
              placeholder="Message"
              rows={8}
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <Button
              className="inline-block w-full sm:w-auto"
            >
              Send Enquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
