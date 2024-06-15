import { getAuthUserId } from "@/app/actions/authActions";
import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/memberActions";
import MemberPhotoUpload from "./MemberPhotoUpload";
import MembersPhotos from "@/components/MembersPhotos";
import CardInnerWrapper from "@/components/CardInnerWrapper";

const PhotosPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <CardInnerWrapper
      header={
        <>
          <div className="text-2xl font-semibold text-secondary">Photos</div>
          <MemberPhotoUpload />
        </>
      }
      body={
        <MembersPhotos
          photos={photos}
          editing={true}
          mainImageUrl={member?.image || null}
        />
      }
    />
  );
};
export default PhotosPage;
