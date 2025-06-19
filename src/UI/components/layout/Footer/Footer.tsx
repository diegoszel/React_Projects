//** Dependencies **//
import { Footer } from "flowbite-react";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import Styles from "./Footer.style";

//** Footer Component **//
const FooterC = () => {
  //** JSX **//
  return (
    <Footer className={Styles.container}>
      <Flex
        justify={FlexTypes.Between}
        items={FlexTypes.Center}
        className={Styles.containerInner}
      >
        <p className={Styles.paragrapgh}>
          © 2025 Diego Szelepski. All rights reserved.
        </p>
        <p className={Styles.paragrapgh}>
          Contact:
          <span className={Styles.link}> diegoh23@gmail.com</span>
        </p>
      </Flex>
    </Footer>
  );
};

export default FooterC;
