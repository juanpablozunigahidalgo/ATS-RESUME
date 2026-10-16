import { useEffect, useRef } from "react";
import { getProfilePicturePosition, resolveAssetUrl } from "./resumeJson";
import { drawProfileCrop, PROFILE_CANVAS_SIZE } from "./cropProfilePhoto";

const ProfilePhoto = ({ resumeData, className = "" }) => {
  const src = resolveAssetUrl(resumeData.profilePicture);
  const position = getProfilePicturePosition(resumeData);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const paint = () => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image || !image.naturalWidth) {
      return;
    }
    canvas.width = PROFILE_CANVAS_SIZE;
    canvas.height = PROFILE_CANVAS_SIZE;
    drawProfileCrop(
      canvas.getContext("2d"),
      image,
      position,
      PROFILE_CANVAS_SIZE
    );
  };

  useEffect(() => {
    if (!src) {
      imageRef.current = null;
      return undefined;
    }

    const image = new Image();
    image.onload = () => {
      imageRef.current = image;
      paint();
    };
    image.src = src;

    return () => {
      image.onload = null;
    };
  }, [src]);

  useEffect(() => {
    paint();
  }, [position.x, position.y, position.zoom, src]);

  useEffect(() => {
    window.addEventListener("beforeprint", paint);
    return () => window.removeEventListener("beforeprint", paint);
  }, [position.x, position.y, position.zoom, src]);

  if (!src) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="profile-photo-img block h-full w-full"
        width={PROFILE_CANVAS_SIZE}
        height={PROFILE_CANVAS_SIZE}
      />
    </div>
  );
};

export default ProfilePhoto;
