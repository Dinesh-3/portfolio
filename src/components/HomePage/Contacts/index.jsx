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

const initState = { company: '', email: '', message: '' };

const Contacts = () => {
  const [state, setState] = useState(initState);
  const [error, setError] = useState({ company: false, email: false, message: false });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = async () => {
    try {
      await contactSchema.validate(state);
      return true;
    } catch (error) {
      const key = error.message.split(' ')[0];
      setError((prev) => ({ ...prev, [key]: true }));
      console.log(error.message);
      return false;
    }
  };

  const handleInputChange = async (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setState((prev) => ({ ...prev, [key]: value }));
    setError((prev) => ({ ...prev, [key]: false }));
  };

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (!isValid) return;

    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
      setState(initState);
    }
  };

  return (
    <section className={`${styles.contact} section`} id='contact'>
      <h2 className='section__title'>{content.title}</h2>
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
          <div className={`${styles.content} ${error.company ? styles.error : ''}`}>
            <label className={styles.label}>
              Company <b style={{ color: 'red' }}>*</b>
            </label>
            <input type='text' name='company' className={styles.input} value={state.company} onChange={handleInputChange} />
          </div>
          <div className={`${styles.content} ${error.email ? styles.error : ''}`}>
            <label className={styles.label}>
              Email <b style={{ color: 'red' }}>*</b>
            </label>
            <input type='email' name='email' className={styles.input} value={state.email} onChange={handleInputChange} />
          </div>
          <div className={styles.content}>
            <label className={styles.label}>
              Message
            </label>
            <input type='text' name='message' className={styles.input} value={state.message} onChange={handleInputChange} />
          </div>

          <div>
            <a className='button button--flex' onClick={handleSubmit}>
              Submit
              {isLoading ? <i class='bx bx-loader bx-spin button__icon'></i> : <i className={`bx bx-send button__icon`}></i>}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
