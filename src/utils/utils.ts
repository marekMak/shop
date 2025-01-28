import toast from "react-hot-toast";
import { ResponseMessage } from "./types";

export async function handleResponseMessage(
  promise: Promise<ResponseMessage>,
  onSuccess?: () => void
): Promise<void> {
  const response = await promise;

  if (response.success) {
    toast.success(response.message);
    if (onSuccess) onSuccess();
  } else toast.error(response.message);
}

export function formatDate(input: string) {
  const date = new Date(input);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
