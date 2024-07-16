"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import img1 from "../app/images/train.jpg";
import img2 from "../app/images/overhead-view-dslr-camera-cup-tea-spiral-notepad-pen-camera-lens-extension-rings-wooden-background_23-2148038887.jpg";
import img3 from "../app/images/stack-books-black-wooden-table_93675-135412.jpg";
import img4 from "../app/images/dining table.jpg";
import img5 from "../app/images/customer-service-cute-guy-grey-suit-with-computer-headset-touching-his-throat.jpg";
import img6 from "../app/images/lush-beach-forest-paradise.jpg";



const arrA = [img1, img2, img2, img4, img5, img6]

export default function page() {
  return (
    <>

      <div className="sec1">
        <div className="r1">
          <div className="c1">
            Sol
            <span>ution</span>
          </div>
          <div className="c2">
            <span>Home</span>
            <span>Sevice</span>
            <span>About</span>
            <span>Team</span>
            <span>Pricing</span>
            <span>Portfolio</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="sec2">
        <div className="r2">
          <div className='r2a'>
            <div>SOLUTION COMPANY</div>
            <div>WE DESIGN & CODE WEBSITE</div>
            <div>OUR WORK</div>
          </div>
        </div>
      </div>

      <div className="sec3">
        <div className="r1">

          <div className="box1">
            <div className='txt1'> Fully Responsive</div>
            <div className="txt2">
              Please check <Link href={''} >examples</Link> to change <Link href={''}>icons</Link> easily Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
          </div>
          <div className="box1">
            <div className='txt1'> Customize Easily </div>
            <div className="txt2">
              Solution is a website template from Tooplate. You can download. edit and use this for any purpose
            </div>
          </div>
          <div className="box1">
            <div className='txt1'> SEO Friendly</div>
            <div className="txt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos? Odio laudantium
            </div>
          </div>
        </div>

        <div className="r1 r2">

          <div className="box1">
            <div className='txt1'> HTML5 Website</div>
            <div className="txt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ducimus aliquid consectetur? Nesciunt
            </div>
          </div>
          <div className="box1">
            <div className='txt1'> Quick Support </div>
            <div className="txt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores excepturi aperiam optio necessitatibus
            </div>
          </div>
          <div className="box1">
            <div className='txt1'> Up to Date</div>
            <div className="txt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos? Odio laudantium
            </div>
          </div>
        </div>
      </div>

      <div className="sec4">
        <div className="r1">
          <div className="c1">
            We provide <span>solutions</span>
          </div>
          <div className="c2">
            <span>Creative</span>
            <span>Designers &</span>
            <span>Talented</span>
            <span>Developers</span>
          </div>
          <div className="c3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis perferendis consequatur distinctio. Sint dolorem obcaecati deserunt corrupti maxime, voluptatibus tempora reprehenderit cupiditate culpa atque, quis, soluta officia quam velit ut.
          </div>
        </div>
      </div>

      <div className="sec5">
        <div className="r1">
          <div className="text1">About Solution</div>
          <div className="text2">Smart,Light and Adaptive</div>
          <div className="text3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ullam consectetur recusandae, magni numquam eveniet quis voluptatibus aliquid ipsum molestias distinctio, quidem similique ad quos nostrum in voluptas sequi sapiente.
          </div>
          <div className="text4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident numquam omnis laborum! Temporibus dolorem corporis illo quae quasi esse hic! Ratione quis quasi deserunt soluta ea suscipit numquam quam magnam!
          </div>
        </div>
        <div className="r2">
          <div className="txt1">Web Design <span>100%</span></div>
          <div className="line1"></div>
          <div className="txt2">Multimedia <span>80%</span></div>
          <div className="line2"></div>
          <div className="txt3">Search Engine Marketing <span>90%</span></div>
          <div className="line3"></div>
          <div className="txt4">Custom Branding <span>70%</span></div>
          <div className="line4"></div>

        </div>
      </div>

      <div className="sec6">
        <div className="r1">
          <div className="text1">Meet the team</div>
        </div>
        <div className="r2">
          <div className="box">
            <div className="img"></div>

            <div className="title">Director</div>
            <div className="name">JULIA</div>
            <div className="txt1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, cupiditate tenetur?</div>
            <div className="icons">

              <i className="fa fa-facebook-f" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </div>
          </div>
          <div className="box">
            <div className="img1"></div>

            <div className="title">Developer</div>
            <div className="name">MARY</div>
            <div className="txt1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, cupiditate tenetur?</div>
            <div className="icons">
              <div className="icons">

                <i className="fa fa-facebook-f" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img2"></div>

            <div className="title">Manager</div>
            <div className="name">LINDA</div>
            <div className="txt1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, cupiditate tenetur?</div>
            <div className="icons">
              <div className="icons">

                <i className="fa fa-facebook-f" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec7">
        <div className="r1">
          <div className="text1">Get our newspaper!</div>
          <div className="text2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
          <div className="input">
            <input type="text" name='email' placeholder='Enter your email' /> <span>Sign up</span>
          </div>
        </div>
      </div>

      <div className="sec9">
        <div className="r1">Recent Projects</div>
        <div className="r2">
          <button>ALL</button>
          <button>Graphic</button>
          <button>Photoshop</button>
          <button>Wallpaper</button>
        </div>
        <div className="r3">

          {
            arrA.map((str, index) => {

              return <Image key={index} src={str} width={500} height={500} alt={'img'} />

            })
          }
        </div>
      </div>

      <div className="sec10">
        <div className="r1">
          <div className="c1">
            <div className="txt1">Solution Co .</div>
            <div className="txt2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quasi
            </div>
            <div className="icons">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>

          <div className="c2">
            <div className="text1">Visit Office</div>
            <div className="text2">123 Walking Street. New York</div>
            <div className="text3">010-010-02200</div>
            <div className="text4">hello@company</div>
          </div>

          <div className="c3">
            <div className="input">
              <span className='input1'><input type="text" name="name" placeholder='Name' /></span> <span className='input2'><input type="text" name="email" placeholder='Emaill' /></span>
              <div className='input3'><input type="text" name="message" placeholder='Message' /></div>
              <div className='send'>Send</div>

            </div>
          </div>
        </div>
      </div>

      <div className="sec11">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.316945322438!2d81.30271587521317!3d24.54370717813738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845beb0baddfc1%3A0x303dc49ce15ed46!2sCODER!5e0!3m2!1sen!2sin!4v1720152145281!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0, }} loading="lazy" ></iframe>
      </div>

    </>
  )
}
