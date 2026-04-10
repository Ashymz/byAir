import { useSupportSheet } from "@/components/SupportContactSheet";
import logoDark from "@/assets/logodark.png";
import facebookIcon from "@/assets/facebook.png";
import xIcon from "@/assets/x.png";
import instaIcon from "@/assets/insta.png";
import linkedinIcon from "@/assets/linkedin.png";

const Footer = () => {
  const { openSupport } = useSupportSheet();
  return (
    <footer className="bg-black text-white">
      <div className="container py-14 md:py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center justify-center">
            <img src={logoDark} alt="ByAir" className="h-10 w-auto object-contain md:h-12" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-8 text-sm text-white/95">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <span className="text-white/40 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Careers
            </a>
            <span className="text-white/40 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Legal
            </a>
            <span className="text-white/40 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <span className="text-white/40 select-none">|</span>
            <button
              type="button"
              onClick={openSupport}
              className="bg-transparent border-0 p-0 font-inherit text-inherit cursor-pointer hover:text-white transition-colors"
            >
              Support
            </button>
          </nav>

          <p className="max-w-xl text-sm text-white/70 leading-relaxed">
            Got questions or inquiries? Contact us at +234 906 6058 135
          </p>

          <div className="flex items-center justify-center gap-6">
            <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="Facebook">
              <img src={facebookIcon} alt="" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="X (Twitter)">
              <img src={xIcon} alt="" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="Instagram">
              <img src={instaIcon} alt="" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#396FFF] py-3.5 text-center text-sm text-white">
        © 2026 OVU Technologies. All rights reserved.
      </div>

      <div className="bg-black py-5 text-center text-xs text-white/60">
        Designed by{" "}
        <a href="#" className="text-[#396FFF] hover:underline">
          Alivation Tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
