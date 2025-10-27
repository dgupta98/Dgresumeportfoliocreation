import { Download } from "lucide-react";
import { Button } from "./ui/button";

interface ResumeDownloadProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function ResumeDownload({ variant = "default", size = "lg", className = "" }: ResumeDownloadProps) {
  const handleDownload = () => {
    // Direct link to Google Drive resume
    const resumeUrl = "https://drive.google.com/file/d/1oZitNXp8Y4LehC7v9RD5XUWI7WsGzEU_/view?usp=sharing";
    window.open(resumeUrl, '_blank');
  };

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      size={size}
      className={className}
    >
      <Download className="h-4 w-4 mr-2" />
      Download CV
    </Button>
  );
}
