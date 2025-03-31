import "./changePassword.css";
import React, { useContext, useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { auth } from "../../../services/firebase/firebaseConfig";
import { reauthenticateWithCredential, updatePassword, EmailAuthProvider } from "firebase/auth";
import { MdClose } from "react-icons/md";
import { Context } from "../../../context/ContextProvider";

const ChangePassword = () => {
  const [formState, setFormState] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    error: { currentPassword: "", newPassword: "", confirmPassword: "" },
  });
  
  const { changePassword, setChangePassword } = useContext(Context);
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      error: { ...prevState.error, [name]: "" },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError("");
  
    const { currentPassword, newPassword, confirmPassword } = formState;
    let newErrors = { currentPassword: "", newPassword: "", confirmPassword: "" };
  
    if (!newPassword) newErrors.newPassword = "New password is required!";
    if (newPassword.length < 6) newErrors.newPassword = "New password must be at least 6 characters!";
    if (newPassword !== confirmPassword) newErrors.confirmPassword = "Passwords do not match!";
  
    if (Object.values(newErrors).some((error) => error)) {
      setFormState((prevState) => ({ ...prevState, error: newErrors }));
      return;
    }
  
    setLoading(true);
  
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No authenticated user!");
  
      if (user.providerData.some((provider) => provider.providerId === "google.com")) {
        setGlobalError(
          "You signed in with Google. Please change your password from your Google Account settings."
        );
        setLoading(false);
        return;
      }
  
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
  
      await updatePassword(user, newPassword);
      
      alert("Password updated successfully!");
      setChangePassword(false);
    } catch (error) {
      setGlobalError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="fixed top-0 z-40 satoshi w-full min-h-screen bg-[#25284052] flex items-center justify-center p-5 pt-2">
      <div className="bg-[#EDF3FE] relative rounded-[32px] shadow-lg p-8 px-[70px] max-md:px-[30px] max-md:py-5 w-[575px]">
        <h2 className="text-[24px] font-semibold text-center mt-4">
          Change Password
        </h2>
        <p className="text-[#666687] text-center text-[15px]">
          Create a new password to keep your account secure. <br /> Make sure
          it's strong and easy to remember.
        </p>
        <MdClose
          onClick={() => setChangePassword(false)}
          className="absolute top-6 right-6 cursor-pointer"
        />
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Current Password"
              name="currentPassword"
              value={formState.currentPassword}
              onChange={handleChange}
            />
            {formState.error.currentPassword && <p className="text-red-500 text-sm">{formState.error.currentPassword}</p>}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={formState.newPassword}
              onChange={handleChange}
            />
            {formState.error.newPassword && <p className="text-red-500 text-sm">{formState.error.newPassword}</p>}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
            />
            {formState.error.confirmPassword && <p className="text-red-500 text-sm">{formState.error.confirmPassword}</p>}
          </div>

          {globalError && <p className="text-red-500 text-center">{globalError}</p>}

          <Button
            type="submit"
            className="w-full button-lg mt-5 active:text-[#6681F4] text-sm py-[15px] rounded-full text-white"
            disabled={loading}
          >
            {loading ? "Updating..." : "Save Changes"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
