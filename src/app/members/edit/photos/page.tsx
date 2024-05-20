import { getAuthUserId } from "@/app/actions/authActions";
import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/memberActions";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";
import MemberPhotoUpload from "./MemberPhotoUpload";
import MembersPhotos from "@/components/MembersPhotos";

const PhotosPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold text-secondary">Photos</div>
        <MemberPhotoUpload />
      </CardHeader>
      <Divider />
      <CardBody>
        <MembersPhotos
          photos={photos}
          editing={true}
          mainImageUrl={member?.image || null}
        />
      </CardBody>
    </>
  );
};
export default PhotosPage;
