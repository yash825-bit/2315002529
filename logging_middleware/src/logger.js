import axios from "axios";

const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

export async function log(stack, level, package_name, message) {
  const logData = {
    stack,
    level,
    package: package_name,
    message,
  };

  try {
    const response = await axios.post(LOG_API_URL, logData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
