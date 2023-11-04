import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import Chicago from '../Chicago/Chicago';

export default function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
}
