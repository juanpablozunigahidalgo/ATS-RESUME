import { getProfilePicturePosition } from "./resumeJson";

export const PROFILE_CANVAS_SIZE = 768;

export const sourceRect = (width, height, x, y, zoom) => {
  const crop = Math.min(width, height) / Math.max(zoom, 1);
  const maxX = Math.max(0, width - crop);
  const maxY = Math.max(0, height - crop);
  return {
    sx: Math.min(maxX, Math.max(0, (x / 100) * maxX)),
    sy: Math.min(maxY, Math.max(0, (y / 100) * maxY)),
    crop,
  };
};

export const drawProfileCrop = (context, image, position, destSize) => {
  const { x, y, zoom } = getProfilePicturePosition({
    profilePicturePosition: position,
  });
  const { sx, sy, crop } = sourceRect(
    image.naturalWidth,
    image.naturalHeight,
    x,
    y,
    zoom
  );
  context.clearRect(0, 0, destSize, destSize);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, sx, sy, crop, crop, 0, 0, destSize, destSize);
};
