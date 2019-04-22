import React from 'react';

import styles from './ScheduleCallCenter.module.css';

const ScheduleCallCenter = () => (
  <div className={styles.callCenter}>
    <div className={styles.title}>Schedule Call Center</div>
    <div className={styles.time}>from 7:00 to 22:00</div>
    <div className={styles.saturday}>
      <span>Saturday:</span> <span>from 8:00 to 21:00</span>
    </div>
    <div className={styles.sunday}>
      <span>Sunday:</span> <span>from 9:00 to 20:00</span>
    </div>
  </div>
);

export default ScheduleCallCenter;
