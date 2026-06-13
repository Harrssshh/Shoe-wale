export const INSTAGRAM_HANDLE = "shoes_wale7773";
export const INSTAGRAM_URL = "https://www.instagram.com/shoes_wale7773/";

export const STORE_NAME = "Shoes Wale";
export const STORE_ADDRESS = "Udaipur, Rajasthan, India";
export const STORE_HOURS = "Mon - Sat · 10 AM – 9 PM";
export const STORE_PHONE = "+91 77329 89992";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.1154140507126!2d73.72136810172121!3d24.57325898904081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef0034308e2d%3A0xcde38a3ebbdb8460!2sShoes%20wale!5e0!3m2!1sen!2sin!4v1780849365723!5m2!1sen!2sin";

export const MAP_LINK =
  "https://www.google.com/maps/place/Shoes+wale/@24.573259,73.719179,17z/data=!3m1!4b1!4m5!3m4!1s0x3967ef0034308e2d:0xcde38a3ebbdb8460!8m2!3d24.5732589!4d73.7213679";

export function getWhatsAppLink(message?: string): string {
  const cleanPhone = STORE_PHONE.replace(/[^0-9]/g, "");
  const baseUrl = `https://wa.me/${cleanPhone}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}