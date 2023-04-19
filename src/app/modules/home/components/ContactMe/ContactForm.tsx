import React from "react";

function ContactForm() {
  return (
    <div
      className="right wow fadeInRight"
    >
      <div className="fields">
        <form
          action="/"
          method="post"
          className="contact_form"
          id="contact_form"
          autoComplete="off"
        >
          <div
            className="returnmessage"
            data-success="Your message has been received, We will contact you soon."
          ></div>
          <div className="empty_notice">
            <span>Please Fill Required Fields</span>
          </div>
          <div className="input_list">
            <ul>
              <li>
                <input type="text" id="name" placeholder="Your Name" />
              </li>
              <li>
                <input type="text" id="email" placeholder="Your Email" />
              </li>
              <li>
                <input type="number" id="phone" placeholder="Your Phone" />
              </li>
              <li>
                <input type="text" id="subject" placeholder="Subject" />
              </li>
            </ul>
          </div>
          <div className="message_area">
            <textarea
              id="message"
              placeholder="Write your message here"
              spellCheck="false"
            ></textarea>
          </div>
          <div className="dizme_tm_button">
            <a id="send_message" href="#">
              <span>Submit Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
