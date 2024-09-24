import HomePageHero from "../components/HomePageHero/HomePageHero";
import HomePageSolution from "../components/HomePageSolution/HomePageSolution";
import HomePageService from "../components/HomePageService/HomePageService";
import HomePageWhyUs from "../components/HomePageWhyUs/HomePageWhyUs";
import HomePageNumbers from "../components/HomePageNumbers/HomePageNumbers";
import HomePageCaseStudies from "../components/HomePageCaseStudies/HomePageCaseStudies";
import HomePageClients from "../components/HomePageClients/HomePageClients";
import HomePageAlign from "../components/HomePageAlign/HomePageAlign";

import AboutUsPageHero from "../components/AboutUsPageHero/AboutUsPageHero";
import AboutUsPageShowCase from "../components/AboutUsPageShowCase/AboutUsPageShowCase";
import AboutUsPageAffiliation from "../components/AboutUsPageAffiliation/AboutUsPageAffiliation";
import AboutUsPageOurMessage from "@/components/AboutUsPageOurMessage/AboutUsPageOurMessage";

import OurTeamPageHero from "../components/OurTeamPageHero/OurTeamPageHero";
import OurTeamPageMembers from "../components/OurTeamPageMembers/OurTeamPageMembers";

import BlogDetailPageBanner from "../components/BlogDetailPageBanner/BlogDetailPageBanner";
import BlogDetailPageContent from "../components/BlogDetailPageContent/BlogDetailPageContent";
import BlogDetailPageLatestPosts from "../components/BlogDetailPageLatestPosts/BlogDetailPageLatestPosts";
import BlogDetailPageLeaveReply from "../components/BlogDetailPageLeaveReply/BlogDetailPageLeaveReply";

import BlogsPageHero from "../components/BlogsPageHero/BlogsPageHero";
import BlogsPageBlogs from "../components/BlogsPageBlogs/BlogsPageBlogs";

import CaseStudiesPageHero from "../components/CaseStudiesPageHero/CaseStudiesPageHero";
import CaseStudiesPageCases from "../components/CaseStudiesPageCases/CaseStudiesPageCases";

import CaseStudyDetailPageBanner from "../components/CaseStudyDetailPageBanner/CaseStudyDetailPageBanner";
import CaseStudyDetailPageLatestCases from "../components/CaseStudyDetailPageLatestCases/CaseStudyDetailPageLatestCases";
import CaseStudyDetailPageContent from "../components/CaseStudyDetailPageContent/CaseStudyDetailPageContent";

import ServicePageHero from "../components/ServicePageHero/ServicePageHero";
import ServicePageCategory from "../components/ServicePageCategory/ServicePageCategory";
import ServicePageIndustries from "../components/ServicePageIndustries/ServicePageIndustries";
import ServicePageWhyChooseUs from "../components/ServicePageWhyChooseUs/ServicePageWhyChooseUs";

import IndustryPageHero from "../components/IndustryPageHero/IndustryPageHero";
import IndustryPageIndustries from "../components/IndustryPageIndustries/IndustryPageIndustries";
import IndustryPageOurApproach from "../components/IndustryPageOurApproach/IndustryPageOurApproach";

import ServiceSectorPageHero from "../components/ServiceSectorPageHero/ServiceSectorPageHero";
import ServiceSectorPageApproach from "../components/ServiceSectorPageApproach/ServiceSectorPageApproach";
import ServiceSectorPageServices from "../components/ServiceSectorPageServices/ServiceSectorPageServices";
import ServiceSectorPageWhyChooseUs from "../components/ServiceSectorPageWhyChooseUs/ServiceSectorPageWhyChooseUs";
import ServiceSectorPageProcess from "../components/ServiceSectorPageProcess/ServiceSectorPageProcess";

import IndustrySectorPageHero from "../components/IndustrySectorPageHero/IndustrySectorPageHero";
import IndustrySectorPagePainPoint from "../components/IndustrySectorPagePainPoint/IndustrySectorPagePainPoint";
import IndustrySectorPageOurSolution from "../components/IndustrySectorPageOurSolution/IndustrySectorPageOurSolution";

import TestimonialsPageHero from "@/components/TestimonialsPageHero/TestimonialsPageHero";
import TestimonialsPageSlider from "@/components/TestimonialsPageSlider/TestimonialsPageSlider";

import PrivacyPageHero from "@/components/PrivacyPageHero/PrivacyPageHero";
import PrivacyPageContent from "@/components/PrivacyPageContent/PrivacyPageContent";

import TransformBusiness from "../components/TransformBusiness/TransformBusiness";
import Footer from "../components/Footer/Footer";

export const AboutUsPageComponentMap = {
  'hero': AboutUsPageHero,
  'our-message': AboutUsPageOurMessage,
  'showcase': AboutUsPageShowCase,
  'affiliation': AboutUsPageAffiliation
}

export const CaseStudiesPageComponentMap = {
  'hero': CaseStudiesPageHero,
  "show-all-case-studies":CaseStudiesPageCases
}

export const BlogsPageComponentMap = {
  'hero': BlogsPageHero,
  'show-all-blogs': BlogsPageBlogs
}

export const OurTeamPageComponentMap = {
  'hero': OurTeamPageHero,
  'members': OurTeamPageMembers
}

export const homePageComponentMap = {
  'hero': HomePageHero,
  'solutions':HomePageSolution,
  'services': HomePageService,
  'why-us': HomePageWhyUs,
  'numbers': HomePageNumbers,
  'case-studies': HomePageCaseStudies,
  'clients': HomePageClients,
  'align': HomePageAlign
}

export const servicePageComponentMap = {
  'hero': ServicePageHero,
  'service-category': ServicePageCategory,
  "service-industries": ServicePageIndustries,
  'why-choose-us': ServicePageWhyChooseUs
}

export const industryPageComponentMap = {
  'hero': IndustryPageHero,
  'industries': IndustryPageIndustries,
  'our-approach': IndustryPageOurApproach
}

export const serviceSectorPageComponentMap = {
  'hero': ServiceSectorPageHero,
  'our-approach': ServiceSectorPageApproach,
  'services': ServiceSectorPageServices,
  'why-choose-us': ServiceSectorPageWhyChooseUs,
  'our-process': ServiceSectorPageProcess
}

export const industrySectorPageComponentMap = {
  'hero-section': IndustrySectorPageHero,
  'pain-point': IndustrySectorPagePainPoint,
  'our-solution': IndustrySectorPageOurSolution
}

export const blogDetailPageComponentMap = {
  'banner': BlogDetailPageBanner,
  'blog-content': BlogDetailPageContent,
  'latest-posts': BlogDetailPageLatestPosts,
  'leave-reply': BlogDetailPageLeaveReply
}

export const caseStudyDetailPageComponentMap = {
  'banner': CaseStudyDetailPageBanner,
  'blog-content': CaseStudyDetailPageContent,
  'latest-posts': CaseStudyDetailPageLatestCases,
  'leave-reply': BlogDetailPageLeaveReply
}

export const testimonialsPageComponentMap = {
  'hero': TestimonialsPageHero,
  'testimonials': TestimonialsPageSlider
}

export const privacyPageComponentMap = {
  'hero': PrivacyPageHero,
  'privacy-policy-content': PrivacyPageContent
}

export const globalComponentMap = {
  'transform-business': TransformBusiness,
  'footer': Footer
}


















