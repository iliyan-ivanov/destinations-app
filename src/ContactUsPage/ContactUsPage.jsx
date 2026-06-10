import Header from "../Header/Header";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const onSendEmail = (e) => {
    e.preventDefault(e);
    // Insert sending email logic
  }

  return (
    <main className="contact-us-page">
      <Header />
      <section className="contact-us-section">
        <h1 className="contact-us-heading">Свържи се с нас</h1>
        <article className="contact-us-location">
          <div className="contact-us-location-info">
            <h3>Адреси за кореспонденция</h3>
            <p>град София 1540,</p>
            <p> булевард „Христофор Колумб“ 1</p>
            <p>(Летище софия)</p>
            <p>Телефон: +359 *** *** ***</p>
            <p>Имейл: info@destinations.com</p>
            <p>Инстаграм: destinations.*****</p>
            <p>Фейсбук: facebook.com/destinations*</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5865.034234699743!2d23.404425168762707!3d42.692770088669384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa860492714acf%3A0x90abe0ffbec8d59f!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdC-INC70LXRgtC40YnQtSDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1723200405724!5m2!1sbg!2sbg"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-maps"
            ></iframe>
          </div>
        </article>
        <article className="contact-us-form-article">
          <h4 className="contact-us-description">Свържете се с нас, за да получите допълнителна информация или за да отправите Ваше питане.</h4>
          <h4>Изпращане на е-мейл. Всички полета отбелязани със звезда (*) са задължителни.</h4>
          <div className="contact-us-form-div">
            <form className="contact-us-form" onSubmit={onSendEmail}>
              <div>
                <label htmlFor="name">Име *</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="subject">Тема *</label>
                <input type="subject" id="subject" name="subject" />
              </div>
              <div>
                <label htmlFor="message">Съобщение *</label>
                <textarea
                  className="contact-us-message"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <button type="submit" className="contact-us-btn">Изпрати</button>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ContactUsPage;
