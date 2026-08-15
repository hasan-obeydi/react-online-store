import { useState } from "react";

import { toast } from "sonner";

import contactUsSchema from "../../validators/contact-us";
import validate from "../../validators";
import { contactUsMessage } from "../../services/contactUs.service";

const useContactUs = (form = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(form);
  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const clearInputs = () => {
    setFormData(form);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    if (validate(contactUsSchema, formData)) {
      setIsLoading(true);
      const response = contactUsMessage(formData);
      await toast.promise(response, {
        loading: () => {
          return "در حال ارسال پیام...";
        },
        success: () => {
          clearInputs();
          setIsLoading(false);
          return "پیام شما با موفقیت ارسال شد.";
        },
        error: (error) => {
          setIsLoading(false);
          if (error.response?.status === 400) {
            return "لطفا مقادیر را به درستی وارد کنید.";
          } else {
            return "پیام شما ارسال نشد.";
          }
        },
      });
    }
  };
  return { formData, isLoading, changeHandler, submitHandler, clearInputs };
};

export default useContactUs;
