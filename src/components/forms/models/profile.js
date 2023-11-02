import useUserData from "Hooks/useUserData";
import CreateForm from "../../../utils/createForm";

const profileModel = {
  name: "Profile",
  endpoint: "auth/login",
  method: "post",
  variant: "standard",
};

const ProfileForm = ({ children }) => {
  const userData = useUserData();
  const { username, email, phone } = userData;
  profileModel.fields = [
    {
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      required: true,
      value: username,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      value: email,
    },
    {
      name: "phone",
      type: "text",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      required: true,
      value: phone,
    },
  ];
  return CreateForm("profile", profileModel, children);
};

export default ProfileForm;
