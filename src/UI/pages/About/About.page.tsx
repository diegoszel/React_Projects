//** Dependencies **//
import useWindow from "../../../core/hooks/useWindow";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import Styles from "./About.style";

//** About Page **//
const About = () => {
  const { open } = useWindow("about");

  //** Map Address **//
  const mapAddress =
    "https://www.google.ca/maps/place/Caldeira+do+Cabe%C3%A7o+Gordo/@38.5719693,-28.674628,14.5z/data=!4m9!1m2!2m1!1s1234+BCard+St,+BCard+City,+BCard+Country!3m5!1s0xb380a45141fb72d:0xfa91e2e40472bae8!8m2!3d38.5804155!4d-28.706323!16s%2Fg%2F11cspl2wmb?entry=ttu";

  //** JSX **//
  return (
    <Flex dir={FlexDirs.Column} className={Styles.container}>
      <h1 className={Styles.title}>About Us</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          Welcome to R.E.D. Studios — your go-to platform for creating, sharing, and managing business cards effortlessly. Whether you're a freelancer, small business, or enterprise, R.E.D. offers a smart and streamlined way to handle all your networking needs.
        </p>
      </Flex>
      <h1 className="m-4 overflow-hidden text-center text-3xl">Our Purpose</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          We’re here to make networking easier, smarter, and more professional. R.E.D. empowers users with simple yet powerful tools to create eye-catching business cards, organize contacts, and grow meaningful connections.
        </p>
      </Flex>
      <h1 className="m-4 overflow-hidden text-center text-3xl">
        What We Provide
      </h1>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">🖌️ Design</h3>
        <p>
          Easily craft modern, professional business cards using our user-friendly editor. Choose from sleek templates, customize your layout, and bring your brand to life with just a few clicks.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">🔍 Discover</h3>
        <p>
          Browse a growing network of business cards from users across industries. Get inspired, explore profiles, and connect with potential collaborators and clients.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">🧠 Admin CRM Tools</h3>
        <p>
          Admins can take full control with built-in CRM functionality. Manage users, track business card data, and gain insights through detailed analytics and reports — all from a centralized dashboard.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Get in Touch</h3>
        <p>
          Email:{" "}
          <span id="mailto" onClick={open} className={Styles.link}>
            diegoh23@email.com
          </span>
        </p>
        <p>
          Phone:{" "}
          <span id="tel" onClick={open} className={Styles.link}>
            050-818-8086
          </span>
        </p>
        <p>
          Address:{" "}
          <span id={mapAddress} onClick={open} className={Styles.link}>
            Lachich 3, Ashkelon, Israel
          </span>
        </p>
      </Flex>
      <div className={Styles.mapContainer}>
        <iframe
          className={Styles.map}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="R.E.D. office location on Google Maps"
          src={`
          https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13583.923848209528!2d34.5860601!3d31.661740599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1750324024370!5m2!1sen!2sil
        `}
        />
      </div>
    </Flex>
  );
};

export default About;
