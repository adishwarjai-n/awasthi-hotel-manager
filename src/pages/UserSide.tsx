
import { useState } from "react";
import { UserLayout } from "@/components/UserLayout";
import { UserHome } from "@/components/user/UserHome";
import { UserRooms } from "@/components/user/UserRooms";
import { UserBooking } from "@/components/user/UserBooking";
import { UserContact } from "@/components/user/UserContact";

const UserSide = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <UserHome />;
      case "rooms":
        return <UserRooms />;
      case "booking":
        return <UserBooking />;
      case "contact":
        return <UserContact />;
      default:
        return <UserHome />;
    }
  };

  return (
    <UserLayout currentSection={currentSection} setCurrentSection={setCurrentSection}>
      {renderSection()}
    </UserLayout>
  );
};

export default UserSide;
