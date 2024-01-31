import useUserData from "Hooks/useUserData";
import CreateForm from "../components/createForm";

const profileModel = {
  name: "Profile",
  endpoint: "user/update",
  method: "post",
  button: "Update",
};

const ProfileForm = ({ children }) => {
  const userData = useUserData();
  const { profile_image, email, phone } = userData;
  profileModel.fields = [
    // {
    //   name: "profile_image",
    //   type: "file",
    //   label: "Profile Image",
    //   placeholder: "Upload your profile image",
    //   required: false,
    //   value: profile_image,
    // },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: false,
      value: email,
    },
    {
      name: "phone",
      type: "text",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      required: false,
      value: phone,
    },
  ];
  return CreateForm(profileModel, children);
};

export default ProfileForm;
