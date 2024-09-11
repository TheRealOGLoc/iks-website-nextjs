import Link from "next/link";
import Subscribe from "./Subscribe";
import iksLogo from "@/public/logo/infinikey-logo-dark.png"

interface FooterProps {
  componentData: {
    menuDownloads: string;
    buttonText: string;
    companyAbout: string;
    companyContactUs: string;
    companyCareers: string;
    companyDescription: string;
    companyHelpCenter: string;
    companyLabel: string;
    companyName: string;
    companySupport: string;
    emailPlaceHolder: string;
    locationAddressLineOne: string;
    locationAddressLineTwo: string;
    locationLabel: string;
    mailAddress: string;
    mailLabel: string;
    menuBlogs: string;
    menuCaseStudies: string;
    menuFeatures: string;
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
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 py-7 md:space-x-16 px-4">
        {/* Company Info and Newsletter */}
        <div className="w-full md:w-[700px] h-auto">
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
              <Link href="/features" className="hover:text-white transition">
                {componentData.menuFeatures}
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white transition">
                {componentData.menuCaseStudies}
              </Link>
            </li>
            <li>
              <Link href="/downloads" className="hover:text-white transition">
                {componentData.menuDownloads}
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white transition">
                {componentData.menuBlogs}
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex-1 poppins-font">
          <div className="text-lg font-bold text-white">{componentData.companyLabel}</div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition">
                {componentData.companyAbout}
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white transition">
                {componentData.companyContactUs}
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition">
                {componentData.companyCareers}
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-white transition">
                {componentData.companyHelpCenter}
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition">
                {componentData.companySupport}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 poppins-font">
          <div className="text-lg font-bold text-white">{componentData.locationLabel}</div>
          <p>{componentData.locationAddressLineOne}</p>
          <p>{componentData.locationAddressLineTwo}</p>
          <div className="text-lg font-bold text-white mt-2">{componentData.phoneLabel}</div>
          <p>{componentData.phoneNumber}</p>

          <div className="text-lg font-bold text-white mt-2">{componentData.mailLabel}</div>
          <p>{componentData.mailAddress}</p>
        </div>
      </div>
    </footer>
  );
}
