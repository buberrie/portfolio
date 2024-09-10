export const ContactForm = () => {
  return (
    <section id="contact-me" className=" padding-x mb-20 md:pt-20">
      <h2 className="text-center">Contact</h2>
      <div className=" w-full flex-center flex-col">
      <form action="https://public.herotofu.com/v1/53210c70-6edc-11ef-9149-238dc419cdff" method="post" accept-charset="UTF-8" className="box-shadow bg-blur border-color-base grid gap-6 rounded-[0.5rem] w-[30rem] max-w-full px-6 py-8">
      <label htmlFor="name">
          <p className="pl-5 mb-1 text-color-sm">Name</p>
        <input type="text" id="name" name="Name" className="input main-bg border-color-base" />
        </label>
        <label htmlFor="email">
          <p className="pl-5 mb-1 text-color-sm">Email Address</p>
        <input type="email" id="email" name="Email" required className="input main-bg border-color-base" />
        </label>
        <label htmlFor="message">
          <p className="pl-5 mb-1 text-color-sm">Message</p>
        <textarea name="Message" id="message" required className="input main-bg textarea overflow-container border-color-base"></textarea>
        </label>
        
        <button className="btn btn-primary w-full">Send</button>
      </form>
      </div>
    </section>
  )
}
