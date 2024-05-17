export default function ContactMe() {
  return (
    <section id="contact" className="text-gray-400 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <p className="text-base font-mono text-[#4cd8f7] ">
            03. What's next?
          </p>
          <h1 className="sm:text-[4vw]] text-[4vw] font-semibold title-font mb-4 text-[#ccd6f6]">
            Get In Touch
          </h1>
          <p className="mx-auto text-center w-2/3 text-gray-200">
          Looking to connect and collaborate? Whether you have a project idea, a question, or just want to say hello, I'd love to hear from you! Drop me a message and let's start the conversation.
          <span className="text-[#4cd8f7]">( I prefer LinkedIn)</span>
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-md shadow transition-all mt-4 duration-500">
            <a
              href="mailto:mjxworks@gmail.com"
              className="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md border-[#41bfdc] text-white hover:border-white hover:text-[#41bfdc] transition-all duration-500"
            >
              Say Hello
            </a>
          </div>
        </div>
        

        
      </div>
    </section>
  );
}
