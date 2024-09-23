import Link from "next/link";
import Subscribe from "./Subscribe";

interface FooterProps {
  componentData: {
    menuDownloads: string;
    buttonText: string;

    companyAboutUs: string;
    companyOurTeam: string;
    companyTestimonials: string;
    companyPrivacyPolicy: string;
    companyDescription: string;
    companyLabel: string;
    companyName: string;

    emailPlaceHolder: string;
    locationAddressLineOne: string;
    locationAddressLineTwo: string;
    locationLabel: string;
    mailAddress: string;
    mailLabel: string;

    menuBlogs: string;
    menuCaseStudies: string;
    menuServices: string;
    menuIndustries: string;
    menuHome: string;
    menuLabel: string;

    phoneLabel: string;
    phoneNumber: string;
    __component: string;
  };
}

export default function Footer({ componentData }: FooterProps) {
  return (
    <footer className="bg-zinc-600 text-gray-200 md:py-12 min-h-[900px] md:min-h-0">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 py-7 md:space-x-16 px-4">
        {/* Company Info and Newsletter */}
        <div className="w-full md:w-[400px] h-auto">
          <div className="text-2xl font-bold text-white">{componentData.companyName}</div>
          <p className="text-base font-light my-7 max-w-full md:max-w-[350px]">
            {componentData.companyDescription}
          </p>
          <Subscribe componentData={componentData} />
        </div>

        {/* Menu Links */}
        <div className="hidden md:block flex-1 poppins-font">
          <div className="text-lg font-bold text-white">{componentData.menuLabel}</div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                {componentData.menuHome}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                {componentData.menuServices}
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-white transition">
                {componentData.menuIndustries}
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white transition">
                {componentData.menuBlogs}
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white transition">
                {componentData.menuCaseStudies}
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex-1 poppins-font">
          <div className="text-lg font-bold text-white">{componentData.companyLabel}</div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about-us" className="hover:text-white transition">
                {componentData.companyAboutUs}
              </Link>
            </li>
            <li>
              <Link href="/our-team" className="hover:text-white transition">
                {componentData.companyOurTeam}
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-white transition">
                {componentData.companyTestimonials}
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                {componentData.companyPrivacyPolicy}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 poppins-font">
          <div className="text-lg font-bold text-white">{componentData.locationLabel}</div>
          <Link href={"https://goo.gl/maps/XfcxXc8ttaiMrEcm7"}>
            <p>{componentData.locationAddressLineOne}</p>
            <p>{componentData.locationAddressLineTwo}</p>
          </Link>
          <div className="text-lg font-bold text-white mt-2">{componentData.phoneLabel}</div>
          <p>{componentData.phoneNumber}</p>

          <div className="text-lg font-bold text-white mt-2">{componentData.mailLabel}</div>
          <p>{componentData.mailAddress}</p>
        </div>
      </div>
    </footer>
  );
}
