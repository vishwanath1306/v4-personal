import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Publication = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">Some thing I've published</h2>

      <h2 className="title">Publication</h2>

      <ul>
        <li>
          {/* Align this to the left-ish but overall should be central. Maybe increase font size a bit.  */}
          A biologically plausible network model for pattern storage and recall inspired by Dentate
          Gyrus V. Vidya Janarthanam, <b>Vishwanath Seshagiri</b>, and A.P. Shanthi [
          <a href="../../papers/sample.pdf">PDF</a>] [
          <a href="https://link.springer.com/article/10.1007/s00521-019-04670-3">LINK</a>] [
          <a href="https://gitlab.com/thebrahminator/hippo-dg">CODE</a>]
        </li>
        <li>
          Identifying Mismatches Between Microservice Testbeds and Industrial Perception of
          Microservices. <b>Vishwanath Seshagiri</b>, Darby Huye, Lan Liu, Avani Wildani, Raja
          Sambasivan [<a href="../../papers/sample.pdf">PDF</a>] [
          <a href="https://escholarship.org/uc/item/5v3489k8">LINK</a>]
        </li>
      </ul>
      <p></p>
    </StyledContactSection>
  );
};

export default Publication;
