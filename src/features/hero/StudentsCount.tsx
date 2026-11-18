import AvatarMap from "@/entities/community/AvatarMap";
import { studentAvatars } from "./student-avatars.data";

export default function StudentsCount() {
  return (
    <div className="mt-7 flex items-center gap-3 text-[12px]">
      <AvatarMap path="/images/Hero/" images={studentAvatars} size="28px" />

      <p>
        <strong>Trusted by 24,000+</strong>
        <span className="ml-1 text-muted">learners</span>
      </p>
    </div>
  );
}
