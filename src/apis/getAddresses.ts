import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = "oRaR_ou4OUifZ0spqruhtg36599";
let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function searchPostcode(postcode: string | null) {
  const res = await fetch(
    `https://api.getAddress.io/find/${postcode}?api-key=${API_KEY}&expand=true`,
    {
      method: "GET",
      headers: headers,
    }
  );
  const json = await res.json();
  if (json.Message) {
    toast("Please enter a valid Postcode");
    throw new Error(json.Message);
  }
  return json;
}

export async function getAddressByTerm(postcode: string | null, term: string) {
  const res = await fetch(
    `https://api.getAddress.io/find/${postcode}/${term}?api-key=${API_KEY}&expand=true`,
    {
      method: "GET",
      headers: headers,
    }
  );
  const json = await res.json();
  if (json.Message) {
    toast(json.Message);
    throw new Error(json.Message);
  }

  return json;
}
