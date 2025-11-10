import { useState } from "react";

interface SubscribeState {
  email: string;
  isSubmitting: boolean;
  submitStatus: {
    type: "success" | "error" | null;
    message: string;
  };
}

export const useSubscribe = () => {
  const [state, setState] = useState<SubscribeState>({
    email: "",
    isSubmitting: false,
    submitStatus: { type: null, message: "" },
  });

  const setEmail = (email: string) => {
    setState((prev) => ({ ...prev, email }));
  };

  const setSubmitStatus = (status: {
    type: "success" | "error" | null;
    message: string;
  }) => {
    setState((prev) => ({ ...prev, submitStatus: status }));
  };

  const handleSubscribe = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!state.email) return;

    setState((prev) => ({
      ...prev,
      isSubmitting: true,
      submitStatus: { type: null, message: "" },
    }));

    try {
      // Mailchimp integration - replace with your actual values
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setState((prev) => ({
          ...prev,
          submitStatus: {
            type: "success",
            message: "Successfully subscribed to our newsletter!",
          },
          email: "", // Clear email on success
          isSubmitting: false,
        }));
      } else {
        console.log(data.error || "Failed to subscribe");
        setState((prev) => ({
          ...prev,
          submitStatus: {
            type: "error",
            message: data.error || "Failed to subscribe",
          },
          isSubmitting: false,
        }));
      }
    } catch (error) {
      console.log("Error subscribing:", error);
      setState((prev) => ({
        ...prev,
        submitStatus: {
          type: "error",
          message: "Sorry, there was an error. Please try again.",
        },
        isSubmitting: false,
      }));
    }
  };

  const resetForm = () => {
    setState({
      email: "",
      isSubmitting: false,
      submitStatus: { type: null, message: "" },
    });
  };

  return {
    email: state.email,
    isSubmitting: state.isSubmitting,
    submitStatus: state.submitStatus,
    setEmail,
    handleSubscribe,
    resetForm,
  };
};
