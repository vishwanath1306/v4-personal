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
    font-size: var(--fz-heading);
    margin-bottom: 48px;
  }

  .list {
    list-style-type: decimal-leading-zero;
    li {
      text-align: justify;
      margin-bottom: 12px;
      font-size: var(--fz-xl);

      .highlight {
        font-weight: bold;
        color: var(--yellow);
      }

      a {
        font-weight: 400;
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        color: var(--dark-slate);
        &:hover {
          color: var(--slate);
        }
      }
    }
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
    <StyledContactSection id="publication" ref={revealContainer}>
      {/* <h2 className="numbered-heading overline">Some thing I've published</h2> */}

      <h2 className="numbered-heading title">Publication</h2>

      <ol className="list">
        <li>
          <span className="highlight">
            Chatting with Logs: An exploratory study on Finetuning LLMs for LogQL
          </span>{' '}
          <b>Vishwanath Seshagiri</b>, Siddharth Balyan, Vaastav Anand, Kaustubh Dhole, Ishan
          Sharma, Avani Wildani, José Cambronero, Andreas Züfle{' '}
          <a href="https://arxiv.org/pdf/2412.03612">[PDF]</a>
          <a href="https://arxiv.org/abs/2412.03612">[LINK]</a>
          <a href="https://github.com/nl2logql/LogQLLM">[CODE]</a>
          (Under Review)
        </li>

        <li>
          <span className="highlight">
            Rethinking the Networking Stack for Serverless Environments: A Sidecar Approach
          </span>{' '}
          <b>Vishwanath Seshagiri</b>, Abhinav Gupta, Vahab Jabrayilov, Avani Wildani, Kostis Kaffes{' '}
          <a href="/socc_final.pdf">[PDF]</a>
          <a href="https://dl.acm.org/doi/10.1145/3698038.3698561">[LINK]</a>
        </li>

        <li>
          <span className="highlight">
            Identifying Mismatches Between Microservice Testbeds and Industrial Perception of
            Microservices.
          </span>{' '}
          <b>Vishwanath Seshagiri</b>, Darby Huye, Lan Liu, Avani Wildani, Raja Sambasivan{' '}
          <a href="/jsysmicro.pdf">[PDF]</a>
          <a href="https://escholarship.org/uc/item/5v3489k8">[LINK]</a>
        </li>

        <li>
          <span className="highlight">
            A biologically plausible network model for pattern storage
          </span>{' '}
          and recall inspired by Dentate Gyrus V. Vidya Janarthanam, <b>Vishwanath Seshagiri</b>,
          and A.P. Shanthi&nbsp;
          <a href="/hippo.pdf">[PDF]</a>
          <a href="https://link.springer.com/article/10.1007/s00521-019-04670-3">[LINK]</a>
          <a href="https://gitlab.com/thebrahminator/hippo-dg">[CODE]</a>
        </li>
      </ol>
    </StyledContactSection>
  );
};

export default Publication;
