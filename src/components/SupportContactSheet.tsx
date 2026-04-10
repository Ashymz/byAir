import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SupportSheetContextValue = {
  openSupport: () => void;
};

const SupportSheetContext = createContext<SupportSheetContextValue | null>(null);

export function useSupportSheet() {
  const ctx = useContext(SupportSheetContext);
  if (!ctx) {
    throw new Error("useSupportSheet must be used within SupportSheetProvider");
  }
  return ctx;
}

function SupportContactSheetPanel({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className={cn(
          "flex max-h-[90vh] flex-col gap-0 overflow-y-auto rounded-t-3xl border-0 bg-white p-0 pb-8 pt-2",
          "sm:bottom-8 sm:max-h-[min(90vh,640px)] sm:max-w-md sm:rounded-3xl sm:border sm:border-border/30 sm:shadow-xl",
          "[&>button]:text-foreground",
        )}
      >
        <div className="flex flex-col items-center px-6 pt-4 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#396FFF] p-3 shadow-sm">
            <img src="/favicon.png" alt="" className="h-full w-full object-contain" />
          </div>
          <SheetTitle className="text-xl font-semibold text-foreground">Contact Us</SheetTitle>
          <SheetDescription className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
            Can&apos;t find an answer to your questions?
            <br />
            Ask us, be sure we will respond quickly.
          </SheetDescription>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 px-6">
          <Input type="email" name="email" placeholder="Email" autoComplete="email" className="rounded-lg border-border/60 bg-white" />
          <Textarea name="message" placeholder="Message" rows={5} className="min-h-[120px] resize-y rounded-lg border-border/60 bg-white" />
          <Button
            type="submit"
            className="h-11 w-full rounded-lg border-0 bg-[#2B2B2B] text-white hover:bg-[#2B2B2B]/90"
          >
            Send Message
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export function SupportSheetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openSupport = useCallback(() => setOpen(true), []);

  return (
    <SupportSheetContext.Provider value={{ openSupport }}>
      {children}
      <SupportContactSheetPanel open={open} onOpenChange={setOpen} />
    </SupportSheetContext.Provider>
  );
}
