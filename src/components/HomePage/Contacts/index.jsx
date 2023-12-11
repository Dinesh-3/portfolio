import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

import styles from './styles.module.scss';
import content from './index.json';

const contactSchema = Yup.object().shape({
  company: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().optional(),
});

const Contacts = () => {
  const [state, setState] = useState({ company: '', email: '', message: '' });
  const [error, setError] = useState({ company: false, email: false, message: false })

  const validateForm = async () => {
    try {
      await contactSchema.validate(state);
      return true;
    } catch (error) {
      const key = error.message.split(" ")[0];
      setError(prev => ({...prev, [key]: true}));
      console.log(error.message);
      return false;
    }
  };

  const handleInputChange = async (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setState((prev) => ({ ...prev, [key]: value }));
    setError((prev) => ({ ...prev, [key]: false }))
  };

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if(!isValid) return;

    const config = {
      method: 'post',
      url: `/api/contact`,
      data: state,
    };

    try {
      await axios(config);
      alert('Details submitted successfully!');
    } catch (error) {
      console.log(error);
      alert('Internal Server Error. Please try again later!');
    }
  };

  return (
    <section className={`${styles.contact} section`} id='contact'>
      <div className='section__title'>{content.title}</div>
      <span className='section__subtitle'>{content.subTitle}</span>

      <div className={`${styles.container} container grid`}>
        <div>
          {content.infos.map((info) => (
            <div className={styles.information} key={info.label}>
              <i className={`bx ${info.icon} ${styles.icon}`}></i>
              <div>
                <h3 className={styles.title}>{info.label}</h3>
                <span className={styles.subtitle}>{info.value}</span>
              </div>
            </div>
          ))}
        </div>

        <form action='' className={`${styles.form} grid`}>
          <div className={`${styles.content} ${error.company ? styles.error: ''}`}>
            <label htmlFor='' className={styles.label}>
              Company <b style={{color: 'red'}}>*</b>
            </label>
            <input type='text' name='company' className={styles.input} onChange={handleInputChange} />
          </div>
          <div className={`${styles.content} ${error.email ? styles.error: ''}`}>
            <label htmlFor='' className={styles.label}>
              Email <b style={{color: 'red'}}>*</b>
            </label>
            <input type='email' name='email' className={styles.input} onChange={handleInputChange} />
          </div>
          <div className={styles.content}>
            <label htmlFor='' className={styles.label}>
              Message
            </label>
            <textarea name='' id='' cols='0' rows='3' className={styles.input}></textarea>
            <input type='text' name='message' className={styles.input} onChange={handleInputChange} />
          </div>

          <div>
            <a className='button button--flex' onClick={handleSubmit}>
              Submit
              <i className={`uil uil-message button__icon`}></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
