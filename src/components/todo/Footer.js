import React from 'react';
import {FooterRadio} from '../router';

export const Footer = () => {
  return (
    <fieldset className="filters">
      <legend className="filters__title">Show:</legend>
      <FooterRadio to='/'>All, </FooterRadio>
      <FooterRadio to='/active'>Active, </FooterRadio>
      <FooterRadio to='/complete'>Completed</FooterRadio>
    </fieldset>
  )
}
