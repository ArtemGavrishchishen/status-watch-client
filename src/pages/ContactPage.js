import React from 'react';

import PhoneBlock from '../components/PhoneBlock/PhoneBlock';
import ScheduleCallCenter from '../components/ScheduleCallCenter/ScheduleCallCenter';
import Map from '../components/Map/Map';

import styles from './ContactPage.module.css';

const ContactPage = () => (
  <main>
    <section className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.title}>Consultations and order by phone</h2>
        <div className={styles.contactInfo}>
          <div>
            <div className={styles.phone}>
              <PhoneBlock />
              <ScheduleCallCenter />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>

          <div className={styles.map}>
            <Map />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
