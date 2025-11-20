"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PhotoContent = () => {
  const urlParameters = useSearchParams();
  const router = useRouter();
  const imageURL = urlParameters.get("src");

  if (!imageURL) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <Button
        variant="ghost"
        className="
          absolute top-4 left-4 sm:top-5 sm:left-10
          flex justify-center
          hover:cursor-pointer
          border-1 border-gray-800
          bg-black/50 text-white
        "
        onClick={() => router.back()}
      >
        <ArrowLeft className="size-5" />
      </Button>

      <CldImage
        src={imageURL}
        alt="Full"
        width={3600}
        height={3600}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

const PhotoPage = () => {
  return (
    <Suspense fallback={null}>
      <PhotoContent />
    </Suspense>
  );
};

export default PhotoPage;