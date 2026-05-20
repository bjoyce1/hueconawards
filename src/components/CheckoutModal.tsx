import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Loader2, ExternalLink } from "lucide-react";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
  title: string;
}

const CheckoutModal = ({ open, onOpenChange, url, title }: CheckoutModalProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (open) setLoaded(false);
  }, [open, url]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-[92vh] p-0 bg-charcoal border-gold/30 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gold/20 bg-background/60">
          <span className="text-sm font-semibold tracking-wider uppercase text-gold">
            {title}
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1 mr-8"
          >
            Open in new tab <ExternalLink size={12} />
          </a>
        </div>
        <div className="relative flex-1 bg-white">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
              <Loader2 className="animate-spin text-gold" size={40} />
            </div>
          )}
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0"
            allow="payment *; clipboard-write"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
