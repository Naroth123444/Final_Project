import React, { useEffect, useState } from "react";
import contactAddress from "../../../data/aboutpagedata/contactAddress";
import AddressCard from "./AddressCard";
import { useForm, ValidationError } from "@formspree/react";

const contactData = contactAddress;

export default function ContactSection() {
  const [state, handleSubmit, reset] = useForm("xrbpyokj");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);
  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  return (
    <>
      <section className="flex flex-col gap-10 w-full z-10 px-5 md:px-[60px] lg:px-[120px] mb-24 dark:bg-dark-bg dark:text-dark-primary">
        <section
          id="contact"
          className="grid grid-cols-2 items-center justify-center gap-10"
        >
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xrbpyokj"
            method="Post"
            className="w-full h-fit rounded-small p-6 flex-col shadow-small space-y-5 bg-white dark:bg-black/70 dark:text-dark-primary"
          >
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="subject"
                className="dark:text-dark-primary placeholder-dark-primary/20"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full h-[52px] rounded-small px-6 py-4 shadow-small bg-white focus:outline-2 focus:outline-secondary dark:bg-dark-bg dark:text-dark-primary dark:focus:outline-dark-accent"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="message" className="dark:text-dark-primary">
                Message
              </label>
              <textarea
                type="textarea"
                name="message"
                id="message"
                placeholder="Message"
                className="w-full h-64 resize-none rounded-small px-6 py-4 shadow-small bg-white focus:outline-2 focus:outline-secondary dark:text-dark-primary dark:bg-dark-bg dark:placeholder-dark-primary/20 dark:focus:outline-dark-accent"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="large-button w-full dark:bg-dark-accent dark:text-dark-primary hover:dark:bg-dark-accent/90"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <div className="flex items-center gap-2">
                  <span className="loader w-5 h-5 border-2 border-t-transparent border-accent rounded-full animate-spin"></span>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
          <figure className="flex flex-col justify-center items-center p-10 dark:text-dark-primary">
            <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary dark:text-dark-primary font-bold">
              Get in touch
            </h2>
            <img src={"/img/getintouch.svg"} alt="" />
            <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-center text-primary/80 dark:text-dark-primary/80">
              Looking to make a deal or start a collaboration? We’re excited to
              hear from you! Get in touch with us today, and let's discuss how
              we can work together to achieve great things.
            </p>
          </figure>
        </section>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {contactData.map((data) => (
            <AddressCard
              key={data.id}
              icon={data.icon}
              title={data.title}
              description={data.description}
              value={data.value}
            />
          ))}
        </div>
      </section>

      <div
        id="container"
        className={`fixed z-200 inset-0 overflow-y-auto ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block align-bottom w-fit bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 dark:bg-dark-bg dark:text-dark-primary">
            <div className="sm:flex items-center justify-center">
              <div className="mt-3 text-center flex flex-col items-center gap-2 sm:mt-0 sm:ml-4 ">
                <div className="h-20 w-20 rounded-full bg-accent mb-4 flex justify-center items-center">
                  <img src="/icons/check.svg" className="h-14 w-14" alt="" />
                </div>
                <article>
                  <h3 className="text-lg text-center leading-6 font-medium text-gray-900 dark:text-dark-primary">
                    Thank You for Your Feedback!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500 dark:text-dark-primary/80">
                      We’ve received your message and will review it shortly.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex justify-center items-center">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 small-button dark:bg-dark-accent dark:text-dark-primary"
                  onClick={closeModal}
                >
                  Accept
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
