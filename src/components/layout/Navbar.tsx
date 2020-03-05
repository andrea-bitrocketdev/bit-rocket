/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export const BitRocketNavbar: React.FC = (): JSX.Element => {
  return (
    <Navbar className="custom-navbar">
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={5} lg={12}>
              <div className="bR-margin-left">
                <svg
                  width="198"
                  height="40"
                  viewBox="0 0 198 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.4155 20.2478C59.2874 20.2478 60.7992 20.8941 61.9512 22.1508C63.1031 23.4075 63.679 25.0592 63.679 27.1418C63.679 29.1526 63.0671 30.8043 61.8792 32.0969C60.6913 33.3896 59.1434 34 57.2355 34C56.3716 34 55.5436 33.8204 54.7877 33.4255C54.0317 33.0305 53.4558 32.5278 53.0598 31.8815V33.6409H50V14H53.0598V22.3303C53.4558 21.684 54.0677 21.1813 54.8597 20.7864C55.6156 20.4273 56.4795 20.2478 57.4155 20.2478ZM56.7675 31.2352C57.8835 31.2352 58.8194 30.8402 59.5393 30.0862C60.2593 29.2962 60.6193 28.3267 60.6193 27.1059C60.6193 25.8851 60.2593 24.8797 59.5393 24.1257C58.8194 23.3357 57.9194 22.9767 56.7675 22.9767C55.6156 22.9767 54.6797 23.3716 53.9597 24.1257C53.2398 24.8797 52.8798 25.8851 52.8798 27.1418C52.8798 28.3986 53.2398 29.368 53.9597 30.158C54.6797 30.8761 55.6156 31.2352 56.7675 31.2352Z"
                    fill="white"
                  />
                  <path
                    d="M69.7632 18.0216C69.3313 18.4524 68.7913 18.6679 68.1433 18.6679C67.4954 18.6679 66.9554 18.4524 66.5235 18.0216C66.0915 17.5907 65.8755 17.0521 65.8755 16.4058C65.8755 15.7594 66.0915 15.2208 66.5235 14.79C66.9554 14.3591 67.4954 14.1436 68.1433 14.1436C68.7913 14.1436 69.3313 14.3591 69.7632 14.79C70.1952 15.2208 70.4112 15.7594 70.4112 16.4058C70.4112 17.0521 70.1952 17.5907 69.7632 18.0216ZM66.5954 33.6409V20.5709H69.6552V33.6409H66.5954Z"
                    fill="white"
                  />
                  <path
                    d="M79.5182 31.0556C80.1302 31.0556 80.6341 31.0197 81.0661 30.9479V33.6409C80.4181 33.7486 79.6622 33.8204 78.7983 33.8204C78.2943 33.8204 77.8623 33.7845 77.4664 33.7127C77.1064 33.6409 76.6384 33.4613 76.1344 33.21C75.6305 32.9227 75.2345 32.456 74.9465 31.8096C74.6585 31.1274 74.5146 30.3016 74.5146 29.2603V23.1921H72.2827V20.6427H74.5146V16.693H77.5743V20.6427H80.5981V23.1921H77.5743V28.578C77.5743 29.6193 77.7183 30.3016 78.0063 30.6247C78.3663 30.8761 78.8343 31.0556 79.5182 31.0556Z"
                    fill="white"
                  />
                  <path
                    d="M98.3809 20.7864C98.3809 22.3303 97.9849 23.6589 97.2289 24.8079C96.473 25.9569 95.4291 26.7469 94.0972 27.1777L98.0929 33.6409H95.1771L91.3973 27.5727H87.2936V33.6409H84.7378V14H91.7933C93.7372 14 95.3211 14.6463 96.545 15.903C97.7689 17.1957 98.3809 18.8115 98.3809 20.7864ZM87.2936 16.298V25.2388H91.6493C92.8732 25.2388 93.8812 24.8079 94.6731 23.982C95.4651 23.1562 95.861 22.079 95.861 20.7864C95.861 19.4937 95.4651 18.4165 94.6731 17.5548C93.8812 16.7289 92.8732 16.298 91.6493 16.298H87.2936Z"
                    fill="white"
                  />
                  <path
                    d="M107.272 33.9641C105.22 33.9641 103.564 33.3178 102.34 32.0251C101.116 30.7325 100.504 29.1167 100.504 27.1777C100.504 25.2388 101.116 23.623 102.34 22.3303C103.564 21.0377 105.184 20.3914 107.272 20.3914C109.324 20.3914 110.944 21.0377 112.168 22.3303C113.391 23.623 114.003 25.2388 114.003 27.1777C114.003 29.1167 113.391 30.7325 112.168 32.0251C110.98 33.3178 109.324 33.9641 107.272 33.9641ZM104.14 30.4811C104.932 31.3429 105.976 31.7738 107.308 31.7738C108.64 31.7738 109.684 31.3429 110.44 30.4811C111.196 29.6194 111.592 28.5063 111.592 27.1777C111.592 25.8492 111.196 24.7361 110.44 23.8743C109.684 23.0126 108.64 22.5817 107.308 22.5817C105.976 22.5817 104.932 23.0126 104.14 23.8743C103.348 24.7361 102.988 25.8492 102.988 27.2136C102.952 28.5063 103.348 29.6194 104.14 30.4811Z"
                    fill="white"
                  />
                  <path
                    d="M123.039 33.9641C121.06 33.9641 119.512 33.3537 118.36 32.0969C117.208 30.8402 116.632 29.2244 116.632 27.1777C116.632 25.1311 117.208 23.5153 118.36 22.2585C119.512 21.0018 121.096 20.3914 123.039 20.3914C124.767 20.3914 126.171 20.8223 127.251 21.684C128.331 22.5458 128.943 23.7307 129.087 25.167H126.639C126.315 23.4435 125.091 22.5458 123.039 22.5458C121.779 22.5458 120.808 22.9408 120.088 23.7666C119.368 24.5925 119.008 25.7056 119.008 27.1418C119.008 28.5781 119.368 29.6912 120.088 30.517C120.808 31.3429 121.779 31.7379 123.039 31.7379C125.091 31.7379 126.279 30.912 126.639 29.2244H129.087C128.943 30.6607 128.331 31.8097 127.251 32.6714C126.207 33.5332 124.803 33.9641 123.039 33.9641Z"
                    fill="white"
                  />
                  <path
                    d="M143.306 20.7145L137.006 26.9623L143.306 33.6409H140.066L134.415 27.5727V33.6409H131.967V14H134.415V26.5673L140.138 20.6786H143.306V20.7145Z"
                    fill="white"
                  />
                  <path
                    d="M156.589 26.4237C156.589 26.7828 156.553 27.2496 156.517 27.8959H146.474C146.51 29.1167 146.87 30.0862 147.589 30.8043C148.309 31.5225 149.317 31.8456 150.541 31.8456C152.269 31.8456 153.421 31.1993 153.961 29.9426H156.409C156.193 31.1275 155.545 32.097 154.429 32.851C153.349 33.605 152.053 33.9641 150.505 33.9641C148.525 33.9641 146.942 33.3537 145.754 32.1329C144.566 30.912 143.99 29.2603 143.99 27.1419C143.99 25.0952 144.566 23.4435 145.718 22.2226C146.87 21.0018 148.417 20.3555 150.361 20.3555C152.197 20.3555 153.673 20.93 154.825 22.0431C156.049 23.1921 156.589 24.6284 156.589 26.4237ZM146.474 25.9928H154.177C154.177 24.8438 153.853 23.9462 153.169 23.2998C152.521 22.6535 151.585 22.3304 150.397 22.3304C149.245 22.3304 148.309 22.6535 147.589 23.3358C146.906 24.018 146.546 24.9156 146.474 25.9928Z"
                    fill="white"
                  />
                  <path
                    d="M165.337 31.5942C166.021 31.5942 166.561 31.5583 166.956 31.4506V33.605C166.381 33.7486 165.661 33.7845 164.797 33.7845C164.401 33.7845 164.077 33.7486 163.789 33.7127C163.501 33.6768 163.141 33.5691 162.781 33.3896C162.385 33.21 162.061 32.9946 161.809 32.6714C161.557 32.3483 161.305 31.9174 161.125 31.3429C160.945 30.7684 160.837 30.0862 160.837 29.2962V22.7253H158.497V20.6786H160.837V16.6212H163.285V20.7145H166.561V22.7612H163.285V28.8294C163.285 29.9784 163.465 30.7325 163.789 31.0556C164.113 31.4147 164.617 31.5942 165.337 31.5942Z"
                    fill="white"
                  />
                  <path
                    d="M170.088 33.7127C169.8 33.7127 169.548 33.605 169.368 33.4255C169.188 33.21 169.08 32.9946 169.08 32.7074C169.08 32.4201 169.188 32.1688 169.368 31.9892C169.548 31.8097 169.8 31.702 170.088 31.702C170.376 31.702 170.628 31.8097 170.808 31.9892C170.988 32.1688 171.096 32.4201 171.096 32.7074C171.096 32.9946 170.988 33.246 170.808 33.4255C170.628 33.6409 170.376 33.7127 170.088 33.7127Z"
                    fill="white"
                  />
                  <path
                    d="M178.979 23.8025H180.203V33.605H178.979V32.456C178.763 32.851 178.475 33.1741 178.043 33.3896C177.611 33.6409 177.179 33.7486 176.675 33.7486C175.667 33.7486 174.875 33.4255 174.335 32.7791C173.759 32.1328 173.471 31.3429 173.471 30.3375C173.471 29.368 173.759 28.5422 174.335 27.8958C174.911 27.2495 175.703 26.9264 176.675 26.9264C177.179 26.9264 177.647 27.0341 178.043 27.2854C178.439 27.5368 178.763 27.824 178.943 28.2549V27.5727V23.8025H178.979ZM176.855 32.7073C177.539 32.7073 178.079 32.4919 178.475 32.0251C178.871 31.5942 179.051 31.0197 179.051 30.4093C179.051 29.763 178.871 29.2244 178.475 28.7576C178.079 28.3267 177.539 28.0754 176.855 28.0754C176.207 28.0754 175.667 28.2908 175.271 28.7217C174.875 29.1526 174.695 29.7271 174.695 30.3734C174.695 31.0556 174.875 31.5942 175.271 32.0251C175.667 32.4919 176.207 32.7073 176.855 32.7073Z"
                    fill="white"
                  />
                  <path
                    d="M189.131 30.0143C189.131 30.1939 189.131 30.4452 189.095 30.7325H184.091C184.091 31.3429 184.271 31.8456 184.667 32.1687C185.027 32.5278 185.531 32.7073 186.143 32.7073C187.007 32.7073 187.583 32.3842 187.871 31.7379H189.095C188.987 32.3483 188.663 32.8151 188.123 33.21C187.583 33.5691 186.935 33.7845 186.179 33.7845C185.171 33.7845 184.379 33.4614 183.803 32.851C183.227 32.2406 182.939 31.4147 182.939 30.3734C182.939 29.3321 183.227 28.5063 183.803 27.8959C184.379 27.2854 185.171 26.9623 186.107 26.9623C187.043 26.9623 187.763 27.2495 188.339 27.7881C188.843 28.3985 189.131 29.1167 189.131 30.0143ZM184.055 29.8348H187.907C187.907 29.2603 187.727 28.8294 187.403 28.5063C187.079 28.1831 186.611 28.0036 186.035 28.0036C185.459 28.0036 184.991 28.1831 184.631 28.5063C184.271 28.8294 184.091 29.2603 184.055 29.8348Z"
                    fill="white"
                  />
                  <path
                    d="M193.306 33.6409L190.462 27.1777H191.758L193.81 32.0251L195.862 27.1777H197.158L194.314 33.6409H193.306Z"
                    fill="white"
                  />
                  <path
                    d="M18.1763 8.76112L9.12012 20.2376L20.8274 19.1769L19.767 30.8867L31.241 21.8286C36.7765 17.4586 40.0002 10.7976 40.0002 3.73355V2.8638C40.0002 1.29402 38.7065 0 37.1158 0H36.2463C29.2049 0 22.5453 3.22443 18.1763 8.76112Z"
                    fill="white"
                  />
                  <path
                    d="M0.360544 26.8561L16.1399 6.87314C12.0466 6.97921 7.99574 8.59142 4.85682 11.731C0.742304 15.8252 -0.763526 21.574 0.360544 26.8561Z"
                    fill="white"
                  />
                  <path
                    d="M33.1282 23.865L13.1494 39.6478C18.4516 40.7509 24.178 39.2659 28.2925 35.1505C31.4103 32.0322 33.0221 27.9592 33.1282 23.865Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Navbar>
  );
};
