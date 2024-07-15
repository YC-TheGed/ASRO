"use client";

import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OrderBump() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/name`);
  };

  return (
    <>
      <div>
        <h1>This Product Is Designed For Order Bump</h1>
        <button onClick={handleClick}>Order Now!</button>
      </div>
      <div id="bottom">
        <footer>
          <p dir="ltr">
            <span>
              Results from our programs, methods, content and advice are not
              typical and your results may vary. Results are not guaranteed, and
              any claims made are for entertainment and educational purposes
              only. Results will vary based on individuals, how much effort is
              put forward, how long a person uses our methods for, and various
              other factors. Our customers results (shared on our sales pages,
              blog posts, emails etc), are based on the average of a sample set
              of course customers. The results may vary from person to person.
            </span>
          </p>
          <p dir="ltr">
            <span>
              Our content material featuring the pen name "Eileen Helion." The
              decision is rooted in our branding strategy. "Eileen Helion" has
              been meticulously crafted to embody the core essence of our
              content, ensuring alignment with our brand's principles and
              messaging. So, please take a moment to immerse yourself in the
              expertise and insights presented under the persona of "Eileen
              Helion." This choice underscores our dedication to delivering an
              exceptional experience tailored to your needs.
            </span>
          </p>
          <p id="ltr">
            <span>
              ClickBank is the retailer of products on this site. CLICKBANK® is
              a registered trademark of Click Sales Inc., a Delaware corporation
              located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709,
              USA and used by permission. ClickBank’s role as retailer does not
              constitute an endorsement, approval or review of these products or
              any claim, statement or opinion used in promotion of these
              products.
            </span>
          </p>
          <div id="ltr" style={{ fontStyle: "italic" }}>
            <div>
              <span>
                For Product Support, please contact the vendor{" "}
                <a href="kindledtorchpublishing@gmail.com">
                  <u>HERE</u>
                </a>
                .
              </span>
            </div>

            <div>
              <span>
                For Order Support, please contact ClickBank{" "}
                <a href="https://www.clkbank.com/#!/">
                  <u>HERE</u>
                </a>
                .
              </span>
            </div>
          </div>
          <p dir="ltr">
            <span>Terms and Conditions | Privacy Policy</span>
          </p>
          <p dir="ltr">
            <span>
              Copyright © Divine Astrology Reading - All Rights Reserved
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}
