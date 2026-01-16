import LayoutMain from '@/app/components/layout/main'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy and Data Protection | Fotober US',
  description:
    'Discover how Fotober US collects, uses, and protects your personal data. Our Privacy Policy ensures your information stays secure while using our services.',
}

function PrivacyPolicyPage() {
  return (
    <LayoutMain classHeader="bg-[#043263]">
      <div className="site-content relative pt-[8rem] ">
        <div className="container-custom m-auto px-4 mb-8 !font-montserrat">
          <h1 className="w-full mb-8 text-wrap text-center uppercase  text-[#043263] font-extrabold !text-[28px] md:text-[28px] leading-[28px]">
            Privacy policy
          </h1>
          <div className="mt-10  wp-bp-content-width text-justify   text-base ">
            <p>
              This website is owned and operated by us.Fotober.com and will be referred to as “We”,
              “our” and “us” in this Internet Privacy Policy. By using this site, you agree to the
              Internet Privacy Policy of this web site (“the web site”), which is set out on this
              web site page. The Internet Privacy Policy relates to the collection and use of
              personal information you may supply to us through your conduct on the web site.
            </p>
            <p>
              We reserve the right, at our discretion, to modify or remove portions of this Internet
              Privacy Policy at any time. This Internet Privacy Policy is in addition to any other
              terms and conditions applicable to the web site. We do not make any representations
              about third party web sites that may be linked to the web site.
            </p>
            <p>
              We recognize the importance of protecting the privacy of information collected about
              visitors to our web site, in particular information that is capable of identifying an
              individual (“personal information”). This Internet Privacy Policy governs the manner
              in which your personal information, obtained through the web site, will be dealt with.
              This Internet Privacy Policy should be reviewed periodically so that you are updated
              on any changes.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">1. PERSONAL INFORMATION</h2>
            <p>
              Personally identifying information is any information that can be used to identify and
              contact you, including your e-mail address, full name, or telephone number (what We
              call your “Personal Information”).
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">2. SECURITY OF PERSONAL INFORMATION</h2>
            <p>
              We take reasonable, industry standard steps to safeguard the security and
              confidentiality of any information you provide to us, including your Personal
              Information. However, you agree that no matter what measures we take, it is
              technically impossible for us to guarantee the security of any information you
              disclose online. You accept the inherent security implications of providing
              information over the internet and will not hold Us responsible for any breach of
              security or disclosure of information unless we have been negligent. Any password and
              user name allocated to you by us must be kept secret and must not be disclosed to
              anyone, unless we have given you our prior written permission.
            </p>
            <p>
              We will always maintain control over the confidentiality of your information. If you
              have consented or have provided us with your email address, we may periodically send
              you details of products and services which we offer.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">
              3. DISCLOSURE OF PERSONAL INFORMATION
            </h2>
            <p>
              Apart from where you have consented or disclosure is necessary to achieve the purpose
              for which it was submitted, personal information may be disclosed in special
              situations where we have reason to believe that doing so is necessary to identify,
              contact or bring legal action against anyone damaging, injuring, or interfering
              (intentionally or unintentionally) with our rights or property, users, or anyone else
              who could be harmed by such activities. Also, we may disclose personal information
              when we believe in good faith that the law requires disclosure.
            </p>
            <p>
              We may engage third parties to provide you with goods or services on our behalf. In
              that circumstance, we may disclose your personal information to those third parties in
              order to meet your request for goods or services.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">4. USE OF PERSONAL INFORMATION</h2>
            <p>
              When you access the Site, our server automatically collects certain information that
              is not personally identifiable, such as your IP address, pages viewed, and length of
              time spent on the Site. We collect and use this information, in the aggregate only, to
              diagnose problems with our server, to improve our site, and to provide content of
              interest to you. We may also give affiliates and partners access to aggregate data
              about our users and their use of the Site during user sessions. The information we
              share will not include Personal Information.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">USE OF COOKIES</h2>
            <p>
              In order to provide you with thorough and personalized service, We may use “cookies”
              to keep and occasionally track information about you. A cookie is a small piece of
              data that is sent to your browser from a web server and stored on your computer’s hard
              drive. We sometimes use cookies to track information for our users’ convenience and to
              understand our customers better. The cookies that are gathered by us are only used by
              us. At no time do we share information from cookies with third parties.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">5. LINKS TO OTHER SITES</h2>
            <p>
              Please note that you could be directed to another site while using the Site. When you
              link to another site, You should review their privacy policy, as it may be different
              from our Privacy Policy. Such sites may send their own cookies to users and otherwise
              collect data or solicit personal information. We are not responsible, and shall not be
              liable, for the privacy practices of linked sites or any use such sites may make of
              any information collected from you. This Privacy Policy applies solely to information
              collected by the Site.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">6. USE OF IMAGES SENT TO US</h2>
            <p>
              The Site provides services to remove backgrounds of images sent to us by customers. We
              will not use images sent for private or commercial use without your prior consent.
              When processed, the images will be available at a public internet location, the URL of
              which will not be published. As this location is public (and therefore potentially
              available to any internet-connected device), We urge you to use discretion in sending
              us images that may be sensitive to you or to third parties. Under no circumstances
              shall we be liable for unauthorized transmission of images that do not belong to you.
            </p>
            <h2 className="font-bold !text-xl !md:text-xl">7. CHANGE THE INFORMATION</h2>
            <p>
              If you would like to change the registration information we hold about you from our
              registration database, you may do so by sending an email message to:&nbsp;
              <a href="mailto:Luongquan.ftbus@gmail.com">Luongquan.ftbus@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}

export default PrivacyPolicyPage
