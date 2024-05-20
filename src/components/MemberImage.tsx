"use client";

import { Photo } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import { Image } from "@nextui-org/react";

type Props = {
  photo: Photo | null;
};

const MemberImage = ({ photo }: Props) => {
  return (
    <div>
      {photo?.publicId ? (
        <CldImage
          alt="Image of member"
          src={photo.publicId}
          width={300}
          height={300}
          crop="fill"
          gravity="faces"
          className="rounded-2xl"
          priority
        />
      ) : (
        <Image
          width={300}
          height={300}
          src={photo?.url || "/images/user.png"}
          alt="Image of member"
        />
      )}
    </div>
  );
};
type PRops = {};

export default MemberImage;
