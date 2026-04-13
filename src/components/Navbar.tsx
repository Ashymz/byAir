import { Button } from "@/components/ui/button";
import { useSupportSheet } from "@/components/SupportContactSheet";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { openSupport } = useSupportSheet();
  return (
    <nav className="z-50 py-1.5 md:sticky md:top-0 md:py-2">
      <div className="container md:bg-white/15 md:backdrop-blur-md md:border md:border-white/20 md:rounded-xl md:shadow-sm">
      <div className="flex items-center justify-center md:justify-between h-16 md:h-[72px]">
        <div className="flex items-center shrink-0 gap-2">
          <img src={logo} alt="ByAir logo" className="block h-10 md:h-12 w-auto max-w-none object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-16">
          <a href="#values" className="text-sm font-medium font-nav text-muted-foreground hover:text-foreground transition-colors">Values</a>
          <a href="#how-it-works" className="text-sm font-medium font-nav text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#faq" className="text-sm font-medium font-nav text-muted-foreground hover:text-foreground transition-colors">FAQs</a>
        </div>

        <Button
          type="button"
          variant="nav"
          size="sm"
          className="hidden md:inline-flex h-11 px-[22px] rounded-[6px] text-sm font-medium bg-[#396FFF] hover:bg-[#396FFF]/90"
          onClick={openSupport}
        >
          Contact us
        </Button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
