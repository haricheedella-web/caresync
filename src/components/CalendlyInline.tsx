import { InlineWidget } from 'react-calendly';

interface CalendlyInlineProps {
  url?: string;
  height?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

function CalendlyInline({ 
  url = "https://calendly.com/hari-p-cheedella/new-meeting",
  height = "700px",
  prefill = {}
}: CalendlyInlineProps) {
  return (
    <div className="w-full">
      <InlineWidget
        url={url}
        styles={{
          height: height,
          width: '100%'
        }}
        prefill={prefill}
      />
    </div>
  );
}

export default CalendlyInline;
