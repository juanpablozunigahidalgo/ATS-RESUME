import React, { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ResumeContext } from "../../builder";
import ProfilePhoto from "../../utility/ProfilePhoto";
import {
  getProfilePicturePosition,
  PROFILE_FOCUS_OVERFLOW,
  PROFILE_MAX_ZOOM,
} from "../../utility/resumeJson";

const ProfilePhotoEditor = () => {
  const { resumeData, setResumeData, handleProfilePicture } =
    useContext(ResumeContext);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);
  const dragRef = useRef(null);
  const position = getProfilePicturePosition(resumeData);
  const hasPhoto = Boolean(resumeData.profilePicture);

  useEffect(() => {
    if (!isOpen) {
      dragRef.current = null;
    }
  }, [isOpen]);

  const updatePosition = (next) => {
    setResumeData((current) => ({
      ...current,
      profilePicturePosition: {
        ...getProfilePicturePosition(current),
        ...next,
      },
    }));
  };

  const openFilePicker = (event) => {
    event.preventDefault();
    event.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleThumbnailClick = (event) => {
    event.preventDefault();
    if (!hasPhoto) {
      openFilePicker(event);
      return;
    }
    setIsOpen(true);
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      posX: position.x,
      posY: position.y,
      width: rect.width,
      height: rect.height,
    };
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current) {
      return;
    }
    const dx = event.clientX - dragRef.current.x;
    const dy = event.clientY - dragRef.current.y;
    updatePosition({
      x: dragRef.current.posX - (dx / dragRef.current.width) * 100,
      y: dragRef.current.posY - (dy / dragRef.current.height) * 100,
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div className="flex items-center gap-3 mb-2">
      <button
        type="button"
        onClick={handleThumbnailClick}
        className="shrink-0 rounded-full border-2 border-white shadow focus:outline-none"
        aria-label={hasPhoto ? "Edit profile photo" : "Upload profile photo"}
      >
        {hasPhoto ? (
          <ProfilePhoto
            resumeData={resumeData}
            className="h-24 w-24 pointer-events-none"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-white text-xs px-2 text-center">
            Add photo
          </div>
        )}
      </button>
      <p className="text-white text-sm">
        Click the photo to upload a new image and center your face for the CV.
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => {
          handleProfilePicture(event);
          setIsOpen(true);
        }}
      />

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="exclude-print fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="w-full max-w-md rounded-lg bg-white p-4 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Profile photo
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
              <p className="mb-3 text-sm text-gray-600">
                X and Y pick which part of the original photo sits in the
                center. For a full-body photo, zoom in and move Y toward the
                top until the face is centered.
              </p>
              <div
                className="mx-auto mb-4 h-64 w-64 cursor-grab overflow-hidden rounded-full border border-gray-200 active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                <ProfilePhoto
                  resumeData={resumeData}
                  className="pointer-events-none h-full w-full"
                />
              </div>
              <label className="mb-3 block text-sm text-gray-700">
                Zoom
                <input
                  type="range"
                  min="1"
                  max={PROFILE_MAX_ZOOM}
                  step="0.05"
                  value={position.zoom}
                  onChange={(event) =>
                    updatePosition({ zoom: Number(event.target.value) })
                  }
                  className="w-full accent-blue-700"
                  aria-label="Photo zoom"
                />
              </label>
              <label className="mb-3 block text-sm text-gray-700">
                Horizontal (X) — left to right of the photo
                <input
                  type="range"
                  min={-PROFILE_FOCUS_OVERFLOW}
                  max={100 + PROFILE_FOCUS_OVERFLOW}
                  step="1"
                  value={position.x}
                  onChange={(event) =>
                    updatePosition({ x: Number(event.target.value) })
                  }
                  className="w-full accent-blue-700"
                  aria-label="Photo horizontal position"
                />
              </label>
              <label className="mb-3 block text-sm text-gray-700">
                Vertical (Y) — top to bottom of the photo
                <input
                  type="range"
                  min={-PROFILE_FOCUS_OVERFLOW}
                  max={100 + PROFILE_FOCUS_OVERFLOW}
                  step="1"
                  value={position.y}
                  onChange={(event) =>
                    updatePosition({ y: Number(event.target.value) })
                  }
                  className="w-full accent-blue-700"
                  aria-label="Photo vertical position"
                />
              </label>
              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  className="rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={openFilePicker}
                >
                  Change photo
                </button>
                <button
                  type="button"
                  className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default ProfilePhotoEditor;
