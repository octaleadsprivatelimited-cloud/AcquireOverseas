import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import StudyVisa from './pages/StudyVisa';
import ImmigrationConsultation from './pages/ImmigrationConsultation';
import JobPlacement from './pages/JobPlacement';
import SkillAssessment from './pages/SkillAssessment';
import DocumentAttestation from './pages/DocumentAttestation';
import VisaExtension from './pages/VisaExtension';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import BlogPost from './pages/BlogPost';
import ApplicationSupport from './pages/ApplicationSupport';
import CourseSelection from './pages/CourseSelection';
import UniversitySelection from './pages/UniversitySelection';
import GuideToStudyAbroad from './pages/GuideToStudyAbroad';
import StudyAbroadBenefits from './pages/StudyAbroadBenefits';
import GuideForParents from './pages/GuideForParents';
import CostToStudyAbroad from './pages/CostToStudyAbroad';
import ScholarshipsToStudyAbroad from './pages/ScholarshipsToStudyAbroad';
import StudyingAbroadFAQs from './pages/StudyingAbroadFAQs';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/your-trusted-education-partner" element={<About />} />
            <Route path="/comprehensive-education-solutions" element={<Services />} />
            <Route path="/our-portfolio" element={<Portfolio />} />
            <Route path="/blog-resources" element={<Blog />} />
            <Route path="/success-stories" element={<Testimonials />} />
            <Route path="/build-your-career-with-us" element={<Careers />} />
            <Route path="/lets-start-your-journey" element={<Contact />} />
            <Route path="/frequently-asked-questions" element={<FAQ />} />
            
            <Route path="/study-abroad-programs" element={<StudyVisa />} />
            <Route path="/education-consultation" element={<ImmigrationConsultation />} />
            <Route path="/career-counseling-services" element={<JobPlacement />} />
            <Route path="/academic-profile-assessment" element={<SkillAssessment />} />
            <Route path="/document-preparation-services" element={<DocumentAttestation />} />
            <Route path="/student-visa-extension-services" element={<VisaExtension />} />
            <Route path="/application-support" element={<ApplicationSupport />} />
            <Route path="/course-selection" element={<CourseSelection />} />
            <Route path="/university-selection" element={<UniversitySelection />} />
            
            {/* Study Abroad Pages */}
            <Route path="/guide-to-study-abroad" element={<GuideToStudyAbroad />} />
            <Route path="/study-abroad-benefits" element={<StudyAbroadBenefits />} />
            <Route path="/guide-for-parents" element={<GuideForParents />} />
            <Route path="/cost-to-study-abroad" element={<CostToStudyAbroad />} />
            <Route path="/scholarships-to-study-abroad" element={<ScholarshipsToStudyAbroad />} />
            <Route path="/studying-abroad-faqs" element={<StudyingAbroadFAQs />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/study-visa" element={<StudyVisa />} />
            <Route path="/immigration-consultation" element={<ImmigrationConsultation />} />
            <Route path="/job-placement" element={<JobPlacement />} />
            <Route path="/skill-assessment" element={<SkillAssessment />} />
            <Route path="/document-attestation" element={<DocumentAttestation />} />
            <Route path="/visa-extension" element={<VisaExtension />} />
            
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;