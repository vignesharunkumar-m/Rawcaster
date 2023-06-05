import React from "react";
import classes from "../../landing.module.css";
import Headerone from "../../Shared components/Headerone";
import Headertwo from "../../Shared components/Headertwo";
import content1 from "../../Assets/Svg/content1.svg";
import content2 from "../../Assets/Images/content2.jpeg";
import content3 from "../../Assets/Images/content3.jpeg";
import content4 from "../../Assets/Images/content4.jpeg";
import logosmall from "../../Assets/Svg/logo small.svg";
import nuggets from "../../Assets/Images/nuggets.jpeg";
import event from "../../Assets/Images/event-hosting.jpeg";
import live from "../../Assets/Images/live-chat.jpeg";
import raw from "../../Assets/PNG/rawcaster.png";
import william from "../../Assets/PNG/william.png";
import abel from "../../Assets/PNG/abel.png";
import ngoz from "../../Assets/PNG/ngozijones.png";
import ellakiya from "../../Assets/PNG/pro_img.png";
import element from "../../Assets/Svg/bg-elemtns.svg";
import clientson from "../../Assets/PNG/clientson.png";
import sonlogo from "../../Assets/Svg/sonlogo.svg";
import download from "../../Assets/Images/download-sec-img.jpeg";
import roselogo from "../../Assets/Svg/downlaod-apps.svg";
import appstore from "../../Assets/Images/app-store.jpeg";
import playstore from "../../Assets/Images/play-store.jpeg";
import logo from "../../Assets/Svg/logo.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Dasboard() {
  return (
    <div>
      <Headerone />
      <Headertwo />
      <div className={classes.content1}>
        <div className={classes.content1_left}>
          <div>
            <h1>
              The one-stop <span>platform</span> for all your social media needs
            </h1>
          </div>
          <div>
            The first platform that gives you a space to chat, talk, host and
            participate in live events virtually and at the same time allows you
            to share with the whole world, very small pieces or tidbit of
            treasures in your mind.
          </div>
          <button>Get Started for Free</button>
        </div>
        <div>
          <img src={content1} alt="img" />
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.content2_img}>
          <img src={content2} alt="img" />
        </div>
        <div className={classes.content2_right}>
          <div>
            <img src={logosmall} alt="logo" />
          </div>
          <div className={classes.content2_txt}>
            <div>Live Talk Show</div>
            <p className={classes.txt}>
              As in a typical TV or Radio talk show, you can stream a live event
              with the Rawcaster public or your fans with live audience
              reactions on the event. Participants are only on listen mode but
              can be enabled by host to speak or ask a question at any time.
              Rawcaster allows you to host this event in either audio only or
              video.
            </p>
            <p>
              When the occasion calls for it, you can also capture and stream a
              live event with the click of a button.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.content2_right}>
          <div>
            <img src={logosmall} alt="logo" />
          </div>
          <div className={classes.content2_txt}>
            <div>Events</div>
            <p className={classes.txt}>
              Take your scheduled events live to your invited guests or make it
              open to the public whether they are members of Rawcaster or not.
              It is as simple as sharing the event link to anyone you want to
              participate.
            </p>
            <p>
              Rawcaster allows you to configure your meeting to either allow
              anyone to join or restrict it to a select few. Break out rooms,
              schmoozing, online chats, voting are some of the features
              Rawcaster provides with this feature.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className={classes.content2_img}>
          <img src={content3} alt="img" />
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.content2_img}>
          <img src={content4} alt="img" />
        </div>
        <div className={classes.content2_right}>
          <div>
            <img src={logosmall} alt="logo" />
          </div>
          <div className={classes.content2_txt}>
            <div>Post Nuggets</div>
            <p className={classes.txt}>
              Share the precious thoughts and tidbits that are in your mind with
              your fans, special connections, or the public. Add some videos or
              photos to convey your message.
            </p>
            <p>
              Nuggets are probably your best tool to make new fans. As you post
              interesting Nuggets, you create appetite for your readers and they
              would want to follow you along.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className={classes.centertxt}>
        <h1>One platform, endless potential</h1>
        <p>with Rawcaster Influencers, bloggers, writers, photographers can </p>
        <p>collaborate with their fans easily</p>
      </div>
      <div className={classes.examples}>
        <div>
          <img src={nuggets} alt="nuggets" />
          <h5>Nuggets</h5>
          <p>
            These are small pieces or tidbit of thoughts in your mind or an
            image (video or picture) that you want to share with one or more
            connected persons.
          </p>
        </div>
        <div>
          <img src={event} alt="event" />
          <h5>Event Hosting</h5>
          <p>
            From the comfort of your home to when you are on the road; Rawcaster
            allows you to host or attend important events and meetings like you
            were there.
          </p>
        </div>
        <div>
          <img src={live} alt="live" />
          <h5>Live Chatting</h5>
          <p>
            Chat allows you to have an end-to-end encrypted conversation by
            text, video or audio with one or more people at the same time.
          </p>
        </div>
      </div>
      <div className={classes.centerbtn}>
        <button>Get Started</button>
      </div>
      <div className={classes.centertxt}>
        <h1>Rawcaster unique features</h1>
        <p>The first platform that gives you a space to chat, talk, host and</p>
        <p>participate in live events virtually</p>
      </div>
      <div className={classes.raw}>
        <img src={raw} alt="raw" />
      </div>
      <div className={classes.centertxt}>
        <h1>Happy users around the globe</h1>
        <p>The first platform that gives you a space to chat, talk, host and</p>
        <p>participate in live events virtually</p>
      </div>
      <div className={classes.group}>
        <Carousel
          ariaLabel
          infiniteLoop={true}
          showStatus={false}
          emulateTouch={true}
          swipeable={true}
          selectedItem={4}
          showIndicators={false}
          showArrows={false}
          width={1200}
          centerMode={true}
          centerSlidePercentage={44}
        >
          <div className={classes.person}>
            <p>
              Rawcaster is the epitome of what a social media platform should be
              and poised to take the world by storm. By taking the best features
              of existing social media platforms and putting all in one platform
              is a brilliant idea.
            </p>
            <div>
              <img src={william} alt="william" />
              <span>William Sagoe</span>
            </div>
          </div>
          <div className={classes.person}>
            <p>
              This is highly commendable. And should be made to go viral.
              However, I would like to suggest that a video presentation be made
              to show how the app works.
            </p>
            <div>
              <img src={ngoz} alt="ngozi" />
              <span>Ngozi Jones</span>
            </div>
          </div>
          <div className={classes.person}>
            <p>
              Rawcaster is amazing! Because it combines many tools in a single
              platform. Anyone who wants to influence others or communicate
              better with others should have it.
            </p>
            <div>
              <img src={abel} alt="abel" />
              <span>Abel Cansiglio</span>
            </div>
          </div>
          <div className={classes.person}>
            <p>
              Rawcaster is a great application that acts as an all in one
              platform. This will be a big hit with both general and
              professional users to interact. Additionally, events will allow
              users from different locations to come together and celebrate.
            </p>
            <div>
              <img className={classes.ellakiya} src={ellakiya} alt="elakkiya" />
              <span>Elakkiya Manivannan</span>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={classes.founder}>
        <img className={classes.element} src={element} alt="ele" />
        <div className={classes.found_img}>
          <img className={classes.son} src={clientson} alt="son" />
          <div className={classes.txt}>
            <div>
              <img src={sonlogo} alt="logo" />
            </div>
            <p className={classes.detail}>
              "Rawcaster is a platform created to appeal to young and educated
              people whose lifestyle, activities and social profile give them
              influence over many others who look to them as role models.
              Rawcaster is built to offer these influencers every tool they need
              to interact with their fans and for the fans to interact with each
              other"
            </p>
            <p>- David (Co-founder)</p>
          </div>
        </div>
      </div>
      <div className={classes.download}>
        <div>
          <img className={classes.dow_img} src={download} alt="download" />
        </div>
        <div className={classes.dow_option}>
          <img className={classes.roselogo} src={roselogo} alt="logo" />
          <h2>Download Apps</h2>
          <p>
            Please download the Rawcaster app from Google Play store and APP
            store.
          </p>
          <div className={classes.apps}>
            <img src={appstore} alt="appstore" />
            <img src={playstore} alt="playstore" />
          </div>
        </div>
      </div>
      <div className={classes.last}>
        <h1>Are you Ready to try out Rawcaster?</h1>
        <p className={classes.txt1}>
          Start scaling your customer support, and, collaborate better with
        </p>
        <p>your team</p>
        <button>Get Started</button>
      </div>
      <div className={classes.footerone}>
        <img src={logo} alt="logo" />
        <button>Contact Support</button>
      </div>
      <div className={classes.footer}>
        <button>Terms and Conditions</button>
        <button>Privacy Policy</button>
        <button>Support</button>
        <button>Cookies Policy</button>
      </div>
    </div>
  );
}

export default Dasboard;
