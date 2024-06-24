import { useQuery } from "@tanstack/react-query";

import axios from "./axios.js";
import { getFullSiteUrl } from "./links.js";
import { createFormData } from "./utils.js";

export const signIn = async ({ email, password }) => {
  const formData = createFormData({
    us: email,
    pw: password,
  });

  const res = await axios.post(getFullSiteUrl("/login"), formData);

  if (res.status === 200 && res.data.status === "success") {
    return res.data;
  }

  throw new Error(res.data.message || "Your email or password is incorrect");
};

export const signUp = async (data) => {
  const formData = createFormData({
    ...data,
    name: `${data.firstName} ${data.lastName}`.trim(),
    "re-password": data.confirmPassword,
  });

  const res = await axios.post(getFullSiteUrl("/register"), formData);

  if (res.status === 200 && res.data.status === "success") {
    return res.data;
  }

  throw new Error(res.data.message || "Something went wrong");
};

export const signOut = async () => {
  await axios.post(getFullSiteUrl("/logout"));
};

export const updateProfile = async (data) => {
  const formData = createFormData(data);

  const res = await axios.post(
    getFullSiteUrl("/user/post/updateprofile"),
    formData
  );

  if (res.status === 200 && res.data.status === "success") {
    return res.data;
  }

  throw new Error(res.data.message || "Something went wrong");
};

export const useCurrentUser = (isLoggedIn) =>
  useQuery({
    queryKey: ["currentUser"],
    queryFn: () =>
      axios.post(getFullSiteUrl("/user/index/me")).then((res) => res.data),
    enabled: isLoggedIn,
  });
